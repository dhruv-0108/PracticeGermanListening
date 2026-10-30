import { NETZWERK_CHAPTERS } from "./data/netzwerkData.js";
import { NETZWERK_A1_CHAPTER_VOCAB } from "./data/netzwerkChapterVocab.js";
import { NETZWERK_A2_CHAPTER_VOCAB } from "./data/netzwerkA2ChapterVocab.js";
import {
  SPOKEN_EXPRESSIONS,
  ENDINGS_REFERENCE_TABLES,
  explainWordEnding
} from "./data/germanEndings.js";
import CONVERSATIONS from "./data/conversations/generatedConversations.json";

// Feature-detect Popover API for older browsers
if (!("popover" in HTMLElement.prototype)) {
  import("@oddbird/popover-polyfill");
}

const AUDIO_BASE_URL = import.meta.env.VITE_AUDIO_BASE_URL || "/audio";
const STORAGE_KEY = "horen_listening_progress_v2";
const SPEEDS = [1.0, 0.85, 0.75, 1.15];

const POS_LABELS = {
  nouns: "Nouns",
  verbs: "Verbs",
  adjectives: "Adjectives",
  adverbs: "Adverbs",
  prepositions: "Prepositions",
  phrases: "Phrases & Forms",
  closings: "Spoken Closings & Fillers"
};

const POS_SINGULAR = {
  nouns: "Noun",
  verbs: "Verb",
  adjectives: "Adjective",
  adverbs: "Adverb",
  prepositions: "Preposition",
  phrases: "Phrase",
  closings: "Spoken Expression"
};

// ─── Clean & Index Chapter Vocabulary ───
function cleanVocabItem(rawGerman, rawEnglish) {
  let g = (rawGerman || "").trim();
  let en = (rawEnglish || "").trim();
  if (!g || g.startsWith(",")) return null;
  if (g.startsWith("sie (")) g = "sie";
  if (g === "einbisschen") g = "ein bisschen";
  if (g === "Sportun") {
    g = "Sportart";
    en = "type of sport";
  }
  if (en === "unasnu") en = "museum";
  if (en === "siow") en = "slow";
  if (en === "to great") en = "to greet";
  return { german: g, english: en };
}

const GLOBAL_VOCAB_MAP = new Map();
const CHAPTER_NORMALIZED_VOCAB = { A1: {}, A2: {} };

function indexLevelVocab(levelKey, rawSource) {
  for (const [chId, chObj] of Object.entries(rawSource)) {
    const list = [];
    const seen = new Set();
    for (const [category, arr] of Object.entries(chObj)) {
      for (const item of arr) {
        const cleaned = cleanVocabItem(item.german, item.english);
        if (!cleaned) continue;
        const dedupKey = `${category}:${cleaned.german.toLowerCase()}`;
        const fullKey = `${chId}:${dedupKey}`;
        const normalized = {
          key: fullKey,
          level: levelKey,
          chapter: chId,
          category,
          german: cleaned.german,
          article: item.article && item.article !== "—" ? item.article : null,
          plural: item.plural || null,
          english: cleaned.english,
          subType: item.subType || null,
          prefix: item.prefix || null,
          baseVerb: item.baseVerb || null,
          exampleA1: item.exampleA1 || "",
          exampleEn: item.exampleEn || ""
        };
        if (levelKey === "A1" && !GLOBAL_VOCAB_MAP.has(fullKey)) {
          GLOBAL_VOCAB_MAP.set(fullKey, normalized);
        }
        if (!seen.has(dedupKey)) {
          seen.add(dedupKey);
          list.push(normalized);
        }
      }
    }
    CHAPTER_NORMALIZED_VOCAB[levelKey][chId] = list;
  }
}

indexLevelVocab("A1", NETZWERK_A1_CHAPTER_VOCAB);
indexLevelVocab("A2", NETZWERK_A2_CHAPTER_VOCAB);

for (const exp of SPOKEN_EXPRESSIONS) {
  const key = `spoken:closings:${exp.german.toLowerCase()}`;
  GLOBAL_VOCAB_MAP.set(key, {
    key,
    chapter: "spoken",
    category: "closings",
    german: exp.german,
    article: null,
    plural: null,
    english: exp.english,
    subType: exp.type,
    exampleA1: exp.usage,
    exampleEn: ""
  });
}

function getClipUsedVocab(conv) {
  if (conv.usedVocab) return conv.usedVocab;
  return (conv.usedVocabKeys || []).map(k => GLOBAL_VOCAB_MAP.get(k)).filter(Boolean);
}

// ─── Persistent Local Progress ───
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("horen_listening_progress_v1");
    if (!raw) return { heardKeys: {}, completedClips: {}, lastClipId: "kap1-01" };
    const parsed = JSON.parse(raw);
    return {
      heardKeys: parsed.heardKeys || {},
      completedClips: parsed.completedClips || {},
      lastClipId: parsed.lastClipId || "kap1-01"
    };
  } catch {
    return { heardKeys: {}, completedClips: {}, lastClipId: "kap1-01" };
  }
}

const progress = loadProgress();
let saveTimer = null;
function scheduleSave() {
  if (saveTimer) return;
  saveTimer = setTimeout(() => {
    saveTimer = null;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // ignore storage quota errors
    }
  }, 400);
}

const AVAILABLE_AUDIO_CHAPTERS = [...new Set(CONVERSATIONS.filter(c => !c.isMix).map(c => c.chapters[0]))];

