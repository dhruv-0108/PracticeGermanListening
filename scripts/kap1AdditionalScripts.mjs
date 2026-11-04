// 15 Brand New, Authentic A1 Kapitel 1 Conversations
// Expands topics:
// - Begrüßung & Kennenlernen: kap1-26, kap1-27, kap1-28 (Total: 8)
// - Länder & Sprachen: kap1-29, kap1-30, kap1-31 (Total: 9)
// - Telefon, E-Mail & Buchstabieren: kap1-32, kap1-33, kap1-34 (Total: 8)
// - Unterwegs & International: kap1-35, kap1-36, kap1-37 (Total: 7)
// - Im Deutschkurs: kap1-38, kap1-39, kap1-40 (Total: 8)
//
// Strict Präsens for A1, natural fillers, accurate DACH regional accents (AT/CH).

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

export const KAP1_ADDITIONAL_CONVERSATIONS = [
  // ─── CATEGORY 1: Begrüßung & Kennenlernen (3 new clips: kap1-26, kap1-27, kap1-28) ───
  {
    id: "kap1-26",
    chapters: ["kap-1"],
    category: "Begrüßung & Kennenlernen",
    lengthTier: "medium",
    title: "Morgen in der WG-Küche",
    context: "Early morning in a shared student flat (WG) in Berlin: Two flatmates meet in the kitchen for coffee.",
    speakers: {
      A: { name: "Jonas", voice: "florian" },
      B: { name: "Maya", voice: "amala" }
    },
    lines: [
      { speaker: "A", de: "Guten Morgen! Ich bin Jonas. Du bist neu in der WG, oder?", en: "Good morning! I am Jonas. You are new in the flatshare, right?" },
      { speaker: "B", de: "Guten Morgen, Jonas! Ja, genau. Ich heiße Maya. Freut mich!", en: "Good morning, Jonas! Yes, exactly. My name is Maya. Pleased to meet you!" },
      { speaker: "A", de: "Ganz meinerseits, Maya! Willkommen in Berlin! Wie geht es dir heute Morgen?", en: "The pleasure is mine, Maya! Welcome to Berlin! How are you this morning?" },
      { speaker: "B", de: "Danke, sehr gut! Die Wohnung ist wirklich schön. Und wie geht es dir?", en: "Thanks, very good! The apartment is really beautiful. And how are you?" },
      { speaker: "A", de: "Auch gut, danke! Trinkst du einen Kaffee oder Tee zum Frühstück?", en: "Also good, thanks! Are you drinking coffee or tea for breakfast?" },
      { speaker: "B", de: "Sehr gern Kaffee, bitte! Schwarz, ohne Milch. Danke schön!", en: "Very gladly coffee, please! Black, without milk. Thank you very much!" },
      { speaker: "A", de: "Kein Problem! Woher kommst du eigentlich, Maya?", en: "No problem! Where do you come from actually, Maya?" },
      { speaker: "B", de: "Ich komme aus Spanien, aus Valencia. Und du?", en: "I come from Spain, from Valencia. And you?" },
      { speaker: "A", de: "Ich komme aus Deutschland, aus Leipzig. Wohnst du zum ersten Mal in einer WG?", en: "I come from Germany, from Leipzig. Are you living in a flatshare for the first time?" },
      { speaker: "B", de: "Ja, genau. Es ist alles noch ganz neu für mich!", en: "Yes, exactly. Everything is still completely new to me!" },
      { speaker: "A", de: "Alles klar! Wir helfen dir natürlich gern.", en: "All right! We gladly help you, of course." },
      { speaker: "B", de: "Vielen Dank, Jonas! Das ist sehr nett.", en: "Thank you so much, Jonas! That is very kind." },
      { speaker: "A", de: "Gern geschehen! Ich gehe jetzt zur Universität. Schönen Tag noch!", en: "You're welcome! I'm going to university now. Have a nice day!" },
      { speaker: "B", de: "Danke, gleichfalls! Bis später!", en: "Thanks, you too! See you later!" }
    ],
    newWords: [
      { word: "die WG", meaning: "flatshare / shared apartment (short for Wohngemeinschaft)" },
      { word: "die Küche", meaning: "kitchen" },
      { word: "der Kaffee", meaning: "coffee" },
      { word: "der Tee", meaning: "tea" },
      { word: "das Frühstück", meaning: "breakfast" }
    ]
  },
  {
    id: "kap1-27",
    chapters: ["kap-1"],
    category: "Begrüßung & Kennenlernen",
    lengthTier: "medium",
    title: "Zufälliges Treffen im Bus",
    context: "Two former acquaintances meet unexpectedly on a city bus in Hamburg.",
    speakers: {
      A: { name: "David", voice: "killian" },
      B: { name: "Laura", voice: "seraphina" }
    },
    lines: [
      { speaker: "A", de: "Hallo! Entschuldigung, bist du nicht Laura?", en: "Hello! Excuse me, aren't you Laura?" },
      { speaker: "B", de: "Hallo! Ja, ich bin Laura. Und du bist David, richtig?", en: "Hello! Yes, I am Laura. And you are David, right?" },
      { speaker: "A", de: "Genau! Was für eine Überraschung! Wie geht es dir denn?", en: "Exactly! What a surprise! How are you doing?" },
      { speaker: "B", de: "Danke, super! Und wie geht es dir, David?", en: "Thanks, great! And how are you, David?" },
      { speaker: "A", de: "Es geht mir auch sehr gut, danke! Wohnst du immer noch in Hamburg?", en: "I'm doing very well too, thanks! Do you still live in Hamburg?" },
      { speaker: "B", de: "Ja, ich wohne jetzt hier im Zentrum. Und wo wohnst du?", en: "Yes, I live here in the center now. And where do you live?" },
      { speaker: "A", de: "Ich wohne in Altona, ganz in der Nähe.", en: "I live in Altona, very close by." },
      { speaker: "B", de: "Ach so, wunderbar! Wohin fährst du jetzt mit dem Bus?", en: "Oh I see, wonderful! Where are you going by bus now?" },
      { speaker: "A", de: "Ich fahre zur Sprachschule. Ich lerne dort Spanisch.", en: "I am going to the language school. I am learning Spanish there." },
      { speaker: "B", de: "Wirklich? Toll! Ich lerne gerade Italienisch.", en: "Really? Awesome! I am currently learning Italian." },
      { speaker: "A", de: "Schau mal, meine Haltestelle kommt schon. Moment mal!", en: "Look, my stop is already coming up. Just a moment!" },
      { speaker: "B", de: "Kein Problem, mach's gut, David!", en: "No problem, take care, David!" },
      { speaker: "A", de: "Danke! Hast du meine Handynummer noch?", en: "Thanks! Do you still have my cell phone number?" },
      { speaker: "B", de: "Na klar! Ich schreibe dir bald. Bis bald und schönen Tag noch!", en: "Sure thing! I will text you soon. See you soon and have a nice day!" }
    ],
    newWords: [
      { word: "der Bus", meaning: "bus" },
      { word: "die Überraschung", meaning: "surprise" },
      { word: "die Haltestelle", meaning: "bus stop" }
    ]
  },
  {
    id: "kap1-28",
    chapters: ["kap-1"],
    category: "Begrüßung & Kennenlernen",
    lengthTier: "long",
    title: "Einchecken in der Wiener Pension",
    context: "A guest checks into a charming family-run guesthouse near Stephansplatz in Vienna.",
    speakers: {
      A: { name: "Frau Hofer", voice: "ingrid" },
      B: { name: "Herr Becker", voice: "conrad" }
    },
    lines: [
      { speaker: "A", de: "Grüß Gott! Herzlich willkommen in unserer Pension in Wien!", en: "Greetings! A warm welcome to our guesthouse in Vienna!" },
      { speaker: "B", de: "Guten Tag! Mein Name ist Thomas Becker. Ich habe ein Zimmer reserviert.", en: "Good day! My name is Thomas Becker. I reserved a room." },
      { speaker: "A", de: "Freut mich sehr, Herr Becker! Wie geht es Ihnen nach der Reise?", en: "Pleased to meet you, Mr. Becker! How are you after the journey?" },
      { speaker: "B", de: "Ganz meinerseits! Danke gut, aber die Fahrt war etwas lang.", en: "Likewise! Good thanks, but the trip was a bit long." },
      { speaker: "A", de: "Das verstehe ich. Moment mal, ich suche Ihre Reservierung im Computer.", en: "I understand that. Just a moment, I am searching for your reservation in the computer." },
      { speaker: "B", de: "Kein Problem, lassen Sie sich Zeit!", en: "No problem, take your time!" },
      { speaker: "A", de: "Wie ist bitte Ihr Nachname? Buchstabieren Sie ihn bitte kurz.", en: "What is your last name, please? Please spell it briefly." },
      { speaker: "B", de: "B – E – C – K – E – R. Becker.", en: "B – E – C – K – E – R. Becker." },
      { speaker: "A", de: "Wunderbar, danke! Und Ihr Vorname ist Thomas, richtig?", en: "Wonderful, thank you! And your first name is Thomas, right?" },
      { speaker: "B", de: "Ja, genau. Thomas mit T – H.", en: "Yes, exactly. Thomas with T – H." },
      { speaker: "A", de: "Alles klar, Herr Becker. Woher kommen Sie denn angereist?", en: "All right, Mr. Becker. Where did you travel from?" },
      { speaker: "B", de: "Ich komme aus Deutschland, aus Köln.", en: "I come from Germany, from Cologne." },
      { speaker: "A", de: "Aus Köln, wunderbar! Sprechen Sie auch andere Sprachen?", en: "From Cologne, wonderful! Do you also speak other languages?" },
      { speaker: "B", de: "Ja, ich spreche Deutsch, fließend Englisch und ein bisschen Französisch.", en: "Yes, I speak German, fluent English, and a little French." },
      { speaker: "A", de: "Sehr gut! Hier ist Ihr Schlüssel für Zimmer Nummer zwölf im zweiten Stock.", en: "Very good! Here is your key for room number twelve on the second floor." },
      { speaker: "B", de: "Vielen Dank! Gibt es hier im Haus auch einen Stadtplan von Wien?", en: "Thank you very much! Is there also a city map of Vienna here in the building?" },
      { speaker: "A", de: "Na klar, bitte schön! Hier ist ein Reiseführer und ein Plan.", en: "Of course, here you go! Here is a travel guide and a map." },
      { speaker: "B", de: "Großartig! Herzlichen Dank für Ihre Hilfe, Frau Hofer!", en: "Great! Heartfelt thanks for your help, Ms. Hofer!" },
      { speaker: "A", de: "Sehr gern geschehen! Schönen Tag noch und einen angenehmen Aufenthalt in Wien!", en: "You are very welcome! Have a nice day and a pleasant stay in Vienna!" },
      { speaker: "B", de: "Danke schön, Auf Wiedersehen!", en: "Thank you very much, goodbye!" }
    ],
    newWords: [
      { word: "Grüß Gott", meaning: "Hello / Good day (traditional Austrian and Southern German greeting)" },
      { word: "die Pension", meaning: "guesthouse / small hotel" },
      { word: "das Zimmer", meaning: "room" },
      { word: "der Schlüssel", meaning: "key" },
      { word: "der Stadtplan", meaning: "city map" }
    ]
  },

  // ─── CATEGORY 2: Länder & Sprachen (3 new clips: kap1-29, kap1-30, kap1-31) ───
  {
    id: "kap1-29",
    chapters: ["kap-1"],
    category: "Länder & Sprachen",
    lengthTier: "medium",
    title: "Sprachenaustausch auf dem Campus",
    context: "Two international exchange students compare their native tongues and language backgrounds in the university courtyard.",
    speakers: {
      A: { name: "Marco", voice: "killian" },
      B: { name: "Leila", voice: "amala" }
    },
    lines: [
      { speaker: "A", de: "Hallo! Ich bin Marco aus Italien. Und wie heißt du?", en: "Hello! I am Marco from Italy. And what is your name?" },
      { speaker: "B", de: "Hallo Marco! Ich heiße Leila. Ich komme aus Marokko.", en: "Hello Marco! My name is Leila. I come from Morocco." },
      { speaker: "A", de: "Freut mich, Leila! Welche Sprachen sprichst du denn?", en: "Nice to meet you, Leila! What languages do you speak?" },
      { speaker: "B", de: "Meine Muttersprache ist Arabisch. Und ich spreche fließend Französisch und Englisch.", en: "My native language is Arabic. And I speak fluent French and English." },
      { speaker: "A", de: "Wow, drei Sprachen! Und du lernst jetzt hier auch Deutsch?", en: "Wow, three languages! And you are learning German here now as well?" },
      { speaker: "B", de: "Ja, genau! Ich lerne Deutsch im Sprachkurs. Und welche Sprachen sprichst du, Marco?", en: "Yes, exactly! I am learning German in the language course. And what languages do you speak, Marco?" },
      { speaker: "A", de: "Natürlich Italienisch, das ist meine Sprache. Und ich spreche gut Englisch und ein bisschen Spanisch.", en: "Of course Italian, that is my language. And I speak good English and a little Spanish." },
      { speaker: "B", de: "Verstehst du auch Portugiesisch? Italienisch und Spanisch sind ja ähnlich!", en: "Do you also understand Portuguese? Italian and Spanish are quite similar!" },
      { speaker: "A", de: "Ein bisschen! Ich verstehe viele Wörter, aber sprechen kann ich es nicht.", en: "A little bit! I understand many words, but I cannot speak it." },
      { speaker: "B", de: "Ach so! Und wie findest du die deutsche Sprache?", en: "Oh I see! And how do you find the German language?" },
      { speaker: "A", de: "Deutsch ist interessant, aber die Grammatik ist manchmal nicht so einfach!", en: "German is interesting, but the grammar is sometimes not so simple!" },
      { speaker: "B", de: "Das stimmt! Aber wir üben zusammen, dann geht es schnell.", en: "That is true! But we practice together, then it goes quickly." },
      { speaker: "A", de: "Sehr gute Idee! Wir sprechen ab jetzt jeden Tag auf Deutsch!", en: "Very good idea! From now on we speak German every day!" },
      { speaker: "B", de: "Alles klar, abgemacht! Bis morgen im Kurs, Marco!", en: "All right, agreed! See you tomorrow in the course, Marco!" }
    ],
    newWords: [
      { word: "die Muttersprache", meaning: "native language / mother tongue" },
      { word: "Marokko", meaning: "Morocco" },
      { word: "fließend", meaning: "fluent / fluently" },
      { word: "abgemacht", meaning: "deal / agreed" }
    ]
  },
  {
    id: "kap1-30",
    chapters: ["kap-1"],
    category: "Länder & Sprachen",
    lengthTier: "long",
    title: "Die internationale Reisegruppe",
    context: "A city tour guide welcomes a multinational group of visitors at the Römer square in Frankfurt.",
    speakers: {
      A: { name: "Stefan", voice: "florian" },
      B: { name: "Elena", voice: "katja" }
    },
    lines: [
      { speaker: "A", de: "Guten Tag, meine Damen und Herren! Herzlich willkommen in Frankfurt!", en: "Good day, ladies and gentlemen! Welcome to Frankfurt!" },
      { speaker: "B", de: "Guten Tag! Wir freuen uns sehr auf die Tour.", en: "Good day! We are really looking forward to the tour." },
      { speaker: "A", de: "Freut mich! Mein Name ist Stefan, ich bin Ihr Reiseführer für heute.", en: "Pleased to meet you! My name is Stefan, I am your tour guide for today." },
      { speaker: "B", de: "Schön Sie kennenzulernen, Herr Stefan!", en: "Nice to meet you, Mr. Stefan!" },
      { speaker: "A", de: "Bevor wir starten: Woher kommen Sie alle? Woher kommen Sie, gnädige Frau?", en: "Before we start: Where do you all come from? Where do you come from, madam?" },
      { speaker: "B", de: "Ich heiße Elena und komme aus Griechenland, aus Athen.", en: "My name is Elena and I come from Greece, from Athens." },
      { speaker: "A", de: "Ah, Griechenland! Sprechen Sie Griechisch als Muttersprache?", en: "Ah, Greece! Do you speak Greek as your native language?" },
      { speaker: "B", de: "Ja, genau. Und ich spreche Englisch und ein bisschen Deutsch.", en: "Yes, exactly. And I speak English and a little German." },
      { speaker: "A", de: "Wunderbar! Verstehen Sie mich gut, wenn ich langsam spreche?", en: "Wonderful! Do you understand me well when I speak slowly?" },
      { speaker: "B", de: "Ja, Sie sprechen sehr klar und deutlich. Das verstehe ich gut!", en: "Yes, you speak very clearly and distinctly. I understand that well!" },
      { speaker: "A", de: "Perfekt. Und Ihr Reisepartner dort drüben, woher kommt er?", en: "Perfect. And your travel companion over there, where does he come from?" },
      { speaker: "B", de: "Das ist Kenji. Er kommt aus Japan, aus Tokio.", en: "That is Kenji. He comes from Japan, from Tokyo." },
      { speaker: "A", de: "Aus Japan! Welche Sprachen spricht Kenji?", en: "From Japan! What languages does Kenji speak?" },
      { speaker: "B", de: "Er spricht natürlich Japanisch und sehr gutes Englisch. Deutsch lernt er erst seit zwei Wochen!", en: "He speaks Japanese of course and very good English. He has only been learning German for two weeks!" },
      { speaker: "A", de: "Fantastisch! Dann ist unsere Gruppe heute wirklich international: Griechenland, Japan und Deutschland!", en: "Fantastic! Then our group today is truly international: Greece, Japan, and Germany!" },
      { speaker: "B", de: "Stimmt, eine tolle Mischung! Welche Sprachen sprechen Sie als Reiseführer?", en: "Right, a great mix! What languages do you speak as a tour guide?" },
      { speaker: "A", de: "Ich spreche Deutsch, Englisch, Französisch und ein paar Worte Italienisch.", en: "I speak German, English, French, and a few words of Italian." },
      { speaker: "B", de: "Beeindruckend! Vier Sprachen sind wirklich viel.", en: "Impressive! Four languages is really a lot." },
      { speaker: "A", de: "Danke schön! Haben Sie alle Ihre Kameras und Stadtpläne dabei?", en: "Thank you! Do you all have your cameras and city maps with you?" },
      { speaker: "B", de: "Ja, alles bereit! Wir können losgehen.", en: "Yes, everything ready! We can get going." },
      { speaker: "A", de: "Alles klar! Dann gehen wir zuerst zum Fluss. Folgen Sie mir bitte!", en: "All right! Then first we walk to the river. Please follow me!" },
      { speaker: "B", de: "Sehr gern! Vielen Dank, Herr Stefan!", en: "Very gladly! Thank you so much, Mr. Stefan!" }
    ],
    newWords: [
      { word: "die Reisegruppe", meaning: "tour group" },
      { word: "deutlich", meaning: "distinct / clear" },
      { word: "die Mischung", meaning: "mixture / mix" },
      { word: "die Kamera", meaning: "camera" },
      { word: "losgehen", meaning: "to get started / to head off" }
    ]
  },
  {
    id: "kap1-31",
    chapters: ["kap-1"],
    category: "Länder & Sprachen",
    lengthTier: "medium",
    title: "Sprachtandem am Zürichsee",
    context: "Two students meet at an outdoor café on Lake Zurich for their first language tandem exchange.",
    speakers: {
      A: { name: "Jan", voice: "jan" },
      B: { name: "Chloé", voice: "seraphina" }
    },
    lines: [
      { speaker: "A", de: "Grüezi! Bist du Chloé für das Sprachtandem?", en: "Hello! Are you Chloé for the language tandem?" },
      { speaker: "B", de: "Grüezi! Ja, genau, ich bin Chloé. Und du bist Jan?", en: "Hello! Yes, exactly, I am Chloé. And you are Jan?" },
      { speaker: "A", de: "Ja, ich bin Jan. Freut mich sehr! Willkommen in Zürich!", en: "Yes, I am Jan. Very nice to meet you! Welcome to Zurich!" },
      { speaker: "B", de: "Ganz meinerseits! Danke schön, Jan. Der See ist wunderschön!", en: "Likewise! Thank you, Jan. The lake is gorgeous!" },
      { speaker: "A", de: "Stimmt! Woher kommst du denn ursprünglich, Chloé?", en: "True! Where do you come from originally, Chloé?" },
      { speaker: "B", de: "Ich komme aus Frankreich, aus Lyon. Meine Muttersprache ist Französisch.", en: "I come from France, from Lyon. My native language is French." },
      { speaker: "A", de: "Wunderbar! Ich komme aus der Schweiz und spreche Deutsch und Schweizerdeutsch.", en: "Wonderful! I come from Switzerland and speak German and Swiss German." },
      { speaker: "B", de: "Das passt perfekt! Du lernst Französisch und ich lerne Deutsch.", en: "That fits perfectly! You learn French and I learn German." },
      { speaker: "A", de: "Genau, so funktioniert unser Tandem! Welche Sprachen sprichst du noch?", en: "Exactly, that is how our tandem works! What other languages do you speak?" },
      { speaker: "B", de: "Ich spreche fließend Englisch und lerne jetzt fleißig Deutsch.", en: "I speak fluent English and am now learning German diligently." },
      { speaker: "A", de: "Dein Deutsch ist aber schon sehr gut! Du sprichst wunderbar.", en: "Your German is already very good though! You speak wonderfully." },
      { speaker: "B", de: "Vielen Dank! Manchmal fehlen mir noch ein paar Wörter.", en: "Thank you so much! Sometimes I still lack a few words." },
      { speaker: "A", de: "Kein Problem, das lernen wir zusammen Schritt für Schritt.", en: "No problem, we will learn that together step by step." },
      { speaker: "B", de: "Alles klar, abgemacht! Trinken wir zuerst einen Kaffee?", en: "All right, agreed! Shall we drink a coffee first?" }
    ],
    newWords: [
      { word: "Grüezi", meaning: "Hello / Good day (Swiss German greeting)" },
      { word: "das Sprachtandem", meaning: "language exchange partnership" },
      { word: "der See", meaning: "lake" },
      { word: "fleißig", meaning: "hardworking / diligent" },
      { word: "Schritt für Schritt", meaning: "step by step" }
    ]
  },

  // ─── CATEGORY 3: Telefon, E-Mail & Buchstabieren (3 new clips: kap1-32, kap1-33, kap1-34) ───
  {
    id: "kap1-32",
    chapters: ["kap-1"],
    category: "Telefon, E-Mail & Buchstabieren",
    lengthTier: "long",
    title: "Telefonat mit der Arztpraxis",
    context: "A patient calls a medical clinic in Munich to register personal details and contact information.",
    speakers: {
      A: { name: "Frau Schmidt", voice: "katja" },
      B: { name: "Herr Yilmaz", voice: "conrad" }
    },
    lines: [
      { speaker: "A", de: "Praxis Doktor Berger, guten Tag! Mein Name ist Schmidt. Was kann ich für Sie tun?", en: "Doctor Berger's practice, good day! My name is Schmidt. What can I do for you?" },
      { speaker: "B", de: "Guten Tag, Frau Schmidt! Mein Name ist Emre Yilmaz. Ich brauche einen Termin.", en: "Good day, Ms. Schmidt! My name is Emre Yilmaz. I need an appointment." },
      { speaker: "A", de: "Gern, Herr Yilmaz! Sind Sie schon Patient bei uns oder neu?", en: "Gladly, Mr. Yilmaz! Are you already a patient with us or new?" },
      { speaker: "B", de: "Ich bin neu hier in München und zum ersten Mal bei Ihnen.", en: "I am new here in Munich and visiting you for the first time." },
      { speaker: "A", de: "Alles klar! Dann nehme ich zuerst Ihre Daten auf. Wie heißen Sie mit Vornamen?", en: "All right! Then first I'll record your details. What is your first name?" },
      { speaker: "B", de: "Mein Vorname ist Emre.", en: "My first name is Emre." },
      { speaker: "A", de: "Buchstabieren Sie bitte Ihren Vornamen!", en: "Please spell your first name!" },
      { speaker: "B", de: "E – M – R – E. Vier Buchstaben.", en: "E – M – R – E. Four letters." },
      { speaker: "A", de: "Danke! Und Ihr Nachname war Yilmaz? Bitte auch buchstabieren.", en: "Thank you! And your last name was Yilmaz? Please spell that too." },
      { speaker: "B", de: "Ja: Ypsilon – I – L – M – A – Z.", en: "Yes: Y – I – L – M – A – Z." },
      { speaker: "A", de: "Notiert. Und wie ist Ihre Handynummer für Rückfragen?", en: "Noted. And what is your mobile phone number for questions?" },
      { speaker: "B", de: "Meine Handynummer ist: null – eins – sieben – sechs – drei – vier – acht – neun – zwei – null.", en: "My mobile number is: 0 – 1 – 7 – 6 – 3 – 4 – 8 – 9 – 2 – 0." },
      { speaker: "A", de: "Ich wiederhole kurz: 0176 – 348920. Stimmt das so?", en: "I repeat briefly: 0176 – 348920. Is that correct?" },
      { speaker: "B", de: "Ja, genau, das stimmt perfekt!", en: "Yes, exactly, that is perfectly correct!" },
      { speaker: "A", de: "Haben Sie auch eine E-Mail-Adresse?", en: "Do you also have an email address?" },
      { speaker: "B", de: "Ja, natürlich: emre punkt yilmaz at web punkt de.", en: "Yes, of course: emre dot yilmaz at web dot de." },
      { speaker: "A", de: "Also: emre, Punkt, yilmaz, at, web, Punkt, de. Alles richtig verstanden.", en: "So: emre, dot, yilmaz, at, web, dot, de. Everything understood correctly." },
      { speaker: "B", de: "Wunderbar! Vielen Dank für Ihre Hilfe, Frau Schmidt!", en: "Wonderful! Thank you so much for your help, Ms. Schmidt!" },
      { speaker: "A", de: "Sehr gern geschehen, Herr Yilmaz! Auf Wiederhören!", en: "You are very welcome, Mr. Yilmaz! Goodbye on the phone!" },
      { speaker: "B", de: "Auf Wiederhören!", en: "Goodbye!" }
    ],
    newWords: [
      { word: "die Praxis", meaning: "doctor's surgery / practice" },
      { word: "der Termin", meaning: "appointment" },
      { word: "der Patient", meaning: "patient" },
      { word: "wiederholen", meaning: "to repeat" }
    ]
  },
  {
    id: "kap1-33",
    chapters: ["kap-1"],
    category: "Telefon, E-Mail & Buchstabieren",
    lengthTier: "medium",
    title: "Das vergessene Telefon im Café",
    context: "A customer returns to a café looking for a misplaced smartphone and verifies identity.",
    speakers: {
      A: { name: "Moritz", voice: "killian" },
      B: { name: "Sora", voice: "amala" }
    },
    lines: [
      { speaker: "A", de: "Hallo! Kann ich Ihnen helfen? Suchen Sie etwas?", en: "Hello! Can I help you? Are you looking for something?" },
      { speaker: "B", de: "Hallo! Ja, Hilfe, mein Smartphone liegt glaube ich hier auf dem Tisch!", en: "Hello! Yes, help, I think my smartphone is lying here on the table!" },
      { speaker: "A", de: "Moment mal! Welche Farbe hat das Telefon denn?", en: "Wait a moment! What color is the phone?" },
      { speaker: "B", de: "Es ist schwarz mit einer blauen Hülle.", en: "It is black with a blue case." },
      { speaker: "A", de: "Ja, hier an der Kasse liegt ein schwarzes Handy! Wie ist denn Ihre Telefonnummer?", en: "Yes, here at the cash register lies a black mobile! What is your phone number?" },
      { speaker: "B", de: "Meine Handynummer ist: null – eins – fünf – zwei – acht – neun – drei – eins – vier.", en: "My mobile number is: 0 – 1 – 5 – 2 – 8 – 9 – 3 – 1 – 4." },
      { speaker: "A", de: "Ich rufe kurz an... Moment... Ja, es klingelt! Das ist wirklich Ihr Telefon!", en: "I'll call quickly... Wait... Yes, it rings! That is really your phone!" },
      { speaker: "B", de: "Gott sei Dank! Vielen, vielen Dank!", en: "Thank goodness! Thank you very, very much!" },
      { speaker: "A", de: "Für unser Fundbuch brauche ich aber noch kurz Ihren Namen und Ihre E-Mail.", en: "For our lost-and-found book, however, I still briefly need your name and email." },
      { speaker: "B", de: "Kein Problem! Ich heiße Sora Park. S – O – R – A und P – A – R – K.", en: "No problem! My name is Sora Park. S – O – R – A and P – A – R – K." },
      { speaker: "A", de: "Und Ihre E-Mail-Adresse, bitte?", en: "And your email address, please?" },
      { speaker: "B", de: "sora unterstrich park at mail punkt com. Alles klein geschrieben.", en: "sora underscore park at mail dot com. All written in lowercase." },
      { speaker: "A", de: "Unterstrich, at, Punkt com. Alles notiert! Hier ist Ihr Handy zurück!", en: "Underscore, at, dot com. All noted! Here is your mobile phone back!" },
      { speaker: "B", de: "Tausend Dank! Sie sind meine Rettung. Schönen Tag noch!", en: "A thousand thanks! You are my savior. Have a nice day!" }
    ],
    newWords: [
      { word: "das Smartphone", meaning: "smartphone" },
      { word: "die Kasse", meaning: "checkout / cash desk" },
      { word: "klingeln", meaning: "to ring" },
      { word: "das Fundbuch", meaning: "lost-and-found registry" }
    ]
  },
  {
    id: "kap1-34",
    chapters: ["kap-1"],
    category: "Telefon, E-Mail & Buchstabieren",
    lengthTier: "medium",
    title: "Telefonische Anmeldung in der Bibliothek",
    context: "Registering for a city library membership card over the telephone, spelling street name and digits.",
    speakers: {
      A: { name: "Herr Krause", voice: "florian" },
      B: { name: "Frau Santos", voice: "seraphina" }
    },
    lines: [
      { speaker: "A", de: "Stadtbibliothek Köln, mein Name ist Krause. Guten Tag!", en: "Cologne City Library, my name is Krause. Good day!" },
      { speaker: "B", de: "Guten Tag, Herr Krause! Ich möchte gern einen Bibliotheksausweis beantragen.", en: "Good day, Mr. Krause! I would like to apply for a library card." },
      { speaker: "A", de: "Sehr gern! Ich erstelle Ihre Kundenkarte direkt im System. Wie heißen Sie?", en: "Gladly! I will create your customer card directly in the system. What is your name?" },
      { speaker: "B", de: "Mein Name ist Maria Santos.", en: "My name is Maria Santos." },
      { speaker: "A", de: "Buchstabieren Sie bitte Ihren Nachnamen, Frau Santos.", en: "Please spell your last name, Ms. Santos." },
      { speaker: "B", de: "Gern: S – A – N – T – O – S. Santos.", en: "Gladly: S – A – N – T – O – S. Santos." },
      { speaker: "A", de: "Danke. Und wie ist Ihre Adresse hier in Köln? Straße und Hausnummer, bitte.", en: "Thank you. And what is your address here in Cologne? Street and house number, please." },
      { speaker: "B", de: "Ich wohne in der Rosenstraße Nummer siebzehn.", en: "I live on Rosenstraße number seventeen." },
      { speaker: "A", de: "Wie schreibt man den Straßennamen?", en: "How do you spell the street name?" },
      { speaker: "B", de: "R – O – S – E – N – S – T – R – A – Eszett – E. Rosenstraße. Nummer eins sieben.", en: "R – O – S – E – N – S – T – R – A – ß – E. Rosenstraße. Number one seven." },
      { speaker: "A", de: "Wunderbar. Und wie lautet die Postleitzahl?", en: "Wonderful. And what is the postal code?" },
      { speaker: "B", de: "Die Postleitzahl ist: fünf – null – sechs – sieben – acht. Köln.", en: "The postal code is: 5 – 0 – 6 – 7 – 8. Cologne." },
      { speaker: "A", de: "Fünf – null – sechs – sieben – acht. Perfekt! Und noch Ihre E-Mail-Adresse?", en: "5 – 0 – 6 – 7 – 8. Perfect! And also your email address?" },
      { speaker: "B", de: "maria punkt santos at web punkt de.", en: "maria dot santos at web dot de." },
      { speaker: "A", de: "Alles klar, Ihre Karte ist fertig und liegt morgen am Empfang bereit!", en: "All clear, your card is ready and available tomorrow at reception!" },
      { speaker: "B", de: "Hervorragend! Vielen herzlichen Dank, Herr Krause. Auf Wiederhören!", en: "Outstanding! Many heartfelt thanks, Mr. Krause. Goodbye!" }
    ],
    newWords: [
      { word: "die Bibliothek", meaning: "library" },
      { word: "der Bibliotheksausweis", meaning: "library card" },
      { word: "die Straße", meaning: "street" },
      { word: "die Postleitzahl", meaning: "postal code" },
      { word: "die Hausnummer", meaning: "house number" }
    ]
  },

  // ─── CATEGORY 4: Unterwegs & International (3 new clips: kap1-35, kap1-36, kap1-37) ───
  {
    id: "kap1-35",
    chapters: ["kap-1"],
    category: "Unterwegs & International",
    lengthTier: "medium",
    title: "Am Informationsschalter im Hauptbahnhof",
    context: "A traveler asks for platform information and departure details at the main train station info desk.",
    speakers: {
      A: { name: "Herr Vogel", voice: "killian" },
      B: { name: "Frau Lindner", voice: "amala" }
    },
    lines: [
      { speaker: "A", de: "Information Hauptbahnhof, guten Tag! Wie kann ich Ihnen helfen?", en: "Main Station Information, good day! How can I help you?" },
      { speaker: "B", de: "Guten Tag! Entschuldigung, von welchem Gleis fährt der Zug nach Wien?", en: "Good day! Excuse me, from which track does the train to Vienna depart?" },
      { speaker: "A", de: "Moment bitte, ich schaue direkt auf den Fahrplan im Monitor.", en: "One moment please, I will look directly at the timetable on the monitor." },
      { speaker: "B", de: "Vielen Dank! Fährt der Zug pünktlich ab?", en: "Thank you very much! Does the train depart on time?" },
      { speaker: "A", de: "Ja, der Zug nach Wien fährt planmäßig um zehn Uhr dreizehn ab.", en: "Yes, the train to Vienna departs on schedule at 10:13." },
      { speaker: "B", de: "Und an welchem Gleis steht der Zug?", en: "And at which platform does the train stand?" },
      { speaker: "A", de: "Er fährt von Gleis sechs ab. Gleis sechs, Abschnitt B.", en: "It departs from track six. Platform 6, section B." },
      { speaker: "B", de: "Gleis sechs? Wunderbar! Muss ich die Treppe hinuntergehen?", en: "Track six? Wonderful! Do I have to go down the stairs?" },
      { speaker: "A", de: "Ja, genau: Gehen Sie hier geradeaus und dann links die Treppe hinauf zu Gleis sechs.", en: "Yes, exactly: Go straight ahead here and then up the stairs to the left to track six." },
      { speaker: "B", de: "Alles klar, geradeaus und dann links. Gibt es im Zug auch einen Speisewagen?", en: "All clear, straight ahead and then left. Is there also a dining car on the train?" },
      { speaker: "A", de: "Na klar, im Zug gibt es Kaffee, Butterbrote und Getränke!", en: "Sure thing, on the train there is coffee, sandwiches, and drinks!" },
      { speaker: "B", de: "Das ist fantastisch! Vielen Dank für die freundliche Auskunft!", en: "That is fantastic! Thank you very much for the friendly information!" },
      { speaker: "A", de: "Sehr gern geschehen! Gute Reise und gute Fahrt nach Österreich!", en: "You're very welcome! Have a good trip and a safe journey to Austria!" },
      { speaker: "B", de: "Danke schön! Auf Wiedersehen!", en: "Thank you very much! Goodbye!" }
    ],
    newWords: [
      { word: "der Schalter", meaning: "counter / info desk" },
      { word: "das Gleis", meaning: "track / platform" },
      { word: "der Fahrplan", meaning: "timetable / schedule" },
      { word: "die Treppe", meaning: "stairs" },
      { word: "geradeaus", meaning: "straight ahead" }
    ]
  },
  {
    id: "kap1-36",
    chapters: ["kap-1"],
    category: "Unterwegs & International",
    lengthTier: "medium",
    title: "Wegbeschreibung zum Supermarkt",
    context: "A tourist asks a local resident on the street for directions to the nearest grocery store.",
    speakers: {
      A: { name: "Lukas", voice: "conrad" },
      B: { name: "Claire", voice: "katja" }
    },
    lines: [
      { speaker: "B", de: "Entschuldigung! Guten Tag! Sprechen Sie Deutsch?", en: "Excuse me! Good day! Do you speak German?" },
      { speaker: "A", de: "Guten Tag! Ja, natürlich. Was suchen Sie denn?", en: "Good day! Yes, of course. What are you looking for?" },
      { speaker: "B", de: "Ich suche einen Supermarkt hier in der Nähe. Gibt es hier einen?", en: "I am looking for a supermarket nearby. Is there one around here?" },
      { speaker: "A", de: "Ja, ganz in der Nähe gibt es einen großen Supermarkt.", en: "Yes, very close by there is a large supermarket." },
      { speaker: "B", de: "Oh, wunderbar! Wie komme ich am besten dorthin?", en: "Oh, wonderful! What is the best way to get there?" },
      { speaker: "A", de: "Das ist ganz einfach: Sie gehen diese Straße hier geradeaus bis zur Ampel.", en: "That is very simple: You walk straight ahead on this street up to the traffic light." },
      { speaker: "B", de: "Also geradeaus bis zur Ampel. Und dann?", en: "So straight ahead to the traffic light. And then?" },
      { speaker: "A", de: "An der Ampel biegen Sie rechts ab in die Goethestraße.", en: "At the traffic light you turn right into Goethe Street." },
      { speaker: "B", de: "Nach rechts in die Goethestraße, alles klar.", en: "To the right into Goethe Street, all clear." },
      { speaker: "A", de: "Dann sehen Sie nach fünfzig Metern auf der linken Seite direkt den Supermarkt.", en: "Then after fifty meters on the left side you see the supermarket directly." },
      { speaker: "B", de: "Ist das weit zu Fuß?", en: "Is that far on foot?" },
      { speaker: "A", de: "Nein, überhaupt nicht! Nur drei Minuten zu Fuß.", en: "No, not at all! Only three minutes on foot." },
      { speaker: "B", de: "Perfekt! Vielen herzlichen Dank für Ihre Hilfe!", en: "Perfect! Heartfelt thanks for your help!" },
      { speaker: "A", de: "Kein Problem, gern geschehen! Schönen Tag noch!", en: "No problem, you're welcome! Have a nice day!" }
    ],
    newWords: [
      { word: "der Supermarkt", meaning: "supermarket" },
      { word: "die Ampel", meaning: "traffic lights" },
      { word: "rechts", meaning: "right" },
      { word: "links", meaning: "left" },
      { word: "zu Fuß", meaning: "on foot" }
    ]
  },
  {
    id: "kap1-37",
    chapters: ["kap-1"],
    category: "Unterwegs & International",
    lengthTier: "long",
    title: "Begegnung am Flughafen-Gate",
    context: "Two international passengers strike up a friendly conversation while waiting at departure gate B14.",
    speakers: {
      A: { name: "Jonas", voice: "jonas" },
      B: { name: "Nicole", voice: "seraphina" }
    },
    lines: [
      { speaker: "A", de: "Grüß Gott! Ist dieser Sitzplatz hier am Gate noch frei?", en: "Greetings! Is this seat here at the gate still free?" },
      { speaker: "B", de: "Guten Tag! Ja, natürlich, der Platz ist frei. Bitte nehmen Sie Platz!", en: "Good day! Yes, of course, the seat is free. Please have a seat!" },
      { speaker: "A", de: "Danke schön! Ich heiße Jonas. Ich bin auf dem Weg nach Zürich.", en: "Thank you! My name is Jonas. I am on my way to Zurich." },
      { speaker: "B", de: "Freut mich, Jonas! Ich bin Nicole. Ich fliege auch nach Zürich!", en: "Nice to meet you, Jonas! I am Nicole. I am also flying to Zurich!" },
      { speaker: "A", de: "Ganz meinerseits, Nicole! Was für ein schöner Zufall! Woher kommen Sie?", en: "The pleasure is mine, Nicole! What a nice coincidence! Where do you come from?" },
      { speaker: "B", de: "Ich komme aus Österreich, aus Innsbruck. Und Sie?", en: "I come from Austria, from Innsbruck. And you?" },
      { speaker: "A", de: "Ich komme aus Deutschland, aus Stuttgart. Wohnen Sie in Zürich oder machen Sie Urlaub?", en: "I come from Germany, from Stuttgart. Do you live in Zurich or are you on vacation?" },
      { speaker: "B", de: "Ich wohne und arbeite in Zürich als Architektin. Und Sie?", en: "I live and work in Zurich as an architect. And you?" },
      { speaker: "A", de: "Ich besuche Freunde für ein langes Wochenende in der Schweiz.", en: "I am visiting friends for a long weekend in Switzerland." },
      { speaker: "B", de: "Wunderbar! Zürich ist eine sehr lebenswerte Stadt am See.", en: "Wonderful! Zurich is a very liveable city on the lake." },
      { speaker: "A", de: "Sprechen Sie eigentlich auch Französisch oder Italienisch?", en: "Do you actually speak French or Italian as well?" },
      { speaker: "B", de: "Ja, ich spreche fließend Deutsch und Englisch, und ein bisschen Französisch.", en: "Yes, I speak fluent German and English, and a little French." },
      { speaker: "A", de: "Toll! In der Schweiz braucht man ja viele Sprachen.", en: "Awesome! In Switzerland one needs many languages." },
      { speaker: "B", de: "Stimmt! Deutsch, Französisch, Italienisch und Rätoromanisch sind alle offiziell.", en: "True! German, French, Italian, and Romansh are all official." },
      { speaker: "A", de: "Schauen Sie mal zur Anzeigetafel: Unser Flug hat zehn Minuten Verspätung.", en: "Look at the display board: Our flight has a ten-minute delay." },
      { speaker: "B", de: "Ach so, zehn Minuten sind ja kein Problem. Reisen Sie nur mit Handgepäck?", en: "Oh I see, ten minutes is no problem at all. Are you traveling with carry-on only?" },
      { speaker: "A", de: "Ja, nur ein kleiner Koffer und mein Rucksack. Sehr praktisch!", en: "Yes, only a small suitcase and my backpack. Very practical!" },
      { speaker: "B", de: "Sehr klug! Dann müssen wir nach der Landung nicht am Kofferband warten.", en: "Very clever! Then after landing we don't have to wait at the baggage carousel." },
      { speaker: "A", de: "Genau! Schauen Sie, das Boarding beginnt jetzt an Gate vierzehn!", en: "Exactly! Look, boarding is starting now at gate fourteen!" },
      { speaker: "B", de: "Prima! Guten Flug und viel Spaß in Zürich, Jonas!", en: "Great! Have a good flight and lots of fun in Zurich, Jonas!" }
    ],
    newWords: [
      { word: "das Gate", meaning: "airport departure gate" },
      { word: "der Sitzplatz", meaning: "seat" },
      { word: "fliegen", meaning: "to fly" },
      { word: "der Flug", meaning: "flight" },
      { word: "das Handgepäck", meaning: "hand luggage / carry-on" },
      { word: "der Rucksack", meaning: "backpack" }
    ]
  },

  // ─── CATEGORY 5: Im Deutschkurs (3 new clips: kap1-38, kap1-39, kap1-40) ───
  {
    id: "kap1-38",
    chapters: ["kap-1"],
    category: "Im Deutschkurs",
    lengthTier: "medium",
    title: "Zusammenarbeit im Deutschkurs",
    context: "Two classmates share learning materials and work through a vocabulary exercise together.",
    speakers: {
      A: { name: "Mateo", voice: "florian" },
      B: { name: "Julia", voice: "seraphina" }
    },
    lines: [
      { speaker: "A", de: "Hallo Julia! Hast du das Lehrbuch heute dabei?", en: "Hello Julia! Do you have the textbook with you today?" },
      { speaker: "B", de: "Hallo Mateo! Ja, hier ist mein Buch. Wir können es gern zusammen benutzen!", en: "Hello Mateo! Yes, here is my book. We can gladly use it together!" },
      { speaker: "A", de: "Super, vielen Dank! Auf welcher Seite sind wir denn heute?", en: "Super, thank you so much! What page are we on today?" },
      { speaker: "B", de: "Wir sind auf Seite fünfzehn, bei Übung vier: Wörter zuordnen.", en: "We are on page fifteen, at exercise four: matching words." },
      { speaker: "A", de: "Ah, danke! Was bedeutet denn dieses Wort hier: „das Butterbrot“?", en: "Ah, thanks! What does this word here mean: 'das Butterbrot'?" },
      { speaker: "B", de: "Moment mal, ich schaue kurz in das Wörterbuch.", en: "Just a moment, I will look in the dictionary briefly." },
      { speaker: "A", de: "Hast du ein deutsch-spanisches Wörterbuch?", en: "Do you have a German-Spanish dictionary?" },
      { speaker: "B", de: "Ja, hier steht es: „das Butterbrot“ heißt „pan con mantequilla“! Ein Brot mit Butter.", en: "Yes, here it is: 'das Butterbrot' means 'pan con mantequilla'! Bread with butter." },
      { speaker: "A", de: "Ach so, wie praktisch! Notieren wir die Lösungen zusammen in der Tabelle?", en: "Oh I see, how practical! Shall we note down the solutions together in the table?" },
      { speaker: "B", de: "Na klar! Schreibe du Frage eins und zwei, und ich schreibe drei und vier.", en: "Of course! You write question one and two, and I'll write three and four." },
      { speaker: "A", de: "Einverstanden, gute Idee! Wie schreibt man das Verb „buchstabieren“?", en: "Agreed, good idea! How do you spell the verb 'buchstabieren'?" },
      { speaker: "B", de: "Mit B – U – C – H – S – T – A – B – I – E – R – E – N.", en: "With B – U – C – H – S – T – A – B – I – E – R – E – N." },
      { speaker: "A", de: "Perfekt, ich habe alles notiert. Unser Team funktioniert wirklich prima!", en: "Perfect, I have noted down everything. Our team works really great!" },
      { speaker: "B", de: "Stimmt, gemeinsam lernen macht viel mehr Spaß!", en: "True, learning together is much more fun!" }
    ],
    newWords: [
      { word: "das Lehrbuch", meaning: "course textbook" },
      { word: "das Wörterbuch", meaning: "dictionary" },
      { word: "die Seite", meaning: "page" },
      { word: "die Lösung", meaning: "solution / answer" },
      { word: "gemeinsam", meaning: "together" }
    ]
  },
  {
    id: "kap1-39",
    chapters: ["kap-1"],
    category: "Im Deutschkurs",
    lengthTier: "long",
    title: "Aussprachetraining: Ä, Ö, Ü und ß",
    context: "A German teacher helps an enthusiastic student practice the tricky pronunciation of German umlauts and the Eszett.",
    speakers: {
      A: { name: "Frau Sommer", voice: "katja" },
      B: { name: "Herr Rossi", voice: "conrad" }
    },
    lines: [
      { speaker: "A", de: "Guten Tag, Herr Rossi! Heute üben wir die deutsche Aussprache: Ä, Ö, Ü und das Eszett.", en: "Good day, Mr. Rossi! Today we practice German pronunciation: Ä, Ö, Ü, and the Eszett." },
      { speaker: "B", de: "Guten Tag, Frau Sommer! Sehr gern. Die Umlaute sind für mich noch ganz schön schwierig!", en: "Good day, Ms. Sommer! Gladly. The umlauts are still quite difficult for me!" },
      { speaker: "A", de: "Keine Sorge, das machen wir Schritt für Schritt! Beginnen wir mit dem Buchstaben Ä.", en: "No worries, we will do that step by step! Let's start with the letter Ä." },
      { speaker: "B", de: "Alles klar! Wie spricht man das Ä aus?", en: "All clear! How does one pronounce the Ä?" },
      { speaker: "A", de: "Der Mund ist offen, wie bei E. Hören Sie zu und sprechen Sie nach: „spät“, „Mädchen“.", en: "The mouth is open, as with E. Listen and repeat after me: 'spät', 'Mädchen'." },
      { speaker: "B", de: "„Spät“... „Mädchen“. War das richtig so?", en: "'Spät'... 'Mädchen'. Was that right?" },
      { speaker: "A", de: "Ausgezeichnet! Und jetzt kommt das Ö. Formen Sie die Lippen rund: „schön“, „hören“.", en: "Excellent! And now comes the Ö. Shape your lips round: 'schön', 'hören'." },
      { speaker: "B", de: "„Schön“... „hören“. Das ist gar nicht so einfach für meine Lippen!", en: "'Schön'... 'hören'. That is not so easy for my lips!" },
      { speaker: "A", de: "Aber es klingt schon sehr gut! Jetzt das Ü: Lippen ganz spitz nach vorne: „über“, „Tür“.", en: "But it already sounds very good! Now the Ü: lips very pointed forward: 'über', 'Tür'." },
      { speaker: "B", de: "„Über“... „Tür“. Wie bei einem Kussmund?", en: "'Über'... 'Tür'. Like a kiss mouth?" },
      { speaker: "A", de: "Ganz genau, ein Kussmund! Wunderbar gemacht, Herr Rossi!", en: "Exactly, a kiss mouth! Wonderfully done, Mr. Rossi!" },
      { speaker: "B", de: "Haha, danke! Und wie ist es mit diesem besonderen Buchstaben: dem ß?", en: "Haha, thanks! And how is it with this special letter: the ß?" },
      { speaker: "A", de: "Das heißt Eszett oder scharfes S. Man spricht es wie ein normales stimmloses S: „Straße“, „heißen“.", en: "That is called Eszett or sharp S. You pronounce it like a normal voiceless S: 'Straße', 'heißen'." },
      { speaker: "B", de: "„Straße“... „Ich heiße Rossi“. Stimmt das?", en: "'Straße'... 'Ich heiße Rossi'. Is that right?" },
      { speaker: "A", de: "Perfekt! Merken Sie den Unterschied zu einem weichen S?", en: "Perfect! Do you notice the difference from a soft S?" },
      { speaker: "B", de: "Ja, man hört den Unterschied jetzt ganz deutlich!", en: "Yes, you can hear the difference very clearly now!" },
      { speaker: "A", de: "Sprechen Sie die Wörter bitte noch einmal laut und langsam: spät, schön, über, Straße.", en: "Please speak the words once more out loud and slowly: spät, schön, über, Straße." },
      { speaker: "B", de: "Spät... schön... über... Straße.", en: "Spät... schön... über... Straße." },
      { speaker: "A", de: "Fantastisch! Ihre Aussprache ist heute wirklich hervorragend.", en: "Fantastic! Your pronunciation is truly outstanding today." },
      { speaker: "B", de: "Vielen Dank für Ihre Geduld und Hilfe, Frau Sommer!", en: "Thank you so much for your patience and help, Ms. Sommer!" },
      { speaker: "A", de: "Sehr gern geschehen! Wiederholen Sie diese Wörter bitte heute Abend noch kurz.", en: "You are very welcome! Please review these words briefly again this evening." },
      { speaker: "B", de: "Na klar, das mache ich sofort! Bis morgen im Kurs!", en: "Sure thing, I will do that right away! See you tomorrow in class!" }
    ],
    newWords: [
      { word: "die Aussprache", meaning: "pronunciation" },
      { word: "der Umlaut", meaning: "umlaut (ä, ö, ü)" },
      { word: "die Lippen", meaning: "lips" },
      { word: "das Eszett", meaning: "letter ß (sharp S)" },
      { word: "nachsprechen", meaning: "to repeat after someone" }
    ]
  },
  {
    id: "kap1-40",
    chapters: ["kap-1"],
    category: "Im Deutschkurs",
    lengthTier: "medium",
    title: "Hausaufgaben und Kurszeiten",
    context: "At the end of class, a student checks homework assignments and the course schedule with the instructor.",
    speakers: {
      A: { name: "Herr Walter", voice: "florian" },
      B: { name: "Fatima", voice: "amala" }
    },
    lines: [
      { speaker: "B", de: "Entschuldigung, Herr Walter! Haben Sie kurz eine Minute Zeit für mich?", en: "Excuse me, Mr. Walter! Do you briefly have a minute for me?" },
      { speaker: "A", de: "Ja natürlich, Fatima! Wie kann ich dir helfen?", en: "Yes of course, Fatima! How can I help you?" },
      { speaker: "B", de: "Was haben wir heute als Hausaufgabe auf? Ich habe es nicht ganz verstanden.", en: "What homework do we have today? I didn't completely understand it." },
      { speaker: "A", de: "Im Arbeitsbuch auf Seite achtzehn: die Übungen drei und vier.", en: "In the workbook on page eighteen: exercises three and four." },
      { speaker: "B", de: "Seite achtzehn, Übung drei und vier. Sollen wir Sätze schreiben?", en: "Page eighteen, exercises three and four. Should we write sentences?" },
      { speaker: "A", de: "Genau: Schreiben Sie bitte fünf Aussagesätze und fünf W-Fragen auf Deutsch.", en: "Exactly: Please write five declarative sentences and five W-questions in German." },
      { speaker: "B", de: "Alles klar, das notiere ich mir sofort in mein Heft!", en: "All clear, I'll write that into my notebook right away!" },
      { speaker: "A", de: "Sehr vorbildlich! Gibt es noch eine Frage?", en: "Very exemplary! Is there another question?" },
      { speaker: "B", de: "Ja, wann findet der Kurs nächste Woche statt?", en: "Yes, when does the class take place next week?" },
      { speaker: "A", de: "Wir lernen am Montag, Mittwoch und Freitag, jeweils von neun bis zwölf Uhr.", en: "We learn on Monday, Wednesday, and Friday, each from 9:00 to 12:00." },
      { speaker: "B", de: "Von neun bis zwölf Uhr im gewohnten Raum vier?", en: "From 9:00 to 12:00 in the familiar room four?" },
      { speaker: "A", de: "Ganz genau, wieder in Raum vier im ersten Stock.", en: "Exactly, again in room four on the first floor." },
      { speaker: "B", de: "Wunderbar! Brauchen wir für Freitag auch das Kursplakat?", en: "Wonderful! Do we also need the course poster for Friday?" },
      { speaker: "A", de: "Ja, bitte bringt alle eure Plakate mit. Wir präsentieren sie dann gemeinsam.", en: "Yes, please everyone bring your posters. We will present them together then." },
      { speaker: "B", de: "Super! Vielen herzlichen Dank für die Erklärung, Herr Walter!", en: "Great! Heartfelt thanks for the explanation, Mr. Walter!" },
      { speaker: "A", de: "Sehr gern geschehen, Fatima! Schönes Wochenende und bis Montag!", en: "You are very welcome, Fatima! Have a nice weekend and see you Monday!" }
    ],
    newWords: [
      { word: "die Hausaufgabe", meaning: "homework assignment" },
      { word: "das Arbeitsbuch", meaning: "workbook" },
      { word: "die Übung", meaning: "exercise" },
      { word: "das Heft", meaning: "notebook" },
      { word: "der Raum", meaning: "room / classroom" }
    ]
  }
];
