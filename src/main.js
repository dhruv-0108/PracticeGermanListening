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
const LANG_STORAGE_KEY = "horen_user_native_lang_v1";
const SPEEDS = [1.0, 0.85, 0.75, 1.15];

const POPULAR_LANGUAGES = [
  { code: "en", name: "English", native: "English", flag: "🇬🇧" },
  { code: "es", name: "Spanish", native: "Español", flag: "🇪🇸" },
  { code: "hi", name: "Hindi", native: "हिन्दी", flag: "🇮🇳" },
  { code: "fr", name: "French", native: "Français", flag: "🇫🇷" },
  { code: "tr", name: "Turkish", native: "Türkçe", flag: "🇹🇷" },
  { code: "pt", name: "Portuguese", native: "Português", flag: "🇵🇹" },
  { code: "ar", name: "Arabic", native: "العربية", flag: "🇸🇦" },
  { code: "ru", name: "Russian", native: "Русский", flag: "🇷🇺" },
  { code: "it", name: "Italian", native: "Italiano", flag: "🇮🇹" },
  { code: "pl", name: "Polish", native: "Polski", flag: "🇵🇱" },
  { code: "zh-CN", name: "Chinese (Simplified)", native: "简体中文", flag: "🇨🇳" },
  { code: "ja", name: "Japanese", native: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "Korean", native: "한국어", flag: "🇰🇷" },
  { code: "uk", name: "Ukrainian", native: "Українська", flag: "🇺🇦" },
  { code: "id", name: "Indonesian", native: "Bahasa Indonesia", flag: "🇮🇩" }
];

const ALL_LANGUAGES = [
  ...POPULAR_LANGUAGES,
  { code: "af", name: "Afrikaans", native: "Afrikaans" },
  { code: "sq", name: "Albanian", native: "Shqip" },
  { code: "am", name: "Amharic", native: "አማርኛ" },
  { code: "hy", name: "Armenian", native: "Հայերեն" },
  { code: "az", name: "Azerbaijani", native: "Azərbaycan" },
  { code: "bn", name: "Bengali", native: "বাংলা" },
  { code: "bs", name: "Bosnian", native: "Bosanski" },
  { code: "bg", name: "Bulgarian", native: "Български" },
  { code: "ca", name: "Catalan", native: "Català" },
  { code: "hr", name: "Croatian", native: "Hrvatski" },
  { code: "cs", name: "Czech", native: "Čeština" },
  { code: "da", name: "Danish", native: "Dansk" },
  { code: "nl", name: "Dutch", native: "Nederlands" },
  { code: "et", name: "Estonian", native: "Eesti" },
  { code: "fa", name: "Persian", native: "فارسی" },
  { code: "fi", name: "Finnish", native: "Suomi" },
  { code: "el", name: "Greek", native: "Ελληνικά" },
  { code: "gu", name: "Gujarati", native: "ગુજરાતી" },
  { code: "he", name: "Hebrew", native: "עברית" },
  { code: "hu", name: "Hungarian", native: "Magyar" },
  { code: "is", name: "Icelandic", native: "Íslenska" },
  { code: "mr", name: "Marathi", native: "मराठी" },
  { code: "ms", name: "Malay", native: "Bahasa Melayu" },
  { code: "no", name: "Norwegian", native: "Norsk" },
  { code: "pa", name: "Punjabi", native: "ਪੰਜਾਬੀ" },
  { code: "ro", name: "Romanian", native: "Română" },
  { code: "sr", name: "Serbian", native: "Српски" },
  { code: "sk", name: "Slovak", native: "Slovenčina" },
  { code: "sl", name: "Slovenian", native: "Slovenščina" },
  { code: "sv", name: "Swedish", native: "Svenska" },
  { code: "ta", name: "Tamil", native: "தமிழ்" },
  { code: "te", name: "Telugu", native: "తెలుగు" },
  { code: "th", name: "Thai", native: "ไทย" },
  { code: "ur", name: "Urdu", native: "اردو" },
  { code: "vi", name: "Vietnamese", native: "Tiếng Việt" }
].sort((a, b) => a.name.localeCompare(b.name));

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
  mode: "feed",
  feedLevel: "A1",
  feedChapter: initialClip && !initialClip.isMix ? initialClip.chapters[0] : "kap-1",
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
const feedView = document.getElementById("feedView");
const listenView = document.getElementById("listenView");
const syllabusView = document.getElementById("syllabusView");
const mixerView = document.getElementById("mixerView");

