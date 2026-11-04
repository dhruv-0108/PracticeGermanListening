import fs from "node:fs";
import path from "node:path";
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";
const VOICES = {
  seraphina: { id: "de-DE-SeraphinaMultilingualNeural", label: "Female · DE" },
  florian: { id: "de-DE-FlorianMultilingualNeural", label: "Male · DE" },
  katja: { id: "de-DE-KatjaNeural", label: "Female · DE" },
  conrad: { id: "de-DE-ConradNeural", label: "Male · DE" },
  amala: { id: "de-DE-AmalaNeural", label: "Female · DE" },
  killian: { id: "de-DE-KillianNeural", label: "Male · DE" },
  ingrid: { id: "de-AT-IngridNeural", label: "Female · AT" },
  jonas: { id: "de-AT-JonasNeural", label: "Male · AT" },
  leni: { id: "de-CH-LeniNeural", label: "Female · CH" },
  jan: { id: "de-CH-JanNeural", label: "Male · CH" }
};
import { KAP1_EXTENDED_CONVERSATIONS } from "./kap1ExtendedScripts.mjs";
import { KAP1_ADDITIONAL_CONVERSATIONS } from "./kap1AdditionalScripts.mjs";
import { KAP2_EXTENDED_CONVERSATIONS } from "./kap2ExtendedScripts.mjs";
import { KAP2_ADDITIONAL_CONVERSATIONS } from "./kap2AdditionalScripts.mjs";
import {
  KAP3_EXTENDED_CONVERSATIONS,
  EXTENDED_MIXER_CONVERSATIONS
} from "./kap3AndMixerScripts.mjs";
import { KAP3_ADDITIONAL_CONVERSATIONS } from "./kap3AdditionalScripts.mjs";
import { NETZWERK_A1_CHAPTER_VOCAB } from "../src/data/netzwerkChapterVocab.js";
import { SPOKEN_EXPRESSIONS } from "../src/data/germanEndings.js";

const AUDIO_DIR = path.resolve("public/audio");
const OUT_JSON = path.resolve("src/data/conversations/generatedConversations.json");
fs.mkdirSync(AUDIO_DIR, { recursive: true });
fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });

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

function getCumulativeChapterOrder(convChapters, isMix) {
  if (isMix) {
    // Prioritize explicitly combined chapters, then kap-1 glue last
    const ordered = [...convChapters].reverse();
    if (!ordered.includes("kap-1")) ordered.push("kap-1");
    return ordered;
  }
  const primary = convChapters[0];
  if (primary === "kap-3") return ["kap-3", "kap-2", "kap-1"];
  if (primary === "kap-2") return ["kap-2", "kap-1"];
  return ["kap-1"];
}

function buildChapterLookup(chapterIds, isMix) {
  const orderedChapters = getCumulativeChapterOrder(chapterIds, isMix);
  const entries = [];
  const seen = new Set();

  for (const chId of orderedChapters) {
    const chData = NETZWERK_A1_CHAPTER_VOCAB[chId];
    if (!chData) continue;
    for (const [category, arr] of Object.entries(chData)) {
      for (const item of arr) {
        const cleaned = cleanVocabItem(item.german, item.english);
        if (!cleaned) continue;
        const dedupKey = `${category}:${cleaned.german.toLowerCase()}`;
        if (seen.has(dedupKey)) continue;
        seen.add(dedupKey);

        entries.push({
          key: `${chId}:${dedupKey}`,
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
        });
      }
    }
  }

  // Append Spoken Closings & Fillers so natural expressions match cleanly
  for (const exp of SPOKEN_EXPRESSIONS) {
    const gLower = exp.german.toLowerCase();
    const dedupKey = `closings:${gLower}`;
    if (seen.has(dedupKey)) continue;
    seen.add(dedupKey);
    entries.push({
      key: `spoken:${dedupKey}`,
      chapter: "spoken",
      category: "closings",
      german: exp.german,
      article: null,
      plural: null,
      english: exp.english,
      subType: exp.type,
      prefix: null,
      baseVerb: null,
      exampleA1: exp.usage,
      exampleEn: ""
    });
  }

  return entries;
}

