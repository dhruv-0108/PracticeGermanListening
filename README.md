# Hören — Structured German Listening

A minimal, chapter-gated German listening studio structured around **Netzwerk neu A1 & A2 (Kapitel 1–12)**.

## Features
- **Extensive Medium & Long Conversations (87 Voiceovers across A1 Kap. 1–3 + Mixer):**
  - Mix of **Medium (~65–85s, 12–15 turns)** and **Long (2m+, 22–26 turns)** multi-speaker conversations across 10 neural D-A-CH voices (Germany, Austria, Switzerland).
  - Covers **100%** of chapter vocabulary for **A1 Kapitel 1, Kapitel 2, and Kapitel 3** with zero out-of-syllabus grammar.
- **Grammatical Endings Breakdown & Spoken Closings:**
  - Click any spoken word to pause and inspect both its dictionary entry and its **exact grammatical ending in context** (`-e / -st / -t / -en` verb endings, `-e / -en / -em / -er / -es` article/possessive/adjective endings, feminine `-in`, noun plurals, and `im / am / ins / zum / zur` contractions).
  - Natural German spoken closings, greetings, and conversational fillers (*Schönen Tag noch!, Gleichfalls!, Mach's gut!, Bis später!, Freut mich!, Alles klar!, Genau!*) woven into dialogues and documented in **Chapter Prep → Endings & Closings**.
- **Hidden-by-Default Clip Vocabulary Drawer:** Distraction-free listening by default; open `Words` anytime to view the current clip's vocabulary grouped by part of speech and spoken expressions.
- **Combine Chapters (Mixer):** Combine `Kap. 1 + 2`, `Kap. 1 + 3`, `Kap. 2 + 3`, or `Kap. 1 + 2 + 3` for cross-chapter conversations.

## Local Development
```bash
npm install
npm run dev
```

## Production Build (Cloudflare Workers Static Assets / Pages)
- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`