const feedChapterBar = document.getElementById("feedChapterBar");
const feedChapterKicker = document.getElementById("feedChapterKicker");
const feedChapterTitle = document.getElementById("feedChapterTitle");
const feedChapterTheme = document.getElementById("feedChapterTheme");
const feedPlayAllBtn = document.getElementById("feedPlayAllBtn");
const feedChapterPrepBtn = document.getElementById("feedChapterPrepBtn");
const feedSectionsContainer = document.getElementById("feedSectionsContainer");
const backToFeedBtn = document.getElementById("backToFeedBtn");

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

const langPickerTriggerBtn = document.getElementById("langPickerTriggerBtn");
const currentLangIcon = document.getElementById("currentLangIcon");
const currentLangLabel = document.getElementById("currentLangLabel");
const openWordsDrawerBtn = document.getElementById("openWordsDrawerBtn");
const langSelectDialog = document.getElementById("langSelectDialog");
const closeLangDialogBtn = document.getElementById("closeLangDialogBtn");
const langSearchInput = document.getElementById("langSearchInput");
const popularLangChips = document.getElementById("popularLangChips");
const allLangList = document.getElementById("allLangList");
const newWordsBanner = document.getElementById("newWordsBanner");

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
wireDialogBehavior(langSelectDialog);

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
  return `<span class="notranslate ${cls}" lang="de" translate="no">${escapeHtml(article)}</span> `;
}

function deSpan(text, extraClass = "") {
  const cls = extraClass ? `notranslate ${extraClass}` : "notranslate";
  return `<span class="${cls}" lang="de" translate="no">${escapeHtml(text)}</span>`;
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
  coverageText.innerHTML = `${deSpan(`Kap. ${chNum}`)}: <span class="notranslate" translate="no">${heard} / ${
    chWords.length
  }</span> <span translate="yes">heard</span>`;
}

// ─── Switch Top-Level Views ───
function setMode(mode) {
  state.mode = mode;
  document.querySelectorAll(".mode-tab").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.mode === mode);
  });

  feedView.hidden = mode !== "feed";
  listenView.hidden = mode !== "listen";
  syllabusView.hidden = mode !== "syllabus";
  mixerView.hidden = mode !== "mixer";

  // "Words" drawer button in topbar only visible during listening scenario
  if (openWordsDrawerBtn) {
    openWordsDrawerBtn.hidden = mode !== "listen";
  }

  if (mode === "feed") {
    renderFeedView();
  } else if (mode === "syllabus") {
    renderSyllabusView();
  } else if (mode === "mixer") {
    renderMixerView();
  }
}

