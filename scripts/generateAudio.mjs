import fs from "node:fs";
import path from "node:path";
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";
import { VOICES, KAP1_CONVERSATIONS, MIXER_CONVERSATIONS } from "./a1Kap1Scripts.mjs";
import { NETZWERK_A1_CHAPTER_VOCAB } from "../src/data/netzwerkChapterVocab.js";

const AUDIO_DIR = path.resolve("public/audio");
const OUT_JSON = path.resolve("src/data/conversations/generatedConversations.json");
fs.mkdirSync(AUDIO_DIR, { recursive: true });
fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });

function cleanVocabGerman(raw) {
  let g = raw.trim();
  if (g.startsWith("sie (")) return "sie";
  if (g === "einbisschen") return "ein bisschen";
  return g;
}

// Build fast lookup dictionary per chapter
function buildChapterLookup(chapterIds) {
  const entries = [];
  const seen = new Set();

  for (const chId of chapterIds) {
    const chData = NETZWERK_A1_CHAPTER_VOCAB[chId];
    if (!chData) continue;
    for (const [category, arr] of Object.entries(chData)) {
      for (const item of arr) {
        const displayGerman = cleanVocabGerman(item.german);
        const dedupKey = `${category}:${displayGerman.toLowerCase()}`;
        if (seen.has(dedupKey)) continue;
        seen.add(dedupKey);

        entries.push({
          key: `${chId}:${dedupKey}`,
          chapter: chId,
          category,
          german: displayGerman,
          article: item.article || null,
          plural: item.plural || null,
          english: item.english || "",
          subType: item.subType || null,
          prefix: item.prefix || null,
          baseVerb: item.baseVerb || null,
          exampleA1: item.exampleA1 || "",
          exampleEn: item.exampleEn || ""
        });
      }
    }
  }
  return entries;
}