function matchTokenToVocab(rawToken, lineDeLower, entries) {
  const clean = rawToken.replace(/^[^a-zA-ZäöüÄÖÜß0-9'-]+|[^a-zA-ZäöüÄÖÜß0-9'-]+$/g, "");
  if (!clean) return null;
  const lower = clean.toLowerCase();
  const isCapitalized = clean[0] === clean[0].toUpperCase() && clean[0] !== clean[0].toLowerCase();

  // Check multi-word spoken expressions first if this token is a key content word in one
  for (const e of entries) {
    if (e.category === "closings") {
      const gLower = e.german.toLowerCase();
      if (gLower === lower) return e;
      if (gLower.includes(" ") && lineDeLower.includes(gLower)) {
        const parts = gLower.split(/\s+/);
        if (parts.includes(lower) && lower.length > 3) return e;
      }
    }
  }

  // 1. Exact match (prefer nouns if capitalized)
  const exactCandidates = entries.filter(e => {
    const variants = e.german.toLowerCase().split(",").map(s => s.trim());
    if (variants.includes(lower)) return true;
    if (e.plural && e.plural !== "— (Sg.)") {
      const pl = e.plural.replace(/^die\s+/i, "").trim().toLowerCase();
      if (pl === lower || pl + "n" === lower) return true;
    }
    return false;
  });

  if (exactCandidates.length > 0) {
    if (isCapitalized) {
      const nounMatch = exactCandidates.find(e => e.category === "nouns");
      if (nounMatch) return nounMatch;
    }
    const nonNoun = exactCandidates.find(e => e.category !== "nouns");
    return nonNoun || exactCandidates[0];
  }

  // 2. Separable verb check
  for (const e of entries) {
    if (e.category === "verbs" && e.prefix && e.baseVerb) {
      const baseStem = e.baseVerb.toLowerCase().replace(/(en|n)$/, "");
      const pref = e.prefix.toLowerCase();
      if (
        (lower === pref || lower.startsWith(baseStem)) &&
        lineDeLower.includes(pref) &&
        lineDeLower.includes(baseStem)
      ) {
        return e;
      }
    }
  }

  // 3. Irregular & stem-vowel change verbs
  const irregularMap = {
    bin: "sein", bist: "sein", ist: "sein", sind: "sein", seid: "sein", seien: "sein",
    habe: "haben", hast: "haben", hat: "haben", habt: "haben",
    sprichst: "sprechen", spricht: "sprechen", sprecht: "sprechen", sprich: "sprechen",
    liest: "lesen", lest: "lesen", lies: "lesen",
    siehst: "sehen", sieht: "sehen", seht: "sehen", sieh: "sehen",
    fährst: "fahren", fährt: "fahren", fahrt: "fahren",
    gibst: "geben", gibt: "geben", gebt: "geben",
    nimmst: "nehmen", nimmt: "nehmen", nehmt: "nehmen",
    stehst: "stehen", steht: "stehen",
    sammle: "sammeln", sammelst: "sammeln",
    zeichne: "zeichnen", zeichnest: "zeichnen",
    würfle: "würfeln", würfelst: "würfeln"
  };
  if (irregularMap[lower]) {
    const found = entries.find(e => e.category === "verbs" && e.german.toLowerCase() === irregularMap[lower]);
    if (found) return found;
  }

  for (const e of entries) {
    if (e.category === "verbs") {
      const vLower = e.german.toLowerCase();
      const stem = vLower.replace(/(en|n)$/, "");
      if (
        stem.length >= 2 &&
        (lower === stem + "e" ||
          lower === stem + "st" ||
          lower === stem + "t" ||
          lower === stem + "en" ||
          lower === stem + "et" ||
          lower === stem + "est")
      ) {
        return e;
      }
    }
  }

  // 4. Inflected adjectives / determiners
  for (const e of entries) {
    if (e.category === "adjectives" || e.category === "phrases") {
      const variants = e.german.toLowerCase().split(",").map(s => s.trim());
      for (const v of variants) {
        if (
          v.length >= 3 &&
          !v.includes(" ") &&
          (lower === v + "e" || lower === v + "es" || lower === v + "en" || lower === v + "er" || lower === v + "em")
        ) {
          return e;
        }
      }
    }
  }

  // 5. Multi-word phrase containment
  for (const e of entries) {
    const gLower = e.german.toLowerCase();
    if (gLower.includes(" ") && !gLower.includes(",") && lineDeLower.includes(gLower)) {
      const parts = gLower.split(/\s+/);
      if (parts.includes(lower) && lower.length > 2) return e;
    }
  }

  return null;
}