// ─── Render Feed View (Option 3: Streaming Media Dashboard) ───
function renderFeedView() {
  const chapters = NETZWERK_CHAPTERS[state.feedLevel] || [];
  let chMeta = chapters.find(c => c.id === state.feedChapter);
  if (!chMeta) {
    chMeta = chapters[0];
    state.feedChapter = chMeta.id;
  }

  // Update Level Switcher active state
  document.querySelectorAll("[data-feed-level]").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.feedLevel === state.feedLevel);
  });

  // Render Horizontal Chapter Strip
  feedChapterBar.innerHTML = chapters
    .map(c => {
      const active = c.id === chMeta.id ? "is-active" : "";
      return `<button class="feed-ch-card ${active} notranslate" lang="de" translate="no" type="button" data-fch="${c.id}">
        Kapitel ${c.number}: ${escapeHtml(c.title)}
      </button>`;
    })
    .join("");

  feedChapterBar.querySelectorAll(".feed-ch-card").forEach(btn => {
    btn.addEventListener("click", () => {
      state.feedChapter = btn.dataset.fch;
      renderFeedView();
    });
  });

  // Update Chapter Intro Banner
  feedChapterKicker.textContent = `${state.feedLevel} · Kapitel ${chMeta.number}`;
  feedChapterTitle.textContent = chMeta.title;
  feedChapterTheme.textContent = chMeta.theme;

  const currentChClips = CONVERSATIONS.filter(
    c => !c.isMix && state.feedLevel === "A1" && c.chapters[0] === chMeta.id
  );

  feedPlayAllBtn.textContent = `▶ Play Chapter (${currentChClips.length} Clips)`;
  feedPlayAllBtn.onclick = () => {
    if (currentChClips.length > 0) {
      rebuildPlaylistForChapter(chMeta.id, "All");
      loadConversation(currentChClips[0], true);
      setMode("listen");
    }
  };

  feedChapterPrepBtn.onclick = () => {
    state.syllabusLevel = state.feedLevel;
    state.syllabusChapter = chMeta.id;
    state.syllabusSubtab = "vocab";
    setMode("syllabus");
  };

  // Group Clips by Topic Category
  const categoriesMap = new Map();
  for (const clip of currentChClips) {
    if (!categoriesMap.has(clip.category)) {
      categoriesMap.set(clip.category, []);
    }
    categoriesMap.get(clip.category).push(clip);
  }

  // Also include Cross-Chapter Mixes if they involve this chapter
  const relevantMixes = CONVERSATIONS.filter(
    c => c.isMix && state.feedLevel === "A1" && c.chapters.includes(chMeta.id)
  );

  let html = "";

  // Render each Topic Section with its Media Cards
  for (const [category, clips] of categoriesMap.entries()) {
    const totalSecs = clips.reduce((acc, c) => acc + Math.round(c.durationMs / 1000), 0);
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    const durationLabel = `${mins}:${String(secs).padStart(2, "0")} mins`;

    const heardCount = clips.filter(c => progress.completedClips[c.id]).length;

    html += `
      <section class="feed-topic-block">
        <div class="feed-topic-header">
          <h2 class="feed-topic-title notranslate" lang="de" translate="no">${escapeHtml(category)}</h2>
          <span class="feed-topic-meta">${clips.length} Dialogues · ${durationLabel} · <span translate="yes">${heardCount}/${clips.length} completed</span></span>
        </div>
        <div class="feed-topic-carousel">
          ${clips
            .map((clip, idx) => {
              const isPlaying = state.currentClip?.id === clip.id;
              const completed = progress.completedClips[clip.id];
              return `
                <article class="media-card ${isPlaying ? "is-active-playing" : ""}" data-clip-id="${escapeHtml(clip.id)}">
                  <div>
                    <div class="mc-meta-row">
                      <span class="notranslate" translate="no">#${String(idx + 1).padStart(2, "0")}</span>
                      <span class="notranslate" translate="no">${formatTime(clip.durationMs)}</span>
                    </div>
                    <h3 class="mc-clip-title notranslate" lang="de" translate="no">${escapeHtml(clip.title)}</h3>
                    <p class="mc-context" translate="yes">${escapeHtml(clip.context)}</p>
                  </div>
                  <div class="mc-bottom-row">
                    <span class="mc-action-tag">▶ Listen &amp; Read</span>
                    ${completed ? `<span class="mc-listen-state">✓ Listened</span>` : ""}
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
      </section>
    `;
  }

  // Add Relevant Cross-Chapter Mixes Section
  if (relevantMixes.length > 0) {
    html += `
      <section class="feed-topic-block">
        <div class="feed-topic-header">
          <h2 class="feed-topic-title">Cross-Chapter Combined Mixes</h2>
          <span class="feed-topic-meta">${relevantMixes.length} Dialogues · Blending Chapter Vocabulary</span>
        </div>
        <div class="feed-topic-carousel">
          ${relevantMixes
            .map(clip => {
              const isPlaying = state.currentClip?.id === clip.id;
              const completed = progress.completedClips[clip.id];
              return `
                <article class="media-card ${isPlaying ? "is-active-playing" : ""}" data-clip-id="${escapeHtml(clip.id)}">
                  <div>
                    <div class="mc-meta-row">
                      <span class="notranslate" lang="de" translate="no">${escapeHtml(clip.category)}</span>
                      <span class="notranslate" translate="no">${formatTime(clip.durationMs)}</span>
                    </div>
                    <h3 class="mc-clip-title notranslate" lang="de" translate="no">${escapeHtml(clip.title)}</h3>
                    <p class="mc-context" translate="yes">${escapeHtml(clip.context)}</p>
                  </div>
                  <div class="mc-bottom-row">
                    <span class="mc-action-tag">▶ Listen Mixed</span>
                    ${completed ? `<span class="mc-listen-state">✓ Listened</span>` : ""}
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
      </section>
    `;
  }

  feedSectionsContainer.innerHTML = html;

  // Wire Click Handlers on Media Cards
  feedSectionsContainer.querySelectorAll(".media-card").forEach(card => {
    card.addEventListener("click", () => {
      const clipId = card.dataset.clipId;
      const target = CONVERSATIONS.find(c => c.id === clipId);
      if (target) {
        if (target.isMix) {
          state.playlist = CONVERSATIONS.filter(c => c.isMix);
        } else {
          rebuildPlaylistForChapter(target.chapters[0], "All");
        }
        loadConversation(target, true);
        setMode("listen");
      }
    });
  });
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
    categoryFilterBar.innerHTML = `<span class="cat-pill is-active notranslate" lang="de" translate="no">${escapeHtml(
      state.currentClip.category
    )}</span>
      <button class="cat-pill" type="button" id="exitMixBtn">← Back to ${deSpan(
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
      const inner =
        cat === "All"
          ? `All (<span class="notranslate" translate="no">${chapterClips.length}</span>)`
          : deSpan(cat);
      return `<button class="cat-pill ${active}" type="button" data-cat="${escapeHtml(cat)}">${inner}</button>`;
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

  // Check if scenario uses any out-of-chapter words (only show banner if present)
  renderNewWordsBanner(conv);

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
    speakerMeta.innerHTML = `<span class="notranslate" translate="no">${escapeHtml(
      line.speakerName
    )}</span><span class="speaker-region" translate="yes">${escapeHtml(line.voiceLabel || "")}</span>`;

    const pDe = document.createElement("p");
    pDe.className = "utterance-de notranslate";
    pDe.lang = "de";
    pDe.translate = false;

    line.tokens.forEach((tok, tokIdx) => {
      const span = document.createElement("span");
      span.className = "word-token notranslate";
      span.translate = false;
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
    pEn.className = state.showEnglish ? "utterance-en" : "utterance-en is-collapsed";
    pEn.setAttribute("translate", "yes");
    pEn.setAttribute("aria-hidden", String(!state.showEnglish));
    pEn.textContent = line.en;

    row.append(speakerMeta, pDe, pEn);
    transcriptContainer.appendChild(row);
    domLineRefs.push({ el: row, startMs: line.startMs, endMs: line.endMs, enEl: pEn });
  });
}

// ─── Render Right-Side Words Drawer (Hidden by default) ───
// ─── Only show "New Words in this Scenario" if dialogue uses out-of-chapter words ───
function renderNewWordsBanner(conv) {
  if (!newWordsBanner) return;

  const currentCh = conv.chapters[0] || "kap-1";
  const used = getClipUsedVocab(conv);

  // A word is considered outside the current chapter if its tagged chapter is different (e.g. Kap 2 or Kap 3 word in Kap 1)
  const outsideWords = used.filter(w => {
    if (conv.isMix) return false;
    return w.chapter && w.chapter !== currentCh && w.chapter !== "spoken";
  });

  if (outsideWords.length === 0) {
    newWordsBanner.hidden = true;
    newWordsBanner.innerHTML = "";
    return;
  }

  newWordsBanner.hidden = false;
  newWordsBanner.innerHTML = `
    <span class="nwb-label" translate="yes">New in this Scenario (${outsideWords.length} Words):</span>
    <div class="nwb-list">
      ${outsideWords
        .map(w => {
          const art = w.article ? `${w.article} ` : "";
          return `
            <span class="nwb-pill">
              <strong class="nwb-word notranslate" lang="de" translate="no">${escapeHtml(art + w.german)}</strong>
              <span class="nwb-meaning" translate="yes">${escapeHtml(w.english)}</span>
            </span>
          `;
        })
        .join("")}
    </div>
  `;
}

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
      <h3 class="pos-section-title"><span translate="yes">${escapeHtml(
        label
      )}</span><span class="notranslate" translate="no">${items.length}</span></h3>
      <div class="drawer-word-list">
        ${items
          .map(w => {
            const art = w.category === "nouns" ? articleBadgeHtml(w.article) : "";
            const pl =
              w.category === "nouns" && w.plural && w.plural !== "— (Sg.)"
                ? ` <span class="muted-meta">· ${escapeHtml(w.plural)}</span>`
                : "";
            return `<div class="drawer-word-item" data-vkey="${escapeHtml(w.key)}">
              <span class="dw-de notranslate" lang="de" translate="no">${art}${escapeHtml(w.german)}${pl}</span>
              <span class="dw-en" translate="yes">${escapeHtml(w.english)}</span>
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
        <div class="wp-ending-badge notranslate" lang="de" translate="no">${escapeHtml(endingInfo.badge)}</div>
        <div class="wp-ending-desc" translate="yes">${escapeHtml(endingInfo.explanation)}</div>
      </div>`
    : "";

  if (entry) {
    const chDisplay =
      entry.chapter === "spoken"
        ? `<span>Everyday Spoken</span>`
        : deSpan(`A1 · Kap. ${String(entry.chapter).replace("kap-", "")}`);
    const posName = POS_SINGULAR[entry.category] || entry.category;
    const headHtml =
      entry.category === "nouns"
        ? `${articleBadgeHtml(entry.article)}${escapeHtml(entry.german)}`
        : escapeHtml(entry.german);

    let subform = `Spoken in line: “${deSpan(cleanSurface)}”`;
    if (entry.category === "nouns" && entry.plural) {
      subform = `Plural: ${deSpan(entry.plural)}`;
    } else if (entry.category === "verbs" && entry.subType) {
      subform = `Verb (${escapeHtml(entry.subType)}) · spoken as “${deSpan(cleanSurface)}”`;
    }

    let exampleHtml = "";
    if (entry.exampleA1) {
      if (entry.chapter === "spoken") {
        exampleHtml = `<p class="wp-example" translate="yes">${escapeHtml(entry.exampleA1)}</p>`;
      } else {
        exampleHtml = `<p class="wp-example">“${deSpan(entry.exampleA1)}”${
          entry.exampleEn
            ? `<br/><span class="muted-meta" translate="yes">${escapeHtml(entry.exampleEn)}</span>`
            : ""
        }</p>`;
      }
    }

    wordPopoverBody.innerHTML = `
      <div class="wp-meta">
        <span translate="yes">${escapeHtml(posName)}</span>
        ${chDisplay}
      </div>
      <h3 class="wp-headword notranslate" lang="de" translate="no">${headHtml}</h3>
      <p class="wp-subform">${subform}</p>
      <p class="wp-meaning" translate="yes">${escapeHtml(entry.english)}</p>
      ${endingHtml}
      ${exampleHtml}
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
        <span translate="yes">${endingInfo ? "Grammar Form" : "Context"}</span>
        <span translate="yes">Line Meaning</span>
      </div>
      <h3 class="wp-headword notranslate" lang="de" translate="no">${escapeHtml(cleanSurface || tok.text)}</h3>
      <p class="wp-meaning" translate="yes">${escapeHtml(line.en)}</p>
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
  toggleEnBtn.textContent = state.showEnglish ? "Meaning On" : "Meaning Off";
  domLineRefs.forEach(l => {
    l.enEl.classList.toggle("is-collapsed", !state.showEnglish);
    l.enEl.setAttribute("aria-hidden", String(!state.showEnglish));
  });
});

// ─── Native Language Selection Modal & Auto-Translate Engine ───
let currentSelectedLang = localStorage.getItem(LANG_STORAGE_KEY) || "en";

function updateLangDisplay() {
  const match = ALL_LANGUAGES.find(l => l.code === currentSelectedLang) || {
    name: "English",
    native: "English",
    flag: "🌐"
  };
  if (currentLangIcon) currentLangIcon.textContent = match.flag || "🌐";
  if (currentLangLabel) currentLangLabel.textContent = match.native || match.name;
}

function applyGoogleTranslation(targetLangCode) {
  currentSelectedLang = targetLangCode;
  localStorage.setItem(LANG_STORAGE_KEY, targetLangCode);
  updateLangDisplay();

  // Set the standard Google Translate cookie: /en/<targetLangCode>
  const domain = window.location.hostname;
  document.cookie = `googtrans=/en/${targetLangCode}; path=/; domain=${domain}`;
  document.cookie = `googtrans=/en/${targetLangCode}; path=/;`;

  // Dynamically load Google Translate element script if not already present
  if (!window.google?.translate?.TranslateElement) {
    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: ALL_LANGUAGES.map(l => l.code).join(","),
          autoDisplay: false
        },
        "google_translate_element"
      );
    };
    if (!document.getElementById("google-translate-script")) {
      const s = document.createElement("script");
      s.id = "google-translate-script";
      s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      s.async = true;
      document.body.appendChild(s);
    }
  } else {
    // If already loaded, trigger translation switch
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = targetLangCode;
      select.dispatchEvent(new Event("change"));
    }
  }
}

