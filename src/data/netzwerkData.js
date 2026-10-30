// Complete Netzwerk neu A1 & A2 12-Chapter Structure:
// Official Chapter Titles, Communication Topics (Sprachhandlungen), Vocabulary Themes (Wortschatz),
// Detailed Grammar Topics (Grammatik im Kapitel) with formulas & bilingual examples, and Speaking Situations.

export const NETZWERK_CHAPTERS = {
  A1: [
    {
      id: "kap-1",
      number: 1,
      title: "Guten Tag!",
      theme: "Begrüßung, sich vorstellen, Länder, Sprachen & Zahlen bis 20",
      grammarFocus: "W-Frage (Wie, Woher, Was), Aussagesatz (Verb Position 2), Verben & Personalpronomen (heißen, kommen, sein, sprechen)",
      sentenceTip: "Put the conjugated verb in Position 2: 'Ich komme aus Indien.' or 'Wie heißen Sie?'",
      topicsLearned: [
        "grüßen und verabschieden — Greet people and say goodbye (Hallo, Guten Morgen, Tschüss, Auf Wiedersehen)",
        "sich und andere vorstellen — Introduce yourself and others (Ich heiße..., Das ist...)",
        "nach dem Befinden fragen und darauf reagieren — Ask how someone is and respond (Wie geht's? – Danke, gut!)",
        "über sich und andere sprechen — Talk about yourself and others (origin, city, languages)",
        "Zahlen bis 20 nennen — Count and use numbers from 1 to 20",
        "Telefonnummer und E-Mail-Adresse nennen — Give your phone number and email address",
        "buchstabieren — Spell names and words aloud in German",
        "über Länder und Sprachen sprechen — Talk about countries and languages (aus Deutschland, spricht Deutsch)"
      ],
      vocabThemes: [
        "Begrüßung & Verabschiedung (Greetings & Goodbyes)",
        "Zahlen von 1–20 (Numbers 1–20)",
        "Länder und Sprachen (Countries & Languages)",
        "Persönliche Angaben: Telefon & E-Mail (Personal Contact Info)"
      ],
      grammarTopics: [
        {
          title: "1. W-Frage (Question Word Questions — Verb in Position 2)",
          rule: "In questions with a W-word (Wie, Woher, Wo, Was, Wer), the W-word stands in Position 1 and the conjugated verb ALWAYS stands in Position 2.",
          pattern: "[Position 1: W-Wort] + [Position 2: Verb] + [Subject / Rest]?",
          examples: [
            { de: "Wie heißt du? / Wie heißen Sie?", en: "What is your name? (informal / formal)" },
            { de: "Woher kommst du?", en: "Where do you come from?" },
            { de: "Was sprechen Sie?", en: "What (languages) do you speak?" }
          ]
        },
        {
          title: "2. Aussagesatz (Statements — Verb in Position 2)",
          rule: "In a normal German statement (Aussagesatz), the conjugated verb ALWAYS stays in Position 2.",
          pattern: "[Position 1: Subject] + [Position 2: Verb] + [Rest].",
          examples: [
            { de: "Ich heiße Nina.", en: "My name is Nina." },
            { de: "Ich komme aus Österreich.", en: "I come from Austria." },
            { de: "Er wohnt in Frankfurt.", en: "He lives in Frankfurt." }
          ]
        },
        {
          title: "3. Verben und Personalpronomen im Präsens (Present Tense Conjugation)",
          rule: "Regular verbs add personal endings to the verb stem: ich -e, du -st, er/sie -t, sie/Sie -en. The verb 'sein' (to be) is irregular (ich bin, du bist, er/sie ist, sie/Sie sind).",
          pattern: "ich komme (-e) | du kommst (-st) | er/sie kommt (-t) | sie/Sie kommen (-en) || sein: ich bin, du bist, er/sie ist, sie/Sie sind",
          examples: [
            { de: "Ich lerne Deutsch und du lernst Englisch.", en: "I learn German and you learn English." },
            { de: "Er spricht Deutsch und Spanisch.", en: "He speaks German and Spanish." },
            { de: "Wer bist du? – Ich bin Julia.", en: "Who are you? – I am Julia." }
          ]
        },
        {
          title: "4. Personalpronomen in Texten (Personal Pronouns in Context)",
          rule: "Use 'er' (he), 'sie' (she), and 'sie' (they) to refer back to people so you don't repeat names in every sentence.",
          pattern: "Das ist Mehmet (m) → Er... | Das ist Olga (f) → Sie... | Mehmet und Olga (pl) → Sie...",
          examples: [
            { de: "Das ist Olga. Sie kommt aus Russland.", en: "This is Olga. She comes from Russia." },
            { de: "Das sind Mehmet und Olga. Sie wohnen in Berlin.", en: "These are Mehmet and Olga. They live in Berlin." }
          ]
        }
      ],
      situations: [
        "Introduce yourself (name, country, city, and languages you speak) to a new colleague.",
        "Ask someone politely where they come from and what languages they speak.",
        "Say hello and goodbye to your teacher (formal 'Sie') vs. a friend (informal 'du')."
      ]
    },
    {
      id: "kap-2",
      number: 2,
      title: "Freunde, Kollegen und ich",
      theme: "Hobbys, Wochentage, Berufe, Arbeitszeiten & Zahlen ab 20",
      grammarFocus: "Unregelmäßige Verben (Vokalwechsel), Ja-/Nein-Frage (Verb Position 1), Bestimmter Artikel (der/das/die), Nomen: Singular & Plural, Verben haben & sein",
      sentenceTip: "For Yes/No questions, start with the Verb in Position 1: 'Liest du gern Bücher am Wochenende?'",
      topicsLearned: [
        "über Hobbys sprechen — Talk about hobbies and free-time activities (Ich fotografiere gern)",
        "sich verabreden — Make plans to meet up with friends (Gehen wir am Samstag ins Kino?)",
        "Wochentage benennen — Name and use the days of the week (Montag bis Sonntag)",
        "über Arbeit, Berufe und Arbeitszeiten sprechen — Talk about jobs, professions, and working hours",
        "Zahlen ab 20 nennen — Count and use numbers from 20 upwards",
        "ein Formular ausfüllen — Fill out a registration or profile form with personal details"
      ],
      vocabThemes: [
        "Hobbys & Freizeit (Hobbies & Free time)",
        "Wochentage (Days of the week: Montag–Sonntag)",
        "Zahlen ab 20 (Numbers from 20 to 1,000+)",
        "Berufe & Arbeit (Professions & Workplaces)"
      ],
      grammarTopics: [
        {
          title: "1. Unregelmäßige Verben & alle Personalpronomen (Vowel-Change Verbs & Pronouns)",
          rule: "Some common verbs change their stem vowel in the 'du' and 'er/sie/es' forms (e → i/ie, a → ä). Plural pronouns (wir, ihr, sie/Sie) keep the original stem vowel.",
          pattern: "sprechen → du sprichst, er spricht | lesen → du liest, er liest | sehen → du siehst, er sieht | fahren → du fährst, er fährt",
          examples: [
            { de: "Liest du gern Bücher? – Ja, ich lese sehr gern.", en: "Do you like reading books? – Yes, I like reading very much." },
            { de: "Er fährt am Wochenende gern Fahrrad.", en: "He likes riding a bike on the weekend." },
            { de: "Wir arbeiten zusammen und ihr lernt Deutsch.", en: "We work together and you (all) learn German." }
          ]
        },
        {
          title: "2. Ja-/Nein-Frage (Yes/No Questions — Verb in Position 1)",
          rule: "To ask a question answered with 'Ja' or 'Nein', put the conjugated verb in Position 1 right at the beginning of the sentence.",
          pattern: "[Position 1: Verb] + [Position 2: Subject] + [Rest]? → Ja, ... / Nein, ...",
          examples: [
            { de: "Fotografierst du gern? – Ja, ich fotografiere gern.", en: "Do you like taking photos? – Yes, I like taking photos." },
            { de: "Arbeitest du am Samstag? – Nein, am Samstag arbeite ich nicht.", en: "Do you work on Saturday? – No, on Saturday I don't work." }
          ]
        },
        {
          title: "3. Bestimmter Artikel: der, das, die (Definite Articles & Grammatical Gender)",
          rule: "Every German noun has a grammatical gender and is capitalized: masculine (der), neuter (das), feminine (die), and plural (die). Feminine professions often add '-in' (der Arzt → die Ärztin).",
          pattern: "Maskulin: der Tisch / der Arzt | Neutrum: das Buch / das Auto | Feminin: die Tasche / die Ärztin | Plural: die Bücher",
          examples: [
            { de: "Der Schlüssel, das Buch und die Brille liegen hier.", en: "The key, the book, and the glasses are lying here." },
            { de: "Er ist Lehrer von Beruf und sie ist Lehrerin.", en: "He is a male teacher by profession and she is a female teacher." }
          ]
        },
        {
          title: "4. Nomen: Singular und Plural (Noun Plurals)",
          rule: "German nouns form their plural with different endings (-e, -er, -(e)n, -s, or no ending, often with an Umlaut ä/ö/ü). In the plural, the definite article is ALWAYS 'die'.",
          pattern: "-(e)n: die Frau → die Frauen | -e (¨): der Stuhl → die Stühle | -er (¨): das Buch → die Bücher | -s: das Auto → die Autos | –: der Schlüssel → die Schlüssel",
          examples: [
            { de: "Das Buch ist interessant. Die Bücher sind teuer.", en: "The book is interesting. The books are expensive." },
            { de: "Hier ist eine Tablette. Dort sind die Tabletten.", en: "Here is a pill. There are the pills." }
          ]
        },
        {
          title: "5. Verben 'haben' und 'sein' (To Have & To Be)",
          rule: "The essential verbs 'haben' (to have) and 'sein' (to be) are used constantly and have irregular forms in the singular.",
          pattern: "haben: ich habe, du hast, er/sie hat, wir haben, ihr habt, sie/Sie haben || sein: ich bin, du bist, er/sie ist, wir sind, ihr seid, sie/Sie sind",
          examples: [
            { de: "Hast du heute Zeit? – Nein, ich habe leider keine Zeit.", en: "Do you have time today? – No, unfortunately I don't have time." },
            { de: "Wir sind Freunde und ihr seid Kollegen.", en: "We are friends and you (all) are colleagues." }
          ]
        }
      ],
      situations: [
        "Tell a friend what hobbies you do on Saturday and Sunday.",
        "Ask a colleague if they like playing football or reading books.",
        "Talk about your workdays and which days you have free."
      ]
    },
    {
      id: "kap-3",
      number: 3,
      title: "In Hamburg",
      theme: "Plätze & Gebäude, Verkehrsmittel, Wegbeschreibung, Monate & Jahreszeiten",
      grammarFocus: "Unbestimmter Artikel (ein, ein, eine), Negationsartikel (kein, kein, keine), Imperativ mit Sie, Adjektiv mit sein",
      sentenceTip: "Use 'kein/keine' to negate nouns with 'ein/eine' or no article: 'Das ist kein Bahnhof, das ist eine Bank.'",
      topicsLearned: [
        "Plätze und Gebäude benennen — Name city squares, sights, and buildings (das Rathaus, der Hafen, die Kirche)",
        "Fragen zu Orten stellen und antworten — Ask and answer questions about places (Was ist das? Wo ist...?)",
        "Verkehrsmittel benennen — Name means of transport (der Bus, die U-Bahn, die S-Bahn, das Fahrrad)",
        "nach Dingen fragen — Ask about things using indefinite articles (Ist das ein.../eine...?)",
        "nach dem Weg fragen und einen Weg beschreiben — Ask for directions and describe the way (geradeaus, links, rechts)",
        "Jahreszeiten und Monate benennen — Name the four seasons and twelve months (im Januar, im Sommer)",
        "über Hobbys und Aktivitäten in der Stadt sprechen — Talk about city activities in different seasons"
      ],
      vocabThemes: [
        "Plätze und Gebäude (City squares & Buildings)",
        "Verkehrsmittel (Means of transport)",
        "Richtungen & Wegbeschreibung (Directions: links, rechts, geradeaus)",
        "Monate und Jahreszeiten (Months & Seasons)"
      ],
      grammarTopics: [
        {
          title: "1. Unbestimmter Artikel: ein, ein, eine (Indefinite Articles 'a / an')",
          rule: "When mentioning a thing or place for the first time or when it is unspecified, use 'ein' (masculine/neuter) or 'eine' (feminine). Plural has no indefinite article.",
          pattern: "Maskulin (der) → ein Bahnhof | Neutrum (das) → ein Hotel | Feminin (die) → eine Straße | Plural (die) → – Hotels",
          examples: [
            { de: "Das ist ein Bahnhof und das ist ein Hotel.", en: "That is a train station and that is a hotel." },
            { de: "Dort ist eine Kirche und hier sind Cafés.", en: "Over there is a church and here are cafés." }
          ]
        },
        {
          title: "2. Negationsartikel: kein, kein, keine (Negating Nouns with 'kein')",
          rule: "To negate a noun that has 'ein/eine' or no article, use 'kein' (masculine/neuter) or 'keine' (feminine and plural).",
          pattern: "Maskulin → kein Bus | Neutrum → kein Schiff | Feminin → keine U-Bahn | Plural → keine Busse",
          examples: [
            { de: "Ist das eine Kirche? – Nein, das ist keine Kirche, das ist ein Rathaus.", en: "Is that a church? – No, that is not a church, that is a town hall." },
            { de: "Hier fahren leider keine Busse.", en: "Unfortunately no buses run here." }
          ]
        },
        {
          title: "3. Imperativ mit 'Sie' (Formal Commands & Directions)",
          rule: "To give polite instructions or directions to strangers ('Sie'), put the verb in Position 1 followed immediately by 'Sie'. For 'sein', the form is 'Seien Sie...'.",
          pattern: "[Verb (-en)] + [Sie] + [Rest]! (Gehen Sie...! / Fahren Sie...! / Nehmen Sie...!)",
          examples: [
            { de: "Gehen Sie hier geradeaus und dann links!", en: "Go straight ahead here and then left!" },
            { de: "Nehmen Sie den Bus Linie 12 bis zum Bahnhof!", en: "Take bus line 12 to the train station!" }
          ]
        },
        {
          title: "4. Adjektiv mit 'sein' (Predicative Adjectives)",
          rule: "When an adjective comes after the verb 'sein' (ist/sind), it stays in its base dictionary form without any extra ending.",
          pattern: "[Subject] + [ist / sind] + [Adjektiv (unverändert)]",
          examples: [
            { de: "Das Rathaus ist sehr alt und schön.", en: "The town hall is very old and beautiful." },
            { de: "Der Turm ist hoch und die Straßen sind breit.", en: "The tower is high and the streets are wide." }
          ]
        }
      ],
      situations: [
        "Ask a stranger on the street how to get to the train station (der Bahnhof) or hotel.",
        "Explain which transport (der Bus, die U-Bahn, das Fahrrad) you take in the city.",
        "Describe what places exist in your neighborhood using 'Das ist ein/eine...' and 'kein/keine'."
      ]
    },
    {
      id: "kap-4",
      number: 4,
      title: "Guten Appetit!",
      theme: "Mahlzeiten, Lebensmittel, Getränke, Geschäfte & Einkaufen",
      grammarFocus: "Akkusativ (den/einen/keinen), Verben mit Akkusativ, Verben mögen & möchten, Positionen im Satz (Inversion)",
      sentenceTip: "Masculine 'der' changes to 'den' (and 'ein' -> 'einen') in Akkusativ: 'Ich kaufe einen Apfel und den Käse.'",
      topicsLearned: [
        "einen Einkauf planen — Plan a grocery shopping trip and write a shopping list",
        "Gespräche beim Einkauf führen — Hold conversations at the market, bakery, or supermarket",
        "Gespräche beim Essen führen — Make conversation at the dining table (Guten Appetit! Schmeckt's?)",
        "über Vorlieben beim Essen sprechen — Talk about food preferences (was man gern/nicht gern isst)",
        "über Essen und Mahlzeiten sprechen — Talk about breakfast, lunch, and dinner habits"
      ],
      vocabThemes: [
        "Mahlzeiten (Meals: das Frühstück, das Mittagessen, das Abendessen)",
        "Lebensmittel: Obst, Gemüse, Fleisch, Milchprodukte (Food & Groceries)",
        "Getränke (Drinks & Beverages)",
        "Geschäfte, Mengen & Verpackungen (Shops, Quantities & Packaging)"
      ],
      grammarTopics: [
        {
          title: "1. Artikel im Akkusativ (Direct Object Case)",
          rule: "The direct object of a sentence stands in the Akkusativ case. ONLY masculine articles change in Akkusativ (der → den, ein → einen, kein → keinen). Neuter, feminine, and plural stay identical to Nominativ!",
          pattern: "Maskulin: den / einen / keinen || Neutrum: das / ein / kein || Feminin: die / eine / keine || Plural: die / – / keine",
          examples: [
            { de: "Ich kaufe einen Apfel (m), ein Brot (n) und eine Banane (f).", en: "I am buying an apple, a loaf of bread, and a banana." },
            { de: "Wir haben keinen Käse (m) und keine Milch (f) mehr.", en: "We don't have any cheese or milk left." }
          ]
        },
        {
          title: "2. Verben mit Akkusativ (Transitive Verbs + Direct Object)",
          rule: "Most German verbs that take a direct object ('Wen oder was?') require the Akkusativ case: kaufen, brauchen, suchen, haben, nehmen, essen, trinken, kochen, machen, möchten, mögen.",
          pattern: "essen (du isst, er isst) | nehmen (du nimmst, er nimmt) + Akkusativ-Objekt",
          examples: [
            { de: "Was isst du zum Frühstück? – Ich esse einen Joghurt und trinke einen Kaffee.", en: "What do you eat for breakfast? – I eat a yogurt and drink a coffee." },
            { de: "Nimmst du den Fisch oder das Hähnchen?", en: "Are you taking the fish or the chicken?" }
          ]
        },
        {
          title: "3. Verben 'mögen' und 'möchten' (Likes vs. Polite Wishes)",
          rule: "Use 'mögen' (ich mag, du magst, er/sie mag) to express general likes/preferences for nouns. Use 'möchten' (ich möchte, du möchtest, er/sie möchte) for polite current wishes or ordering food.",
          pattern: "mögen: ich mag, du magst, er/sie mag, wir mögen, ihr mögt, sie/Sie mögen || möchten: ich möchte, du möchtest, er/sie möchte...",
          examples: [
            { de: "Ich mag keinen Fisch, aber ich mag Käse sehr gern.", en: "I don't like fish, but I like cheese very much." },
            { de: "Ich möchte bitte einen Apfelsaft und ein Brötchen.", en: "I would like an apple juice and a bread roll, please." }
          ]
        },
        {
          title: "4. Positionen im Satz / Inversion (Word Order with Time/Place in Position 1)",
          rule: "You can start a statement with a time, place, or object in Position 1 for emphasis. The conjugated verb MUST stay in Position 2, so the subject moves right behind the verb (Position 3).",
          pattern: "[Pos 1: Time / Object] + [Pos 2: Verb] + [Pos 3: Subject] + [Rest].",
          examples: [
            { de: "Zum Frühstück esse ich gern Müsli.", en: "For breakfast I like eating muesli." },
            { de: "Morgens trinkt er immer einen Tee.", en: "In the morning he always drinks a tea." }
          ]
        }
      ],
      situations: [
        "Say what you eat and drink for breakfast (zum Frühstück) and lunch (zum Mittagessen).",
        "At the supermarket: tell the cashier or a friend what groceries you need to buy today.",
        "Order food and a drink politely at a bakery or café using 'Ich möchte...'"
      ]
    },
    {
      id: "kap-5",
      number: 5,
      title: "Alltag und Familie",
      theme: "Tagesablauf, Uhrzeiten, Familie, Termine & Verabredungen",
      grammarFocus: "Zeitangaben (am, um, von...bis), Possessivartikel (mein, dein, sein, ihr), Modalverben (müssen, können, wollen) & Satzklammer",
      sentenceTip: "With modal verbs, put the conjugated modal verb in Position 2 and the infinitive at the very end: 'Ich muss heute lange arbeiten.'",
      topicsLearned: [
        "die Uhrzeit verstehen und nennen — Understand and tell the time (official & everyday spoken time)",
        "Zeitangaben machen — State when and how long things happen (am Montag, um 8 Uhr, von 9 bis 17 Uhr)",
        "über Familie sprechen — Talk about your family members and relatives",
        "sich verabreden — Make appointments and plans with friends",
        "einen Termin telefonisch vereinbaren — Schedule or change an appointment on the phone",
        "sich für eine Verspätung entschuldigen und darauf reagieren — Apologize for being late and respond politely"
      ],
      vocabThemes: [
        "Tagesablauf (Daily routine activities)",
        "Uhrzeiten & Tageszeiten (Clock times: Viertel nach, halb, Viertel vor & Times of day)",
        "Familie & Verwandte (Family members & Relatives)",
        "Termine & Entschuldigungen (Appointments & Apologies)"
      ],
      grammarTopics: [
        {
          title: "1. Zeitangaben: am, um, von ... bis (Time Prepositions)",
          rule: "Use 'um' for exact clock times, 'am' for days of the week and parts of the day (except 'in der Nacht'), and 'von ... bis ...' for time spans.",
          pattern: "um + Uhrzeit (um 8 Uhr) | am + Tag/Tageszeit (am Montag, am Morgen) | in der Nacht | von ... bis ... (von 8 bis 12 Uhr)",
          examples: [
            { de: "Am Montag arbeite ich von 8 bis 17 Uhr.", en: "On Monday I work from 8 a.m. to 5 p.m." },
            { de: "Der Film beginnt heute Abend um 20 Uhr.", en: "The movie starts tonight at 8 p.m." }
          ]
        },
        {
          title: "2. Possessivartikel im Nominativ und Akkusativ (mein, dein, sein, ihr...)",
          rule: "Possessive articles show ownership and take the exact same endings as 'kein/keine/keinen': masculine/neuter Nominativ has no ending (mein Vater, mein Kind), feminine/plural adds '-e' (meine Mutter, meine Eltern), and masculine Akkusativ adds '-en' (meinen Bruder).",
          pattern: "ich → mein(e/en) | du → dein(e/en) | er → sein(e/en) | sie → ihr(e/en) | wir → unser(e/en) | ihr → euer(eure/euren) | Sie → Ihr(e/en)",
          examples: [
            { de: "Das ist mein Vater, das ist meine Mutter und das sind meine Geschwister.", en: "That is my father, that is my mother, and those are my siblings." },
            { de: "Ich besuche am Sonntag meinen Bruder (Akk. Maskulin).", en: "I am visiting my brother on Sunday." }
          ]
        },
        {
          title: "3. Modalverben: müssen, können, wollen (Modal Verbs Conjugation)",
          rule: "Modal verbs express necessity ('müssen' = must/have to), ability/possibility ('können' = can), or intention ('wollen' = want to). Notice that 'ich' and 'er/sie/es' have NO ending and share the exact same form!",
          pattern: "können: ich kann, du kannst, er/sie kann, wir können, ihr könnt | müssen: ich muss, du musst, er/sie muss | wollen: ich will, du willst, er/sie will",
          examples: [
            { de: "Ich kann heute leider nicht kommen, ich muss arbeiten.", en: "Unfortunately I cannot come today, I have to work." },
            { de: "Willst du am Wochenende ins Kino gehen?", en: "Do you want to go to the cinema on the weekend?" }
          ]
        },
        {
          title: "4. Modalverben im Satz: Satzklammer (Sentence Bracket with Modal Verbs)",
          rule: "When using a modal verb, the conjugated modal verb stands in Position 2 (or Position 1 in Yes/No questions) and the main verb goes to the VERY END of the sentence in the infinitive form.",
          pattern: "[Subject] + [Pos 2: Modalverb] + [Middle Info] + [Sentence End: Infinitiv].",
          examples: [
            { de: "Lisa muss jeden Tag um 7 Uhr aufstehen.", en: "Lisa has to get up at 7 o'clock every day." },
            { de: "Können wir uns am Freitag um 18 Uhr treffen?", en: "Can we meet on Friday at 6 p.m.?" }
          ]
        }
      ],
      situations: [
        "Describe your daily morning routine using a time ('um 7 Uhr') and what you have to do ('Ich muss...').",
        "Try to make an appointment with a friend on Friday evening and explain when you have time.",
        "Introduce two members of your family using 'mein/meine'."
      ]
    },
    {
      id: "kap-6",
      number: 6,
      title: "Zeit mit Freunden",
      theme: "Freizeit, Datum & Geburtstage, Einladungen, im Restaurant bestellen",
      grammarFocus: "Datumsangaben (Ordinalzahlen: am ersten...), Trennbare Verben, Personalpronomen im Akkusativ (mich, dich, ihn...), Präposition für + Akkusativ, Präteritum: hatte & war",
      sentenceTip: "With separable verbs in Präsens, the prefix goes to the very end: 'Ich rufe dich heute Abend an.'",
      topicsLearned: [
        "über Freizeit sprechen — Talk about leisure activities with friends",
        "das Datum verstehen und nennen — Understand and state dates using ordinal numbers",
        "über Geburtstage sprechen — Talk about birthdays and when people were born",
        "eine Einladung verstehen und schreiben — Read and write an invitation to a party or event",
        "Essen und Getränke im Restaurant bestellen und bezahlen — Order food/drinks and pay the bill at a restaurant",
        "über ein Ereignis sprechen — Talk about a past event or party using 'war' and 'hatte'",
        "Veranstaltungstipps im Radio verstehen — Understand event announcements and tips"
      ],
      vocabThemes: [
        "Ordinalzahlen & Datum (Ordinal numbers: der erste, zweite, dritte...)",
        "Freizeitaktivitäten & Feste (Leisure activities & Celebrations)",
        "Im Restaurant: bestellen & bezahlen (Restaurant: ordering & paying)",
        "Veranstaltungen (Events, concerts & exhibitions)"
      ],
      grammarTopics: [
        {
          title: "1. Datumsangaben: Wann? – Am ... (Dates & Ordinal Numbers)",
          rule: "For dates from 1 to 19, add '-ten' after 'am' (irregular: ersten, dritten, siebten, achten). From 20 onwards, add '-sten' (am zwanzigsten). In writing, always put a period after the number (am 1. Mai).",
          pattern: "Wann? → am + [1.–19. + -ten / ab 20. + -sten]: am ersten (1.), am zweiten (2.), am dritten (3.), am zwanzigsten (20.)",
          examples: [
            { de: "Wann hast du Geburtstag? – Ich habe am elften Mai Geburtstag.", en: "When is your birthday? – My birthday is on the eleventh of May." },
            { de: "Die Party ist am dreiundzwanzigsten Juni.", en: "The party is on the twenty-third of June." }
          ]
        },
        {
          title: "2. Trennbare Verben im Satz (Separable Verbs & Sentence Bracket)",
          rule: "Many German verbs have a stressed prefix (an-, auf-, aus-, ein-, mit-, vor-, zu-, ab-). In the present tense, the verb stem is conjugated in Position 2 and the prefix splits off to the VERY END of the sentence.",
          pattern: "anrufen → Ich rufe ... an | einkaufen → Du kaufst ... ein | mitkommen → Kommst du heute Abend mit?",
          examples: [
            { de: "Ich kaufe am Nachmittag für die Party ein.", en: "I am doing the shopping for the party in the afternoon." },
            { de: "Wann fängt das Konzert heute an?", en: "When does the concert start today?" }
          ]
        },
        {
          title: "3. Personalpronomen im Akkusativ (mich, dich, ihn, sie, es, uns, euch, sie/Sie)",
          rule: "When a personal pronoun is the direct object of a verb (or follows an Akkusativ preposition like 'für'), use the Akkusativ pronoun forms.",
          pattern: "ich → mich | du → dich | er → ihn | es → es | sie → sie | wir → uns | ihr → euch | sie/Sie → sie/Sie",
          examples: [
            { de: "Rufst du mich heute Abend an? – Ja, ich rufe dich um 20 Uhr an.", en: "Will you call me tonight? – Yes, I'll call you at 8 p.m." },
            { de: "Kennst du den Mann? – Nein, ich kenne ihn nicht.", en: "Do you know the man? – No, I don't know him." }
          ]
        },
        {
          title: "4. Präposition 'für' + Akkusativ ('for' + Accusative)",
          rule: "The preposition 'für' ALWAYS requires the Akkusativ case after it (für mich, für dich, für ihn, für meinen Freund, für das Kind).",
          pattern: "für + Akkusativ (für den Vater / für einen Freund / für mich / für dich)",
          examples: [
            { de: "Das Geschenk ist für dich und die Blumen sind für meine Mutter.", en: "The gift is for you and the flowers are for my mother." },
            { de: "Für wen ist der Kaffee? – Er ist für ihn.", en: "Who is the coffee for? – It is for him." }
          ]
        },
        {
          title: "5. Präteritum von 'haben' (hatte) und 'sein' (war) (Simple Past of To Have & To Be)",
          rule: "When talking about the past with 'sein' and 'haben', Germans almost always use the short Präteritum forms 'war' (was/were) and 'hatte' (had).",
          pattern: "sein → ich war, du warst, er/sie war, wir waren, ihr wart, sie/Sie waren || haben → ich hatte, du hattest, er/sie hatte, wir hatten...",
          examples: [
            { de: "Gestern war mein Geburtstag und die Party war super.", en: "Yesterday was my birthday and the party was great." },
            { de: "Wir hatten gestern leider keine Zeit.", en: "Unfortunately we had no time yesterday." }
          ]
        }
      ],
      situations: [
        "Invite a friend to your birthday party and say on which date it takes place.",
        "At a restaurant: order food and a drink and ask the waiter for the bill (die Rechnung).",
        "Tell a friend where you were yesterday ('Ich war...') and how it was."
      ]
    },
    {
      id: "kap-7",
      number: 7,
      title: "Arbeitsalltag",
      theme: "Büroalltag, Ortsangaben, Bank, Medien, Briefe & Small Talk",
      grammarFocus: "Sätze verbinden: und, oder, aber (Pos. 0), Artikel im Dativ (dem, der, den + -n), Präposition mit + Dativ, Ortsangaben: Wo? + Dativ",
      sentenceTip: "Conjunctions 'und', 'oder', 'aber' sit in Position 0 and do not change word order: 'Ich arbeite viel, aber mein Job macht Spaß.'",
      topicsLearned: [
        "einen Blogbeitrag verstehen — Understand a blog post about everyday work life",
        "über den (Arbeits-)Alltag schreiben — Write about your daily work or study routine",
        "Gespräche am Arbeitsplatz verstehen — Understand workplace conversations with colleagues",
        "Ortsangaben machen — Describe where people and office items are located (Wo? + Dativ)",
        "Abläufe beschreiben — Describe sequences of tasks (zuerst, dann, danach)",
        "Briefe und E-Mails verstehen und beantworten — Read and reply to formal and semi-formal letters/emails",
        "Small Talk machen — Make polite small talk with colleagues during a break"
      ],
      vocabThemes: [
        "Büroalltag & Arbeitsplatz (Office life & Workplace items)",
        "Ortsangaben (Locations: neben, unter, über, vor, hinter, zwischen)",
        "Bank & Geld (Banking, accounts & ATMs)",
        "Medien & Kommunikation (Media, mail & communication)"
      ],
      grammarTopics: [
        {
          title: "1. Sätze verbinden: und, oder, aber (Coordinating Conjunctions — Position 0)",
          rule: "The connectors 'und' (and), 'oder' (or), and 'aber' (but) join two main clauses in Position 0. The second clause keeps normal word order (Subject + Verb in Position 2). If the subject is the same, you don't have to repeat it after 'und' or 'oder'.",
          pattern: "[Main Clause 1], + [Pos 0: und / oder / aber] + [Pos 1: Subject] + [Pos 2: Verb] + [Rest].",
          examples: [
            { de: "Ich trinke morgens einen Kaffee und (ich) lese meine E-Mails.", en: "I drink a coffee in the morning and read my emails." },
            { de: "Die Arbeit ist manchmal stressig, aber das Team ist sehr nett.", en: "The work is sometimes stressful, but the team is very nice." }
          ]
        },
        {
          title: "2. Artikel im Dativ (Dative Case Articles)",
          rule: "In the Dativ case, masculine and neuter articles change to 'dem / einem / keinem', feminine changes to 'der / einer / keiner', and plural changes to 'den / – / keinen' PLUS the noun itself adds an '-n' in the plural!",
          pattern: "Maskulin (der) → dem / einem || Neutrum (das) → dem / einem || Feminin (die) → der / einer || Plural (die) → den + -n",
          examples: [
            { de: "Ich spreche heute mit dem Chef (m) und mit der Chefin (f).", en: "I am speaking today with the male boss and with the female boss." },
            { de: "Er telefoniert jeden Tag mit den Kunden (Plural + -n).", en: "He talks on the phone every day with the customers." }
          ]
        },
        {
          title: "3. Präposition 'mit' + Dativ ('with / by means of' + Dative)",
          rule: "The preposition 'mit' ALWAYS takes the Dativ case—both for people ('with someone') and for means of transport ('by bus/train/car').",
          pattern: "mit + Dativ: mit dem Bus / mit dem Auto / mit der U-Bahn / mit einem Kollegen",
          examples: [
            { de: "Ich fahre jeden Morgen mit der U-Bahn oder mit dem Bus zur Arbeit.", en: "I travel to work every morning by subway or by bus." },
            { de: "Gehst du heute mit einer Kollegin in die Mensa?", en: "Are you going to the cafeteria today with a colleague?" }
          ]
        },
        {
          title: "4. Ortsangaben: Präpositionen mit Dativ — Wo? (Static Location Prepositions)",
          rule: "When answering 'Wo?' (Where is something located?), spatial prepositions (in, an, auf, neben, unter, über, vor, hinter, zwischen, bei) take the Dativ case. Note contractions: in + dem = im, an + dem = am, bei + dem = beim.",
          pattern: "Wo? + Dativ (dem/der/den -n): im Büro (in dem), am Fenster (an dem), auf dem Tisch, neben der Tür",
          examples: [
            { de: "Wo ist der Drucker? – Er steht im Büro neben dem Schrank.", en: "Where is the printer? – It is standing in the office next to the cabinet." },
            { de: "Die Rechnung liegt auf dem Schreibtisch unter den Büchern.", en: "The invoice is lying on the desk under the books." }
          ]
        }
      ],
      situations: [
        "Describe where your laptop, printer, and coffee cup are on your desk using 'auf/neben/vor + Dativ'.",
        "Connect two thoughts about your workday using 'aber' or 'und'.",
        "Say how you travel to work or university using 'mit dem / mit der...'."
      ]
    },
    {
      id: "kap-8",
      number: 8,
      title: "Fit und gesund",
      theme: "Körperteile, Krankheiten, beim Arzt, Medikamente & Gesundheitstipps",
      grammarFocus: "Imperativ mit du, ihr und Sie, Imperativsätze, Modalverben sollen, müssen, (nicht) dürfen",
      sentenceTip: "Use 'sollen' to repeat a doctor's advice: 'Der Arzt sagt, ich soll viel Wasser trinken und im Bett bleiben.'",
      topicsLearned: [
        "Aufforderungen verstehen und ausdrücken — Understand and give instructions or exercise commands",
        "persönliche Angaben machen — Give personal physical details (height, weight, health habits)",
        "Körperteile nennen — Name parts of the human body and say what hurts (Mein Kopf tut weh)",
        "Anweisungen wiedergeben — Report a doctor's instructions using 'sollen'",
        "Gespräche beim Arzt führen — Conduct a conversation at the doctor's office or pharmacy",
        "Anweisungen und Gesundheitstipps verstehen und geben — Give and understand health tips and advice"
      ],
      vocabThemes: [
        "Körperteile (Parts of the body: der Kopf, der Rücken, das Bein, die Hand...)",
        "Krankheiten & Beschwerden (Illnesses & Symptoms: Fieber, Husten, Schmerzen)",
        "Medikamente & Therapie (Medicines: die Tablette, die Salbe, der Saft)",
        "Berufe im Krankenhaus & beim Arzt (Medical professions)"
      ],
      grammarTopics: [
        {
          title: "1. Imperativ mit 'du', 'ihr' und 'Sie' (Commands & Advice Forms)",
          rule: "Use the Imperativ for requests, advice, and instructions: 1) For 'du', drop '-st' and the pronoun 'du' (verbs with e→i/ie keep the vowel change: Lies! Nimm! Gib!, but a→ä does NOT take an umlaut: Fahr! Schlaf!). 2) For 'ihr', use the 'ihr' verb form without the pronoun (Geht! Macht!). 3) For 'Sie', use Verb + Sie (Gehen Sie!).",
          pattern: "du: Geh! / Mach! / Nimm! / Sei! || ihr: Geht! / Macht! / Nehmt! / Seid! || Sie: Gehen Sie! / Machen Sie! / Seien Sie!",
          examples: [
            { de: "Trink viel Tee und bleib heute im Bett! (du)", en: "Drink lots of tea and stay in bed today!" },
            { de: "Nehmen Sie die Tabletten dreimal täglich vor dem Essen! (Sie)", en: "Take the pills three times a day before meals!" },
            { de: "Macht bitte eine Pause und geht an die frische Luft! (ihr)", en: "Please take a break and go out into the fresh air!" }
          ]
        },
        {
          title: "2. Imperativsätze (Sentence Structure in Imperative Sentences)",
          rule: "In all imperative sentences, the conjugated verb stands in Position 1. With separable verbs, the prefix still goes to the very end of the sentence.",
          pattern: "[Position 1: Imperativ-Verb] + (Sie) + [Middle] + [Separable Prefix / End]!",
          examples: [
            { de: "Steh bitte langsam auf und hol tief Luft!", en: "Please stand up slowly and take a deep breath!" },
            { de: "Rufen Sie sofort den Arzt an!", en: "Call the doctor immediately!" }
          ]
        },
        {
          title: "3. Modalverben: sollen, müssen, (nicht) dürfen (Obligation, Advice & Permission)",
          rule: "'sollen' expresses a recommendation, duty, or someone else's instruction (e.g. the doctor said so). 'dürfen' expresses permission ('may / be allowed to'); 'nicht dürfen' means 'must not / not allowed to'.",
          pattern: "sollen: ich soll, du sollst, er/sie soll, wir sollen || dürfen: ich darf, du darfst, er/sie darf, wir dürfen, ihr dürft",
          examples: [
            { de: "Der Arzt sagt, ich soll viel schlafen und keinen Sport machen.", en: "The doctor says I am supposed to sleep a lot and not do any sports." },
            { de: "Hier darf man nicht rauchen.", en: "One is not allowed to smoke here." },
            { de: "Darf ich heute schon wieder arbeiten? – Nein, Sie müssen noch zu Hause bleiben.", en: "May I work again today? – No, you still have to stay at home." }
          ]
        }
      ],
      situations: [
        "Tell the doctor what hurts ('Mein Kopf / Rücken tut weh') and ask what you should do.",
        "Give health advice to a sick friend using the Imperativ ('Trink...!', 'Nimm...!') and 'Du sollst...'",
        "Explain what the doctor told you you are not allowed to do ('Ich darf nicht...')."
      ]
    },
    {
      id: "kap-9",
      number: 9,
      title: "Meine Wohnung",
      theme: "Zimmer, Möbel & Geräte, Farben, Wohnformen & Wohnungssuche",
      grammarFocus: "sein + Adjektiv, Präposition in + Akkusativ (ins), Wechselpräpositionen mit Dativ (Wo?) und Akkusativ (Wohin?)",
      sentenceTip: "Location (Wo?) uses Dativ ('auf dem Tisch'), Direction/Movement (Wohin?) uses Akkusativ ('auf den Tisch').",
      topicsLearned: [
        "Wohnungsanzeigen verstehen — Read and understand apartment rental advertisements (m², KM, WM, Zi.)",
        "eine Wohnung beschreiben — Describe an apartment, its rooms, size, and rent",
        "die Wohnungseinrichtung planen — Plan where to put furniture in an apartment (Wohin? + Akkusativ)",
        "eine Einladung beantworten — Reply to a housewarming invitation",
        "über eine Wohnungseinrichtung sprechen und Ortsangaben machen — Talk about interior furnishings and where things are",
        "Gefallen und Missfallen ausdrücken — Express what you like and dislike about a room or home",
        "Farben nennen und über Wohnformen sprechen — Name colors and discuss different ways of living",
        "einen Text über eine Wohnung schreiben — Write a descriptive text about your home"
      ],
      vocabThemes: [
        "Zimmer & Teile des Hauses (Rooms: die Küche, das Bad, das Wohnzimmer, der Balkon)",
        "Möbel und Geräte (Furniture & Appliances: das Sofa, der Schrank, der Kühlschrank)",
        "Farben & Adjektive (Colors & Descriptive adjectives: hell, dunkel, groß, ruhig)",
        "Wohnformen & Wohnungsanzeigen (Housing types & Real estate abbreviations)"
      ],
      grammarTopics: [
        {
          title: "1. 'sein' + Adjektiv & 'nicht' + Adjektiv (Describing Apartments & Furniture)",
          rule: "Use 'sein' + adjective to describe rooms and furniture. Negate an adjective by placing 'nicht' directly in front of the adjective (nicht groß, nicht teuer).",
          pattern: "[Das Zimmer / Die Wohnung] + ist / sind + (sehr / zu / nicht) + [Adjektiv].",
          examples: [
            { de: "Die Wohnung ist hell und ruhig, aber das Bad ist leider sehr klein.", en: "The apartment is bright and quiet, but the bathroom is unfortunately very small." },
            { de: "Das Sofa ist nicht teuer, es ist sehr günstig.", en: "The sofa is not expensive, it is very affordable." }
          ]
        },
        {
          title: "2. Präposition 'in' + Akkusativ (Direction into a Room: in / ins)",
          rule: "When moving or placing something INTO a room (answering 'Wohin?'), 'in' takes the Akkusativ case. Note the contraction: in + das = ins.",
          pattern: "Wohin? → in + Akkusativ: in den Flur (m) | ins (in das) Wohnzimmer (n) | in die Küche (f)",
          examples: [
            { de: "Wohin kommt das Sofa? – Das Sofa kommt ins Wohnzimmer.", en: "Where does the sofa go? – The sofa goes into the living room." },
            { de: "Wir stellen den Kühlschrank in die Küche und das Regal in den Flur.", en: "We are putting the fridge into the kitchen and the shelf into the hallway." }
          ]
        },
        {
          title: "3. Wechselpräpositionen mit Dativ (Wo?) und Akkusativ (Wohin?) (Two-Way Prepositions)",
          rule: "The 9 two-way prepositions (in, an, auf, neben, unter, über, vor, hinter, zwischen) take DATIV when describing a static location ('Wo?' — where something is) and AKKUSATIV when describing movement/direction to a destination ('Wohin?' — where something is going).",
          pattern: "Wo? (Location: stehen, liegen, hängen, sein) → DATIV (dem, der, den -n) || Wohin? (Action: stellen, legen, hängen, gehen) → AKKUSATIV (den, das, die)",
          examples: [
            { de: "Wohin stellst du die Lampe? – Ich stelle sie neben das Sofa (Akkusativ).", en: "Where are you putting the lamp? – I am putting it next to the sofa." },
            { de: "Wo steht die Lampe jetzt? – Sie steht neben dem Sofa (Dativ).", en: "Where is the lamp standing now? – It is standing next to the sofa." },
            { de: "Ich hänge das Bild an die Wand (Akk.). Jetzt hängt das Bild an der Wand (Dat.).", en: "I hang the picture on the wall. Now the picture is hanging on the wall." }
          ]
        }
      ],
      situations: [
        "Describe your favorite room and where the table, bed, or lamp is located (Wo? + Dativ).",
        "Say where you are putting a new chair or picture in your apartment (Wohin? + Akkusativ).",
        "Explain what you like about your apartment and how many rooms it has."
      ]
    },
    {
      id: "kap-10",
      number: 10,
      title: "Studium und Beruf",
      theme: "Berufe & Jobs, Arbeitsorte, Studium, Bewerbungen & über Vergangenes sprechen",
      grammarFocus: "Perfekt: Satzklammer, Partizip II (regelmäßige ge-...-t, unregelmäßige ge-...-en, Verben auf -ieren), Perfekt mit haben und sein",
      sentenceTip: "In Perfekt, put 'haben' or 'sein' in Position 2 and the Partizip II at the very end: 'Ich habe gestern lange gearbeitet.'",
      topicsLearned: [
        "einen Tagesablauf beschreiben — Describe a full day's routine at university or work",
        "über Vergangenes sprechen — Talk about past events and experiences using the Perfekt tense",
        "Aussagen über die Jobsuche verstehen — Understand people talking about job hunting",
        "von einem Tag berichten — Report what happened during your day from morning to evening",
        "telefonieren und nachfragen — Make professional phone calls and ask follow-up questions about a job",
        "über Jobs, Studium und Bewerbungen sprechen — Discuss part-time jobs, university studies, and applications"
      ],
      vocabThemes: [
        "Berufe und Jobs (Professions & Part-time jobs)",
        "Arbeitsorte & Abteilungen (Workplaces & Departments)",
        "Studium & Universität (University studies)",
        "Bewerbung & Lebenslauf (Job applications & CV)"
      ],
      grammarTopics: [
        {
          title: "1. Perfekt: Satzklammer (Conversational Past Tense Bracket)",
          rule: "To talk about the past in spoken German and everyday messages, use the Perfekt tense. It forms a sentence bracket (Satzklammer): the conjugated helper verb ('haben' or 'sein') stands in Position 2, and the Partizip II goes to the VERY END of the sentence.",
          pattern: "[Subject] + [Pos 2: haben / sein] + [Middle Info] + [Sentence End: Partizip II].",
          examples: [
            { de: "Ich habe gestern den ganzen Tag für die Prüfung gelernt.", en: "I studied the whole day yesterday for the exam." },
            { de: "Was hast du am Wochenende gemacht?", en: "What did you do on the weekend?" }
          ]
        },
        {
          title: "2. Partizip II: regelmäßige, unregelmäßige Verben & Verben auf '-ieren'",
          rule: "1) Regular verbs form the Partizip II with 'ge-' + stem + '-(e)t' (machen → gemacht, arbeiten → gearbeitet). 2) Irregular verbs end in '-en' and often change their stem vowel (schreiben → geschrieben, trinken → getrunken, lesen → gelesen). 3) Verbs ending in '-ieren' take '-t' at the end but NO 'ge-' at the start (studieren → studiert, telefonieren → telefoniert).",
          pattern: "Regelmäßig: ge- + Stamm + -(e)t (gelernt) || Unregelmäßig: ge- + Stamm + -en (gesprochen) || -ieren: Stamm + -t OHNE ge- (studiert)",
          examples: [
            { de: "Er hat in München Informatik studiert und viele E-Mails geschrieben.", en: "He studied computer science in Munich and wrote many emails." },
            { de: "Wir haben mit dem Chef telefoniert und über das Projekt gesprochen.", en: "We talked on the phone with the boss and spoke about the project." }
          ]
        },
        {
          title: "3. Perfekt mit 'haben' vs. 'sein' (Choosing the Helper Verb)",
          rule: "Most verbs form the Perfekt with 'haben' (especially all verbs with an Akkusativ object). Use 'sein' (ich bin, du bist, er/sie ist...) for verbs showing movement from A to B (gehen → ist gegangen, fahren → ist gefahren, fliegen → ist geflogen, kommen → ist gekommen), change of state (aufwachen, einschlafen), or the verbs 'bleiben' (ist geblieben) and 'passieren' (ist passiert).",
          pattern: "mit haben: hat gemacht, hat gegessen, hat gearbeitet || mit sein (Bewegung/Zustand): ist gegangen, ist gefahren, ist gekommen, ist geblieben",
          examples: [
            { de: "Ich bin um 8 Uhr ins Büro gefahren und bin bis 18 Uhr geblieben.", en: "I drove to the office at 8 o'clock and stayed until 6 p.m." },
            { de: "Zu Mittag bin ich in die Kantine gegangen und habe einen Salat gegessen.", en: "At lunch I went to the canteen and ate a salad." }
          ]
        }
      ],
      situations: [
        "Talk about what you studied or worked on yesterday using the Perfekt tense.",
        "Report where you went last weekend using Perfekt with 'sein' ('Ich bin ... gefahren/gegangen').",
        "Ask someone about their job or university studies."
      ]
    },
    {
      id: "kap-11",
      number: 11,
      title: "Die Jacke gefällt mir!",
      theme: "Kleidung, im Kaufhaus, Einkaufen, Komplimente & Berlin",
      grammarFocus: "Welcher?/dieser (m/n/f/pl), Partizip II: trennbare & nicht trennbare Verben, Personalpronomen im Dativ (mir, dir, ihm, ihr...), Verben mit Dativ (gefallen, passen, stehen, gehören)",
      sentenceTip: "Verbs like 'gefallen', 'passen', 'stehen', 'helfen' ALWAYS take Dativ: 'Die Jacke gefällt mir sehr gut.'",
      topicsLearned: [
        "über Kleidung sprechen — Talk about clothes, sizes, and styles",
        "Komplimente verstehen und machen — Give and understand compliments about outfits (Das steht dir super!)",
        "über Vergangenes berichten — Report past shopping trips and experiences using separable/inseparable Perfekt",
        "Gespräche beim Kleiderkauf führen — Hold conversations with sales staff when buying clothes",
        "sich im Kaufhaus orientieren — Find your way around floors and departments in a department store (im Erdgeschoss, im ersten Stock)",
        "nach Auskunft fragen und antworten — Ask for and give information in a store",
        "Informationen über Berlin verstehen und recherchieren — Read about shopping and sights in Berlin"
      ],
      vocabThemes: [
        "Kleidung & Accessoires (Clothing: die Jacke, die Hose, das Hemd, der Mantel, die Schuhe)",
        "Im Kaufhaus & Stockwerke (Department store floors & sections)",
        "Geschäfte & Einkaufen (Shops, trying on clothes & sizes)"
      ],
      grammarTopics: [
        {
          title: "1. Fragewort 'Welcher?' & Demonstrativartikel 'dieser' (Which one? / This one)",
          rule: "'Welcher?' (Which?) and 'dieser' (this/these) take the exact same endings as the definite article (der → -er, das → -es, die → -e, den → -en, dem → -em).",
          pattern: "Nom: welcher / dieser (m), welches / dieses (n), welche / diese (f & pl) || Akk (m): welchen / diesen",
          examples: [
            { de: "Welche Jacke gefällt dir? – Diese Jacke hier gefällt mir sehr gut.", en: "Which jacket do you like? – I like this jacket here very much." },
            { de: "Welchen Pullover (Akk. m) nimmst du? – Ich nehme diesen Pullover.", en: "Which sweater are you taking? – I am taking this sweater." }
          ]
        },
        {
          title: "2. Partizip II: trennbare und nicht trennbare Verben (Separable vs. Inseparable Past Participles)",
          rule: "1) Separable verbs put '-ge-' BETWEEN the prefix and the stem (einkaufen → eingekauft, anrufen → angerufen, mitnehmen → mitgenommen, fernsehen → ferngesehen). 2) Inseparable verbs with prefixes be-, emp-, ent-, er-, ge-, في-, ver-, zer- take NO 'ge-' at all (bezahlen → bezahlt, gefallen → gefallen, verstehen → verstanden, empfehlen → empfohlen).",
          pattern: "Trennbar: [Präfix] + ge + [Stamm] + t/en (eingekauft, angerufen) || Untrennbar (be-, ver-, er-, ge-, emp-): OHNE ge- (bezahlt, verstanden)",
          examples: [
            { de: "Ich habe gestern im Kaufhaus eingekauft und ein Kleid anprobiert.", en: "I went shopping at the department store yesterday and tried on a dress." },
            { de: "Er hat die Schuhe an der Kasse bezahlt.", en: "He paid for the shoes at the checkout." }
          ]
        },
        {
          title: "3. Personalpronomen im Dativ (mir, dir, ihm, ihr, uns, euch, ihnen/Ihnen)",
          rule: "When a personal pronoun is the indirect object or follows a Dativ verb/preposition, use the Dativ pronoun forms.",
          pattern: "ich → mir | du → dir | er → ihm | es → ihm | sie → ihr | wir → uns | ihr → euch | sie/Sie → ihnen/Ihnen",
          examples: [
            { de: "Wie gefällt dir das Hemd? – Es gefällt mir super!", en: "How do you like the shirt? – I like it a lot!" },
            { de: "Kann ich Ihnen helfen? – Ja, bitte helfen Sie mir.", en: "Can I help you (formal)? – Yes, please help me." }
          ]
        },
        {
          title: "4. Verben mit Dativ (gefallen, gehören, passen, stehen, helfen, danken)",
          rule: "Certain important verbs always take a Dativ person object ('Wem?') while the item of clothing is the grammatical subject: gefallen (to please/like), passen (to fit in size), stehen (to suit/look good on), gehören (to belong to), helfen (to help), danken (to thank).",
          pattern: "[Die Jacke / Die Schuhe (Subject)] + gefällt/gefallen, passt/passen, steht/stehen + [mir / dir / ihm / ihr (Dativ)]",
          examples: [
            { de: "Die Hose passt mir leider nicht, sie ist zu klein.", en: "Unfortunately the trousers don't fit me, they are too small." },
            { de: "Die Farbe steht dir wirklich sehr gut!", en: "The color really suits you very well!" },
            { de: "Wem gehört die Tasche? – Sie gehört ihr.", en: "Who does the bag belong to? – It belongs to her." }
          ]
        }
      ],
      situations: [
        "In a clothing store: say which jacket or shoes you like ('Dieser Mantel gefällt mir') and ask if they fit you.",
        "Give a compliment to a friend about their shirt or sweater using 'stehen' or 'gefallen'.",
        "Talk about what you bought and paid for on your last shopping trip (eingekauft, anprobiert, bezahlt)."
      ]
    },
    {
      id: "kap-12",
      number: 12,
      title: "Ab in den Urlaub!",
      theme: "Urlaubsarten & Reiseziele, Sehenswürdigkeiten, Himmelsrichtungen, Wetter & Postkarten",
      grammarFocus: "Pronomen 'man', Sätze verbinden: denn (Pos. 0), Fragewörter: Wer? Wen? Wem? Was?, Zeitangaben mit Dativ (vor, nach, in, seit, ab, bei)",
      sentenceTip: "After 'denn' (because), the verb stays in Position 2: 'Ich fahre ans Meer, denn ich schwimme gern.'",
      topicsLearned: [
        "Vorschläge für eine Stadttour machen — Make suggestions for a sightseeing tour",
        "eine Wegbeschreibung verstehen und einen Weg beschreiben — Understand and give detailed outdoor directions",
        "eine Postkarte schreiben — Write a vacation postcard to friends or family",
        "Reiseberichte verstehen und schreiben — Read and write travel reports about a trip",
        "Fragen zu einer Reise stellen und beantworten — Ask and answer questions about travel experiences",
        "das Wetter beschreiben — Describe the weather in the present and past (Es regnet, die Sonne scheint)",
        "über Reiseziele sprechen und schreiben — Talk and write about vacation destinations (ans Meer, in die Berge, an den See)"
      ],
      vocabThemes: [
        "Urlaubsarten und Reiseziele (Types of vacation & Destinations)",
        "Sehenswürdigkeiten & Stadttour (Sightseeing & City tours)",
        "Himmelsrichtungen (Compass directions: im Norden, Süden, Osten, Westen)",
        "Wetter (Weather: die Sonne, der Regen, der Schnee, der Wind, Grad)"
      ],
      grammarTopics: [
        {
          title: "1. Das unpersönliche Pronomen 'man' ('one / you / people in general')",
          rule: "Use 'man' (always lowercase, only Nominativ) to talk about people in general ('one / you / they'). The verb is ALWAYS conjugated in the 3rd person singular (like 'er/sie/es').",
          pattern: "man + [3. Person Singular Verb (er/sie/es Form)]: man kann, man sieht, man macht, man darf",
          examples: [
            { de: "Hier kann man sehr gut wandern und im See schwimmen.", en: "Here one (you) can hike very well and swim in the lake." },
            { de: "Vom Turm hat man einen tollen Blick über die Stadt.", en: "From the tower you have a great view over the city." }
          ]
        },
        {
          title: "2. Sätze verbinden: 'denn' (Giving a Reason — Position 0)",
          rule: "The conjunction 'denn' means 'because / for' and gives a reason (Grund). Like 'und/oder/aber', 'denn' stands in Position 0, so the clause after it keeps normal main-clause word order (Verb in Position 2).",
          pattern: "[Main Clause], + [Pos 0: denn] + [Pos 1: Subject] + [Pos 2: Verb] + [Rest].",
          examples: [
            { de: "Wir bleiben heute im Hotel, denn es regnet stark.", en: "We are staying in the hotel today, because it is raining heavily." },
            { de: "Ich fahre gern in die Berge, denn ich liebe die Natur.", en: "I like traveling to the mountains, because I love nature." }
          ]
        },
        {
          title: "3. Fragewörter für Personen & Sachen: Wer? Wen? Wem? Was? (Case Question Words)",
          rule: "For people, the question word changes according to the case: 'Wer?' (Who? — Nominativ subject), 'Wen?' (Whom? — Akkusativ object), 'Wem?' (To whom? — Dativ object). For things, both Nominativ and Akkusativ use 'Was?'.",
          pattern: "Personen: Nominativ → Wer? | Akkusativ → Wen? | Dativ → Wem? || Sachen: Nominativ & Akkusativ → Was?",
          examples: [
            { de: "Wer kommt mit in den Urlaub? (Nom) / Wen triffst du in Berlin? (Akk)", en: "Who is coming along on vacation? / Whom are you meeting in Berlin?" },
            { de: "Wem schreibst du eine Postkarte? (Dat) – Meiner Oma.", en: "To whom are you writing a postcard? – To my grandma." }
          ]
        },
        {
          title: "4. Zeitangaben: Präpositionen mit Dativ (vor, nach, in, seit, ab, bei)",
          rule: "The temporal prepositions 'vor' (before / ago), 'nach' (after), 'in' (in [future time]), 'seit' (since / for [ongoing]), 'ab' (starting from), and 'bei' (during/in) take the DATIV case.",
          pattern: "vor / nach / in / seit / ab / bei + Dativ (dem / einem / der / einer / den + -n)",
          examples: [
            { de: "Vor dem Frühstück gehe ich eine Stunde am Strand joggen.", en: "Before breakfast I go jogging on the beach for an hour." },
            { de: "Nach der Stadttour trinken wir einen Kaffee, und in einer Woche fahren wir zurück.", en: "After the city tour we drink a coffee, and in a week we travel back." },
            { de: "Bei schönem Wetter machen wir einen Ausflug mit dem Schiff.", en: "In nice weather we take an excursion by boat." }
          ]
        }
      ],
      situations: [
        "Describe your last vacation: where you traveled, how the weather was, and what you did.",
        "Write a short postcard from a trip using 'Das Wetter ist...' and 'Gestern haben wir / sind wir...'.",
        "Explain why you like a specific vacation destination using 'denn'."
      ]
    }
  ],
  A2: [
    {
      id: "kap-1",
      number: 1,
      title: "Und was machst du?",
      theme: "Freizeit, Tätigkeiten, im Restaurant, über Vergangenes berichten & begründen",
      grammarFocus: "Genitiv: Name + -s, Wiederholung: Perfekt (haben / sein), Nebensatz mit 'weil' (Verb am Ende)",
      sentenceTip: "In a 'weil' clause, kick the conjugated verb to the very end: 'Ben lädt die Freunde ein, weil er im Urlaub war.'",
      topicsLearned: [
        "sich vorstellen — Introduce yourself and talk about your background, work, and interests",
        "über Vergangenes berichten — Report past events and experiences using the Perfekt tense",
        "sich verabreden — Make plans and arrange to meet up with friends",
        "etwas begründen — Give reasons and explanations using 'weil'",
        "Informationen auf einer Homepage verstehen — Understand key details on a website or homepage",
        "ein Restaurant vorstellen — Present and describe a special restaurant concept (e.g. Essen ohne Licht)"
      ],
      vocabThemes: [
        "Freizeit (Free time & Leisure activities)",
        "Tätigkeiten (Everyday & Professional activities)",
        "im Restaurant (At the restaurant: ordering, courses & dining)"
      ],
      grammarTopics: [
        {
          title: "1. Genitiv bei Eigennamen: Name + '-s' (Possessive -s with Names)",
          rule: "With proper names of people, add '-s' directly to the name (without an apostrophe in German!) to show possession. Only if a name already ends in -s, -ß, -x, or -z do you add an apostrophe (Max' Fahrrad).",
          pattern: "[Name + -s] + [Noun]: Annas Bruder, Bens Urlaub, Sofias Restaurant, Max' Auto",
          examples: [
            { de: "Das ist Annas Schwester und das ist Felix' neues Fahrrad.", en: "That is Anna's sister and that is Felix's new bicycle." },
            { de: "Bens Fotos aus dem Urlaub sind wirklich toll.", en: "Ben's photos from the vacation are really great." }
          ]
        },
        {
          title: "2. Wiederholung: Perfekt mit 'haben' und 'sein' (Conversational Past Review)",
          rule: "Use 'sein' for movement from A to B (ist gefahren, ist geflogen, ist gegangen), change of state (ist eingeschlafen), and 'sein/bleiben/passieren'. Use 'haben' for all transitive verbs (+ Akkusativ), reflexive verbs, and most other verbs.",
          pattern: "[Subject] + [Pos 2: haben / sein] + [Middle] + [End: Partizip II] (ge-...-t / ge-...-en / -iert).",
          examples: [
            { de: "Am Wochenende sind wir ans Meer gefahren und haben im Restaurant Fisch gegessen.", en: "On the weekend we drove to the sea and ate fish at a restaurant." },
            { de: "Sie hat ihre Ausbildung erfolgreich abgeschlossen.", en: "She completed her apprenticeship successfully." }
          ]
        },
        {
          title: "3. Nebensatz mit 'weil' (Subordinate Clause of Reason — Verb at the End)",
          rule: "A subordinate clause (Nebensatz) starting with 'weil' (because) answers 'Warum?'. After the comma and 'weil', comes the subject and other details, and the conjugated verb stands at the VERY END of the clause.",
          pattern: "[Hauptsatz], weil + [Subjekt] + [Angaben] + [konjugiertes Verb am Satzende].",
          examples: [
            { de: "Ben lädt die Freunde ein, weil er lange im Urlaub war.", en: "Ben invites his friends over because he was on vacation for a long time." },
            { de: "Felix kommt gern, weil er Ben lang nicht gesehen hat.", en: "Felix is happy to come because he hasn't seen Ben for a long time." }
          ]
        }
      ],
      situations: [
        "Introduce yourself and tell a partner two things you did last month using Perfekt.",
        "Explain WHY you are learning German or why you like your favorite restaurant using 'weil'.",
        "Arrange to meet a friend at a restaurant this weekend."
      ]
    },
    {
      id: "kap-2",
      number: 2,
      title: "Nach der Schulzeit",
      theme: "Erfahrungen in der Schulzeit, Schulfächer, Schultypen & Meinungen äußern",
      grammarFocus: "Modalverben im Präteritum (konnte, musste, wollte, durfte, sollte), Wiederholung: Artikel, Possessivartikel im Dativ",
      sentenceTip: "Use Modal Präteritum (no umlaut!) for past obligations and permissions: 'In der Schule musste ich viel lernen und durfte kein Handy benutzen.'",
      topicsLearned: [
        "Berichte aus der Schulzeit verstehen — Read and understand personal reports from school days",
        "über die Schulzeit sprechen — Talk about your own school time, favorite subjects, and teachers",
        "Kommentare schreiben — Write short comments about school memories and rules",
        "eine Radiosendung verstehen — Understand a radio broadcast about experiences after finishing school",
        "über Erfahrungen sprechen — Share personal experiences after graduation (Ausbildung, Studium, Au-pair, Reisen)",
        "die eigene Meinung sagen und etwas präsentieren — Express your opinion and give a short presentation",
        "Informationen über ein Schulsystem verstehen und über Schultypen sprechen — Understand the German school system and discuss school types"
      ],
      vocabThemes: [
        "Erfahrungen in der Schulzeit (School memories, grades, exams & rules)",
        "Schulfächer (School subjects: Biologie, Chemie, Geografie, Mathe, Kunst...)",
        "Schultypen & Wege nach der Schule (Grundschule, Gymnasium, Realschule, Gesamtschule, Berufsschule)"
      ],
      grammarTopics: [
        {
          title: "1. Modalverben im Präteritum (konnte, musste, wollte, durfte, sollte, mochte)",
          rule: "When talking about abilities, obligations, wishes, or rules in the past, Germans almost always use the Präteritum of modal verbs (NEVER with an umlaut!). 'ich' and 'er/es/sie' share the exact same form ending in '-te'.",
          pattern: "ich/er konnte (could) | musste (had to) | wollte (wanted to) | durfte (was allowed to) | sollte (should) | mochte (liked)",
          examples: [
            { de: "Nach der Schulzeit wollte ich zuerst ins Ausland gehen, aber ich musste Geld verdienen.", en: "After school I wanted to go abroad first, but I had to earn money." },
            { de: "Durftet ihr im Unterricht das Handy benutzen? – Nein, das durften wir nicht.", en: "Were you allowed to use your phone in class? – No, we weren't allowed to." }
          ]
        },
        {
          title: "2. Wiederholung: Artikel im Nominativ, Akkusativ und Dativ",
          rule: "Review definite (der/das/die) and indefinite/negative articles (ein/kein) across Nominativ, Akkusativ, and Dativ so cases stay accurate with verbs and prepositions.",
          pattern: "Nom: der/ein, das/ein, die/eine | Akk: den/einen, das/ein, die/eine | Dat: dem/einem, dem/einem, der/einer, den + -n",
          examples: [
            { de: "Ich hatte einen netten Mathelehrer (Akk. m) und eine tolle Klassenlehrerin (Akk. f).", en: "I had a nice math teacher and a great homeroom teacher." }
          ]
        },
        {
          title: "3. Possessivartikel im Dativ (meinem, meiner, meinen + -n)",
          rule: "In the Dativ case (e.g., after 'mit, bei, nach, von, zu' or Dativ verbs like 'helfen'), possessive articles take '-em' for masculine/neuter, '-er' for feminine, and '-en' (+ noun '-n') for plural.",
          pattern: "Maskulin & Neutrum: meinem / deinem / seinem / ihrem || Feminin: meiner / deiner / ihrer || Plural: meinen / deinen + Nomen-n",
          examples: [
            { de: "Nach meiner Schulzeit habe ich ein Jahr bei meinem Onkel in Wien gewohnt.", en: "After my school days I lived for a year with my uncle in Vienna." },
            { de: "Ich spreche noch oft mit meinen alten Schulfreunden (Plural Dativ).", en: "I still speak often with my old school friends." }
          ]
        }
      ],
      situations: [
        "Talk about your favorite and least favorite subjects at school and what you had to do ('musste').",
        "Tell a partner what you wanted to become ('wollte') after finishing school.",
        "Explain how the school system works in your home country."
      ]
    },
    {
      id: "kap-3",
      number: 3,
      title: "Immer online?",
      theme: "Medien, Aktivitäten mit Medien, Film, Vergleiche & Meinungen",
      grammarFocus: "Adjektive: Komparativ und Superlativ, Vergleiche mit 'als' und 'wie', Nebensatz mit 'dass'",
      sentenceTip: "Use 'als' after a comparative ('schneller als') and 'wie' for equality ('genauso gut wie'). Put the verb at the end after 'dass'!",
      topicsLearned: [
        "über Vor- und Nachteile sprechen — Discuss advantages and disadvantages of digital media and online life",
        "Vergleiche formulieren — Formulate comparisons between devices, habits, and offers",
        "ein Interview machen — Conduct a short interview about media habits",
        "Meinungen in Texten verstehen und die eigene Meinung äußern — Read opinions in blogs/forums and express your own view",
        "über Filme sprechen und Filmbeschreibungen verstehen — Talk about movies and understand film synopses",
        "einen Film beschreiben sowie Kommentare verstehen und schreiben — Describe a movie and write viewer comments"
      ],
      vocabThemes: [
        "Medien & Geräte (Media, Internet, Tablet, E-Book-Reader, Apps)",
        "Aktivitäten mit Medien (chatten, bloggen, runterladen, anklicken, posten)",
        "Film & Kino (Actionfilm, Komödie, Schauspieler, Szene, Handlung)"
      ],
      grammarTopics: [
        {
          title: "1. Adjektive: Komparativ und Superlativ (Comparative & Superlative Forms)",
          rule: "Form the Komparativ with '-er' and the Superlativ with 'am ... -(e)sten'. Many short one-syllable adjectives add an Umlaut (alt → älter → am ältesten, groß → größer → am größten, jung → jünger). Memorize key irregular forms: gut → besser → am besten, viel → mehr → am meisten, gern → lieber → am liebsten, hoch → höher → am höchsten, nah → näher → am nächsten.",
          pattern: "billig → billiger → am billigsten || alt → älter → am ältesten || gut → besser → am besten || gern → lieber → am liebsten",
          examples: [
            { de: "Das Tablet ist leichter als mein Laptop, aber mein Handy ist am leichtesten.", en: "The tablet is lighter than my laptop, but my phone is the lightest." },
            { de: "Ich lese gern E-Books, aber noch lieber lese ich gedruckte Bücher.", en: "I like reading e-books, but I prefer reading printed books." }
          ]
        },
        {
          title: "2. Vergleiche mit 'als' und '(genau)so ... wie' (Unequal vs. Equal Comparisons)",
          rule: "1) For an EQUAL quality, use '(genau)so + Grundform (Positiv) + wie' ('just as ... as'). 2) For an UNEQUAL difference, use 'Komparativ (-er) + als' ('more ... than'). Never mix 'mehr' with '-er'!",
          pattern: "Gleich (=): (genau)so / nicht so + [Adjektiv] + wie || Ungleich (≠): [Komparativ -er] + als",
          examples: [
            { de: "Ein Laptop kostet mehr als ein Tablet.", en: "A laptop costs more than a tablet." },
            { de: "Der zweite Teil des Films war genauso spannend wie der erste Teil.", en: "The second part of the movie was just as exciting as the first part." }
          ]
        },
        {
          title: "3. Nebensatz mit 'dass' (Opinion & Statement Clauses — Verb at the End)",
          rule: "After starters expressing opinions, thoughts, or facts (Ich finde / meine / glaube / denke / weiß / hoffe, dass ... / Es ist wichtig / schade, dass ...), 'dass' introduces a Nebensatz and sends the conjugated verb to the VERY END.",
          pattern: "Ich finde / Es ist toll, dass + [Subjekt] + [Angaben] + [konjugiertes Verb am Ende].",
          examples: [
            { de: "Ich finde, dass wir alle viel zu viel Zeit am Smartphone verbringen.", en: "I think that we all spend way too much time on our smartphones." },
            { de: "Ihm hat gefallen, dass der Film sehr realistisch und lustig war.", en: "He liked that the movie was very realistic and funny." }
          ]
        }
      ],
      situations: [
        "Express your opinion on being 'always online' starting with 'Ich finde, dass...' or 'Es ist praktisch, dass...'.",
        "Compare watching films at the cinema vs. streaming at home using 'besser als' and 'genauso ... wie'.",
        "Describe your favorite movie and why people should watch it."
      ]
    },
    {
      id: "kap-4",
      number: 4,
      title: "Große und kleine Gefühle",
      theme: "Feste, Ereignisse, Gefühle, Glückwünsche, Dank & Veranstaltungen",
      grammarFocus: "Nebensatz mit 'wenn', Reflexive Verben (sich freuen, sich ärgern, sich bedanken, sich ausruhen...)",
      sentenceTip: "When starting a sentence with 'Wenn ...', put the main clause verb right after the comma (Verb-Komma-Verb): 'Wenn ich Musik höre, habe ich gute Laune.'",
      topicsLearned: [
        "über Gefühle sprechen — Talk about joyful, sad, nervous, or annoying moments",
        "Glückwünsche ausdrücken und sich bedanken — Express congratulations and thank people warmly",
        "Freude oder Bedauern ausdrücken — Express happiness, excitement, sympathy, or regret",
        "über ein Ereignis / eine Veranstaltung sprechen — Talk about a special celebration, festival, or event",
        "Blogs verstehen und schreiben — Read and write personal blog entries about emotional experiences"
      ],
      vocabThemes: [
        "Feste & Ereignisse (Weddings, births, exams, anniversaries & parties)",
        "Gefühle (glücklich, traurig, aufgeregt, nervös, enttäuscht, stolz, wütend)",
        "Glückwünsche & Dank (Herzlichen Glückwunsch! Alles Gute! Vielen Dank!)",
        "Veranstaltungen (Festivals, concerts & regattas)"
      ],
      grammarTopics: [
        {
          title: "1. Nebensatz mit 'wenn' (Conditional & Temporal 'If / Whenever' Clauses)",
          rule: "'wenn' means 'if' or 'when(ever)' and sends its conjugated verb to the end of the Nebensatz. You can place the 'wenn' clause second OR first—if the 'wenn' clause comes FIRST, the main clause starts immediately with the conjugated verb right after the comma!",
          pattern: "1) [Hauptsatz], wenn + [Subjekt] + ... + [Verb]. || 2) Wenn + [Subjekt] + ... + [Verb 1], [Verb 2] + [Subjekt] + [Rest].",
          examples: [
            { de: "Wenn ich am Morgen schlechte Laune habe, trinke ich zuerst einen großen Kaffee.", en: "When(ever) I am in a bad mood in the morning, I first drink a big coffee." },
            { de: "Ich bin immer nervös, wenn ich vor vielen Leuten sprechen muss.", en: "I am always nervous when I have to speak in front of many people." }
          ]
        },
        {
          title: "2. Reflexive Verben (sich freuen, sich ärgern, sich bedanken, sich streiten...)",
          rule: "Reflexive verbs always use a reflexive pronoun referring back to the subject: ich → mich, du → dich, er/es/sie → sich, wir → uns, ihr → euch, sie/Sie → sich. Note: in 3rd person ('er/sie/es' and 'sie/Sie'), it is ALWAYS 'sich'!",
          pattern: "ich freue mich | du freust dich | er/es/sie freut sich | wir freuen uns | ihr freut euch | sie/Sie freuen sich",
          examples: [
            { de: "Ich bedanke mich herzlich bei dir für die schöne Einladung.", en: "I thank you warmly for the lovely invitation." },
            { de: "Warum ärgerst du dich? – Wir haben uns gestern leider gestritten.", en: "Why are you annoyed? – Unfortunately we argued yesterday." },
            { de: "Am Wochenende ruhe ich mich zu Hause aus.", en: "On the weekend I rest and relax at home." }
          ]
        }
      ],
      situations: [
        "Say what makes you happy or stressed using 'Wenn ..., freue/ärgere ich mich.'",
        "Congratulate a friend on passing their exam or getting married and express good wishes.",
        "Describe a memorable festival or celebration you attended."
      ]
    },
    {
      id: "kap-5",
      number: 5,
      title: "Leben in der Stadt",
      theme: "Stadt, Bewerbungsgespräch, Bank, Behörde & höfliche Bitten",
      grammarFocus: "Adjektive nach dem bestimmten Artikel, Präpositionen 'ohne' + Akkusativ und 'mit' + Dativ, Konjunktiv II: 'könnte' (höfliche Bitten)",
      sentenceTip: "Use 'Könnten Sie / Könntest du bitte...' for polite requests, and remember 'ohne + Akkusativ' vs. 'mit + Dativ'!",
      topicsLearned: [
        "ein Vorstellungsgespräch verstehen — Understand a job interview and talk about qualifications",
        "nach Dingen fragen — Ask for specific information and documents at counters/offices",
        "Gespräche bei Banken und Behörden verstehen — Understand and handle appointments at banks and registration offices (Amt/Behörde)",
        "höflich um etwas bitten — Make polite requests in everyday and formal situations using 'könnte'",
        "einer Stadt-Tour folgen und eine Stadt beschreiben — Follow a guided city tour and describe a city (e.g. Wien)"
      ],
      vocabThemes: [
        "Stadt & Sehenswürdigkeiten (City life, districts & tours)",
        "Bewerbungsgespräch (Job interviews, strengths & trial work)",
        "Bank & Finanzen (das Konto, der Betrag, die Bankkarte, abheben, überweisen)",
        "Behörde & Amt (das Formular, der Antrag, das Visum, die Anmeldung, der Beamte)"
      ],
      grammarTopics: [
        {
          title: "1. Adjektive nach dem bestimmten Artikel (Weak Adjective Declension: -e / -en)",
          rule: "After definite articles (der, das, die — and 'dieser/welcher/jeder'), there are ONLY TWO possible adjective endings: '-e' or '-en'! Use '-e' ONLY for Nominativ singular (der/das/die + -e) and Akkusativ neuter & feminine (das/die + -e). Everywhere else—Masculine Akkusativ ('den neuen'), ALL Dativ ('dem/der/den neuen'), and ALL Plurals ('die neuen')—the ending is ALWAYS '-en'!",
          pattern: "Nom Sg: der/das/die schön-e || Akk Sg: den schön-en (m!), das/die schön-e || Dativ (alle) & Plural (alle): IMMER -en!",
          examples: [
            { de: "Wo unterschreibe ich das neue Formular? – Hier unten auf der zweiten Seite (Dat. f).", en: "Where do I sign the new form? – Down here on the second page." },
            { de: "Ich nehme den schnellen Bus in die alte Innenstadt.", en: "I take the fast bus into the old city center." }
          ]
        },
        {
          title: "2. Präpositionen 'ohne' + Akkusativ und 'mit' + Dativ",
          rule: "'mit' (with) ALWAYS requires the Dativ case, while its opposite 'ohne' (without) ALWAYS requires the Akkusativ case (or zero article with general nouns: ohne Geld, ohne Termin).",
          pattern: "mit + Dativ (mit dem Ausweis, mit der Bankkarte) || ohne + Akkusativ (ohne den Pass, ohne einen Termin)",
          examples: [
            { de: "Ohne einen gültigen Ausweis (Akk.) können Sie kein Konto eröffnen.", en: "Without a valid ID you cannot open a bank account." },
            { de: "Kann ich hier mit meiner neuen Bankkarte (Dat.) bezahlen?", en: "Can I pay here with my new bank card?" }
          ]
        },
        {
          title: "3. Konjunktiv II: 'könnte' für höfliche Bitten (Polite Requests)",
          rule: "Use the Konjunktiv II of 'können' (ich könnte, du könntest, er/sie könnte, wir könnten, ihr könntet, sie/Sie könnten) + 'bitte' + Infinitiv at the end to formulate friendly, polite requests.",
          pattern: "Könnten Sie / Könntest du + (mir) + bitte + [Objekt] + [Infinitiv am Satzende]?",
          examples: [
            { de: "Könnten Sie mir bitte helfen und den Antrag kurz prüfen?", en: "Could you please help me and check the application briefly?" },
            { de: "Könntest du bitte das Fenster aufmachen?", en: "Could you please open the window?" }
          ]
        }
      ],
      situations: [
        "At a city registration office (Bürgeramt) or bank: ask politely what documents you need using 'Könnten Sie mir bitte sagen...'.",
        "Say what you never leave the house without using 'ohne + Akkusativ'.",
        "Describe your favorite city using definite articles + adjectives ('die alte Kirche', 'der große Markt')."
      ]
    },
    {
      id: "kap-6",
      number: 6,
      title: "Arbeitswelten",
      theme: "Tätigkeiten im Beruf, Bahnreisen, Veranstaltungen & Telefonieren",
      grammarFocus: "Adjektive nach dem unbestimmten Artikel (ein/kein/mein) & ohne Artikel im Plural, Verb 'werden'",
      sentenceTip: "After 'ein/kein/mein', the adjective shows the gender signal in Nom/Akk ('ein guter Job', 'ein gutes Angebot', 'eine gute Idee')!",
      topicsLearned: [
        "ein Gespräch am Fahrkartenschalter führen — Buy tickets, ask about connections/discounts, and handle travel dialogues at the station",
        "über Freizeitangebote sprechen und Texten Informationen entnehmen — Discuss cultural/leisure events and extract key info from texts",
        "Personen vorstellen, Berufswünsche äußern und über einen Traumberuf schreiben — Present people, express career wishes, and write about a dream job",
        "ein Telefongespräch vorbereiten und am Arbeitsplatz telefonieren — Prepare and conduct professional phone calls (connecting, leaving messages)",
        "Informationen aus einem Text weitergeben — Summarize and pass on information from an article"
      ],
      vocabThemes: [
        "Tätigkeiten im Beruf & moderne Arbeitswelt (Tasks at work, remote work, Betrieb, Kollegium)",
        "Bahnreisen & Fahrkartenschalter (ICE, Hin- und Rückfahrt, Sparpreis, reservieren, umsteigen)",
        "Veranstaltungen & Kulturprogramm (Abendprogramm, Konzert, Ausstellung)",
        "am Telefon (verbinden, ausrichten, zurückrufen, außer Haus sein)"
      ],
      grammarTopics: [
        {
          title: "1. Adjektive nach dem unbestimmten Artikel (ein, kein, mein — Mixed Declension)",
          rule: "Because 'ein' (m/n) has no gender ending of its own, the adjective MUST carry the gender signal: Maskulin Nom → '-er' (ein neuer Job), Neutrum Nom/Akk → '-es' (ein gutes Team), Feminin Nom/Akk → '-e' (eine feste Stelle). In Masculine Akkusativ ('einen neuen Job'), ALL Dativ ('einem/einer neuen...'), and after 'keine/meine' in Plural, use '-en'! Without an article in Plural, use '-e' (Nom/Akk: nette Kollegen) and '-en' (Dat: mit netten Kollegen).",
          pattern: "Nom: ein neu-er (m), ein neu-es (n), eine neu-e (f) || Akk: einen neu-en (m!), ein neu-es (n), eine neu-e (f) || Dativ & keine/meine Pl: -en || Pl ohne Art: neu-e",
          examples: [
            { de: "Sie hat einen interessanten Beruf (Akk. m) und arbeitet in einer großen Firma (Dat. f).", en: "She has an interesting profession and works in a large company." },
            { de: "Das ist ein super günstiges Angebot (Nom. n) für schnelle Züge (Pl. ohne Artikel).", en: "That is a super affordable offer for fast trains." }
          ]
        },
        {
          title: "2. Das Verb 'werden' (Change of State, Plans & Profession)",
          rule: "The full verb 'werden' means 'to become / get / turn'. It has an irregular vowel/consonant change in 'du wirst' and 'er/es/sie wird'. Use it for professions, ages, weather, feelings, and changes.",
          pattern: "ich werde | du wirst (!) | er/es/sie wird (!) | wir werden | ihr werdet | sie/Sie werden || Perfekt: ist geworden",
          examples: [
            { de: "Mein Sohn möchte später Pilot oder Ingenieur werden.", en: "My son wants to become a pilot or engineer later." },
            { de: "Nächste Woche wird meine Oma achtzig Jahre alt, und das Wetter wird endlich wärmer.", en: "Next week my grandma turns eighty years old, and the weather is finally getting warmer." }
          ]
        }
      ],
      situations: [
        "At the train ticket counter: book a return ticket to Munich with a seat reservation.",
        "Call an office, ask to speak to Ms. Mankel, and ask the receptionist to pass on a message ('Könnten Sie ihr bitte ausrichten...').",
        "Describe your dream job using indefinite articles + adjectives ('ein kreativer Beruf', 'ein nettes Team')."
      ]
    },
    {
      id: "kap-7",
      number: 7,
      title: "Ganz schön mobil",
      theme: "Öffentlicher Verkehr, Verkehr in der Stadt, Weg zur Arbeit & Zug-Geschichten",
      grammarFocus: "Indirekte Fragesätze: W-Fragen und Ja-/Nein-Fragen mit 'ob', Ortsangaben: Präpositionen (durch, am ... vorbei, gegenüber, entlang...)",
      sentenceTip: "Indirect questions send the conjugated verb to the end: 'Können Sie mir sagen, wann der Zug abfährt / ob der Platz frei ist?'",
      topicsLearned: [
        "Informationen erfragen — Politely ask for travel and city information using indirect questions",
        "eine Wegbeschreibung verstehen und geben — Understand and give precise route directions through a city",
        "über Vor- und Nachteile sprechen und die eigene Meinung sagen — Discuss pros and cons of different means of transport",
        "über den Weg zur Arbeit sprechen und eine Grafik beschreiben — Talk about commuting and describe charts/statistics",
        "kurze Geschichten über Erlebnisse beim Zugfahren verstehen und eine Geschichte schreiben — Read and write short stories about train journeys"
      ],
      vocabThemes: [
        "öffentlicher Verkehr (Public transport, Bordbistro, Kinderabteil, Anschluss, Abflug)",
        "Verkehr in der Stadt (Ampel, Kreuzung, Radweg, E-Bike, Leihrad, Stau, bremsen)",
        "Weg zur Arbeit / Pendeln (pendeln, die Strecke, die Entfernung)"
      ],
      grammarTopics: [
        {
          title: "1. Indirekte Fragesätze: W-Fragen und Ja-/Nein-Fragen mit 'ob' (Verb at the End)",
          rule: "Embed a question politely inside a starter like 'Können Sie mir sagen, ...?', 'Wissen Sie, ...?', 'Ich frage mich, ...'. 1) For W-questions, keep the W-word (wann, wo, warum, wohin, wie lange) and move the conjugated verb to the VERY END. 2) For Yes/No questions (no W-word), use the connector 'ob' ('whether / if') and move the conjugated verb to the VERY END.",
          pattern: "W-Frage: Wissen Sie, [warum / wann / wo] + [Subjekt] + ... + [Verb]? || Ja/Nein-Frage: Ich möchte wissen, ob + [Subjekt] + ... + [Verb].",
          examples: [
            { de: "Der Mann fragt, warum der Zug nicht weiterfährt.", en: "The man asks why the train isn't continuing." },
            { de: "Bine möchte wissen, ob es hier einen bestimmten Parkplatz gibt.", en: "Bine would like to know whether there is a designated parking space here." }
          ]
        },
        {
          title: "2. Ortsangaben: Lokale Präpositionen für Wege (Route & Position Prepositions)",
          rule: "Describe routes accurately using case-specific prepositions: Akkusativ → 'durch' (through), 'um ... (herum)' (around), '[Akkusativ] entlang' (along — stands AFTER the noun!). Dativ → 'aus' (out of), 'von' (from), 'zu' (to), 'bei' (at/near), 'gegenüber' (opposite), 'an + Dativ ... vorbei' (past).",
          pattern: "Akk: durch den Park | die Straße entlang | um die Ecke || Dat: gegenüber dem Bahnhof | am Kaufhaus vorbei | zum Platz",
          examples: [
            { de: "Gehen Sie hier die Hauptstraße entlang, durch den Park und am Kaufhaus vorbei.", en: "Walk along Main Street here, through the park, and past the department store." },
            { de: "Die Haltestelle liegt direkt gegenüber der Apotheke (Dat.).", en: "The bus stop is located directly across from the pharmacy." }
          ]
        }
      ],
      situations: [
        "Ask a passerby or conductor politely using indirect questions ('Entschuldigung, wissen Sie, wann... / ob...').",
        "Describe your daily route to work or university using 'durch', 'entlang', 'gegenüber', and 'vorbei'.",
        "Describe a chart comparing how commuters travel (by car, train, bike, on foot)."
      ]
    },
    {
      id: "kap-8",
      number: 8,
      title: "Gelernt ist gelernt!",
      theme: "Lernen, Prüfungen, Berufsalltag, Ratschläge & Präsentationen",
      grammarFocus: "Konjunktiv II: 'sollte' (Ratschläge geben), Interrogativartikel 'Was für ein(e)?'",
      sentenceTip: "Give friendly advice with 'sollte' + Infinitiv: 'Du solltest vor der Prüfung genug schlafen.' Ask about type/kind with 'Was für ein...?'!",
      topicsLearned: [
        "Lernprobleme verstehen und beschreiben — Understand and describe challenges when learning a language or skill",
        "Ratschläge verstehen und geben — Give and understand helpful study and work tips",
        "Berichte über den Berufsalltag verstehen — Read and understand reports about lifelong learning and everyday work",
        "Informationen erfragen und antworten (Was für ein...?) — Ask specifically what kind of course, job, or book someone means",
        "ein Interview verstehen und eine kurze Präsentation halten — Understand an interview and deliver a structured mini-presentation"
      ],
      vocabThemes: [
        "Lernen & Lerntipps (Sprachenlernen, Workshop, Nachhilfe, konzentrieren, wiederholen)",
        "Prüfungen (Abschlussprüfung, bestehen, sich vorbereiten, nervös)",
        "Präsentationen (das Thema, die Folie, vorstellen, zusammenfassen)"
      ],
      grammarTopics: [
        {
          title: "1. Konjunktiv II: 'sollte' für Ratschläge (Giving Advice & Recommendations)",
          rule: "Use 'sollte' (Konjunktiv II of 'sollen') + Infinitiv at the end of the sentence to give polite, constructive advice ('you should...').",
          pattern: "ich sollte | du solltest | er/es/sie sollte | wir sollten | ihr solltet | sie/Sie sollten + ... + [Infinitiv am Satzende].",
          examples: [
            { de: "Du solltest beim Lernen regelmäßig kurze Pausen machen und das Handy weglegen.", en: "You should take regular short breaks while studying and put your phone away." },
            { de: "Ihr solltet für die Präsentation nicht zu viel Text auf die Folien schreiben.", en: "You shouldn't write too much text on the slides for the presentation." }
          ]
        },
        {
          title: "2. Interrogativartikel 'Was für ein(e)?' ('What kind of ...?')",
          rule: "Use 'Was für ein...?' when asking about the TYPE, KIND, or QUALITY of something (answered with an adjective or category). IMPORTANT: 'für' here does NOT govern the case—the article 'ein-' changes according to the verb's case in the sentence (Nom: ein/ein/eine, Akk: einen/ein/eine, Dat: einem/einer)! In Plural or with uncountable nouns, use 'Was für + Nomen?'.",
          pattern: "Nom: Was für ein Kurs (m) / Buch (n) / Schule (f)? || Akk: Was für einen Kurs (m!) machst du? || Plural: Was für Bücher liest du?",
          examples: [
            { de: "Was für einen Kurs (Akk. m) besuchst du? – Einen Intensivkurs für Deutsch.", en: "What kind of course are you attending? – An intensive German course." },
            { de: "Mit was für einem Stift (Dat. m) schreibst du am liebsten?", en: "What kind of pen do you prefer writing with?" },
            { de: "Was für Filme (Plural) siehst du gern? – Am liebsten spannende Krimis.", en: "What kind of movies do you like watching? – Preferably exciting crime thrillers." }
          ]
        }
      ],
      situations: [
        "A friend has exam anxiety: give them three practical study tips using 'Du solltest...'.",
        "Ask a classmate about their courses, books, or hobbies using 'Was für ein / einen / eine...?'.",
        "Give a 1-minute mini-presentation on how you learn vocabulary best."
      ]
    },
    {
      id: "kap-9",
      number: 9,
      title: "Sportlich, sportlich",
      theme: "Sport, Fans, Verabredungen, Begeisterung/Enttäuschung & Reiseziele",
      grammarFocus: "Sätze verbinden: 'deshalb', 'trotzdem' (Verb Pos. 2), Verben mit Dativ und Akkusativ (Wortstellung der Objekte)",
      sentenceTip: "'deshalb' (therefore) and 'trotzdem' (nevertheless) sit in Position 1, so the verb follows IMMEDIATELY in Position 2!",
      topicsLearned: [
        "Begeisterung, Hoffnung und Enttäuschung ausdrücken — Express excitement, hope, and disappointment as a sports fan or participant",
        "Kommentare verstehen und schreiben — Read and write comments on sports events and outdoor adventures",
        "Folgen und Widersprüche ausdrücken — Express consequences ('deshalb') and unexpected contrasts ('trotzdem')",
        "Vorschläge machen, reagieren und sich verabreden — Make suggestions, react, and arrange joint activities",
        "Fragen stellen und beantworten, schwierige Texte verstehen und ein Reiseziel vorstellen — Understand longer texts (e.g. hiking/climbing) and present an active travel destination"
      ],
      vocabThemes: [
        "Sport & Outdoor (Bergtour, Klettern, Mannschaft, Wettbewerb, Training, ausfallen)",
        "Fans & Emotionen (Begeisterung, Hoffnung, Enttäuschung, genial, mitfiebern)",
        "Verabredungen (vorschlagen, zusagen, absagen, Das passt mir gut)"
      ],
      grammarTopics: [
        {
          title: "1. Sätze verbinden: 'deshalb' (Folge) und 'trotzdem' (Widerspruch)",
          rule: "'deshalb' ('therefore / for that reason') introduces a logical consequence; 'trotzdem' ('nevertheless / even so') introduces a contradiction/unexpected action. Both are adverbs in Position 1 of the second main clause, causing INVERSION: the conjugated verb stands right after them in Position 2, followed by the subject!",
          pattern: "[Hauptsatz 1], + [Pos 1: deshalb / trotzdem] + [Pos 2: konjugiertes Verb] + [Pos 3: Subjekt] + [Rest].",
          examples: [
            { de: "Es regnet heute sehr stark, deshalb fällt das Fußballtraining leider aus.", en: "It is raining very heavily today, therefore football practice is unfortunately canceled." },
            { de: "Es regnet stark, trotzdem gehen die Fans ins Stadion und feiern ihre Mannschaft.", en: "It is raining heavily; nevertheless, the fans go to the stadium and cheer their team." }
          ]
        },
        {
          title: "2. Verben mit Dativ und Akkusativ (Two-Object Verbs & Pronoun Order)",
          rule: "Verbs like geben, schenken, leihen, zeigen, schicken, bringen, empfehlen, erklären, kaufen take a DATIV person (Wem?) and an AKKUSATIV thing (Was?). Word order rule: 1) Two nouns → Dativ before Akkusativ (Ich leihe dem Freund das Trikot). 2) One pronoun + one noun → Pronoun ALWAYS comes first! 3) Two pronouns → Akkusativ pronoun comes BEFORE Dativ pronoun (Ich leihe es ihm)!",
          pattern: "2 Nomen: [Dativ] + [Akkusativ] || 1 Pronomen: [Pronomen] + [Nomen] || 2 Pronomen: [Akk: es/ihn/sie] + [Dat: mir/dir/ihm/ihr]",
          examples: [
            { de: "Ich zeige meinem Freund (Dat.) die neue Sporthalle (Akk.).", en: "I show my friend the new sports hall." },
            { de: "Schenkst du deinem Bruder den Fußball? – Ja, ich schenke ihn (Akk.) ihm (Dat.) zum Geburtstag.", en: "Are you giving your brother the football? – Yes, I am giving it to him for his birthday." }
          ]
        }
      ],
      situations: [
        "Explain why you did (or didn't) exercise yesterday using 'deshalb' and 'trotzdem'.",
        "Express excitement before a match and disappointment or joy afterward.",
        "Tell a friend what sports gear you lent or bought for someone using Dativ + Akkusativ."
      ]
    },
    {
      id: "kap-10",
      number: 10,
      title: "Zusammen leben",
      theme: "Wohnen, Nachbarn, Ortsangaben, Umziehen & Haustiere",
      grammarFocus: "Wechselpräpositionen (Wo? + Dativ vs. Wohin? + Akkusativ), Positions- und Richtungsverben (stehen/stellen, liegen/legen, sitzen/setzen, hängen), Nebensatz mit 'als' und 'wenn'",
      sentenceTip: "Use 'als' ONLY once in the past ('Als ich umgezogen bin...'); use 'wenn' for repeated past events ('Immer wenn...') and present/future!",
      topicsLearned: [
        "um einen Gefallen bitten, sich beschweren und sich entschuldigen — Politely ask neighbors for a favor, complain politely, and apologize",
        "Ortsangaben machen und ein Fest vorbereiten — Describe exact locations/placements of items when setting up a house or party",
        "Erfahrungsberichte verstehen und über Vergangenes berichten — Read experience reports and narrate past life events",
        "eine Stadt präsentieren und über Haustiere sprechen — Present a city/hometown and discuss pets",
        "auf Informationen reagieren sowie eine Geschichte schreiben und verbessern — React to news and write/edit a story"
      ],
      vocabThemes: [
        "Wohnen & Nachbarn (Nachbarschaft, Hausordnung, Gartenhaus, Altbau, Aushang)",
        "Ortsangaben & Umziehen (einpacken, auspacken, Blumentopf, Boden, Kerze)",
        "Tiere & Haustiere (Hund, Katze, Vogel, Schwein, bellen, füttern, weglaufen)"
      ],
      grammarTopics: [
        {
          title: "1. Wechselpräpositionen & Positions- vs. Richtungsverben",
          rule: "Pair the 9 two-way prepositions (in, an, auf, neben, unter, über, vor, hinter, zwischen) with verb pairs: 1) WOHIN? (Direction/Placement + AKKUSATIV, regular verbs!): stellen (put upright), legen (lay flat), setzen (seat/sit down: sich setzen), hängen (hang something up). 2) WO? (Location/Position + DATIV, irregular verbs!): stehen (hat/ist gestanden), liegen (hat/ist gelegen), sitzen (hat/ist gesessen), hängen (hat gehangen).",
          pattern: "Wohin? + AKK: stellen, legen, (sich) setzen, hängen (regelmäßig: gehängt) || Wo? + DAT: stehen, liegen, sitzen, hängen (unregelmäßig: gehangen)",
          examples: [
            { de: "Sie hängen die Lampions in den Baum (Wohin? Akk.). Jetzt hängen die Lampions im Baum (Wo? Dat.).", en: "They hang the lanterns into the tree. Now the lanterns are hanging in the tree." },
            { de: "Ich stelle den Blumentopf auf den Balkon (Akk.). Er steht jetzt auf dem Balkon (Dat.).", en: "I put the flowerpot onto the balcony. It is standing on the balcony now." }
          ]
        },
        {
          title: "2. Temporale Nebensätze mit 'als' und 'wenn' (Past One-Time vs. Repeated/Present)",
          rule: "Both 'als' and 'wenn' introduce subordinate clauses (verb at the end!): 1) Use 'als' ONLY in the past for a SINGLE event or one continuous life period (Als ich 14 Jahre alt war... / Als ich das erste Mal im Ausland war...). 2) Use 'wenn' for ALL present/future events AND for REPEATED events in the past (often with 'immer/jedes Mal wenn').",
          pattern: "1× Vergangenheit → als (... Verb am Ende) || Gegenwart / Zukunft / Mehrmals in der Vergangenheit (immer wenn) → wenn (... Verb am Ende)",
          examples: [
            { de: "Als ich das erste Mal in meine eigene Wohnung gezogen bin, war ich sehr stolz.", en: "When I moved into my own apartment for the first time, I was very proud." },
            { de: "Immer wenn wir früher in Urlaub gefahren sind, hat unser Nachbar die Katze gefüttert.", en: "Whenever we went on vacation in the past, our neighbor fed the cat." }
          ]
        }
      ],
      situations: [
        "Ask your neighbor politely to water your plants and empty your mailbox while you are away.",
        "Describe where you placed decorations or furniture (stellen/legen/hängen + Akk) and where they are now (stehen/liegen/hängen + Dat).",
        "Share a memory starting with 'Als ich ein Kind war...' and a habit with 'Immer wenn...'."
      ]
    },
    {
      id: "kap-11",
      number: 11,
      title: "Wie die Zeit vergeht!",
      theme: "Zeit, Freizeit, Wünsche, Pläne, Ratschläge & Sprichwörter",
      grammarFocus: "Konjunktiv II (irreale Wünsche & Bedingungen: wäre, hätte, würde + Infinitiv), Verben mit Präposition, W-Fragen & Pronominaladverbien (Wofür? / Dafür vs. Für wen?)",
      sentenceTip: "For things use 'Wo(r)- / Da(r)-' ('Worauf freust du dich? – Darauf!'); for people use 'Präp + wen/wem' ('Auf wen wartest du?')!",
      topicsLearned: [
        "Aussagen über Zeitprobleme verstehen — Understand people talking about time pressure and everyday stress",
        "Wünsche äußern und Ratschläge geben — Express hypothetical wishes ('Ich hätte gern mehr Zeit!') and give advice ('An deiner Stelle würde ich...')",
        "gemeinsam etwas planen — Plan a joint activity or weekend schedule together",
        "andere etwas fragen und Informationen austauschen — Ask questions using verbs with prepositions (Worauf? Mit wem?)",
        "Texte erschließen und über Sprichwörter sprechen — Understand texts about living in another era and discuss German proverbs ('Kommt Zeit, kommt Rat')"
      ],
      vocabThemes: [
        "Zeit & Zeitmanagement (Zeitdruck, pünktlich, verschieben, effektiv, der Alltag)",
        "Wünsche, Träume & Pläne (träumen von, hoffen auf, sich wünschen)",
        "Sprichwörter & Redewendungen (Proverbs about time & life)"
      ],
      grammarTopics: [
        {
          title: "1. Konjunktiv II: Irreale Wünsche, Bedingungen & Ratschläge (wäre, hätte, würde + Infinitiv)",
          rule: "Use Konjunktiv II for unreal wishes, hypothetical 'wenn' conditions, and 'If I were you' advice: use 'wäre' (for sein), 'hätte' (for haben), 'könnte / müsste / dürfte / sollte' (for modals), and 'würde + Infinitiv' at the end for almost all other verbs.",
          pattern: "Wenn ich mehr Zeit hätte, würde ich ein Instrument lernen. || Ich wäre jetzt gern am Meer! || An deiner Stelle würde ich ...",
          examples: [
            { de: "Wenn der Tag 30 Stunden hätte, würde ich viel mehr lesen und länger schlafen.", en: "If the day had 30 hours, I would read much more and sleep longer." },
            { de: "An deiner Stelle würde ich nicht alles gleichzeitig machen.", en: "If I were in your place, I wouldn't do everything at the same time." }
          ]
        },
        {
          title: "2. Verben mit fester Präposition (Verbs + Preposition + Case)",
          rule: "Memorize each verb together with its fixed preposition and the case it governs! Common A2 pairs: mit Akkusativ → achten auf, denken an, sich erinnern an, sich freuen auf/über, sich interessieren für, sich kümmern um, sprechen über, warten auf. Mit Dativ → anfangen mit, aufhören mit, sich beschäftigen mit, sprechen mit, teilnehmen an, telefonieren mit, träumen von.",
          pattern: "Akkusativ: warten auf, denken an, sich kümmern um, sich interessieren für || Dativ: träumen von, sprechen mit, teilnehmen an",
          examples: [
            { de: "Ich kümmere mich heute um das Abendessen und denke oft an unseren schönen Urlaub.", en: "I am taking care of dinner today and often think about our lovely vacation." },
            { de: "Sie träumt schon lange von einer großen Weltreise (Dat.).", en: "She has been dreaming of a big trip around the world for a long time." }
          ]
        },
        {
          title: "3. W-Fragen & Pronominaladverbien mit Präposition (Worauf? / Darauf vs. Auf wen?)",
          rule: "1) Asking/referring to THINGS or IDEAS: join 'wo-' (or 'wor-' before a vowel: a, o, u, ü) + preposition for questions (Wofür? Worauf? Woran? Worüber? Wovon? Womit?) and 'da(r)-' + preposition for statements (dafür, darauf, daran). 2) Asking/referring to PEOPLE: put the preposition BEFORE 'wen' (Akk) or 'wem' (Dat) (Auf wen? Mit wem? Für wen?).",
          pattern: "Sachen: Wo(r) + Präp? (Worauf freust du dich?) → Da(r) + Präp (Darauf!) || Personen: Präp + wen/wem? (Auf wen wartest du? → Auf ihn!)",
          examples: [
            { de: "Worüber sprecht ihr gerade? (Sache) – Wir sprechen über unsere Wochenendpläne.", en: "What are you talking about right now? – We are talking about our weekend plans." },
            { de: "Mit wem telefonierst du so lange? (Person) – Mit meiner besten Freundin.", en: "Who have you been on the phone with for so long? – With my best friend." }
          ]
        }
      ],
      situations: [
        "Express three wishes starting with 'Wenn ich mehr Zeit / Geld hätte, würde ich...'.",
        "Give advice to a stressed colleague starting with 'An deiner Stelle würde ich...'.",
        "Interview a partner with 3 'Wo(r)-' questions ('Worauf freust du dich?', 'Wovon träumst du?', 'Wofür interessierst du dich?')."
      ]
    },
    {
      id: "kap-12",
      number: 12,
      title: "Gute Unterhaltung!",
      theme: "Musik, Bands & Festivals, Zeitungsmeldungen, Malerei & Bildbeschreibung",
      grammarFocus: "Indefinitpronomen (einer, eines, eine, welche / keiner, keines, keine | jemand, niemand, alles, nichts), Relativsätze im Nominativ und Akkusativ",
      sentenceTip: "Relative pronouns match the noun's gender/number, take their case from inside the relative clause, and send the verb to the end!",
      topicsLearned: [
        "einen Festivalbesuch planen und nachfragen — Plan a visit to a music festival and ask follow-up questions",
        "über Musik sprechen und einen Musiker / eine Musikerin / eine Band vorstellen — Talk about music styles and present a band or artist",
        "Zeitungsmeldungen verstehen — Read and understand short newspaper stories about culture and events",
        "genauere Informationen zu Personen und Dingen geben (Relativsätze) — Specify people and things using relative clauses",
        "Informationen über Malerei verstehen, über ein Bild sprechen und ein Bild beschreiben — Talk about art/paintings and write a structured picture description (im Vordergrund, im Hintergrund, oben rechts...)"
      ],
      vocabThemes: [
        "Musik & Festival (Musikfestival, Band, Musikstil, Hardrock, Rap, Lied, Bühne, Auftritt)",
        "Bildbeschreibung & Kunst (das Gemälde, im Vordergrund, im Hintergrund, in der Mitte, abmalen)"
      ],
      grammarTopics: [
        {
          title: "1. Indefinitpronomen (einer, eines, eine, welche / keiner, keines, keine | jemand / niemand)",
          rule: "1) Pronouns replacing a noun with 'ein/kein' take the gender signal when standing ALONE without the noun: Maskulin Nom 'einer / keiner' (Akk: einen / keinen), Neutrum Nom/Akk 'eines (eins) / keines (keins)', Feminin 'eine / keine', Plural 'welche / keine'. 2) For unspecified people/things: 'jemand' (someone), 'niemand' (no one), 'etwas' (something), 'nichts' (nothing), 'alle' (everyone, pl).",
          pattern: "Hast du einen Stift (m)? → Ja, hier ist einer / Nein, ich habe keinen. || Hast du ein Ticket (n)? → Ja, ich habe eins / Nein, keins! || Geld/Karten (Pl): Ich habe welche / keine.",
          examples: [
            { de: "Hast du noch einen Kuli? – Tut mir leid, ich habe leider keinen, aber Max hat einen.", en: "Do you have another pen? – Sorry, unfortunately I don't have one, but Max has one." },
            { de: "Brauchst du ein Blatt Papier? – Danke, ich habe schon eins! Ist heute jemand im Büro? – Nein, niemand.", en: "Do you need a sheet of paper? – Thanks, I already have one! Is anyone in the office today? – No, no one." }
          ]
        },
        {
          title: "2. Relativsätze im Nominativ und Akkusativ (Relative Clauses — Verb at the End)",
          rule: "Use a relative clause right after a noun (Bezugswort) to describe it without starting a new sentence. 1) GENDER & NUMBER come from the noun in the main clause. 2) CASE (Nominativ or Akkusativ) comes from the pronoun's role inside the relative clause (Subject → Nom: der, das, die, die | Direct Object → Akk: den, das, die, die). 3) Put a comma before the relative pronoun and kick the conjugated verb to the VERY END!",
          pattern: "Nom (Subjekt im Relativsatz): der (m), das (n), die (f), die (pl) || Akk (Objekt im Relativsatz): den (m!), das (n), die (f), die (pl) + [... Verb am Ende]",
          examples: [
            { de: "Das ist die Band, die (Nom. f) schon seit zehn Jahren Rockmusik macht.", en: "That is the band that has been making rock music for ten years." },
            { de: "Wie heißt der Musiker, den (Akk. m) wir gestern auf dem Festival gehört haben?", en: "What is the name of the musician whom we heard at the festival yesterday?" },
            { de: "Das Bild, das (Akk. n) Anna für die WG gemalt hat, hängt jetzt im Wohnzimmer.", en: "The picture that Anna painted for the shared flat is now hanging in the living room." }
          ]
        }
      ],
      situations: [
        "Present your favorite musician or band (music style, songs, why you like them).",
        "Describe a painting or photo using spatial phrases ('Im Vordergrund sieht man...', 'Im Hintergrund links...').",
        "Describe people and objects in your room using relative clauses in Nominativ and Akkusativ."
      ]
    }
  ]
};
