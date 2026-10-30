// 30 Zero-Out-of-Syllabus Conversations for A1 Kapitel 1 ("Guten Tag!")
// + 6 Multi-Chapter Mixer Conversations (Kap. 1+2, Kap. 1+3, Kap. 1+2+3)
// Uses 10 distinct neural D-A-CH voices (DE, AT, CH) for authentic listening practice.

export const VOICES = {
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

export const KAP1_CONVERSATIONS = [
  // ─── CATEGORY 1: Begrüßung & Kennenlernen (6 Clips) ───
  {
    id: "kap1-01",
    chapters: ["kap-1"],
    category: "Begrüßung & Kennenlernen",
    title: "Hallo im Haus",
    context: "Two neighbors meet in the hallway for the first time.",
    speakers: { A: { name: "Anna", voice: "seraphina" }, B: { name: "Lukas", voice: "florian" } },
    lines: [
      { speaker: "A", de: "Hallo! Ich bin Anna. Wer bist du?", en: "Hello! I am Anna. Who are you?" },
      { speaker: "B", de: "Hallo Anna! Ich heiße Lukas.", en: "Hello Anna! My name is Lukas." },
      { speaker: "A", de: "Wie geht es dir, Lukas?", en: "How are you, Lukas?" },
      { speaker: "B", de: "Danke, sehr gut! Und wie geht es dir?", en: "Thanks, very good! And how are you?" },
      { speaker: "A", de: "Auch ganz gut, danke! Wohnst du hier in Berlin?", en: "Also pretty good, thanks! Do you live here in Berlin?" },
      { speaker: "B", de: "Ja, ich wohne jetzt hier. Bis bald, Anna! Tschüs!", en: "Yes, I live here now. See you soon, Anna! Bye!" },
      { speaker: "A", de: "Ciao, Lukas!", en: "Bye, Lukas!" }
    ]
  },
  {
    id: "kap1-02",
    chapters: ["kap-1"],
    category: "Begrüßung & Kennenlernen",
    title: "Guten Morgen am Empfang",
    context: "Formal morning greeting with first and last names.",
    speakers: { A: { name: "Frau Weber", voice: "katja" }, B: { name: "Herr Kovács", voice: "conrad" } },
    lines: [
      { speaker: "A", de: "Guten Morgen! Wie heißen Sie, bitte?", en: "Good morning! What is your name, please?" },
      { speaker: "B", de: "Guten Morgen, Frau Weber. Mein Name ist Adam Kovács.", en: "Good morning, Ms. Weber. My name is Adam Kovács." },
      { speaker: "A", de: "Entschuldigung, was ist Ihr Vorname und was ist Ihr Nachname?", en: "Excuse me, what is your first name and what is your last name?" },
      { speaker: "B", de: "Adam ist mein Vorname und Kovács ist mein Nachname.", en: "Adam is my first name and Kovács is my last name." },
      { speaker: "A", de: "Danke, Herr Kovács! Wie geht es Ihnen?", en: "Thank you, Mr. Kovács! How are you?" },
      { speaker: "B", de: "Sehr gut, danke! Und Ihnen?", en: "Very good, thank you! And you?" },
      { speaker: "A", de: "Gut, danke. Auf Wiedersehen!", en: "Good, thanks. Goodbye!" }
    ]
  },
  {
    id: "kap1-03",
    chapters: ["kap-1"],
    category: "Begrüßung & Kennenlernen",
    title: "Das ist meine Partnerin",
    context: "Introducing another person in the evening.",
    speakers: { A: { name: "Tim", voice: "killian" }, B: { name: "Nina", voice: "amala" } },
    lines: [
      { speaker: "A", de: "Guten Abend, Nina! Kennst du die Person da?", en: "Good evening, Nina! Do you know that person there?" },
      { speaker: "B", de: "Guten Abend, Tim! Nein, wer ist das?", en: "Good evening, Tim! No, who is that?" },
      { speaker: "A", de: "Ich stelle sie vor: Das ist Sofia. Sie ist meine Partnerin im Kurs.", en: "I will introduce her: That is Sofia. She is my partner in the course." },
      { speaker: "B", de: "Ah, sie ist bekannt! Wo wohnt sie?", en: "Ah, she is well-known! Where does she live?" },
      { speaker: "A", de: "Sie wohnt in München, und ihr Partner wohnt auch da.", en: "She lives in Munich, and her partner also lives there." },
      { speaker: "B", de: "Danke, Tim! Gute Nacht und bis bald!", en: "Thanks, Tim! Good night and see you soon!" },
      { speaker: "A", de: "Gute Nacht, Nina!", en: "Good night, Nina!" }
    ]
  },
  {
    id: "kap1-04",
    chapters: ["kap-1"],
    category: "Begrüßung & Kennenlernen",
    title: "Guten Tag, Herr Bauer",
    context: "Greeting and saying goodbye formally vs. informally.",
    speakers: { A: { name: "Herr Bauer", voice: "florian" }, B: { name: "Frau Lindner", voice: "seraphina" } },
    lines: [
      { speaker: "A", de: "Guten Tag, Frau Lindner! Wie geht es Ihnen?", en: "Good day, Ms. Lindner! How are you?" },
      { speaker: "B", de: "Guten Tag, Herr Bauer! Ganz gut, danke. Und Ihnen?", en: "Good day, Mr. Bauer! Pretty good, thank you. And you?" },
      { speaker: "A", de: "Auch gut. Wer ist der Herr da? Kennen Sie die Person?", en: "Also good. Who is the gentleman there? Do you know the person?" },
      { speaker: "B", de: "Ja, er heißt Paul. Er kommt aus Deutschland.", en: "Yes, his name is Paul. He comes from Germany." },
      { speaker: "A", de: "Sagen Sie da formell Sie oder informell du?", en: "Do you say formal 'Sie' or informal 'du' there?" },
      { speaker: "B", de: "Wir sagen du. Ich grüße Paul kurz und wir verabschieden uns dann.", en: "We say 'du'. I greet Paul briefly and then we say goodbye." },
      { speaker: "A", de: "Gut, auf Wiedersehen, Frau Lindner!", en: "Good, goodbye, Ms. Lindner!" }
    ]
  },
  {
    id: "kap1-05",
    chapters: ["kap-1"],
    category: "Begrüßung & Kennenlernen",
    title: "Wer wohnt wo?",
    context: "Talking about two friends, where they come from, and where they live.",
    speakers: { A: { name: "Julia", voice: "amala" }, B: { name: "Markus", voice: "conrad" } },
    lines: [
      { speaker: "A", de: "Hallo Markus! Kennst du die Personen auf dem Kursplakat?", en: "Hello Markus! Do you know the people on the course poster?" },
      { speaker: "B", de: "Hallo Julia! Ja, das sind Olga und Mehmet.", en: "Hello Julia! Yes, those are Olga and Mehmet." },
      { speaker: "A", de: "Woher kommen sie und wo wohnen sie?", en: "Where do they come from and where do they live?" },
      { speaker: "B", de: "Olga kommt aus Russland und Mehmet kommt aus der Türkei.", en: "Olga comes from Russia and Mehmet comes from Turkey." },
      { speaker: "A", de: "Wohnen sie jetzt in einer Stadt in Deutschland?", en: "Do they live in a city in Germany now?" },
      { speaker: "B", de: "Ja, sie wohnen in Frankfurt. Die Situation hier ist sehr gut.", en: "Yes, they live in Frankfurt. The situation here is very good." }
    ]
  },
  {
    id: "kap1-06",
    chapters: ["kap-1"],
    category: "Begrüßung & Kennenlernen",
    title: "Ein kurzes Interview",
    context: "A short street interview about name, city, and wellbeing.",
    speakers: { A: { name: "Clara", voice: "katja" }, B: { name: "Jan", voice: "jan" } },
    lines: [
      { speaker: "A", de: "Entschuldigung! Machen wir ein kurzes Interview?", en: "Excuse me! Shall we do a short interview?" },
      { speaker: "B", de: "Ja, bitte! Fragen Sie!", en: "Yes, please! Ask away!" },
      { speaker: "A", de: "Zuerst: Wie ist Ihr Name und wie ist Ihr Befinden?", en: "First: What is your name and how are you doing?" },
      { speaker: "B", de: "Ich heiße Jan, und es geht sehr gut, danke.", en: "My name is Jan, and things are going very well, thanks." },
      { speaker: "A", de: "Welche Stadt ist das hier, und woher kommen Sie?", en: "Which city is this here, and where do you come from?" },
      { speaker: "B", de: "Die Stadt hier ist Zürich. Ich komme aus der Schweiz.", en: "The city here is Zurich. I come from Switzerland." },
      { speaker: "A", de: "Danke für das Gespräch, Herr Jan! Auf Wiedersehen!", en: "Thank you for the conversation, Mr. Jan! Goodbye!" }
    ]
  },

  // ─── CATEGORY 2: Länder & Sprachen (7 Clips) ───
  {
    id: "kap1-07",
    chapters: ["kap-1"],
    category: "Länder & Sprachen",
    title: "Deutschland, Österreich, Schweiz",
    context: "Three German-speaking countries and Rhaeto-Romanic.",
    speakers: { A: { name: "Ingrid", voice: "ingrid" }, B: { name: "Leni", voice: "leni" } },
    lines: [
      { speaker: "A", de: "Servus! Ich komme aus Österreich, aus Wien. Und woher kommst du?", en: "Hello! I come from Austria, from Vienna. And where do you come from?" },
      { speaker: "B", de: "Hallo! Ich komme aus der Schweiz. Welches Land kennst du noch?", en: "Hello! I come from Switzerland. Which country do you also know?" },
      { speaker: "A", de: "Ich kenne Deutschland sehr gut. In Österreich sprechen wir Deutsch.", en: "I know Germany very well. In Austria we speak German." },
      { speaker: "B", de: "In der Schweiz sprechen wir Deutsch, Französisch, Italienisch und auch Rätoromanisch!", en: "In Switzerland we speak German, French, Italian, and also Rhaeto-Romanic!" },
      { speaker: "A", de: "Sprichst du Rätoromanisch?", en: "Do you speak Rhaeto-Romanic?" },
      { speaker: "B", de: "Ja, ein bisschen! Und ich lerne Englisch.", en: "Yes, a little! And I am learning English." }
    ]
  },
  {
    id: "kap1-08",
    chapters: ["kap-1"],
    category: "Länder & Sprachen",
    title: "Südamerika und Europa",
    context: "Talking about Brazil, Portugal, Spain, and Mexico.",
    speakers: { A: { name: "Mateo", voice: "florian" }, B: { name: "Ana", voice: "seraphina" } },
    lines: [
      { speaker: "A", de: "Hallo Ana! Kommst du aus Portugal oder aus Brasilien?", en: "Hello Ana! Do you come from Portugal or from Brazil?" },
      { speaker: "B", de: "Ich komme aus Brasilien. Meine Sprache ist Portugiesisch.", en: "I come from Brazil. My language is Portuguese." },
      { speaker: "A", de: "Ich komme aus Spanien, und mein Partner kommt aus Mexiko.", en: "I come from Spain, and my partner comes from Mexico." },
      { speaker: "B", de: "Ah, dann sprecht ihr Spanisch!", en: "Ah, then you speak Spanish!" },
      { speaker: "A", de: "Ja, Spanisch und ein bisschen Portugiesisch. Und wir lernen jetzt Deutsch.", en: "Yes, Spanish and a little Portuguese. And we are learning German now." },
      { speaker: "B", de: "Sehr gut! Die Gruppe hier ist ganz international.", en: "Very good! The group here is very international." }
    ]
  },
  {
    id: "kap1-09",
    chapters: ["kap-1"],
    category: "Länder & Sprachen",
    title: "Osteuropa im Gespräch",
    context: "Classmates from Poland, Ukraine, Bulgaria, Hungary, and Serbia.",
    speakers: { A: { name: "Klara", voice: "amala" }, B: { name: "Milan", voice: "killian" } },
    lines: [
      { speaker: "A", de: "Woher kommst du, Milan? Welche Sprache sprichst du?", en: "Where do you come from, Milan? Which language do you speak?" },
      { speaker: "B", de: "Ich spreche Serbisch und ein bisschen Bulgarisch. Und du, Klara?", en: "I speak Serbian and a little Bulgarian. And you, Klara?" },
      { speaker: "A", de: "Ich komme aus Polen und spreche Polnisch.", en: "I come from Poland and speak Polish." },
      { speaker: "B", de: "Und woher kommt deine Partnerin da?", en: "And where does your partner over there come from?" },
      { speaker: "A", de: "Olena kommt aus der Ukraine. Sie spricht Russisch und lernt Ungarisch.", en: "Olena comes from Ukraine. She speaks Russian and is learning Hungarian." },
      { speaker: "B", de: "Und jetzt sprechen wir zusammen Deutsch!", en: "And now we speak German together!" }
    ]
  },
  {
    id: "kap1-10",
    chapters: ["kap-1"],
    category: "Länder & Sprachen",
    title: "Von Japan bis Algerien",
    context: "Meeting international students from Asia, North Africa, and the USA.",
    speakers: { A: { name: "Kenji", voice: "jonas" }, B: { name: "Samira", voice: "katja" } },
    lines: [
      { speaker: "A", de: "Guten Tag! Ich heiße Kenji und komme aus Japan.", en: "Good day! My name is Kenji and I come from Japan." },
      { speaker: "B", de: "Guten Tag, Kenji! Sprichst du Japanisch und Englisch?", en: "Good day, Kenji! Do you speak Japanese and English?" },
      { speaker: "A", de: "Ja, Japanisch, Englisch und ein bisschen Indonesisch. Woher kommst du?", en: "Yes, Japanese, English, and a little Indonesian. Where do you come from?" },
      { speaker: "B", de: "Ich komme aus Algerien. Ich spreche Arabisch und Französisch.", en: "I come from Algeria. I speak Arabic and French." },
      { speaker: "A", de: "Und wer kommt aus den USA oder aus Thailand?", en: "And who comes from the USA or from Thailand?" },
      { speaker: "B", de: "Ben kommt aus den USA, und Mali kommt aus Thailand!", en: "Ben comes from the USA, and Mali comes from Thailand!" }
    ]
  },
  {
    id: "kap1-11",
    chapters: ["kap-1"],
    category: "Länder & Sprachen",
    title: "Urlaub in Italien und Griechenland",
    context: "Talking about France, Italy, Greece, and Turkey.",
    speakers: { A: { name: "Elena", voice: "seraphina" }, B: { name: "Cem", voice: "conrad" } },
    lines: [
      { speaker: "A", de: "Hallo Cem! Kommst du aus der Türkei?", en: "Hello Cem! Do you come from Turkey?" },
      { speaker: "B", de: "Ja, ich spreche Türkisch und Deutsch. Und du, Elena? Aus Griechenland?", en: "Yes, I speak Turkish and German. And you, Elena? From Greece?" },
      { speaker: "A", de: "Ja, aus Griechenland! Aber ich wohne jetzt in Italien.", en: "Yes, from Greece! But I live in Italy now." },
      { speaker: "B", de: "Sprichst du dann Italienisch?", en: "Do you speak Italian then?" },
      { speaker: "A", de: "Ja, sehr gut Italienisch, und mein Partner aus Frankreich spricht Französisch.", en: "Yes, very good Italian, and my partner from France speaks French." },
      { speaker: "B", de: "So viele andere Sprachen! Ich verstehe nur ein bisschen Französisch.", en: "So many other languages! I understand only a little French." }
    ]
  },
  {
    id: "kap1-12",
    chapters: ["kap-1"],
    category: "Länder & Sprachen",
    title: "Wie heißt das Wort auf Deutsch?",
    context: "Comparing international words across languages.",
    speakers: { A: { name: "Frau König", voice: "ingrid" }, B: { name: "Paolo", voice: "florian" } },
    lines: [
      { speaker: "A", de: "Paolo, welche Sprachen sprechen Sie?", en: "Paolo, which languages do you speak?" },
      { speaker: "B", de: "Ich spreche Italienisch, Portugiesisch und ein bisschen Polnisch.", en: "I speak Italian, Portuguese, and a little Polish." },
      { speaker: "A", de: "Kennen Sie andere Wörter auf Deutsch?", en: "Do you know other words in German?" },
      { speaker: "B", de: "Ja, das Wort Würstchen heißt auf Italienisch Würstel!", en: "Yes, the word 'Würstchen' is called 'Würstel' in Italian!" },
      { speaker: "A", de: "Sehr gut! Viele Wörter sind international bekannt.", en: "Very good! Many words are internationally known." },
      { speaker: "B", de: "Ja, ich verstehe schon ganz gut deutsch!", en: "Yes, I already understand German pretty well!" }
    ]
  },
  {
    id: "kap1-13",
    chapters: ["kap-1"],
    category: "Länder & Sprachen",
    title: "Welche Sprache lernen Sie?",
    context: "Two learners chatting at an international language café.",
    speakers: { A: { name: "Daria", voice: "leni" }, B: { name: "Tarek", voice: "killian" } },
    lines: [
      { speaker: "A", de: "Guten Abend! Welche Sprache lernen Sie hier?", en: "Good evening! Which language are you learning here?" },
      { speaker: "B", de: "Guten Abend! Zuerst lerne ich Deutsch, dann Spanisch.", en: "Good evening! First I am learning German, then Spanish." },
      { speaker: "A", de: "Sprechen Sie auch Arabisch oder Türkisch?", en: "Do you also speak Arabic or Turkish?" },
      { speaker: "B", de: "Ich spreche Arabisch, und meine Frau spricht Ungarisch und Bulgarisch.", en: "I speak Arabic, and my wife speaks Hungarian and Bulgarian." },
      { speaker: "A", de: "Ich komme aus Russland, aber ich lebe und wohne in Deutschland.", en: "I come from Russia, but I live in Germany." },
      { speaker: "B", de: "Das Gespräch auf Deutsch geht schon sehr gut!", en: "The conversation in German is already going very well!" }
    ]
  },

  // ─── CATEGORY 3: Telefon, E-Mail & Buchstabieren (6 Clips) ───
  {
    id: "kap1-14",
    chapters: ["kap-1"],
    category: "Telefon, E-Mail & Buchstabieren",
    title: "Wie ist deine Handynummer?",
    context: "Exchanging mobile numbers using numbers 0 to 10.",
    speakers: { A: { name: "Mia", voice: "seraphina" }, B: { name: "Noah", voice: "jonas" } },
    lines: [
      { speaker: "A", de: "Noah, wie ist deine Handynummer?", en: "Noah, what is your mobile number?" },
      { speaker: "B", de: "Meine Handynummer ist null eins sieben zwei, drei vier fünf, sechs acht neun.", en: "My mobile number is zero one seven two, three four five, six eight nine." },
      { speaker: "A", de: "Bitte noch einmal, langsam!", en: "Once more please, slowly!" },
      { speaker: "B", de: "Null eins sieben zwei, drei vier fünf, sechs acht neun, zehn!", en: "Zero one seven two, three four five, six eight nine, ten!" },
      { speaker: "A", de: "Danke! Ich notiere die Zahl im Telefon.", en: "Thanks! I am noting the number in the phone." },
      { speaker: "B", de: "Und wie ist deine Telefonnummer?", en: "And what is your telephone number?" },
      { speaker: "A", de: "Null drei null, eins zwei vier acht.", en: "Zero three zero, one two four eight." }
    ]
  },
  {
    id: "kap1-15",
    chapters: ["kap-1"],
    category: "Telefon, E-Mail & Buchstabieren",
    title: "Zahlen von elf bis zwanzig",
    context: "Checking participant numbers and room numbers from 11 to 20.",
    speakers: { A: { name: "Frau Berg", voice: "katja" }, B: { name: "Leo", voice: "florian" } },
    lines: [
      { speaker: "A", de: "Leo, lesen wir die Zahlen laut zusammen?", en: "Leo, shall we read the numbers aloud together?" },
      { speaker: "B", de: "Ja! Elf, zwölf, dreizehn, vierzehn, fünfzehn.", en: "Yes! Eleven, twelve, thirteen, fourteen, fifteen." },
      { speaker: "A", de: "Sehr gut! Und dann?", en: "Very good! And then?" },
      { speaker: "B", de: "Sechzehn, siebzehn, achtzehn, neunzehn, zwanzig!", en: "Sixteen, seventeen, eighteen, nineteen, twenty!" },
      { speaker: "A", de: "Welche Zahl hat dein Kursplakat?", en: "Which number does your course poster have?" },
      { speaker: "B", de: "Die Zahl ist siebzehn.", en: "The number is seventeen." }
    ]
  },
  {
    id: "kap1-16",
    chapters: ["kap-1"],
    category: "Telefon, E-Mail & Buchstabieren",
    title: "Punkt, Minus, Unterstrich",
    context: "Dictating an email address carefully at reception.",
    speakers: { A: { name: "Herr Wolf", voice: "conrad" }, B: { name: "Lara", voice: "amala" } },
    lines: [
      { speaker: "A", de: "Wie ist Ihre E-Mail-Adresse, Frau Lara?", en: "What is your email address, Ms. Lara?" },
      { speaker: "B", de: "Meine E-Mail-Adresse ist lara unterstrich klein minus berlin punkt de.", en: "My email address is lara underscore klein minus berlin dot de." },
      { speaker: "A", de: "Entschuldigung, ich verstehe nicht ganz. Bitte noch einmal langsam!", en: "Excuse me, I don't quite understand. Once more slowly, please!" },
      { speaker: "B", de: "Lara, dann Unterstrich, dann klein, minus, berlin, Punkt, d, e.", en: "Lara, then underscore, then klein, minus, berlin, dot, d, e." },
      { speaker: "A", de: "Ich schreibe mit: Unterstrich und minus, dann Punkt de. Danke!", en: "I am writing it down: underscore and minus, then dot de. Thank you!" }
    ]
  },
  {
    id: "kap1-17",
    chapters: ["kap-1"],
    category: "Telefon, E-Mail & Buchstabieren",
    title: "Können Sie das buchstabieren?",
    context: "Spelling an unfamiliar last name letter by letter.",
    speakers: { A: { name: "Frau Neumann", voice: "ingrid" }, B: { name: "Herr Szabó", voice: "killian" } },
    lines: [
      { speaker: "A", de: "Guten Tag! Wie ist Ihr Nachname, bitte?", en: "Good day! What is your last name, please?" },
      { speaker: "B", de: "Mein Nachname ist Szabó. Ich komme aus Polen... nein, meine Frau kommt aus Polen!", en: "My last name is Szabó. I come from Poland... no, my wife comes from Poland!" },
      { speaker: "A", de: "Wie schreibt man Szabó? Bitte buchstabieren Sie!", en: "How do you spell Szabó? Please spell it!" },
      { speaker: "B", de: "Ich buchstabiere langsam: S – Z – A – B – O.", en: "I will spell slowly: S – Z – A – B – O." },
      { speaker: "A", de: "Welcher Buchstabe kommt nach S? Z wie im Alphabet?", en: "Which letter comes after S? Z like in the alphabet?" },
      { speaker: "B", de: "Ja, der Buchstabe Z! Fünf Buchstaben.", en: "Yes, the letter Z! Five letters." }
    ]
  },
  {
    id: "kap1-18",
    chapters: ["kap-1"],
    category: "Telefon, E-Mail & Buchstabieren",
    title: "Laut und deutlich am Telefon",
    context: "A noisy phone call where someone asks to repeat louder.",
    speakers: { A: { name: "Hanna", voice: "leni" }, B: { name: "David", voice: "jan" } },
    lines: [
      { speaker: "A", de: "Hallo am Telefon! Wer spricht da, bitte?", en: "Hello on the phone! Who is speaking there, please?" },
      { speaker: "B", de: "Hallo Hanna, hier ist David! Hörst du gut?", en: "Hello Hanna, this is David! Can you hear well?" },
      { speaker: "A", de: "Nein, sprich bitte laut und langsam! Wie ist die Telefonnummer von Frau Meier?", en: "No, please speak loudly and slowly! What is Ms. Meier's telephone number?" },
      { speaker: "B", de: "Ich sage die Zahl noch einmal laut: elf, vierzehn, achtzehn, zwanzig!", en: "I will say the number once more loudly: eleven, fourteen, eighteen, twenty!" },
      { speaker: "A", de: "Jetzt verstehe ich! Ich schreibe elf, vierzehn, achtzehn, zwanzig. Danke!", en: "Now I understand! I write eleven, fourteen, eighteen, twenty. Thanks!" }
    ]
  },
  {
    id: "kap1-19",
    chapters: ["kap-1"],
    category: "Telefon, E-Mail & Buchstabieren",
    title: "Das deutsche Alphabet",
    context: "Practicing letters, names, and contact details together.",
    speakers: { A: { name: "Ben", voice: "florian" }, B: { name: "Eva", voice: "seraphina" } },
    lines: [
      { speaker: "A", de: "Eva, wir lernen heute das Alphabet auf Deutsch. Sprichst du mit?", en: "Eva, we are learning the alphabet in German today. Will you speak along?" },
      { speaker: "B", de: "Ja, ich spreche mit! Jeder Buchstabe ist gut.", en: "Yes, I'll speak along! Every letter is good." },
      { speaker: "A", de: "Fragst du nach meiner E-Mail-Adresse und Handynummer?", en: "Will you ask about my email address and mobile number?" },
      { speaker: "B", de: "Ja: Wie ist deine E-Mail-Adresse und wie buchstabiert man deinen Nachnamen?", en: "Yes: What is your email address and how does one spell your last name?" },
      { speaker: "A", de: "ben punkt roth, R – O – T – H, und die Zahl zwölf.", en: "ben dot roth, R – O – T – H, and the number twelve." }
    ]
  },

  // ─── CATEGORY 4: Unterwegs & International (5 Clips — Exercise 1a Words) ───
  {
    id: "kap1-20",
    chapters: ["kap-1"],
    category: "Unterwegs & International",
    title: "Der Reiseführer und der Koffer",
    context: "Arriving in Germany and meeting the tour guide.",
    speakers: { A: { name: "Reiseführer Tom", voice: "conrad" }, B: { name: "Touristin Maja", voice: "amala" } },
    lines: [
      { speaker: "A", de: "Guten Tag! Ich bin Tom, Ihr Reiseführer hier in Deutschland.", en: "Good day! I am Tom, your tour guide here in Germany." },
      { speaker: "B", de: "Guten Tag! Und wer ist die Frau da? Ist sie auch Reiseführerin?", en: "Good day! And who is the woman there? Is she also a tour guide?" },
      { speaker: "A", de: "Ja, Frau Klein ist auch Reiseführerin. Ist das Ihr Koffer?", en: "Yes, Ms. Klein is also a tour guide. Is that your suitcase?" },
      { speaker: "B", de: "Ja, das ist mein Koffer, und im Koffer ist ein Handtuch.", en: "Yes, that is my suitcase, and in the suitcase is a towel." },
      { speaker: "A", de: "Gut! Wir gehen jetzt zusammen. Die Autobahn ist da.", en: "Good! We are going together now. The highway is over there." }
    ]
  },
  {
    id: "kap1-21",
    chapters: ["kap-1"],
    category: "Unterwegs & International",
    title: "Pause an der Autobahn",
    context: "A quick snack stop along the German highway.",
    speakers: { A: { name: "Jonas", voice: "jonas" }, B: { name: "Katja", voice: "katja" } },
    lines: [
      { speaker: "A", de: "Wir sind auf der Autobahn. Machen wir kurz Pause?", en: "We are on the highway. Shall we take a short break?" },
      { speaker: "B", de: "Ja, bitte! Hier ist ein Butterbrot und eine Flasche.", en: "Yes, please! Here is a sandwich and a bottle." },
      { speaker: "A", de: "Oh, sehr gut! Und was ist das? Ein Würstchen oder eine Nudel?", en: "Oh, very good! And what is that? A sausage or a noodle?" },
      { speaker: "B", de: "Das ist ein Würstchen! In Österreich sagt man auch Würstel.", en: "That is a sausage! In Austria one also says 'Würstel'." },
      { speaker: "A", de: "Haha, Würstchen und Butterbrot — das kenne ich gut!", en: "Haha, sausage and sandwich — I know that well!" }
    ]
  },
  {
    id: "kap1-22",
    chapters: ["kap-1"],
    category: "Unterwegs & International",
    title: "Wörter im Koffer",
    context: "Guessing international German words from everyday objects.",
    speakers: { A: { name: "Sarah", voice: "seraphina" }, B: { name: "Marco", voice: "killian" } },
    lines: [
      { speaker: "A", de: "Marco, wir spielen ein Wort-Spiel! Raten wir zusammen?", en: "Marco, we are playing a word game! Shall we guess together?" },
      { speaker: "B", de: "Ja, ich rate! Welche Wörter sammelst du?", en: "Yes, I'll guess! Which words are you collecting?" },
      { speaker: "A", de: "Ich sammle Wörter auf Deutsch: Kindergarten, Autobahn, Koffer, Handtuch!", en: "I am collecting words in German: kindergarten, highway, suitcase, towel!" },
      { speaker: "B", de: "Das Wort Kindergarten ist international bekannt — auch in den USA!", en: "The word kindergarten is internationally well-known — even in the USA!" },
      { speaker: "A", de: "Und Flasche, Nudel und Butterbrot? Verstehst du die Wörter auch?", en: "And bottle, noodle, and sandwich? Do you understand those words too?" },
      { speaker: "B", de: "Ja, ganz gut!", en: "Yes, pretty well!" }
    ]
  },
  {
    id: "kap1-23",
    chapters: ["kap-1"],
    category: "Unterwegs & International",
    title: "Wo ist der Kindergarten?",
    context: "Asking about places and people in the neighborhood.",
    speakers: { A: { name: "Frau Yilmaz", voice: "ingrid" }, B: { name: "Herr Albrecht", voice: "florian" } },
    lines: [
      { speaker: "A", de: "Entschuldigung, Herr Albrecht! Wo ist hier der Kindergarten?", en: "Excuse me, Mr. Albrecht! Where is the kindergarten here?" },
      { speaker: "B", de: "Guten Morgen, Frau Yilmaz! Der Kindergarten ist in der Stadt, Nummer sechs.", en: "Good morning, Ms. Yilmaz! The kindergarten is in the city, number six." },
      { speaker: "A", de: "Danke! Und wie geht es dem Nachbarn — ist der Kranke wieder gut?", en: "Thank you! And how is the neighbor — is the sick person well again?" },
      { speaker: "B", de: "Ja, der Kranke sagt, es geht schon ganz gut!", en: "Yes, the sick person says things are already going pretty well!" },
      { speaker: "A", de: "Sehr gut! Hier ist noch eine Flasche und eine Nudel-Suppe für ihn.", en: "Very good! Here is also a bottle and a noodle soup for him." }
    ]
  },
  {
    id: "kap1-24",
    chapters: ["kap-1"],
    category: "Unterwegs & International",
    title: "Reiseführerin in Wien",
    context: "An Austrian tour guide welcoming a small group.",
    speakers: { A: { name: "Reiseführerin Eva", voice: "ingrid" }, B: { name: "Paul", voice: "jan" } },
    lines: [
      { speaker: "A", de: "Guten Tag! Ich bin Eva, Ihre Reiseführerin in Österreich.", en: "Good day! I am Eva, your tour guide in Austria." },
      { speaker: "B", de: "Guten Tag! Wir kommen aus der Schweiz und aus Mexiko.", en: "Good day! We come from Switzerland and from Mexico." },
      { speaker: "A", de: "Haben Sie Ihren Koffer, ein Handtuch und eine Flasche?", en: "Do you have your suitcase, a towel, and a bottle?" },
      { speaker: "B", de: "Ja, der Koffer ist hier, und ein Würstel und ein Butterbrot auch!", en: "Yes, the suitcase is here, and a sausage and a sandwich too!" },
      { speaker: "A", de: "Super, dann gehen wir!", en: "Great, then let's go!" }
    ]
  },

  // ─── CATEGORY 5: Im Deutschkurs (6 Clips — Classroom & Grammar Vocab) ───
  {
    id: "kap1-25",
    chapters: ["kap-1"],
    category: "Im Deutschkurs",
    title: "Dialog zu zweit lesen",
    context: "Two students practicing a textbook dialogue in pairs.",
    speakers: { A: { name: "Lehrerin", voice: "katja" }, B: { name: "Sven", voice: "conrad" } },
    lines: [
      { speaker: "A", de: "Guten Morgen! Wir arbeiten jetzt zu zweit im Kurs.", en: "Good morning! We are working in pairs in the course now." },
      { speaker: "B", de: "Lesen wir zuerst den Text oder hören wir den Dialog?", en: "Do we read the text first or listen to the dialogue?" },
      { speaker: "A", de: "Zuerst hören Sie den Dialog und lesen still mit.", en: "First you listen to the dialogue and read along silently." },
      { speaker: "B", de: "Und sprechen wir die Redemittel dann laut mit?", en: "And do we speak the useful phrases aloud along with it then?" },
      { speaker: "A", de: "Ja, Sie lesen mit, sprechen mit und variieren dann das Gespräch!", en: "Yes, you read along, speak along, and then vary the conversation!" }
    ]
  },
  {
    id: "kap1-26",
    chapters: ["kap-1"],
    category: "Im Deutschkurs",
    title: "W-Frage und Aussagesatz",
    context: "Reviewing Chapter 1 grammar terms cleanly in class.",
    speakers: { A: { name: "Anna", voice: "seraphina" }, B: { name: "Lehrer Weber", voice: "florian" } },
    lines: [
      { speaker: "A", de: "Herr Weber, eine Frage über die Grammatik: Was ist eine W-Frage?", en: "Mr. Weber, a question about the grammar: What is a W-question?" },
      { speaker: "B", de: "Gute Frage! In einer W-Frage steht zuerst das W-Wort: wie, wo, woher oder wer.", en: "Good question! In a W-question, the W-word stands first: how, where, from where, or who." },
      { speaker: "A", de: "Und wo steht das Verb im Aussagesatz?", en: "And where does the verb stand in a declarative sentence?" },
      { speaker: "B", de: "Im Aussagesatz steht zuerst das Subjekt oder Personalpronomen, und auf Position zwei das Verb!", en: "In a statement, the subject or personal pronoun stands first, and the verb in position two!" },
      { speaker: "A", de: "Ah: Ich komme aus Indien — ich ist Personalpronomen und Subjekt!", en: "Ah: 'Ich komme aus Indien' — 'ich' is personal pronoun and subject!" },
      { speaker: "B", de: "Sehr gute Antwort, Anna!", en: "Very good answer, Anna!" }
    ]
  },
  {
    id: "kap1-27",
    chapters: ["kap-1"],
    category: "Im Deutschkurs",
    title: "Die Tabelle ergänzen",
    context: "Matching words and completing a table together.",
    speakers: { A: { name: "Mina", voice: "amala" }, B: { name: "Lukas", voice: "killian" } },
    lines: [
      { speaker: "A", de: "Lukas, was machen wir hier? Ordnen wir die Wörter zu?", en: "Lukas, what are we doing here? Are we matching the words?" },
      { speaker: "B", de: "Ja, wir schauen, welche Wörter zusammengehören: Land und Sprache.", en: "Yes, we look at which words belong together: country and language." },
      { speaker: "A", de: "Und dann ergänzen wir die Tabelle?", en: "And then we complete the table?" },
      { speaker: "B", de: "Genau, wir ergänzen den Text in der Tabelle und notieren jede Antwort.", en: "Exactly, we complete the text in the table and note down every answer." },
      { speaker: "A", de: "Sammeln wir auch andere Redemittel über das Befinden?", en: "Do we also collect other useful phrases about wellbeing?" },
      { speaker: "B", de: "Ja: Wie geht es dir? — und wie man darauf reagiert!", en: "Yes: 'How are you?' — and how one reacts to it!" }
    ]
  },
  {
    id: "kap1-28",
    chapters: ["kap-1"],
    category: "Im Deutschkurs",
    title: "Formell oder informell reagieren",
    context: "Practicing how to react politely to greetings.",
    speakers: { A: { name: "Lehrerin", voice: "leni" }, B: { name: "Tim", voice: "jonas" } },
    lines: [
      { speaker: "A", de: "Tim, wir spielen zwei Situationen: einmal formell, einmal informell.", en: "Tim, we are playing two situations: once formal, once informal." },
      { speaker: "B", de: "Gut! Sie fragen nach dem Befinden, und ich reagiere darauf?", en: "Good! You ask about how I am, and I react to it?" },
      { speaker: "A", de: "Ja! Situation eins: Guten Tag, Herr Tim! Wie geht es Ihnen?", en: "Yes! Situation one: Good day, Mr. Tim! How are you?" },
      { speaker: "B", de: "Danke, gut! Und Ihnen? — Das ist formell mit Sie.", en: "Thanks, good! And you? — That is formal with 'Sie'." },
      { speaker: "A", de: "Und Situation zwei informell: Hallo Tim, wie geht es dir?", en: "And situation two informal: Hello Tim, how are you?" },
      { speaker: "B", de: "Sehr gut, danke! Und dir? Tschüs, bis bald!", en: "Very good, thanks! And you? Bye, see you soon!" }
    ]
  },
  {
    id: "kap1-29",
    chapters: ["kap-1"],
    category: "Im Deutschkurs",
    title: "Unser Kursplakat",
    context: "Creating a class poster with names, countries, and languages.",
    speakers: { A: { name: "Sofia", voice: "seraphina" }, B: { name: "Cem", voice: "conrad" } },
    lines: [
      { speaker: "A", de: "Cem, wir machen zusammen ein Kursplakat über unsere Gruppe!", en: "Cem, we are making a course poster about our group together!" },
      { speaker: "B", de: "Super! Was schreiben wir zuerst auf das Kursplakat?", en: "Great! What do we write first on the course poster?" },
      { speaker: "A", de: "Vorname, Land, Stadt und Sprache — wie ein kurzes Interview!", en: "First name, country, city, and language — like a short interview!" },
      { speaker: "B", de: "Und die anderen Personen im Kurs raten dann: Wer ist wer?", en: "And the other people in the course then guess: Who is who?" },
      { speaker: "A", de: "Ja! Wir variieren die Fragen mit wer, wie, was, wo und woher.", en: "Yes! We vary the questions with who, how, what, where, and from where." }
    ]
  },
  {
    id: "kap1-30",
    chapters: ["kap-1"],
    category: "Im Deutschkurs",
    title: "Alles aus Kapitel eins!",
    context: "End-of-chapter recap between study partners.",
    speakers: { A: { name: "Nora", voice: "ingrid" }, B: { name: "Felix", voice: "florian" } },
    lines: [
      { speaker: "A", de: "Felix, wir kennen jetzt so viele Wörter und Redemittel auf Deutsch!", en: "Felix, we know so many words and useful phrases in German now!" },
      { speaker: "B", de: "Ja! Wir grüßen, stellen Personen vor, buchstabieren und verabschieden uns.", en: "Yes! We greet, introduce people, spell, and say goodbye." },
      { speaker: "A", de: "Und wir verstehen die Zahlen von null bis zwanzig, Telefonnummer und E-Mail-Adresse.", en: "And we understand the numbers from zero to twenty, phone number, and email address." },
      { speaker: "B", de: "Lesen wir den letzten Dialog noch einmal zu zweit?", en: "Shall we read the last dialogue once more in pairs?" },
      { speaker: "A", de: "Ja, du liest zuerst, ich lese mit und spreche dann laut!", en: "Yes, you read first, I read along and then speak aloud!" }
    ]
  }
];

// ─── MULTI-CHAPTER MIXER CONVERSATIONS (Unlocked when chapters are combined) ───
export const MIXER_CONVERSATIONS = [
  {
    id: "mix-k1-k2-01",
    chapters: ["kap-1", "kap-2"],
    category: "Chapter Mix · Kap. 1 + 2",
    title: "Neuer Kollege im Büro",
    context: "Combining introductions & languages (Kap. 1) with work, days & hobbies (Kap. 2).",
    speakers: { A: { name: "Laura", voice: "seraphina" }, B: { name: "Mateo", voice: "florian" } },
    lines: [
      { speaker: "A", de: "Guten Morgen! Ich bin Laura, deine Kollegin hier im Büro. Wie heißt du?", en: "Good morning! I am Laura, your colleague here in the office. What is your name?" },
      { speaker: "B", de: "Guten Morgen, Laura! Ich heiße Mateo und komme aus Spanien.", en: "Good morning, Laura! My name is Mateo and I come from Spain." },
      { speaker: "A", de: "Sprichst du schon gut Deutsch! Arbeitest du von Montag bis Freitag?", en: "You already speak good German! Do you work from Monday to Friday?" },
      { speaker: "B", de: "Nein, am Freitag habe ich frei. Und was machst du gern am Wochenende?", en: "No, on Friday I am off. And what do you like doing on the weekend?" },
      { speaker: "A", de: "Am Samstag fotografiere ich gern und lese Bücher. Spielst du Fußball?", en: "On Saturday I like taking photos and reading books. Do you play football?" },
      { speaker: "B", de: "Ja, sehr gern! Gibst du mir deine Handynummer?", en: "Yes, very much! Will you give me your mobile number?" }
    ]
  },
  {
    id: "mix-k1-k2-02",
    chapters: ["kap-1", "kap-2"],
    category: "Chapter Mix · Kap. 1 + 2",
    title: "Anmeldung im Sportclub",
    context: "Spelling names & contact info (Kap. 1) + hobbies, weekdays & numbers over 20 (Kap. 2).",
    speakers: { A: { name: "Empfang", voice: "conrad" }, B: { name: "Priya", voice: "amala" } },
    lines: [
      { speaker: "A", de: "Guten Tag! Wie ist Ihr Familienname, bitte? Bitte buchstabieren Sie!", en: "Good day! What is your last name, please? Please spell it!" },
      { speaker: "B", de: "Guten Tag! Mein Nachname ist Sharma: S – H – A – R – M – A.", en: "Good day! My last name is Sharma: S – H – A – R – M – A." },
      { speaker: "A", de: "Danke! Schwimmen Sie gern oder tanzen Sie gern am Dienstag und Donnerstag?", en: "Thank you! Do you like swimming or dancing on Tuesday and Thursday?" },
      { speaker: "B", de: "Ich schwimme sehr gern am Mittwoch und Sonntag! Was kostet der Kurs?", en: "I really like swimming on Wednesday and Sunday! What does the course cost?" },
      { speaker: "A", de: "Fünfunddreißig Euro im Monat. Wie ist Ihre E-Mail-Adresse?", en: "Thirty-five euros a month. What is your email address?" },
      { speaker: "B", de: "priya punkt sharma — ich notiere auch meine Telefonnummer!", en: "priya dot sharma — I'll also write down my phone number!" }
    ]
  },
  {
    id: "mix-k1-k2-03",
    chapters: ["kap-1", "kap-2"],
    category: "Chapter Mix · Kap. 1 + 2",
    title: "Freunde im Café am Samstag",
    context: "Introducing friends & origins (Kap. 1) + professions & cinema plans (Kap. 2).",
    speakers: { A: { name: "Jan", voice: "jan" }, B: { name: "Klara", voice: "katja" } },
    lines: [
      { speaker: "A", de: "Hallo Klara! Wie geht es dir? Das ist mein Freund Cem aus der Türkei.", en: "Hello Klara! How are you? This is my friend Cem from Turkey." },
      { speaker: "B", de: "Hallo Jan, hallo Cem! Was bist du von Beruf, Cem?", en: "Hello Jan, hello Cem! What is your profession, Cem?" },
      { speaker: "A", de: "Cem ist Arzt von Beruf und arbeitet viel im Krankenhaus.", en: "Cem is a doctor by profession and works a lot at the hospital." },
      { speaker: "B", de: "Und ich bin Lehrerin! Gehen wir heute Abend zusammen ins Kino?", en: "And I am a teacher! Shall we go to the cinema together tonight?" },
      { speaker: "A", de: "Ja, super! Der Film ist auf Deutsch mit Englisch!", en: "Yes, great! The film is in German with English!" }
    ]
  },
  {
    id: "mix-k1-k3-01",
    chapters: ["kap-1", "kap-3"],
    category: "Chapter Mix · Kap. 1 + 3",
    title: "Touristin sucht das Hotel",
    context: "Greetings & origin (Kap. 1) + asking directions & transport in the city (Kap. 3).",
    speakers: { A: { name: "Touristin Sofia", voice: "leni" }, B: { name: "Herr Weber", voice: "killian" } },
    lines: [
      { speaker: "A", de: "Entschuldigung, guten Tag! Ich bin neu hier und komme aus Italien.", en: "Excuse me, good day! I am new here and come from Italy." },
      { speaker: "B", de: "Guten Tag! Sie sprechen aber gut Deutsch! Wie helfe ich Ihnen?", en: "Good day! You speak good German though! How can I help you?" },
      { speaker: "A", de: "Wo ist das Hotel Alster? Ist das hier in der Nähe?", en: "Where is Hotel Alster? Is that nearby here?" },
      { speaker: "B", de: "Gehen Sie zuerst geradeaus und dann links am Bahnhof. Da ist das Hotel!", en: "Go straight ahead first and then left at the train station. There is the hotel!" },
      { speaker: "A", de: "Oder fährt da eine U-Bahn? Mein Koffer ist groß!", en: "Or does a subway go there? My suitcase is big!" },
      { speaker: "B", de: "Ja, die U-Bahn Nummer drei! Auf Wiedersehen!", en: "Yes, subway number three! Goodbye!" }
    ]
  },
  {
    id: "mix-k1-k3-02",
    chapters: ["kap-1", "kap-3"],
    category: "Chapter Mix · Kap. 1 + 3",
    title: "Im Sommer mit dem Reiseführer",
    context: "Languages & tour guide (Kap. 1) + sights, months & seasons (Kap. 3).",
    speakers: { A: { name: "Reiseführerin", voice: "ingrid" }, B: { name: "Kenji", voice: "jonas" } },
    lines: [
      { speaker: "A", de: "Willkommen in Hamburg! Ich bin Ihre Reiseführerin. Woher kommen Sie?", en: "Welcome to Hamburg! I am your tour guide. Where do you come from?" },
      { speaker: "B", de: "Ich komme aus Japan und lerne seit August Deutsch.", en: "I come from Japan and have been learning German since August." },
      { speaker: "A", de: "Im Sommer ist der Hafen hier wunderbar! Rechts sehen Sie das Rathaus und eine Kirche.", en: "In summer the harbor here is wonderful! On the right you see the town hall and a church." },
      { speaker: "B", de: "Und ist das links eine Brücke oder ein Schiff?", en: "And is that on the left a bridge or a ship?" },
      { speaker: "A", de: "Das ist ein großes Schiff! Kommen Sie, wir gehen geradeaus.", en: "That is a big ship! Come on, let's go straight ahead." }
    ]
  },
  {
    id: "mix-k1-k2-k3-01",
    chapters: ["kap-1", "kap-2", "kap-3"],
    category: "Chapter Mix · Kap. 1 + 2 + 3",
    title: "Wochenende in Hamburg",
    context: "Full A1.1 Milestone Mix combining Introductions (1), Hobbies/Days (2), and City/Transport (3).",
    speakers: { A: { name: "Nina", voice: "seraphina" }, B: { name: "Paul", voice: "conrad" } },
    lines: [
      { speaker: "A", de: "Hallo Paul! Wie geht es dir? Hast du am Samstag frei?", en: "Hello Paul! How are you? Are you off on Saturday?" },
      { speaker: "B", de: "Hallo Nina! Ja, am Samstag arbeite ich nicht. Mein Kollege aus Frankreich kommt nach Hamburg!", en: "Hello Nina! Yes, on Saturday I don't work. My colleague from France is coming to Hamburg!" },
      { speaker: "A", de: "Oh, spricht er Deutsch oder Englisch? Was macht ihr zusammen?", en: "Oh, does he speak German or English? What are you doing together?" },
      { speaker: "B", de: "Er spricht ein bisschen Deutsch. Wir fahren mit dem Fahrrad zum Hafen und ins Museum.", en: "He speaks a little German. We are riding bikes to the harbor and to the museum." },
      { speaker: "A", de: "Im Mai ist das Wetter super! Geht ihr am Abend auch ins Café?", en: "In May the weather is great! Are you also going to the café in the evening?" },
      { speaker: "B", de: "Ja, direkt rechts neben dem Rathaus! Kommst du mit?", en: "Yes, right next to the town hall on the right! Will you come along?" },
      { speaker: "A", de: "Sehr gern! Bis Samstag, tschüs!", en: "Gladly! See you Saturday, bye!" }
    ]
  }
];