function renderLangDialog(filterQuery = "") {
  if (!popularLangChips || !allLangList) return;

  const q = filterQuery.trim().toLowerCase();

  popularLangChips.innerHTML = POPULAR_LANGUAGES.map(l => {
    const active = l.code === currentSelectedLang ? "is-active" : "";
    return `
      <button class="lang-chip-btn ${active}" type="button" data-lcode="${l.code}">
        <span>${l.flag || "🌐"}</span>
        <span>${escapeHtml(l.native)}</span>
      </button>
    `;
  }).join("");

  const filteredAll = ALL_LANGUAGES.filter(
    l => l.name.toLowerCase().includes(q) || (l.native && l.native.toLowerCase().includes(q))
  );

  allLangList.innerHTML = filteredAll
    .map(l => {
      const active = l.code === currentSelectedLang ? "is-active" : "";
      return `
        <button class="lang-list-item ${active}" type="button" data-lcode="${l.code}">
          <span>${escapeHtml(l.name)}</span>
          ${l.native && l.native !== l.name ? `<small style="opacity:0.75;margin-left:4px">(${escapeHtml(l.native)})</small>` : ""}
        </button>
      `;
    })
    .join("");

  const handleSelect = btn => {
    const code = btn.dataset.lcode;
    applyGoogleTranslation(code);
    closeDialogSmoothly(langSelectDialog);
  };

  popularLangChips.querySelectorAll(".lang-chip-btn").forEach(btn => {
    btn.addEventListener("click", () => handleSelect(btn));
  });

  allLangList.querySelectorAll(".lang-list-item").forEach(btn => {
    btn.addEventListener("click", () => handleSelect(btn));
  });
}