// ─── Application State ───
const initialClip = CONVERSATIONS.find(c => c.id === progress.lastClipId) || CONVERSATIONS[0];
const state = {
  mode: "listen",
  activeChapter: initialClip && !initialClip.isMix ? initialClip.chapters[0] : "kap-1",
  activeCategory: "All",
  playlist: [],
  currentClip: initialClip,
  showEnglish: false,
  speedIndex: 0,
  modalSelectedTab: initialClip?.isMix ? "mix" : initialClip?.chapters[0] || "kap-1",

  // Syllabus state
  syllabusLevel: "A1",
  syllabusChapter: "kap-1",
  syllabusSubtab: "vocab",
  vocabSearch: "",
  vocabPosFilter: "all",

  // Mixer state
  mixerSelected: new Set(["kap-1", "kap-2"])
};

// ─── DOM Elements ───
const audio = document.getElementById("audioPlayer");
const listenView = document.getElementById("listenView");
const syllabusView = document.getElementById("syllabusView");
const mixerView = document.getElementById("mixerView");

const currentChapterLabel = document.getElementById("currentChapterLabel");
const coverageText = document.getElementById("coverageText");
const clipWordsCount = document.getElementById("clipWordsCount");

const categoryFilterBar = document.getElementById("categoryFilterBar");
const episodeCounter = document.getElementById("episodeCounter");
const episodeCategory = document.getElementById("episodeCategory");
const episodeLengthBadge = document.getElementById("episodeLengthBadge");
const episodeTitle = document.getElementById("episodeTitle");
const episodeContext = document.getElementById("episodeContext");
const transcriptContainer = document.getElementById("transcriptContainer");

const seekSlider = document.getElementById("seekSlider");
const timeCurrent = document.getElementById("timeCurrent");
const timeTotal = document.getElementById("timeTotal");
const playPauseBtn = document.getElementById("playPauseBtn");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
const speedBtn = document.getElementById("speedBtn");
const toggleEnBtn = document.getElementById("toggleEnBtn");

const wordsDrawer = document.getElementById("wordsDrawer");
const drawerWordsContent = document.getElementById("drawerWordsContent");
const episodesDialog = document.getElementById("episodesDialog");
const modalChapterTabs = document.getElementById("modalChapterTabs");
const episodesListBody = document.getElementById("episodesListBody");
const wordPopover = document.getElementById("wordPopover");
const wordPopoverBody = document.getElementById("wordPopoverBody");

// ─── Top-Layer Animation & Light-Dismiss Helpers ───
let supportsDisplayTransition;
function canTransitionDisplay() {
  if (supportsDisplayTransition !== undefined) return supportsDisplayTransition;
  if (!window.CSS?.supports?.("transition-behavior", "allow-discrete") || !document.body) {
    return false;
  }
  const probe = document.createElement("div");
  probe.style.cssText = "transition: display 1s allow-discrete !important; display: block;";
  document.body.appendChild(probe);
  getComputedStyle(probe).display;
  probe.style.display = "none";
  supportsDisplayTransition = getComputedStyle(probe).display === "block";
  probe.remove();
  return supportsDisplayTransition;
}

function supportsTopLayerExit() {
  return window.CSS?.supports?.("overlay", "auto") && canTransitionDisplay();
}

async function closeDialogSmoothly(dialog) {
  if (!dialog.open) return;
  if (!supportsTopLayerExit()) {
    dialog.setAttribute("data-closing", "");
    const animations = dialog.getAnimations({ subtree: true });
    if (animations.length > 0) {
      await Promise.race([
        Promise.allSettled(animations.map(a => a.finished)),
        new Promise(r => setTimeout(r, 400))
      ]);
    }
    if (!dialog.hasAttribute("data-closing")) return;
    dialog.removeAttribute("data-closing");
  }
  dialog.close();
}

function wireDialogBehavior(dialog) {
  dialog.addEventListener("cancel", event => {
    event.preventDefault();
    closeDialogSmoothly(dialog);
  });

  if (!("closedBy" in HTMLDialogElement.prototype)) {
    dialog.addEventListener("click", event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const inside =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!inside) closeDialogSmoothly(dialog);
    });
  }
}

wireDialogBehavior(wordsDrawer);
wireDialogBehavior(episodesDialog);

// ─── Formatting Helpers ───
function formatTime(ms) {
  if (!Number.isFinite(ms) || ms < 0) return "0:00";
  const totalSec = Math.floor(ms / 1000);
  const mins = Math.floor(totalSec / 60);
  const secs = totalSec % 60;
  return `${mins}:${String(secs).padStart(2, "0")}`;
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function articleBadgeHtml(article) {
  if (!article || article === "—") return "";
  const clean = article.toLowerCase();
  const cls = clean === "der" ? "art-der" : clean === "die" ? "art-die" : clean === "das" ? "art-das" : "";
  return `<span class="${cls}">${escapeHtml(article)}</span> `;
}

function pronounceSingleWord(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "de-DE";
  utter.rate = 0.92;
  window.speechSynthesis.speak(utter);
}

// ─── Update Coverage Pill for Active Chapter ───
function updateCoverageBadge() {
  const chKey = state.activeChapter || "kap-1";
  const chWords = CHAPTER_NORMALIZED_VOCAB.A1[chKey] || [];
  let heard = 0;
  for (const item of chWords) {
    if (progress.heardKeys[item.key]) heard++;
  }
  const chNum = chKey.replace("kap-", "");
  coverageText.textContent = `Kap. ${chNum}: ${heard} / ${chWords.length} heard`;
}

// ─── Switch Top-Level Views ───
function setMode(mode) {
  state.mode = mode;
  document.querySelectorAll(".mode-tab").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.mode === mode);
  });

  listenView.hidden = mode !== "listen";
  syllabusView.hidden = mode !== "syllabus";
  mixerView.hidden = mode !== "mixer";

  if (mode === "syllabus") {
    renderSyllabusView();
  } else if (mode === "mixer") {
    renderMixerView();
  }
}

