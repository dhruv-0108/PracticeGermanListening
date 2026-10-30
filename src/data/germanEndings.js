// Comprehensive German Grammatical Endings Analyzer & Spoken Closings Bank

export const SPOKEN_EXPRESSIONS = [
  {
    german: "Schönen Tag noch",
    english: "Have a nice day!",
    usage: "Standard friendly farewell during the day. Typical reply: „Danke, gleichfalls!“",
    type: "Closing"
  },
  {
    german: "Schönen Abend noch",
    english: "Have a nice evening!",
    usage: "Friendly farewell from late afternoon/evening onwards.",
    type: "Closing"
  },
  {
    german: "Schönes Wochenende",
    english: "Have a nice weekend!",
    usage: "Used on Fridays or Saturdays when parting ways.",
    type: "Closing"
  },
  {
    german: "gleichfalls",
    english: "likewise / you too!",
    usage: "Natural reply to „Schönen Tag noch!“ or „Schönes Wochenende!“",
    type: "Reply"
  },
  {
    german: "ebenso",
    english: "likewise / same to you!",
    usage: "Slightly more formal/versatile synonym for „gleichfalls!“",
    type: "Reply"
  },
  {
    german: "Mach's gut",
    english: "Take care! (informal)",
    usage: "Short for „Mach es gut!“ — warm casual goodbye to one friend (du).",
    type: "Closing"
  },
  {
    german: "Macht's gut",
    english: "Take care, you guys! (informal pl.)",
    usage: "Warm casual goodbye when speaking to two or more friends (ihr).",
    type: "Closing"
  },
  {
    german: "Bis später",
    english: "See you later!",
    usage: "Used when you will see or talk to the person later the same day.",
    type: "Closing"
  },
  {
    german: "Bis gleich",
    english: "See you in a moment!",
    usage: "Used when meeting again in just a few minutes.",
    type: "Closing"
  },
  {
    german: "Bis morgen",
    english: "See you tomorrow!",
    usage: "Common workplace, school, and neighbor farewell.",
    type: "Closing"
  },
  {
    german: "Auf Wiederhören",
    english: "Goodbye! (on the telephone)",
    usage: "Formal goodbye specifically for phone calls (literally 'until we hear each other again').",
    type: "Closing"
  },
  {
    german: "Gute Fahrt",
    english: "Have a safe trip / good ride!",
    usage: "Said to someone leaving by train, bus, car, or bicycle.",
    type: "Closing"
  },
  {
    german: "Viel Spaß",
    english: "Have fun! / Enjoy!",
    usage: "Used when someone is heading to a hobby, concert, cinema, or trip.",
    type: "Closing"
  },
  {
    german: "Viel Glück",
    english: "Good luck!",
    usage: "Said before a test, interview, or challenge.",
    type: "Closing"
  },
  {
    german: "Alles Gute",
    english: "All the best!",
    usage: "Warm wish for health, birthdays, or parting ways.",
    type: "Closing"
  },
  {
    german: "Freut mich",
    english: "Nice to meet you! / Pleased to meet you!",
    usage: "Short for „Es freut mich“ — standard warm response right after introductions.",
    type: "Greeting"
  },
  {
    german: "Ganz meinerseits",
    english: "The pleasure is all mine!",
    usage: "Polite, natural reply to „Freut mich!“",
    type: "Reply"
  },
  {
    german: "Alles klar",
    english: "All clear! / Got it! / Sounds good!",
    usage: "Everyday spoken confirmation that you understood or agree.",
    type: "Filler"
  },
  {
    german: "Kein Problem",
    english: "No problem!",
    usage: "Reassuring response to an apology or request.",
    type: "Reply"
  },
  {
    german: "Gern geschehen",
    english: "You're very welcome!",
    usage: "Polite reply after someone says „Danke!“ or „Vielen Dank!“",
    type: "Reply"
  },
  {
    german: "Ach so",
    english: "Oh, I see! / Ah, got it!",
    usage: "Spoken realization marker when new information clicks.",
    type: "Filler"
  },
  {
    german: "Moment mal",
    english: "Just a moment! / Hold on!",
    usage: "Natural spoken pause while checking a note, phone, or bag.",
    type: "Filler"
  },
  {
    german: "Na klar",
    english: "Of course! / Sure thing!",
    usage: "Enthusiastic spoken 'yes' in everyday conversation.",
    type: "Filler"
  },
  {
    german: "Stimmt",
    english: "That's right! / True!",
    usage: "Short for „Das stimmt“ — used to agree with what someone just said.",
    type: "Filler"
  },
  {
    german: "Vielen Dank",
    english: "Thank you very much!",
    usage: "Polite everyday expression of gratitude.",
    type: "Closing"
  }
];