async function synthesizeLineWithRetry(voiceId, text, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    const tts = new MsEdgeTTS();
    try {
      await tts.setMetadata(voiceId, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3, {
        wordBoundaryEnabled: true
      });
      const { audioStream, metadataStream } = tts.toStream(text);
      const audioChunks = [];
      const wordBoundaries = [];

      audioStream.on("data", chunk => audioChunks.push(chunk));
      if (metadataStream) {
        metadataStream.on("data", raw => {
          try {
            const parsed = JSON.parse(raw.toString());
            if (Array.isArray(parsed.Metadata)) {
              for (const m of parsed.Metadata) {
                if (m.Type === "WordBoundary" && m.Data) {
                  wordBoundaries.push({
                    text: m.Data.text?.Text || "",
                    offsetMs: Math.round((m.Data.Offset || 0) / 10000),
                    durationMs: Math.round((m.Data.Duration || 0) / 10000)
                  });
                }
              }
            }
          } catch {
            // ignore partial metadata parse errors
          }
        });
      }

      await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject(new Error("TTS stream timeout")), 25000);
        audioStream.on("end", () => {
          clearTimeout(timeout);
          resolve();
        });
        audioStream.on("error", err => {
          clearTimeout(timeout);
          reject(err);
        });
      });

      const buffer = Buffer.concat(audioChunks);
      if (buffer.length === 0) throw new Error("Empty audio buffer");
      return { buffer, wordBoundaries };
    } catch (err) {
      if (attempt === retries) throw err;
      await new Promise(r => setTimeout(r, 800 * attempt));
    } finally {
      try {
        tts.close();
      } catch {
        // ignore close errors
      }
    }
  }
}

function alignDisplayTokens(lineDe, wordBoundaries, lineStartOffsetMs, lineDurationMs, entries) {
  const rawTokens = lineDe.trim().split(/\s+/);
  const lineDeLower = lineDe.toLowerCase();
  let wbIdx = 0;

  return rawTokens.map((raw, idx) => {
    const stripped = raw.replace(/[^a-zA-ZäöüÄÖÜß0-9]/g, "").toLowerCase();
    let matchedWb = null;

    if (stripped) {
      for (let look = wbIdx; look < Math.min(wbIdx + 5, wordBoundaries.length); look++) {
        const wbClean = wordBoundaries[look].text.replace(/[^a-zA-ZäöüÄÖÜß0-9]/g, "").toLowerCase();
        if (wbClean && (wbClean === stripped || stripped.includes(wbClean) || wbClean.includes(stripped))) {
          matchedWb = wordBoundaries[look];
          wbIdx = look + 1;
          break;
        }
      }
    }

    const fallbackStart = lineStartOffsetMs + Math.round((idx / rawTokens.length) * lineDurationMs);
    const startMs = matchedWb ? lineStartOffsetMs + matchedWb.offsetMs : fallbackStart;
    const endMs = matchedWb
      ? lineStartOffsetMs + matchedWb.offsetMs + Math.max(matchedWb.durationMs, 140)
      : fallbackStart + 180;

    const vocabMatch = matchTokenToVocab(raw, lineDeLower, entries);

    return {
      text: raw,
      startMs,
      endMs,
      vocabKey: vocabMatch ? vocabMatch.key : null
    };
  });
}

