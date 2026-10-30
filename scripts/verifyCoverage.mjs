import { NETZWERK_A1_CHAPTER_VOCAB } from "../src/data/netzwerkChapterVocab.js";
import { KAP1_EXTENDED_CONVERSATIONS } from "./kap1ExtendedScripts.mjs";
import { KAP2_EXTENDED_CONVERSATIONS } from "./kap2ExtendedScripts.mjs";
import { KAP3_EXTENDED_CONVERSATIONS } from "./kap3AndMixerScripts.mjs";

const CHAPTER_RUNS = [
  ["kap-1", KAP1_EXTENDED_CONVERSATIONS],
  ["kap-2", KAP2_EXTENDED_CONVERSATIONS],
  ["kap-3", KAP3_EXTENDED_CONVERSATIONS]
];

function cleanKey(raw) {
  let g = (raw || "").trim();
  if (!g || g.startsWith(",")) return null;
  if (g.startsWith("sie (")) return "sie";
  if (g === "einbisschen") return "ein bisschen";
  if (g === "Sportun") return "sport";
  return g;
}

function checkChapter(chId, convs) {
  const ch = NETZWERK_A1_CHAPTER_VOCAB[chId];
  const fullCorpus = convs.map(c => c.lines.map(l => l.de).join(" ")).join(" ").toLowerCase();
  const tokens = new Set(
    fullCorpus
      .replace(/[.,!?;:—–"„“()]/g, " ")
      .split(/\s+/)
      .filter(Boolean)
  );

  let total = 0;
  let covered = 0;
  const missing = [];

  for (const [cat, arr] of Object.entries(ch)) {
    for (const item of arr) {
      const cleaned = cleanKey(item.german);
      if (!cleaned) continue;
      total++;

      const variants = cleaned
        .toLowerCase()
        .replace(/\.\.\./g, " ")
        .split(",")
        .map(s => s.trim())
        .filter(Boolean);

      let hit = false;
      for (const v of variants) {
        if (v.includes(" ")) {
          const parts = v.split(/\s+/).filter(Boolean);
          if (fullCorpus.includes(v) || parts.every(p => tokens.has(p))) {
            hit = true;
            break;
          }
        }
        if (tokens.has(v)) {
          hit = true;
          break;
        }
        if (item.plural && item.plural !== "— (Sg.)") {
          const plWord = item.plural.replace(/^die\s+/i, "").trim().toLowerCase();
          if (plWord && (tokens.has(plWord) || tokens.has(plWord + "n"))) {
            hit = true;
            break;
          }
        }
        if (cat === "nouns" && [...tokens].some(t => t.startsWith(v) && t.length <= v.length + 3)) {
          hit = true;
          break;
        }
        if (cat === "verbs" && item.prefix && item.baseVerb) {
          const baseStem = item.baseVerb.toLowerCase().replace(/(en|n)$/, "");
          const pref = item.prefix.toLowerCase();
          if ([...tokens].some(t => t.startsWith(baseStem)) && tokens.has(pref)) {
            hit = true;
            break;
          }
        }
        if (cat === "verbs") {
          const stem = v.replace(/(en|n)$/, "");
          if (v === "sein" && ["bin", "bist", "ist", "sind", "seid"].some(f => tokens.has(f))) hit = true;
          if (v === "haben" && ["habe", "hast", "hat", "haben", "habt"].some(f => tokens.has(f))) hit = true;
          if (v === "sprechen" && ["spreche", "sprichst", "spricht", "sprechen", "sprecht"].some(f => tokens.has(f))) hit = true;
          if (v === "lesen" && ["lese", "liest", "lesen", "lest"].some(f => tokens.has(f))) hit = true;
          if (v === "sehen" && ["sehe", "siehst", "sieht", "sehen", "seht"].some(f => tokens.has(f))) hit = true;
          if (v === "fahren" && ["fahre", "fährst", "fährt", "fahren", "fahrt"].some(f => tokens.has(f))) hit = true;
          if (v === "geben" && ["gebe", "gibst", "gibt", "geben"].some(f => tokens.has(f))) hit = true;
          if ([...tokens].some(t => t.startsWith(stem) && t.length <= stem.length + 3)) hit = true;
        }
        if ((cat === "adjectives" || cat === "phrases") && [...tokens].some(t => t.startsWith(v) && t.length <= v.length + 2)) {
          hit = true;
        }
      }

      if (hit) covered++;
      else missing.push(`[${cat}] ${item.german}`);
    }
  }

  console.log(`${chId.toUpperCase()}: ${covered} / ${total} (${((covered / total) * 100).toFixed(1)}%) across ${convs.length} clips`);
  if (missing.length > 0) console.log("  Missing:", missing.join(", "));
}

for (const [chId, convs] of CHAPTER_RUNS) {
  checkChapter(chId, convs);
}
