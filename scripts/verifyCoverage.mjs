import { NETZWERK_A1_CHAPTER_VOCAB } from "../src/data/netzwerkChapterVocab.js";
import { KAP1_CONVERSATIONS } from "./a1Kap1Scripts.mjs";

const ch1 = NETZWERK_A1_CHAPTER_VOCAB["kap-1"];
const fullCorpus = KAP1_CONVERSATIONS.map(c => c.lines.map(l => l.de).join(" ")).join(" ").toLowerCase();

// Normalize tokens
const tokens = new Set(
  fullCorpus
    .replace(/[.,!?;:—–"„“()]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
);

function cleanKey(raw) {
  let g = raw.trim();
  if (g.startsWith("sie (")) return "sie";
  if (g === "einbisschen") return "ein bisschen";
  return g;
}

// Stem/inflection matcher for German A1 Kap 1 forms
function matchesCorpus(entry, category) {
  const g = cleanKey(entry.german).toLowerCase();
  // Multi-variant entries like "andere, anderer", "ein, eine", "Ihr, Ihre", "mein, meine", "welche, welcher", "dein, deine"
  const variants = g.split(",").map(s => s.trim()).filter(Boolean);

  for (const v of variants) {
    if (v.includes(" ")) {
      if (fullCorpus.includes(v)) return true;
    }
    if (tokens.has(v)) return true;

    // Plural or case inflections of nouns/adjectives
    if (entry.plural && entry.plural !== "— (Sg.)") {
      const plWord = entry.plural.replace(/^die\s+/i, "").trim().toLowerCase();
      if (plWord && tokens.has(plWord)) return true;
    }

    // Separable verbs in Kap 1: zuordnen, zusammengehören, vorstellen, mitsprechen, mitlesen
    if (category === "verbs" && entry.prefix && entry.baseVerb) {
      const baseStem = entry.baseVerb.toLowerCase().replace(/en$/, "");
      const pref = entry.prefix.toLowerCase();
      if ([...tokens].some(t => t.startsWith(baseStem)) && tokens.has(pref)) return true;
    }

    // Regular/common verb stems in Kap 1
    if (category === "verbs") {
      const stem = v.replace(/(en|n)$/, "");
      if (v === "sein" && (tokens.has("bin") || tokens.has("bist") || tokens.has("ist") || tokens.has("sind"))) return true;
      if (v === "sprechen" && (tokens.has("spreche") || tokens.has("sprichst") || tokens.has("spricht") || tokens.has("sprechen"))) return true;
      if (v === "lesen" && (tokens.has("lese") || tokens.has("liest") || tokens.has("lesen"))) return true;
      if ([...tokens].some(t => t === stem + "e" || t === stem + "st" || t === stem + "t" || t === stem + "en" || t === stem + "et" || t === stem + "est")) {
        return true;
      }
    }

    // Adjective endings (-e, -es, -en, -er)
    if (category === "adjectives") {
      if ([...tokens].some(t => t === v || t === v + "e" || t === v + "es" || t === v + "en" || t === v + "er")) return true;
    }
  }
  return false;
}

let total = 0;
let covered = 0;
const missing = [];

for (const [cat, arr] of Object.entries(ch1)) {
  for (const item of arr) {
    total++;
    if (matchesCorpus(item, cat)) {
      covered++;
    } else {
      missing.push(`[${cat}] ${item.german} (${item.english})`);
    }
  }
}

console.log(`Coverage: ${covered} / ${total} (${((covered / total) * 100).toFixed(1)}%)`);
if (missing.length > 0) {
  console.log("Missing items:", missing);
}