// ─── Render Category Strip & Playlist for Active Chapter ───
function rebuildPlaylistForChapter(chId, category = "All") {
  state.activeChapter = chId;
  state.activeCategory = category;
  const chapterClips = CONVERSATIONS.filter(c => !c.isMix && c.chapters[0] === chId);
  if (category === "All") {
    state.playlist = chapterClips;
  } else {
    state.playlist = chapterClips.filter(c => c.category === category);
  }
  updateCoverageBadge();
  renderCategoryStrip();
}

function renderCategoryStrip() {
  if (state.currentClip?.isMix) {
    categoryFilterBar.innerHTML = `<span class="cat-pill is-active">${escapeHtml(state.currentClip.category)}</span>
      <button class="cat-pill" type="button" id="exitMixBtn">← Back to ${escapeHtml(
        `Kapitel ${state.activeChapter.replace("kap-", "")}`
      )}</button>`;
    document.getElementById("exitMixBtn")?.addEventListener("click", () => {
      rebuildPlaylistForChapter(state.activeChapter, "All");
      if (state.playlist[0]) loadConversation(state.playlist[0], false);
    });
    return;
  }

  const chapterClips = CONVERSATIONS.filter(c => !c.isMix && c.chapters[0] === state.activeChapter);
  const categories = ["All", ...new Set(chapterClips.map(c => c.category))];

  categoryFilterBar.innerHTML = categories
    .map(cat => {
      const active = state.activeCategory === cat ? "is-active" : "";
      const label = cat === "All" ? `All (${chapterClips.length})` : cat;
      return `<button class="cat-pill ${active}" type="button" data-cat="${escapeHtml(cat)}">${escapeHtml(label)}</button>`;
    })
    .join("");

  categoryFilterBar.querySelectorAll(".cat-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.cat;
      rebuildPlaylistForChapter(state.activeChapter, cat);
      if (state.playlist.length > 0 && !state.playlist.some(c => c.id === state.currentClip.id)) {
        loadConversation(state.playlist[0], false);
      }
    });
  });
}

let domTokenRefs = [];
let domLineRefs = [];

function loadConversation(conv, autoplay = false) {
  state.currentClip = conv;
  progress.lastClipId = conv.id;
  scheduleSave();

  if (conv.isMix) {
    const chNums = conv.chapters.map(c => c.replace("kap-", "")).join(" + ");
    currentChapterLabel.textContent = `A1 · Mix (${chNums})`;
  } else {
    state.activeChapter = conv.chapters[0];
    currentChapterLabel.textContent = `A1 · Kapitel ${conv.chapters[0].replace("kap-", "")}`;
  }

  updateCoverageBadge();

  const idxInList = state.playlist.findIndex(c => c.id === conv.id);
  const posText =
    idxInList >= 0
      ? `${String(idxInList + 1).padStart(2, "0")} / ${String(state.playlist.length).padStart(2, "0")}`
      : "Mix";

  episodeCounter.textContent = posText;
  episodeCategory.textContent = conv.category;

  const isLong = conv.lengthTier === "long" || conv.durationMs >= 105000;
  if (episodeLengthBadge) {
    episodeLengthBadge.textContent = isLong
      ? `Long · ${formatTime(conv.durationMs)}`
      : `Medium · ${formatTime(conv.durationMs)}`;
    episodeLengthBadge.classList.toggle("is-long", isLong);
  }

  episodeTitle.textContent = conv.title;
  episodeContext.textContent = conv.context;
  clipWordsCount.textContent = String(getClipUsedVocab(conv).length);

  renderCategoryStrip();
  renderTranscript(conv);
  renderWordsDrawer(conv);

  audio.src = `${AUDIO_BASE_URL}/${conv.audioFile}`;
  audio.playbackRate = SPEEDS[state.speedIndex];
  seekSlider.value = "0";
  timeCurrent.textContent = "0:00";
  timeTotal.textContent = formatTime(conv.durationMs);
  transcriptContainer.classList.add("is-idle");

  if (autoplay) {
    audio.play().catch(() => {});
  } else {
    updatePlayPauseIcons(true);
  }
}

function renderTranscript(conv) {
  domTokenRefs = [];
  domLineRefs = [];
  transcriptContainer.innerHTML = "";

  conv.lines.forEach((line, lineIdx) => {
    const row = document.createElement("article");
    row.className = "utterance-row";

    const speakerMeta = document.createElement("div");
    speakerMeta.className = "speaker-tag";
    speakerMeta.innerHTML = `<span>${escapeHtml(line.speakerName)}</span><span class="speaker-region">${escapeHtml(line.voiceLabel || "")}</span>`;

    const pDe = document.createElement("p");
    pDe.className = "utterance-de";

    line.tokens.forEach((tok, tokIdx) => {
      const span = document.createElement("span");
      span.className = "word-token";
      span.textContent = tok.text;
      span.tabIndex = 0;
      span.addEventListener("click", e => {
        e.stopPropagation();
        handleWordClick(span, tok, line);
      });
      span.addEventListener("keydown", e => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleWordClick(span, tok, line);
        }
      });

      pDe.appendChild(span);
      if (tokIdx < line.tokens.length - 1) {
        pDe.appendChild(document.createTextNode(" "));
      }

      domTokenRefs.push({
        el: span,
        startMs: tok.startMs,
        endMs: tok.endMs,
        vocabKey: tok.vocabKey,
        lineIdx
      });
    });

    const pEn = document.createElement("p");
    pEn.className = "utterance-en";
    pEn.textContent = line.en;
    pEn.hidden = !state.showEnglish;

    row.append(speakerMeta, pDe, pEn);
    transcriptContainer.appendChild(row);
    domLineRefs.push({ el: row, startMs: line.startMs, endMs: line.endMs, enEl: pEn });
  });
}