// Match an individual token (and full line context for separable verbs / phrases) to best vocab entry
function matchTokenToVocab(rawToken, lineDeLower, entries) {
  const clean = rawToken.replace(/^[^a-zA-ZäöüÄÖÜß0-9-]+|[^a-zA-ZäöüÄÖÜß0-9-]+$/g, "");
  if (!clean) return null;
  const lower = clean.toLowerCase();
  const isCapitalized = clean[0] === clean[0].toUpperCase() && clean[0] !== clean[0].toLowerCase();

  // 1. Exact match (prefer nouns if capitalized)
  const exactCandidates = entries.filter(e => {
    const variants = e.german.toLowerCase().split(",").map(s => s.trim());
    if (variants.includes(lower)) return true;
    if (e.plural && e.plural !== "— (Sg.)") {
      const pl = e.plural.replace(/^die\s+/i, "").trim().toLowerCase();
      if (pl === lower) return true;
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

  // 2. Separable verb check (e.g. "stelle ... vor" -> vorstellen, "ordnen ... zu" -> zuordnen)
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

  // 3. Inflected verb forms (sein, haben, sprechen, lesen, fahren, regular stems)
  const irregularMap = {
    bin: "sein", bist: "sein", ist: "sein", sind: "sein", seid: "sein",
    habe: "haben", hast: "haben", hat: "haben", habt: "haben",
    sprichst: "sprechen", spricht: "sprechen", sprecht: "sprechen", sprich: "sprechen",
    liest: "lesen", lest: "lesen",
    fährst: "fahren", fährt: "fahren",
    gibst: "geben", gibt: "geben",
    helfe: "helfen", hilfst: "helfen", hilft: "helfen",
    sammle: "sammeln", sammelst: "sammeln"
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

  // 4. Inflected adjectives / determiners (kurzes -> kurz, mein/meine/meiner/meinem/meinen, etc.)
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

  // 5. Multi-word phrase containment (e.g., "Wiedersehen" -> "auf Wiedersehen", "bisschen" -> "ein bisschen")
  for (const e of entries) {
    const gLower = e.german.toLowerCase();
    if (gLower.includes(" ") && lineDeLower.includes(gLower)) {
      const parts = gLower.split(/\s+/);
      if (parts.includes(lower) && lower.length > 2) return e;
    }
  }

  return null;
}

async function synthesizeLine(voiceId, text) {
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
      audioStream.on("end", resolve);
      audioStream.on("error", reject);
    });

    return { buffer: Buffer.concat(audioChunks), wordBoundaries };
  } finally {
    try {
      tts.close();
    } catch {
      // ignore close errors
    }
  }
}

// Align display whitespace tokens in line.de with TTS WordBoundary timings
function alignDisplayTokens(lineDe, wordBoundaries, lineStartOffsetMs, lineDurationMs, entries) {
  const rawTokens = lineDe.trim().split(/\s+/);
  const lineDeLower = lineDe.toLowerCase();
  let wbIdx = 0;

  return rawTokens.map((raw, idx) => {
    const stripped = raw.replace(/[^a-zA-ZäöüÄÖÜß0-9]/g, "").toLowerCase();
    let matchedWb = null;

    if (stripped) {
      for (let look = wbIdx; look < Math.min(wbIdx + 4, wordBoundaries.length); look++) {
        const wbClean = wordBoundaries[look].text.replace(/[^a-zA-ZäöüÄÖÜß0-9]/g, "").toLowerCase();
        if (wbClean && (wbClean === stripped || stripped.includes(wbClean) || wbClean.includes(stripped))) {
          matchedWb = wordBoundaries[look];
          wbIdx = look + 1;
          break;
        }
      }
    }

    // Fallback proportional timing if punctuation-only token (e.g. "—")
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
  const entries = buildChapterLookup(conv.chapters);
  const audioParts = [];
  const processedLines = [];
  const usedVocabMap = new Map();
  let currentBytes = 0;
  let silentFrame = null;

  for (let i = 0; i < conv.lines.length; i++) {
    const line = conv.lines[i];
    const speakerInfo = conv.speakers[line.speaker];
    const voiceObj = VOICES[speakerInfo.voice];

    // Replace isolated " – " spelled letter dashes with slight pauses so TTS reads single letters crisply
    const ttsText = line.de.replace(/\s–\s/g, ", ");
    const { buffer, wordBoundaries } = await synthesizeLine(voiceObj.id, ttsText);

    if (!silentFrame && buffer.length >= 144) {
      silentFrame = buffer.subarray(buffer.length - 144);
    }

    // Exact 48kbps CBR MP3 math: 48,000 bits/s = 6,000 bytes/s = 6 bytes/ms
    const lineStartMs = Math.round(currentBytes / 6);
    const lineDurationMs = Math.round(buffer.length / 6);
    const lineEndMs = lineStartMs + lineDurationMs;

    const tokens = alignDisplayTokens(line.de, wordBoundaries, lineStartMs, lineDurationMs, entries);

    // Also scan full line for multi-word phrases / all matched vocab so sidebar never misses a phrase
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

    // Add ~288ms natural conversational pause (12 x 24ms silent MP3 frames) between turns
    if (silentFrame && i < conv.lines.length - 1) {
      const pauseBuf = Buffer.concat(Array(12).fill(silentFrame));
      audioParts.push(pauseBuf);
      currentBytes += pauseBuf.length;
    }
  }

  const finalMp3 = Buffer.concat(audioParts);
  fs.writeFileSync(mp3Path, finalMp3);

  const totalDurationMs = Math.round(currentBytes / 6);
  const usedVocab = Array.from(usedVocabMap.values());

  console.log(`✓ ${conv.id} (${(finalMp3.length / 1024).toFixed(0)} KB, ${(totalDurationMs / 1000).toFixed(1)}s, ${usedVocab.length} words)`);

  return {
    id: conv.id,
    chapters: conv.chapters,
    isMix: conv.chapters.length > 1,
    category: conv.category,
    title: conv.title,
    context: conv.context,
    audioFile: `${conv.id}.mp3`,
    durationMs: totalDurationMs,
    speakers: conv.speakers,
    lines: processedLines,
    usedVocab
  };
}

async function main() {
  const allConvs = [...KAP1_CONVERSATIONS, ...MIXER_CONVERSATIONS];
  const results = [];

  console.log(`Generating ${allConvs.length} neural multi-speaker conversations...`);
  // Process with concurrency of 3 for fast, reliable generation
  const CONCURRENCY = 3;
  for (let i = 0; i < allConvs.length; i += CONCURRENCY) {
    const batch = allConvs.slice(i, i + CONCURRENCY);
    const batchOut = await Promise.all(batch.map(c => processConversation(c)));
    results.push(...batchOut);
  }

  fs.writeFileSync(OUT_JSON, JSON.stringify(results, null, 2));
  console.log(`\nSaved ${results.length} conversations to ${OUT_JSON}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