export const CONTRACTIONS_MAP = {
  im: { formula: "in + dem", detail: "Dative masculine/neuter contraction ('in the' — e.g., im Büro, im Kurs, im Sommer)." },
  am: { formula: "an + dem", detail: "Dative contraction used with days, times of day & places (am Montag, am Abend, am Bahnhof)." },
  ins: { formula: "in + das", detail: "Accusative neuter contraction showing movement ('into/to the' — e.g., ins Kino, ins Café)." },
  ans: { formula: "an + das", detail: "Accusative neuter contraction ('to/onto the' — e.g., ans Meer)." },
  zum: { formula: "zu + dem", detail: "Dative masculine/neuter contraction ('to the' — e.g., zum Hafen, zum Bahnhof)." },
  zur: { formula: "zu + der", detail: "Dative feminine contraction ('to the' — e.g., zur Kirche, zur U-Bahn)." },
  vom: { formula: "von + dem", detail: "Dative masculine/neuter contraction ('from/of the')." },
  beim: { formula: "bei + dem", detail: "Dative masculine/neuter contraction ('at/with the')." }
};

export const ENDINGS_REFERENCE_TABLES = [
  {
    title: "1. Verb Personal Endings (Präsens)",
    subtitle: "Every German verb changes its ending to match the subject pronoun.",
    rows: [
      { ending: "-e", pattern: "ich komm·e / wohn·e / arbeit·e", note: "1st person singular (ich)" },
      { ending: "-st / -est", pattern: "du komm·st / sprich·st / arbeit·est", note: "2nd person singular (du); adds -e- after -t/-d stems" },
      { ending: "-t / -et", pattern: "er/sie/es komm·t / lies·t / arbeit·et", note: "3rd person singular (er/sie/es) & plural informal (ihr)" },
      { ending: "-en / -n", pattern: "wir komm·en · sie/Sie komm·en · sammel·n", note: "Plural (wir, sie), formal Sie, and dictionary infinitive" }
    ]
  },
  {
    title: "2. Article, Possessive & Negation Endings (ein / kein / mein)",
    subtitle: "Possessives (mein, dein, Ihr, sein, ihr, unser) and kein take the exact same endings as ein.",
    rows: [
      { ending: "— (no ending)", pattern: "ein / kein / mein Koffer (m) · Buch (n)", note: "Masculine Nominative & Neuter Nominative/Accusative" },
      { ending: "-e", pattern: "ein·e / kein·e / mein·e Tasche (f) · meine Bücher (pl)", note: "Feminine (die) & all Plurals (die)" },
      { ending: "-en", pattern: "ein·en / kein·en / mein·en Schlüssel (m)", note: "Masculine Accusative (direct object) & Dative Plural" },
      { ending: "-em", pattern: "in ein·em Hotel · mit mein·em Partner", note: "Masculine & Neuter Dative (after in, mit, bei, von, zu)" },
      { ending: "-er", pattern: "in ein·er Stadt · mit mein·er Partnerin · welch·er", note: "Feminine Dative (der) or Masculine Nominative (welcher/dieser)" },
      { ending: "-es", pattern: "welch·es Land · dies·es Buch · ein kurz·es Interview", note: "Neuter Nominative/Accusative signal (-es mirrors das)" }
    ]
  },
  {
    title: "3. Noun Plural & Feminine Profession Endings",
    subtitle: "How German nouns mark gender roles and plurals in speech.",
    rows: [
      { ending: "-in / -innen", pattern: "der Kollege → die Kolleg·in → die Kolleg·innen", note: "Feminine profession/person suffix (always feminine 'die')" },
      { ending: "-(e)n", pattern: "die Sprache → die Sprache·n · die Frau → die Frau·en", note: "Most common plural (especially feminine nouns)" },
      { ending: "-e (often + ¨)", pattern: "der Tag → die Tag·e · der Zug → die Züg·e", note: "Common for 1-syllable masculine/neuter nouns" },
      { ending: "-er (often + ¨)", pattern: "das Wort → die Wört·er · das Buch → die Büch·er", note: "Common neuter plural with stem vowel umlaut (a→ä, o→ö, u→ü)" },
      { ending: "-s", pattern: "das Hobby → die Hobby·s · das Café → die Café·s · das Auto → die Auto·s", note: "International words & nouns ending in a vowel" },
      { ending: "— (unchanged)", pattern: "der Koffer → die Koffer · der Schlüssel → die Schlüssel", note: "Nouns ending in -er, -el, -en, -chen stay identical in Nominative plural" }
    ]
  },
  {
    title: "4. Preposition + Article Contractions",
    subtitle: "In natural spoken German, prepositions fuse with definite articles.",
    rows: [
      { ending: "im / am", pattern: "in + dem = im (im Büro) · an + dem = am (am Montag)", note: "Masculine/Neuter Dative location or time" },
      { ending: "zum / zur", pattern: "zu + dem = zum (zum Bahnhof) · zu + der = zur (zur Kirche)", note: "Direction towards a place ('to the')" },
      { ending: "ins / ans", pattern: "in + das = ins (ins Kino) · an + das = ans (ans Meer)", note: "Neuter Accusative destination ('into/to the')" },
      { ending: "vom / beim", pattern: "von + dem = vom · bei + dem = beim", note: "Origin ('from the') or state/place ('at the')" }
    ]
  }
];