// ─── Render Right-Side Words Drawer (Hidden by default) ───
function renderWordsDrawer(conv) {
  const grouped = {};
  for (const pos of Object.keys(POS_LABELS)) grouped[pos] = [];

  for (const item of getClipUsedVocab(conv)) {
    const bucket = grouped[item.category] ? item.category : "phrases";
    grouped[bucket].push(item);
  }

  let html = "";
  for (const [pos, label] of Object.entries(POS_LABELS)) {
    const items = grouped[pos];
    if (!items || items.length === 0) continue;

    html += `<section class="pos-section">
      <h3 class="pos-section-title"><span>${escapeHtml(label)}</span><span>${items.length}</span></h3>
      <div class="drawer-word-list">
        ${items
          .map(w => {
            const art = w.category === "nouns" ? articleBadgeHtml(w.article) : "";
            const pl =
              w.category === "nouns" && w.plural && w.plural !== "— (Sg.)"
                ? ` <span class="muted-meta">· ${escapeHtml(w.plural)}</span>`
                : "";
            return `<div class="drawer-word-item" data-vkey="${escapeHtml(w.key)}">
              <span class="dw-de">${art}${escapeHtml(w.german)}${pl}</span>
              <span class="dw-en">${escapeHtml(w.english)}</span>
            </div>`;
          })
          .join("")}
      </div>
    </section>`;
  }

  drawerWordsContent.innerHTML = html || `<p class="muted-meta">No tagged vocabulary in this clip.</p>`;
}

// ─── Tap Any Word -> Pause & Show Meaning + Grammatical Ending Breakdown ───
function handleWordClick(targetEl, tok, line) {
  if (!audio.paused) {
    audio.pause();
  }

  const entry = tok.vocabKey ? GLOBAL_VOCAB_MAP.get(tok.vocabKey) : null;
  const cleanSurface = tok.text.replace(/^[^a-zA-ZäöüÄÖÜß0-9'-]+|[^a-zA-ZäöüÄÖÜß0-9'-]+$/g, "");
  const endingInfo = explainWordEnding(cleanSurface, entry, line.de);

  const endingHtml = endingInfo
    ? `<div class="wp-ending-box">
        <div class="wp-ending-badge">${escapeHtml(endingInfo.badge)}</div>
        <div class="wp-ending-desc">${escapeHtml(endingInfo.explanation)}</div>
      </div>`
    : "";

  if (entry) {
    const chDisplay =
      entry.chapter === "spoken"
        ? "Everyday Spoken"
        : `A1 · Kap. ${String(entry.chapter).replace("kap-", "")}`;
    const posName = POS_SINGULAR[entry.category] || entry.category;
    const headHtml =
      entry.category === "nouns"
        ? `${articleBadgeHtml(entry.article)}${escapeHtml(entry.german)}`
        : escapeHtml(entry.german);

    let subform = `Spoken in line: “${escapeHtml(cleanSurface)}”`;
    if (entry.category === "nouns" && entry.plural) {
      subform = `Plural: ${escapeHtml(entry.plural)}`;
    } else if (entry.category === "verbs" && entry.subType) {
      subform = `Verb (${escapeHtml(entry.subType)}) · spoken as “${escapeHtml(cleanSurface)}”`;
    }

    wordPopoverBody.innerHTML = `
      <div class="wp-meta">
        <span>${escapeHtml(posName)}</span>
        <span>${escapeHtml(chDisplay)}</span>
      </div>
      <h3 class="wp-headword">${headHtml}</h3>
      <p class="wp-subform">${subform}</p>
      <p class="wp-meaning">${escapeHtml(entry.english)}</p>
      ${endingHtml}
      ${
        entry.exampleA1
          ? `<p class="wp-example">“${escapeHtml(entry.exampleA1)}”${
              entry.exampleEn ? `<br/><span class="muted-meta">${escapeHtml(entry.exampleEn)}</span>` : ""
            }</p>`
          : ""
      }
      <div class="wp-actions">
        <button id="wpSpeakBtn" class="wp-btn" type="button">Pronounce</button>
        <button id="wpResumeBtn" class="wp-btn wp-btn-primary" type="button">Resume ▸</button>
      </div>
    `;

    document.getElementById("wpSpeakBtn")?.addEventListener("click", () => {
      const speakText = entry.article ? `${entry.article} ${entry.german}` : entry.german;
      pronounceSingleWord(speakText);
    });
  } else {
    wordPopoverBody.innerHTML = `
      <div class="wp-meta">
        <span>${endingInfo ? "Grammar Form" : "Context"}</span>
        <span>Line Meaning</span>
      </div>
      <h3 class="wp-headword">${escapeHtml(cleanSurface || tok.text)}</h3>
      <p class="wp-meaning">${escapeHtml(line.en)}</p>
      ${endingHtml}
      <div class="wp-actions">
        <button id="wpSpeakBtn" class="wp-btn" type="button">Pronounce</button>
        <button id="wpResumeBtn" class="wp-btn wp-btn-primary" type="button">Resume ▸</button>
      </div>
    `;
    document.getElementById("wpSpeakBtn")?.addEventListener("click", () => {
      pronounceSingleWord(cleanSurface || tok.text);
    });
  }

  document.getElementById("wpResumeBtn")?.addEventListener("click", () => {
    wordPopover.hidePopover?.();
    audio.play().catch(() => {});
  });

  wordPopover.showPopover?.();

  const rect = targetEl.getBoundingClientRect();
  const popWidth = Math.min(320, window.innerWidth - 32);
  let left = rect.left + rect.width / 2 - popWidth / 2;
  left = Math.max(16, Math.min(left, window.innerWidth - popWidth - 16));

  let top = rect.bottom + 10;
  if (top + 280 > window.innerHeight) {
    top = Math.max(16, rect.top - 265);
  }
  wordPopover.style.left = `${Math.round(left)}px`;
  wordPopover.style.top = `${Math.round(top)}px`;
}