async function processConversation(conv) {
  const mp3Path = path.join(AUDIO_DIR, `${conv.id}.mp3`);
  const isMix = conv.chapters.length > 1;
  const entries = buildChapterLookup(conv.chapters, isMix);

  // Cache: If MP3 already exists on disk, reuse it and only parse tokens
  const audioParts = [];
  const processedLines = [];
  const usedVocabMap = new Map();
  let currentBytes = 0;
  let silentFrame = null;
  const alreadyOnDisk = fs.existsSync(mp3Path) && fs.statSync(mp3Path).size > 1000;

  for (let i = 0; i < conv.lines.length; i++) {
    const line = conv.lines[i];
    const speakerInfo = conv.speakers[line.speaker];
    const voiceObj = VOICES[speakerInfo.voice] || VOICES.seraphina;

    const ttsText = line.de.replace(/\s[–—-]\s([A-ZÄÖÜ])\b/g, ", $1");
    let buffer, wordBoundaries;

    if (!alreadyOnDisk) {
      const res = await synthesizeLineWithRetry(voiceObj.id, ttsText);
      buffer = res.buffer;
      wordBoundaries = res.wordBoundaries;
    } else {
      // Approximate timing when file is already present
      const approxDur = Math.max(1200, Math.round(line.de.length * 68));
      buffer = Buffer.alloc(Math.round(approxDur * 6));
      wordBoundaries = [];
    }

    if (!silentFrame && buffer.length >= 144) {
      silentFrame = buffer.subarray(buffer.length - 144);
    }

    const lineStartMs = Math.round(currentBytes / 6);
    const lineDurationMs = Math.round(buffer.length / 6);
    const lineEndMs = lineStartMs + lineDurationMs;

    const tokens = alignDisplayTokens(line.de, wordBoundaries, lineStartMs, lineDurationMs, entries);

    const lineLower = line.de.toLowerCase();
    for (const t of tokens) {
      if (t.vocabKey) {
        const entry = entries.find(e => e.key === t.vocabKey);
        if (entry) usedVocabMap.set(entry.key, entry);
      }
    }
    for (const e of entries) {
      const gLower = e.german.toLowerCase();
      if (gLower.includes(" ") && !gLower.includes(",") && lineLower.includes(gLower)) {
        usedVocabMap.set(e.key, e);
      }
    }

    processedLines.push({
      speakerKey: line.speaker,
      speakerName: speakerInfo.name,
      voiceLabel: voiceObj.label,
      de: line.de,
      en: line.en,
      startMs: lineStartMs,
      endMs: lineEndMs,
      tokens
    });

    audioParts.push(buffer);
    currentBytes += buffer.length;

    // ~312ms natural conversational pause between turns
    if (silentFrame && i < conv.lines.length - 1) {
      const pauseBuf = Buffer.concat(Array(13).fill(silentFrame));
      audioParts.push(pauseBuf);
      currentBytes += pauseBuf.length;
    }
  }

  if (!alreadyOnDisk) {
    const finalMp3 = Buffer.concat(audioParts);
    fs.writeFileSync(mp3Path, finalMp3);
  }

  const diskSize = fs.statSync(mp3Path).size;
  const totalDurationMs = Math.round(diskSize / 6);
  const usedVocab = Array.from(usedVocabMap.values());

  console.log(
    `✓ ${conv.id} [${conv.lengthTier || "medium"}] (${(diskSize / 1024).toFixed(0)} KB, ${(
      totalDurationMs / 1000
    ).toFixed(1)}s, ${conv.lines.length} turns, ${usedVocab.length} words)`
  );

  return {
    id: conv.id,
    chapters: conv.chapters,
    isMix,
    lengthTier: conv.lengthTier || (totalDurationMs >= 105000 ? "long" : "medium"),
    category: conv.category,
    title: conv.title,
    context: conv.context,
    audioFile: `${conv.id}.mp3`,
    durationMs: totalDurationMs,
    speakers: conv.speakers,
    lines: processedLines,
    usedVocabKeys: usedVocab.map(v => v.key),
    newWords: conv.newWords || []
  };
}

async function main() {
  const allConvs = [
    ...KAP1_EXTENDED_CONVERSATIONS,
    ...KAP1_ADDITIONAL_CONVERSATIONS,
    ...KAP2_EXTENDED_CONVERSATIONS,
    ...KAP2_ADDITIONAL_CONVERSATIONS,
    ...KAP3_EXTENDED_CONVERSATIONS,
    ...KAP3_ADDITIONAL_CONVERSATIONS,
    ...EXTENDED_MIXER_CONVERSATIONS
  ];

  // Clean obsolete MP3s not in current manifest
  const validFiles = new Set(allConvs.map(c => `${c.id}.mp3`));
  for (const existing of fs.readdirSync(AUDIO_DIR)) {
    if (existing.endsWith(".mp3") && !validFiles.has(existing)) {
      fs.unlinkSync(path.join(AUDIO_DIR, existing));
    }
  }

  console.log(`Generating ${allConvs.length} extensive multi-speaker conversations...`);
  const results = new Array(allConvs.length);
  let cursor = 0;
  const CONCURRENCY = 6;

  async function worker() {
    while (cursor < allConvs.length) {
      const idx = cursor++;
      results[idx] = await processConversation(allConvs[idx]);
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

  fs.writeFileSync(OUT_JSON, JSON.stringify(results, null, 2));
  console.log(`\nSaved ${results.length} extensive conversations to ${OUT_JSON}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