function openLangSelectDialog() {
  renderLangDialog();
  if (langSearchInput) langSearchInput.value = "";
  if (!langSelectDialog.open) langSelectDialog.showModal();
}

langPickerTriggerBtn?.addEventListener("click", openLangSelectDialog);
closeLangDialogBtn?.addEventListener("click", () => closeDialogSmoothly(langSelectDialog));

langSearchInput?.addEventListener("input", e => {
  renderLangDialog(e.target.value);
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
      const inner = t.key === "mix" ? escapeHtml(t.label) : deSpan(t.label);
      return `<button class="cat-pill ${active}" type="button" data-mtab="${t.key}">${inner}</button>`;
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
          <span class="ep-row-num notranslate" translate="no">${String(idx + 1).padStart(2, "0")}</span>
          <span class="ep-row-title notranslate" lang="de" translate="no">${escapeHtml(c.title)}${done}</span>
        </span>
        <span class="ep-row-cat">${deSpan(c.category)} · <span class="notranslate" translate="no">${dur}</span></span>
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

backToFeedBtn?.addEventListener("click", () => setMode("feed"));

document.getElementById("brandBtn").addEventListener("click", () => setMode("feed"));
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
      return `<button class="ch-num-pill ${active} notranslate" lang="de" translate="no" type="button" data-chid="${c.id}">Kap. ${c.number}</button>`;
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
          ? `<div class="muted-meta vc-plural">Pl: ${deSpan(w.plural)}</div>`
          : "";

      return `<article class="vocab-card vocab-card-interactive ${deferCls}" data-speak="${escapeHtml(
        w.article ? `${w.article} ${w.german}` : w.german
      )}">
        <div>
          <div class="vc-top">
            <span class="vc-word notranslate" lang="de" translate="no">${art}${escapeHtml(w.german)}</span>
            ${
              heard
                ? `<span class="vc-heard-dot" translate="yes">Heard</span>`
                : `<span class="muted-meta vc-pos-tag" translate="yes">${escapeHtml(POS_SINGULAR[w.category])}</span>`
            }
          </div>
          ${pl}
          <div class="vc-en" translate="yes">${escapeHtml(w.english)}</div>
        </div>
        ${
          w.exampleA1
            ? `<div class="vc-ex">${deSpan(w.exampleA1)}${
                w.exampleEn ? `<span class="vc-ex-en" translate="yes">${escapeHtml(w.exampleEn)}</span>` : ""
              }</div>`
            : ""
        }
      </article>`;
    })
    .join("");

  grid.querySelectorAll(".vocab-card").forEach(card => {
    card.addEventListener("click", () => pronounceSingleWord(card.dataset.speak));
  });
}