// ─── Audio Playback & Live Word Sync Loop ───
let rafId = null;
let lastActiveLineIdx = -1;

function syncTranscriptToTime() {
  const nowMs = audio.currentTime * 1000;
  const durMs = Number.isFinite(audio.duration) ? audio.duration * 1000 : state.currentClip.durationMs;

  timeCurrent.textContent = formatTime(nowMs);
  if (durMs > 0) {
    timeTotal.textContent = formatTime(durMs);
    seekSlider.value = String(Math.min(1000, Math.round((nowMs / durMs) * 1000)));
  }

  let activeLineIdx = -1;
  for (let i = 0; i < domLineRefs.length; i++) {
    const l = domLineRefs[i];
    const isCurrent = nowMs >= l.startMs && nowMs <= l.endMs + 220;
    l.el.classList.toggle("is-active", isCurrent);
    if (isCurrent) activeLineIdx = i;
  }

  if (activeLineIdx !== -1 && activeLineIdx !== lastActiveLineIdx) {
    lastActiveLineIdx = activeLineIdx;
    domLineRefs[activeLineIdx].el.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  const activeVocabKeys = new Set();
  let heardUpdated = false;

  for (const t of domTokenRefs) {
    const speaking = nowMs >= t.startMs && nowMs <= t.endMs;
    t.el.classList.toggle("is-speaking", speaking);
    if (speaking && t.vocabKey) {
      activeVocabKeys.add(t.vocabKey);
      if (!progress.heardKeys[t.vocabKey]) {
        progress.heardKeys[t.vocabKey] = true;
        heardUpdated = true;
      }
    }
  }

  if (heardUpdated) {
    updateCoverageBadge();
    scheduleSave();
  }

  if (wordsDrawer.open) {
    wordsDrawer.querySelectorAll(".drawer-word-item").forEach(el => {
      el.classList.toggle("is-live", activeVocabKeys.has(el.dataset.vkey));
    });
  }

  if (!audio.paused) {
    rafId = requestAnimationFrame(syncTranscriptToTime);
  }
}

function updatePlayPauseIcons(isPaused) {
  playIcon.hidden = !isPaused;
  pauseIcon.hidden = isPaused;
}

audio.addEventListener("play", () => {
  transcriptContainer.classList.remove("is-idle");
  updatePlayPauseIcons(false);
  wordPopover.hidePopover?.();
  cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(syncTranscriptToTime);
});

audio.addEventListener("pause", () => {
  updatePlayPauseIcons(true);
  cancelAnimationFrame(rafId);
  syncTranscriptToTime();
});

audio.addEventListener("ended", () => {
  updatePlayPauseIcons(true);
  cancelAnimationFrame(rafId);
  transcriptContainer.classList.add("is-idle");
  domTokenRefs.forEach(t => t.el.classList.remove("is-speaking"));
  domLineRefs.forEach(l => l.el.classList.remove("is-active"));
  lastActiveLineIdx = -1;
  progress.completedClips[state.currentClip.id] = true;
  scheduleSave();
});

audio.addEventListener("loadedmetadata", () => {
  if (Number.isFinite(audio.duration)) {
    timeTotal.textContent = formatTime(audio.duration * 1000);
  }
});

// ─── Transport Controls ───
playPauseBtn.addEventListener("click", () => {
  if (audio.paused) audio.play().catch(() => {});
  else audio.pause();
});

seekSlider.addEventListener("input", () => {
  const durSec = Number.isFinite(audio.duration) ? audio.duration : state.currentClip.durationMs / 1000;
  if (durSec > 0) {
    audio.currentTime = (Number(seekSlider.value) / 1000) * durSec;
    syncTranscriptToTime();
  }
});

document.getElementById("rewindBtn").addEventListener("click", () => {
  audio.currentTime = Math.max(0, audio.currentTime - 4);
  syncTranscriptToTime();
});

document.getElementById("prevClipBtn").addEventListener("click", () => {
  const idx = state.playlist.findIndex(c => c.id === state.currentClip.id);
  if (idx > 0) loadConversation(state.playlist[idx - 1], true);
  else if (state.playlist.length > 0) loadConversation(state.playlist[state.playlist.length - 1], true);
});

document.getElementById("nextClipBtn").addEventListener("click", () => {
  const idx = state.playlist.findIndex(c => c.id === state.currentClip.id);
  if (idx >= 0 && idx < state.playlist.length - 1) loadConversation(state.playlist[idx + 1], true);
  else if (state.playlist.length > 0) loadConversation(state.playlist[0], true);
});

speedBtn.addEventListener("click", () => {
  state.speedIndex = (state.speedIndex + 1) % SPEEDS.length;
  const rate = SPEEDS[state.speedIndex];
  audio.playbackRate = rate;
  speedBtn.textContent = `${rate.toFixed(rate === 1 ? 1 : 2)}×`;
});

toggleEnBtn.addEventListener("click", () => {
  state.showEnglish = !state.showEnglish;
  toggleEnBtn.setAttribute("aria-pressed", String(state.showEnglish));
  toggleEnBtn.textContent = state.showEnglish ? "EN On" : "EN Off";
  domLineRefs.forEach(l => {
    l.enEl.hidden = !state.showEnglish;
  });
});

document.addEventListener("keydown", e => {
  if (e.code === "Space" && state.mode === "listen") {
    const tag = document.activeElement?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "BUTTON") return;
    e.preventDefault();
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  }
});