const DETERMINER_BASES = [
  "ein", "kein", "mein", "dein", "sein", "ihr", "unser", "euer", "dies", "welch", "jed", "all", "ander", "weit"
];

/**
 * Produces a concise, plain-English grammatical ending explanation for any clicked token in context.
 */
export function explainWordEnding(rawSurface, vocabEntry, lineDe = "") {
  const clean = (rawSurface || "").replace(/^[^a-zA-ZäöüÄÖÜß'-]+|[^a-zA-ZäöüÄÖÜß'-]+$/g, "");
  if (!clean) return null;
  const lower = clean.toLowerCase();

  // 1. Preposition + Article contraction
  if (CONTRACTIONS_MAP[lower]) {
    const c = CONTRACTIONS_MAP[lower];
    return {
      badge: `Contraction: ${c.formula}`,
      explanation: c.detail
    };
  }

  // 2. Determiner / Possessive / Question-word endings (mein/meine/meinen/meinem/meiner, ein/eine, welcher/welche/welches)
  for (const base of DETERMINER_BASES) {
    if (lower === base && ["ein", "kein", "mein", "dein", "sein", "ihr", "unser"].includes(base)) {
      return {
        badge: `${clean} (base form · no ending)`,
        explanation: `Zero ending (—) used before masculine Nominative (der) or neuter (das) nouns.`
      };
    }
    const suffixes = [
      ["em", "Masculine/Neuter Dative ending (-em, matching dem) after prepositions like in, mit, bei, von, zu."],
      ["en", "Accusative masculine (-en, matching den) or Dative plural ending."],
      ["er", "Masculine Nominative (-er, matching der) or Feminine Dative ending (-er, matching der)."],
      ["es", "Neuter ending (-es, matching das) for singular neuter nouns."],
      ["e", "Feminine singular (die) or Plural (die) ending (-e)."]
    ];
    for (const [sfx, desc] of suffixes) {
      if (lower === base + sfx) {
        const displayStem = clean.slice(0, clean.length - sfx.length);
        return {
          badge: `${displayStem}·${sfx} (-${sfx} ending)`,
          explanation: desc
        };
      }
    }
  }

  if (!vocabEntry) return null;

  // 3. Nouns: check feminine -in/-innen or plural inflection
  if (vocabEntry.category === "nouns") {
    if (clean.endsWith("innen")) {
      return {
        badge: `${clean.slice(0, -5)}·innen (-innen plural)`,
        explanation: `Feminine plural profession/person ending (-innen). Always uses 'die'.`
      };
    }
    if (clean.endsWith("in") && vocabEntry.article === "die" && clean.length > 4) {
      return {
        badge: `${clean.slice(0, -2)}·in (-in feminine)`,
        explanation: `Feminine person/profession ending (-in). Plural adds -nen (${clean}nen).`
      };
    }
    if (vocabEntry.plural && vocabEntry.plural !== "— (Sg.)") {
      const plWord = vocabEntry.plural.replace(/^die\s+/i, "").trim();
      if (plWord && clean.toLowerCase() === plWord.toLowerCase() && clean.toLowerCase() !== vocabEntry.german.toLowerCase()) {
        return {
          badge: `Plural form (${vocabEntry.plural})`,
          explanation: `Plural of ${vocabEntry.article || ""} ${vocabEntry.german}. Notice the plural change (${vocabEntry.german} → ${plWord}).`
        };
      }
      if (clean.toLowerCase() === (plWord + "n").toLowerCase()) {
        return {
          badge: `Dative Plural (-n)`,
          explanation: `In the Dative plural, German nouns add an extra -n (${plWord} → ${clean}).`
        };
      }
    }
  }

  // 4. Verbs: explain personal ending (-e, -st, -t, -en) & separable prefix
  if (vocabEntry.category === "verbs") {
    const inf = vocabEntry.german.toLowerCase();
    const sepNote =
      vocabEntry.prefix && vocabEntry.baseVerb
        ? ` Separable verb (${vocabEntry.prefix}·${vocabEntry.baseVerb}): the prefix „${vocabEntry.prefix}“ splits to the end in main clauses.`
        : "";

    if (inf === "sein") {
      const seinMap = {
        bin: "1st person singular (ich bin) of irregular verb 'sein'.",
        bist: "2nd person singular (du bist) of irregular verb 'sein'.",
        ist: "3rd person singular (er/sie/es ist) of irregular verb 'sein'.",
        sind: "Plural / formal form (wir sind · sie/Sie sind) of 'sein'.",
        seid: "2nd person plural (ihr seid) of irregular verb 'sein'."
      };
      if (seinMap[lower]) {
        return { badge: `${clean} ← sein`, explanation: seinMap[lower] };
      }
    }

    if (inf === "haben") {
      const habenMap = {
        habe: "ich hab·e (-e ending for ich).",
        hast: "du ha·st (irregular singular stem without -b- + -st ending for du).",
        hat: "er/sie/es ha·t (irregular singular stem + -t ending).",
        haben: "wir / sie / Sie hab·en (-en plural/formal ending).",
        habt: "ihr hab·t (-t ending for ihr)."
      };
      if (habenMap[lower]) {
        return { badge: `${clean} ← haben`, explanation: habenMap[lower] + sepNote };
      }
    }

    if (lower.endsWith("est") && lower.length > 4) {
      return {
        badge: `${clean.slice(0, -3)}·est (-est ending)`,
        explanation: `2nd person singular (du) ending; adds -e- before -st for smooth pronunciation after -t/-d.` + sepNote
      };
    }
    if (lower.endsWith("st") && lower !== "ist" && lower.length > 3) {
      return {
        badge: `${clean.slice(0, -2)}·st (-st ending)`,
        explanation: `2nd person singular (du) present-tense verb ending.` + sepNote
      };
    }
    if (lower.endsWith("en") && lower.length > 3) {
      return {
        badge: `${clean.slice(0, -2)}·en (-en ending)`,
        explanation: `Used with wir, sie (they), formal Sie (or Imperative 'Gehen Sie!'), and the infinitive.` + sepNote
      };
    }
    if (lower.endsWith("et") && lower.length > 4) {
      return {
        badge: `${clean.slice(0, -2)}·et (-et ending)`,
        explanation: `Present-tense ending for er/sie/es or ihr (-e- added after -t/-d stem).` + sepNote
      };
    }
    if (lower.endsWith("t") && lower.length > 2) {
      return {
        badge: `${clean.slice(0, -1)}·t (-t ending)`,
        explanation: `Present-tense ending for er/sie/es (he/she/it) or ihr (you plural).` + sepNote
      };
    }
    if (lower.endsWith("e") && lower.length > 2) {
      return {
        badge: `${clean.slice(0, -1)}·e (-e ending)`,
        explanation: `1st person singular (ich) present-tense ending.` + sepNote
      };
    }
    if (sepNote && lower === vocabEntry.prefix?.toLowerCase()) {
      return {
        badge: `Separated prefix (${vocabEntry.prefix}·${vocabEntry.baseVerb})`,
        explanation: `„${clean}“ is the detached prefix of „${vocabEntry.german}“, placed at the end of the clause.`
      };
    }
  }

  // 5. Adjectives with endings (-es, -e, -en, -er, -em)
  if (vocabEntry.category === "adjectives") {
    const base = vocabEntry.german.split(",")[0].trim().toLowerCase();
    if (lower !== base && lower.startsWith(base)) {
      const sfx = clean.slice(base.length);
      const adjDesc = {
        es: "Neuter adjective ending (-es) after 'ein/kein/mein' (e.g., ein kurzes Interview, ein großes Schiff).",
        e: "Feminine singular or plural adjective ending (-e) (e.g., eine gute Frage, andere Sprachen).",
        en: "Accusative masculine or Dative adjective ending (-en).",
        er: "Masculine Nominative adjective ending (-er).",
        em: "Dative strong adjective ending (-em)."
      };
      if (adjDesc[sfx.toLowerCase()]) {
        return {
          badge: `${clean.slice(0, -sfx.length)}·${sfx} (-${sfx} adj. ending)`,
          explanation: adjDesc[sfx.toLowerCase()]
        };
      }
    }
  }

  return null;
}