function renderSyllabusGrammar(chMeta) {
  const listEl = document.getElementById("grammarCardsList");
  listEl.innerHTML = (chMeta.grammarTopics || [])
    .map(
      g => `<article class="grammar-card">
      <h3 class="gc-title" translate="yes">${escapeHtml(g.title)}</h3>
      <p class="gc-rule" translate="yes">${escapeHtml(g.rule)}</p>
      <div class="gc-pattern notranslate" lang="de" translate="no">${escapeHtml(g.pattern)}</div>
      <div class="gc-examples">
        ${(g.examples || [])
          .map(
            ex =>
              `<div><strong class="notranslate" lang="de" translate="no">${escapeHtml(
                ex.de
              )}</strong> — <span class="muted-meta" translate="yes">${escapeHtml(ex.en)}</span></div>`
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
      <h3 class="gc-title" translate="yes">${escapeHtml(tbl.title)}</h3>
      <p class="gc-rule" translate="yes">${escapeHtml(tbl.subtitle)}</p>
      <table class="endings-table">
        <thead>
          <tr>
            <th translate="yes">Ending</th>
            <th translate="yes">Pattern &amp; Examples</th>
            <th translate="yes">When It Appears</th>
          </tr>
        </thead>
        <tbody>
          ${tbl.rows
            .map(
              r => `<tr>
              <td class="ending-code notranslate" lang="de" translate="no">${escapeHtml(r.ending)}</td>
              <td><strong class="notranslate" lang="de" translate="no">${escapeHtml(r.pattern)}</strong></td>
              <td class="muted-meta" translate="yes">${escapeHtml(r.note)}</td>
            </tr>`
            )
            .join("")}
        </tbody>
      </table>
    </article>`
  ).join("");

  const closingsHtml = `<article class="grammar-card">
    <h3 class="gc-title" translate="yes">5. Everyday Spoken Closings, Greetings &amp; Fillers</h3>
    <p class="gc-rule" translate="yes">Natural expressions used by German speakers to open, react, and end conversations smoothly. Click any card to hear pronunciation.</p>
    <div class="vocab-grid closings-grid">
      ${SPOKEN_EXPRESSIONS.map(
        exp => `<div class="vocab-card vocab-card-interactive expr-speak-card" data-speak="${escapeHtml(exp.german)}">
          <div>
            <div class="vc-top">
              <span class="vc-word notranslate" lang="de" translate="no">${escapeHtml(exp.german)}</span>
              <span class="muted-meta vc-pos-tag" translate="yes">${escapeHtml(exp.type)}</span>
            </div>
            <div class="vc-en" translate="yes">${escapeHtml(exp.english)}</div>
          </div>
          <div class="vc-ex" translate="yes">${escapeHtml(exp.usage)}</div>
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
        <span class="notranslate" lang="de" translate="no">Kapitel ${ch.number}</span>
        <span translate="yes">${ready ? (selected ? "Selected ✓" : "Select") : "Audio Soon"}</span>
      </div>
      <div class="mc-title notranslate" lang="de" translate="no">${escapeHtml(ch.title)}</div>
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
      <span class="csc-badge">${deSpan(c.category)} · <span class="notranslate" translate="no">${formatTime(
        c.durationMs
      )}</span></span>
      <h4 class="csc-title notranslate" lang="de" translate="no">${escapeHtml(c.title)}</h4>
      <p class="csc-desc" translate="yes">${escapeHtml(c.context)}</p>
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
updateLangDisplay();
if (!localStorage.getItem(LANG_STORAGE_KEY)) {
  // First-time visit: Open Native Language Selector Modal
  setTimeout(() => openLangSelectDialog(), 350);
} else if (currentSelectedLang !== "en") {
  applyGoogleTranslation(currentSelectedLang);
}

if (state.currentClip?.isMix) {
  state.playlist = CONVERSATIONS.filter(c => c.isMix);
} else {
  rebuildPlaylistForChapter(state.activeChapter, "All");
}
loadConversation(state.currentClip, false);
renderFeedView();