// ─── Drawers & Modals Wiring ───
function openWordsDrawer() {
  if (!wordsDrawer.open) wordsDrawer.showModal();
}

document.getElementById("openWordsDrawerBtn").addEventListener("click", openWordsDrawer);
document.getElementById("bottomWordsBtn").addEventListener("click", openWordsDrawer);
document.getElementById("closeWordsDrawerBtn").addEventListener("click", () => closeDialogSmoothly(wordsDrawer));

function renderEpisodesModalList() {
  const tabs = [
    ...AVAILABLE_AUDIO_CHAPTERS.map(chId => ({
      key: chId,
      label: `Kapitel ${chId.replace("kap-", "")}`
    })),
    { key: "mix", label: "Combined Mixes" }
  ];

  modalChapterTabs.innerHTML = tabs
    .map(t => {
      const active = state.modalSelectedTab === t.key ? "is-active" : "";
      return `<button class="cat-pill ${active}" type="button" data-mtab="${t.key}">${escapeHtml(t.label)}</button>`;
    })
    .join("");

  modalChapterTabs.querySelectorAll(".cat-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      state.modalSelectedTab = btn.dataset.mtab;
      renderEpisodesModalList();
    });
  });

  const clipsToShow =
    state.modalSelectedTab === "mix"
      ? CONVERSATIONS.filter(c => c.isMix)
      : CONVERSATIONS.filter(c => !c.isMix && c.chapters[0] === state.modalSelectedTab);

  episodesListBody.innerHTML = clipsToShow
    .map((c, idx) => {
      const done = progress.completedClips[c.id] ? " · ✓" : "";
      const curr = c.id === state.currentClip.id ? "is-current" : "";
      const dur = formatTime(c.durationMs);
      return `<button class="episode-pick-row ${curr}" type="button" data-cid="${escapeHtml(c.id)}">
        <span class="ep-row-left">
          <span class="ep-row-num">${String(idx + 1).padStart(2, "0")}</span>
          <span class="ep-row-title">${escapeHtml(c.title)}${done}</span>
        </span>
        <span class="ep-row-cat">${escapeHtml(c.category)} · ${dur}</span>
      </button>`;
    })
    .join("");

  episodesListBody.querySelectorAll(".episode-pick-row").forEach(btn => {
    btn.addEventListener("click", () => {
      const found = CONVERSATIONS.find(c => c.id === btn.dataset.cid);
      if (found) {
        if (found.isMix) {
          state.playlist = CONVERSATIONS.filter(c => c.isMix);
        } else {
          rebuildPlaylistForChapter(found.chapters[0], "All");
        }
        setMode("listen");
        loadConversation(found, true);
        closeDialogSmoothly(episodesDialog);
      }
    });
  });
}

function openEpisodesModal() {
  state.modalSelectedTab = state.currentClip?.isMix ? "mix" : state.activeChapter;
  renderEpisodesModalList();
  if (!episodesDialog.open) episodesDialog.showModal();
}

document.getElementById("openEpisodeListBtn").addEventListener("click", openEpisodesModal);
document.getElementById("chapterPickerBtn").addEventListener("click", openEpisodesModal);
document.getElementById("closeEpisodesDialogBtn").addEventListener("click", () => closeDialogSmoothly(episodesDialog));

document.getElementById("brandBtn").addEventListener("click", () => setMode("listen"));
document.getElementById("coverageBtn").addEventListener("click", () => {
  state.syllabusLevel = "A1";
  state.syllabusChapter = state.activeChapter || "kap-1";
  state.syllabusSubtab = "vocab";
  setMode("syllabus");
});

document.querySelectorAll(".mode-tab").forEach(btn => {
  btn.addEventListener("click", () => setMode(btn.dataset.mode));
});

// ─── VIEW 2: Chapter Prep (Complete Vocabulary + Grammar + Common Endings) ───
function renderSyllabusView() {
  const chapters = NETZWERK_CHAPTERS[state.syllabusLevel] || [];
  const chMeta = chapters.find(c => c.id === state.syllabusChapter) || chapters[0];

  document.querySelectorAll(".level-pill").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.level === state.syllabusLevel);
  });

  const chRow = document.getElementById("syllabusChapterSelectRow");
  chRow.innerHTML = chapters
    .map(c => {
      const active = c.id === chMeta.id ? "is-active" : "";
      return `<button class="ch-num-pill ${active}" type="button" data-chid="${c.id}">Kap. ${c.number}</button>`;
    })
    .join("");

  chRow.querySelectorAll(".ch-num-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      state.syllabusChapter = btn.dataset.chid;
      renderSyllabusView();
    });
  });

  document.getElementById("syllabusThemeKicker").textContent = `${state.syllabusLevel} · Kapitel ${chMeta.number}`;
  document.getElementById("syllabusTitle").textContent = chMeta.title;
  document.getElementById("syllabusSubtitle").textContent = chMeta.theme;

  const listenBtn = document.getElementById("startChapterListeningBtn");
  const chapterClips = CONVERSATIONS.filter(
    c => !c.isMix && state.syllabusLevel === "A1" && c.chapters[0] === chMeta.id
  );
  if (chapterClips.length > 0) {
    listenBtn.textContent = `Practice Kapitel ${chMeta.number} Voiceovers (${chapterClips.length}) →`;
    listenBtn.dataset.targetCh = chMeta.id;
  } else {
    listenBtn.textContent = `Jump to Available Voiceovers (Kap. 1–3) →`;
    listenBtn.dataset.targetCh = "kap-1";
  }

  document.querySelectorAll(".subtab-btn").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.subtab === state.syllabusSubtab);
  });

  const vocabPanel = document.getElementById("syllabusVocabPanel");
  const grammarPanel = document.getElementById("syllabusGrammarPanel");
  const endingsPanel = document.getElementById("syllabusEndingsPanel");

  vocabPanel.hidden = state.syllabusSubtab !== "vocab";
  grammarPanel.hidden = state.syllabusSubtab !== "grammar";
  endingsPanel.hidden = state.syllabusSubtab !== "endings";

  if (state.syllabusSubtab === "vocab") {
    renderSyllabusVocab(chMeta.id);
  } else if (state.syllabusSubtab === "grammar") {
    renderSyllabusGrammar(chMeta);
  } else {
    renderSyllabusEndings();
  }
}

function renderSyllabusVocab(chId) {
  const allWords = CHAPTER_NORMALIZED_VOCAB[state.syllabusLevel]?.[chId] || [];
  const posFilterRow = document.getElementById("posFilterRow");

  const posCounts = { all: allWords.length };
  for (const w of allWords) {
    posCounts[w.category] = (posCounts[w.category] || 0) + 1;
  }

  const tabs = [
    ["all", `All (${allWords.length})`],
    ...Object.entries(POS_LABELS)
      .filter(([k]) => posCounts[k])
      .map(([k, label]) => [k, `${label} (${posCounts[k]})`])
  ];

  posFilterRow.innerHTML = tabs
    .map(([key, label]) => {
      const active = state.vocabPosFilter === key ? "is-active" : "";
      return `<button class="cat-pill ${active}" type="button" data-pos="${key}">${escapeHtml(label)}</button>`;
    })
    .join("");

  posFilterRow.querySelectorAll(".cat-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      state.vocabPosFilter = btn.dataset.pos;
      renderSyllabusVocab(chId);
    });
  });

  const q = state.vocabSearch.trim().toLowerCase();
  const filtered = allWords.filter(w => {
    if (state.vocabPosFilter !== "all" && w.category !== state.vocabPosFilter) return false;
    if (!q) return true;
    return w.german.toLowerCase().includes(q) || w.english.toLowerCase().includes(q);
  });

  const grid = document.getElementById("syllabusVocabList");
  grid.innerHTML = filtered
    .map((w, idx) => {
      const deferCls = idx >= 12 ? "vocab-card-deferred" : "";
      const heard = state.syllabusLevel === "A1" && progress.heardKeys[w.key];
      const art = w.category === "nouns" ? articleBadgeHtml(w.article) : "";
      const pl =
        w.category === "nouns" && w.plural && w.plural !== "— (Sg.)"
          ? `<div class="muted-meta" style="font-size:0.76rem">Pl: ${escapeHtml(w.plural)}</div>`
          : "";

      return `<article class="vocab-card ${deferCls}" data-speak="${escapeHtml(
        w.article ? `${w.article} ${w.german}` : w.german
      )}" title="Click to hear pronunciation">
        <div>
          <div class="vc-top">
            <span class="vc-word">${art}${escapeHtml(w.german)}</span>
            ${
              heard
                ? `<span class="vc-heard-dot">Heard</span>`
                : `<span class="muted-meta" style="font-size:0.72rem">${escapeHtml(POS_SINGULAR[w.category])}</span>`
            }
          </div>
          ${pl}
          <div class="vc-en">${escapeHtml(w.english)}</div>
        </div>
        ${w.exampleA1 ? `<div class="vc-ex">${escapeHtml(w.exampleA1)}</div>` : ""}
      </article>`;
    })
    .join("");

  grid.querySelectorAll(".vocab-card").forEach(card => {
    card.style.cursor = "pointer";
    card.addEventListener("click", () => pronounceSingleWord(card.dataset.speak));
  });
}

function renderSyllabusGrammar(chMeta) {
  const listEl = document.getElementById("grammarCardsList");
  listEl.innerHTML = (chMeta.grammarTopics || [])
    .map(
      g => `<article class="grammar-card">
      <h3 class="gc-title">${escapeHtml(g.title)}</h3>
      <p class="gc-rule">${escapeHtml(g.rule)}</p>
      <div class="gc-pattern">${escapeHtml(g.pattern)}</div>
      <div class="gc-examples">
        ${(g.examples || [])
          .map(
            ex =>
              `<div><strong>${escapeHtml(ex.de)}</strong> — <span class="muted-meta">${escapeHtml(ex.en)}</span></div>`
          )
          .join("")}
      </div>
    </article>`
    )
    .join("");
}

function renderSyllabusEndings() {
  const container = document.getElementById("endingsContentList");
  const tablesHtml = ENDINGS_REFERENCE_TABLES.map(
    tbl => `<article class="grammar-card">
      <h3 class="gc-title">${escapeHtml(tbl.title)}</h3>
      <p class="gc-rule">${escapeHtml(tbl.subtitle)}</p>
      <table class="endings-table">
        <thead>
          <tr>
            <th>Ending</th>
            <th>Pattern &amp; Examples</th>
            <th>When It Appears</th>
          </tr>
        </thead>
        <tbody>
          ${tbl.rows
            .map(
              r => `<tr>
              <td class="ending-code">${escapeHtml(r.ending)}</td>
              <td><strong>${escapeHtml(r.pattern)}</strong></td>
              <td class="muted-meta">${escapeHtml(r.note)}</td>
            </tr>`
            )
            .join("")}
        </tbody>
      </table>
    </article>`
  ).join("");

  const closingsHtml = `<article class="grammar-card">
    <h3 class="gc-title">5. Everyday Spoken Closings, Greetings &amp; Fillers</h3>
    <p class="gc-rule">Natural expressions used by German speakers to open, react, and end conversations smoothly. Click any card to hear pronunciation.</p>
    <div class="vocab-grid" style="margin-top:14px">
      ${SPOKEN_EXPRESSIONS.map(
        exp => `<div class="vocab-card expr-speak-card" data-speak="${escapeHtml(exp.german)}" style="cursor:pointer">
          <div>
            <div class="vc-top">
              <span class="vc-word">${escapeHtml(exp.german)}</span>
              <span class="muted-meta" style="font-size:0.72rem">${escapeHtml(exp.type)}</span>
            </div>
            <div class="vc-en">${escapeHtml(exp.english)}</div>
          </div>
          <div class="vc-ex">${escapeHtml(exp.usage)}</div>
        </div>`
      ).join("")}
    </div>
  </article>`;

  container.innerHTML = tablesHtml + closingsHtml;
  container.querySelectorAll(".expr-speak-card").forEach(card => {
    card.addEventListener("click", () => pronounceSingleWord(card.dataset.speak));
  });
}

document.querySelectorAll(".level-pill").forEach(btn => {
  btn.addEventListener("click", () => {
    state.syllabusLevel = btn.dataset.level;
    state.syllabusChapter = "kap-1";
    renderSyllabusView();
  });
});

document.querySelectorAll(".subtab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    state.syllabusSubtab = btn.dataset.subtab;
    renderSyllabusView();
  });
});

document.getElementById("vocabSearchInput").addEventListener("input", e => {
  state.vocabSearch = e.target.value;
  renderSyllabusVocab(state.syllabusChapter);
});

document.getElementById("startChapterListeningBtn").addEventListener("click", e => {
  const targetCh = e.currentTarget.dataset.targetCh || "kap-1";
  rebuildPlaylistForChapter(targetCh, "All");
  if (state.playlist[0]) loadConversation(state.playlist[0], false);
  setMode("listen");
});

// ─── VIEW 3: Combine Chapters (Mixer) ───
function renderMixerView() {
  const activeMixChapters = new Set(AVAILABLE_AUDIO_CHAPTERS);
  const boxGrid = document.getElementById("mixerCheckboxes");

  boxGrid.innerHTML = NETZWERK_CHAPTERS.A1.map(ch => {
    const ready = activeMixChapters.has(ch.id);
    const selected = state.mixerSelected.has(ch.id);
    return `<button class="mixer-check-card ${selected ? "is-selected" : ""} ${ready ? "" : "is-soon"}" type="button" data-mch="${ch.id}" ${
      ready ? "" : "disabled"
    }>
      <div class="mc-top">
        <span>Kapitel ${ch.number}</span>
        <span>${ready ? (selected ? "Selected ✓" : "Select") : "Audio Soon"}</span>
      </div>
      <div class="mc-title">${escapeHtml(ch.title)}</div>
    </button>`;
  }).join("");

  boxGrid.querySelectorAll(".mixer-check-card:not([disabled])").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.mch;
      if (state.mixerSelected.has(id) && state.mixerSelected.size > 1) {
        state.mixerSelected.delete(id);
      } else {
        state.mixerSelected.add(id);
      }
      renderMixerView();
    });
  });

  const eligibleMixes = CONVERSATIONS.filter(
    c => c.isMix && c.chapters.every(ch => state.mixerSelected.has(ch))
  );
  const eligibleSingles = CONVERSATIONS.filter(
    c => !c.isMix && c.chapters.every(ch => state.mixerSelected.has(ch))
  );

  const combinedPool = [...eligibleMixes, ...eligibleSingles];
  document.getElementById("mixerResultsCount").textContent = `${eligibleMixes.length} cross-chapter mixes · ${eligibleSingles.length} chapter clips`;

  const clipsGrid = document.getElementById("mixerClipsGrid");
  if (eligibleMixes.length === 0) {
    clipsGrid.innerHTML = `<p class="muted-meta">Select at least two chapters (for example Kapitel 1 + 2, Kapitel 1 + 3, or Kapitel 2 + 3) to unlock combined conversations.</p>`;
    return;
  }

  clipsGrid.innerHTML = eligibleMixes
    .map(
      c => `<button class="clip-select-card" type="button" data-mixid="${escapeHtml(c.id)}">
      <span class="csc-badge">${escapeHtml(c.category)} · ${formatTime(c.durationMs)}</span>
      <h4 class="csc-title">${escapeHtml(c.title)}</h4>
      <p class="csc-desc">${escapeHtml(c.context)}</p>
    </button>`
    )
    .join("");

  clipsGrid.querySelectorAll(".clip-select-card").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = CONVERSATIONS.find(c => c.id === btn.dataset.mixid);
      if (target) {
        state.playlist = combinedPool;
        loadConversation(target, true);
        setMode("listen");
      }
    });
  });
}

// ─── Initialize App ───
if (state.currentClip?.isMix) {
  state.playlist = CONVERSATIONS.filter(c => c.isMix);
} else {
  rebuildPlaylistForChapter(state.activeChapter, "All");
}
loadConversation(state.currentClip, false);
