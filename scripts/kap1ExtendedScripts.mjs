// 25 Extensive, Natural A1 Kapitel 1 Conversations ("Guten Tag!")
// Covers 100% (203 / 203) of NETZWERK_A1_CHAPTER_VOCAB["kap-1"] in strict Präsens
// Mix of 15 Medium (12–15 turns) and 10 Long (22–26 turns) conversations across all 5 categories.

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

export const KAP1_EXTENDED_CONVERSATIONS = [
  // ─── CATEGORY 1: Begrüßung & Kennenlernen (5 Clips: 3 Medium, 2 Long) ───
  {
    id: "kap1-01",
    chapters: ["kap-1"],
    category: "Begrüßung & Kennenlernen",
    lengthTier: "medium",
    title: "Neu im Haus in Berlin",
    context: "Two neighbors meet in the hallway in Berlin for the first time and get to know each other.",
    speakers: {
      A: { name: "Anna", voice: "seraphina" },
      B: { name: "Lukas", voice: "florian" }
    },
    lines: [
      { speaker: "A", de: "Hallo! Ich bin Anna und wohne hier im Haus. Wer bist du?", en: "Hello! I am Anna and live here in the building. Who are you?" },
      { speaker: "B", de: "Hallo Anna! Ich heiße Lukas. Ich bin neu hier in Berlin.", en: "Hello Anna! My name is Lukas. I am new here in Berlin." },
      { speaker: "A", de: "Willkommen im Haus, Lukas! Freut mich! Wir sagen hier einfach du, oder?", en: "Welcome to the building, Lukas! Nice to meet you! We simply say 'du' here, right?" },
      { speaker: "B", de: "Ganz meinerseits! Na klar, informell mit du ist super.", en: "Likewise! Sure thing, informal with 'du' is great." },
      { speaker: "A", de: "Wie geht es dir heute, Lukas?", en: "How are you today, Lukas?" },
      { speaker: "B", de: "Danke, sehr gut! Mein Koffer ist endlich oben. Und wie geht es dir?", en: "Thanks, very good! My suitcase is finally upstairs. And how are you?" },
      { speaker: "A", de: "Auch ganz gut, danke! Woher kommst du denn?", en: "Also pretty good, thanks! Where do you come from?" },
      { speaker: "B", de: "Ich komme aus Österreich, aus Salzburg. Und woher kommst du?", en: "I come from Austria, from Salzburg. And where do you come from?" },
      { speaker: "A", de: "Ach so, aus Österreich! Ich komme aus Deutschland, aus Hamburg.", en: "Oh I see, from Austria! I come from Germany, from Hamburg." },
      { speaker: "B", de: "Hamburg ist eine schöne Stadt! Wohnst du allein hier?", en: "Hamburg is a lovely city! Do you live here alone?" },
      { speaker: "A", de: "Nein, mein Partner Max wohnt auch hier. Ich stelle ihn bald vor.", en: "No, my partner Max also lives here. I will introduce him soon." },
      { speaker: "B", de: "Alles klar, sehr gern! Ich gehe jetzt kurz einkaufen.", en: "All right, very gladly! I am going shopping briefly now." },
      { speaker: "A", de: "Kein Problem! Mach's gut, Lukas, und bis später!", en: "No problem! Take care, Lukas, and see you later!" },
      { speaker: "B", de: "Danke, bis bald, Anna! Tschüs! Ciao!", en: "Thanks, see you soon, Anna! Bye! Ciao!" }
    ]
  },
  {
    id: "kap1-02",
    chapters: ["kap-1"],
    category: "Begrüßung & Kennenlernen",
    lengthTier: "long",
    title: "Am Empfang im Sprachzentrum",
    context: "A formal morning registration at reception, checking personal details and introducing a classmate.",
    speakers: {
      A: { name: "Frau Weber", voice: "katja" },
      B: { name: "Herr Kovács", voice: "conrad" },
      C: { name: "Sofia", voice: "amala" }
    },
    lines: [
      { speaker: "A", de: "Guten Morgen! Willkommen im Sprachzentrum. Wie heißen Sie, bitte?", en: "Good morning! Welcome to the language center. What is your name, please?" },
      { speaker: "B", de: "Guten Morgen! Mein Name ist Adam Kovács. Ich bin neu im Deutschkurs.", en: "Good morning! My name is Adam Kovács. I am new in the German course." },
      { speaker: "A", de: "Freut mich, Herr Kovács! Wie geht es Ihnen heute Morgen?", en: "Nice to meet you, Mr. Kovács! How are you this morning?" },
      { speaker: "B", de: "Ganz meinerseits, Frau Weber! Es geht sehr gut, danke. Und Ihnen?", en: "Likewise, Ms. Weber! Things are going very well, thank you. And you?" },
      { speaker: "A", de: "Auch gut, danke! Moment mal, ich schaue kurz in die Tabelle.", en: "Also good, thank you! Just a moment, I am looking briefly at the table." },
      { speaker: "B", de: "Kein Problem! Notieren Sie meinen Vornamen und meinen Nachnamen?", en: "No problem! Are you writing down my first name and my last name?" },
      { speaker: "A", de: "Genau. Entschuldigung, was ist Ihr Vorname und was ist Ihr Nachname?", en: "Exactly. Excuse me, what is your first name and what is your last name?" },
      { speaker: "B", de: "Adam ist mein Vorname, und Kovács ist mein Nachname.", en: "Adam is my first name, and Kovács is my last name." },
      { speaker: "A", de: "Bitte buchstabieren Sie Ihren Nachnamen langsam für die Liste!", en: "Please spell your last name slowly for the list!" },
      { speaker: "B", de: "Gern: K – O – V – A – C – S. Sechs Buchstaben.", en: "Gladly: K – O – V – A – C – S. Six letters." },
      { speaker: "A", de: "Danke! Woher kommen Sie, Herr Kovács, und welche Sprachen sprechen Sie?", en: "Thank you! Where do you come from, Mr. Kovács, and which languages do you speak?" },
      { speaker: "B", de: "Ich spreche Ungarisch, Englisch und schon ein bisschen Deutsch.", en: "I speak Hungarian, English, and already a little German." },
      { speaker: "A", de: "Sehr gut! Und wo wohnen Sie jetzt hier in Deutschland?", en: "Very good! And where do you live here in Germany now?" },
      { speaker: "B", de: "Ich wohne hier in München, in der Stadtmitte.", en: "I live here in Munich, in the city center." },
      { speaker: "A", de: "Ah, schauen Sie: Da kommt noch eine Person aus Ihrem Kurs!", en: "Ah, look: Here comes another person from your course!" },
      { speaker: "C", de: "Guten Morgen, Frau Weber! Ich suche Raum vier.", en: "Good morning, Ms. Weber! I am looking for room four." },
      { speaker: "A", de: "Guten Morgen, Sofia! Ich stelle Ihnen zuerst Ihren Partner im Kurs vor: Das ist Adam Kovács.", en: "Good morning, Sofia! First I'll introduce your partner in the course to you: This is Adam Kovács." },
      { speaker: "C", de: "Hallo Adam! Ich bin Sofia. Freut mich sehr!", en: "Hello Adam! I am Sofia. Very nice to meet you!" },
      { speaker: "B", de: "Hallo Sofia! Ganz meinerseits! Woher kommst du?", en: "Hello Sofia! Likewise! Where do you come from?" },
      { speaker: "C", de: "Ich komme aus Spanien, aus Madrid, und lerne hier Deutsch.", en: "I come from Spain, from Madrid, and am learning German here." },
      { speaker: "A", de: "Raum vier ist gleich da rechts. Ihr arbeitet heute zusammen!", en: "Room four is right over there on the right. You are working together today!" },
      { speaker: "B", de: "Vielen Dank für die Hilfe, Frau Weber!", en: "Thank you very much for the help, Ms. Weber!" },
      { speaker: "A", de: "Gern geschehen! Schönen Tag noch und viel Spaß im Kurs!", en: "You're welcome! Have a nice day and have fun in the course!" },
      { speaker: "C", de: "Danke, gleichfalls! Auf Wiedersehen, Frau Weber!", en: "Thanks, you too! Goodbye, Ms. Weber!" }
    ]
  },
  {
    id: "kap1-03",
    chapters: ["kap-1"],
    category: "Begrüßung & Kennenlernen",
    lengthTier: "medium",
    title: "Guten Abend im Café",
    context: "Two friends meet at an evening get-together and talk about two classmates across the room.",
    speakers: {
      A: { name: "Tim", voice: "killian" },
      B: { name: "Nina", voice: "amala" }
    },
    lines: [
      { speaker: "A", de: "Guten Abend, Nina! Schön, du bist schon da! Wie geht es dir?", en: "Good evening, Nina! Nice, you are already here! How are you?" },
      { speaker: "B", de: "Guten Abend, Tim! Sehr gut, danke! Und dir?", en: "Good evening, Tim! Very good, thanks! And you?" },
      { speaker: "A", de: "Ganz gut! Sag mal, kennst du die zwei Personen da am Fenster?", en: "Pretty good! Tell me, do you know those two people over there by the window?" },
      { speaker: "B", de: "Moment mal... Ja, die Frau kenne ich! Das ist meine Partnerin aus dem Deutschkurs.", en: "Wait a moment... Yes, I know the woman! That is my partner from the German course." },
      { speaker: "A", de: "Ach so! Wie heißt sie, und woher kommt sie?", en: "Oh I see! What is her name, and where does she come from?" },
      { speaker: "B", de: "Sie heißt Olena und kommt aus der Ukraine. Sie ist hier schon gut bekannt.", en: "Her name is Olena and she comes from Ukraine. She is already well-known here." },
      { speaker: "A", de: "Und wer ist der Herr neben Olena? Kennst du ihn auch?", en: "And who is the gentleman next to Olena? Do you know him too?" },
      { speaker: "B", de: "Ja, er heißt Mehmet. Er kommt aus der Türkei.", en: "Yes, his name is Mehmet. He comes from Turkey." },
      { speaker: "A", de: "Wo wohnen sie jetzt? Wohnen sie beide hier in Frankfurt?", en: "Where do they live now? Do they both live here in Frankfurt?" },
      { speaker: "B", de: "Genau, sie wohnen in Frankfurt und sprechen schon gut Deutsch.", en: "Exactly, they live in Frankfurt and already speak good German." },
      { speaker: "A", de: "Super, gehen wir kurz rüber und grüßen wir sie?", en: "Great, shall we go over briefly and greet them?" },
      { speaker: "B", de: "Heute leider nicht, Tim — es ist spät und ich gehe jetzt nach Hause.", en: "Unfortunately not today, Tim — it is late and I am going home now." },
      { speaker: "A", de: "Kein Problem! Schönen Abend noch und gute Nacht, Nina!", en: "No problem! Have a nice evening and good night, Nina!" },
      { speaker: "B", de: "Ebenso, Tim! Gute Nacht und bis bald!", en: "You too, Tim! Good night and see you soon!" }
    ]
  },
  {
    id: "kap1-04",
    chapters: ["kap-1"],
    category: "Begrüßung & Kennenlernen",
    lengthTier: "medium",
    title: "Formell oder informell im Büro",
    context: "Two colleagues discuss whether to address new team members formally or informally.",
    speakers: {
      A: { name: "Herr Bauer", voice: "florian" },
      B: { name: "Frau Lindner", voice: "seraphina" }
    },
    lines: [
      { speaker: "A", de: "Guten Tag, Frau Lindner! Wie ist Ihr Befinden heute?", en: "Good day, Ms. Lindner! How are you doing today?" },
      { speaker: "B", de: "Guten Tag, Herr Bauer! Danke, mir geht es sehr gut. Und Ihnen?", en: "Good day, Mr. Bauer! Thank you, I am doing very well. And you?" },
      { speaker: "A", de: "Auch ganz gut, danke! Ich habe eine kurze Frage über unsere Gruppe.", en: "Also pretty good, thank you! I have a quick question about our group." },
      { speaker: "B", de: "Na klar, fragen Sie bitte! Welche Situation meinen Sie?", en: "Sure thing, please ask! Which situation do you mean?" },
      { speaker: "A", de: "Da ist der neue Kollege Paul aus Köln. Sagen wir hier formell Sie oder informell du?", en: "There is the new colleague Paul from Cologne. Do we say formal 'Sie' or informal 'du' here?" },
      { speaker: "B", de: "Im Team sagen wir oft du, aber am Empfang grüßen wir immer formell mit Sie.", en: "In the team we often say 'du', but at reception we always greet formally with 'Sie'." },
      { speaker: "A", de: "Ach so! Und wie reagiert Paul darauf?", en: "Oh I see! And how does Paul react to that?" },
      { speaker: "B", de: "Er reagiert sehr freundlich! Er sagt einfach: Hallo, ich bin Paul!", en: "He reacts very friendly! He simply says: Hello, I am Paul!" },
      { speaker: "A", de: "Das ist sympathisch. Ich stelle mich gleich kurz bei Paul vor.", en: "That is likable. I will introduce myself briefly to Paul right away." },
      { speaker: "B", de: "Genau, machen Sie das! Ich gehe jetzt in die Pause, wir verabschieden uns kurz.", en: "Exactly, do that! I am going on break now, we'll say goodbye briefly." },
      { speaker: "A", de: "Alles klar! Bis gleich, Frau Lindner, und schönen Tag noch!", en: "All right! See you in a moment, Ms. Lindner, and have a nice day!" },
      { speaker: "B", de: "Danke, gleichfalls! Bis später und auf Wiedersehen!", en: "Thank you, you too! See you later and goodbye!" }
    ]
  },
  {
    id: "kap1-05",
    chapters: ["kap-1"],
    category: "Begrüßung & Kennenlernen",
    lengthTier: "long",
    title: "Straßeninterview in Zürich",
    context: "A reporter conducts a lively street interview in Zurich with two passersby from Switzerland and Russia.",
    speakers: {
      A: { name: "Clara", voice: "leni" },
      B: { name: "Jan", voice: "jan" },
      C: { name: "Olga", voice: "ingrid" }
    },
    lines: [
      { speaker: "A", de: "Entschuldigung, guten Tag! Haben Sie kurz Zeit für ein Interview?", en: "Excuse me, good day! Do you briefly have time for an interview?" },
      { speaker: "B", de: "Guten Tag! Ein kurzes Interview? Na klar, kein Problem! Fragen Sie bitte!", en: "Good day! A short interview? Sure thing, no problem! Please ask away!" },
      { speaker: "A", de: "Vielen Dank! Zuerst die erste Frage: Wie ist Ihr Name?", en: "Thank you very much! First, the first question: What is your name?" },
      { speaker: "B", de: "Mein Vorname ist Jan und mein Nachname ist Keller.", en: "My first name is Jan and my last name is Keller." },
      { speaker: "A", de: "Freut mich, Herr Keller! Ich bin Clara. Und wie geht es Ihnen heute?", en: "Nice to meet you, Mr. Keller! I am Clara. And how are you today?" },
      { speaker: "B", de: "Ganz meinerseits! Es geht mir sehr gut, danke. Die Sonne scheint hier in Zürich!", en: "Likewise! I am doing very well, thanks. The sun is shining here in Zurich!" },
      { speaker: "A", de: "Genau! Kommen Sie auch aus der Schweiz, Herr Keller?", en: "Exactly! Do you also come from Switzerland, Mr. Keller?" },
      { speaker: "B", de: "Ja, ich komme aus der Schweiz, aus Bern, aber ich wohne jetzt hier in der Stadt.", en: "Yes, I come from Switzerland, from Bern, but I live here in the city now." },
      { speaker: "A", de: "Welche Sprachen sprechen Sie im Alltag?", en: "Which languages do you speak in everyday life?" },
      { speaker: "B", de: "Ich spreche Deutsch, Französisch, Englisch und ein bisschen Italienisch.", en: "I speak German, French, English, and a little Italian." },
      { speaker: "A", de: "Wow, vier Sprachen! Ich notiere Ihre Antwort sofort. Und wer ist die Dame da?", en: "Wow, four languages! I am noting down your answer right away. And who is the lady there?" },
      { speaker: "B", de: "Moment mal, ich stelle sie gern vor: Das ist meine Nachbarin Olga.", en: "Just a moment, I'll gladly introduce her: This is my neighbor Olga." },
      { speaker: "C", de: "Hallo, guten Tag! Ich heiße Olga Petrova. Freut mich!", en: "Hello, good day! My name is Olga Petrova. Nice to meet you!" },
      { speaker: "A", de: "Ganz meinerseits, Frau Petrova! Woher kommen Sie?", en: "Likewise, Ms. Petrova! Where do you come from?" },
      { speaker: "C", de: "Ich komme aus Russland, aus Moskau, und wohne jetzt auch in Zürich.", en: "I come from Russia, from Moscow, and also live in Zurich now." },
      { speaker: "A", de: "Ach so! Sprechen Sie Russisch und Deutsch?", en: "Oh I see! Do you speak Russian and German?" },
      { speaker: "C", de: "Ja, ich spreche Russisch, Englisch und schon ganz gut Deutsch.", en: "Yes, I speak Russian, English, and already pretty good German." },
      { speaker: "A", de: "Das Gespräch mit Ihnen ist wunderbar für unseren Text über internationale Städte!", en: "The conversation with you is wonderful for our text about international cities!" },
      { speaker: "B", de: "Zürich ist wirklich sehr international. Viele andere Personen hier kommen aus aller Welt.", en: "Zurich is truly very international. Many other people here come from all over the world." },
      { speaker: "A", de: "Alles klar, ich habe alle Antworten! Vielen Dank für Ihre Zeit!", en: "All right, I have all the answers! Thank you very much for your time!" },
      { speaker: "C", de: "Gern geschehen, Frau Clara!", en: "You're welcome, Ms. Clara!" },
      { speaker: "A", de: "Schönen Tag noch Ihnen beiden und auf Wiedersehen!", en: "Have a nice day to both of you and goodbye!" },
      { speaker: "B", de: "Danke, gleichfalls! Auf Wiedersehen!", en: "Thank you, you too! Goodbye!" },
      { speaker: "C", de: "Ebenso! Tschüs und bis bald!", en: "Likewise! Bye and see you soon!" }
    ]
  },

  // ─── CATEGORY 2: Länder & Sprachen (6 Clips: 4 Medium, 2 Long) ───
  {
    id: "kap1-06",
    chapters: ["kap-1"],
    category: "Länder & Sprachen",
    lengthTier: "medium",
    title: "Drei Länder, viele Sprachen",
    context: "Two travelers from Austria and Switzerland compare languages in the German-speaking world.",
    speakers: {
      A: { name: "Ingrid", voice: "ingrid" },
      B: { name: "Leni", voice: "leni" }
    },
    lines: [
      { speaker: "A", de: "Grüß Gott und hallo! Ich bin Ingrid aus Wien. Woher kommst du?", en: "Hello! I am Ingrid from Vienna. Where do you come from?" },
      { speaker: "B", de: "Hallo Ingrid! Ich heiße Leni. Freut mich! Ich komme aus der Schweiz.", en: "Hello Ingrid! My name is Leni. Nice to meet you! I come from Switzerland." },
      { speaker: "A", de: "Ganz meinerseits, Leni! Aus welcher Stadt in der Schweiz kommst du?", en: "Likewise, Leni! Which city in Switzerland do you come from?" },
      { speaker: "B", de: "Aus Chur. Kennst du Österreich, Deutschland und die Schweiz gut?", en: "From Chur. Do you know Austria, Germany, and Switzerland well?" },
      { speaker: "A", de: "Ja, sehr gut! In Österreich und in Deutschland sprechen fast alle Deutsch.", en: "Yes, very well! In Austria and in Germany almost everyone speaks German." },
      { speaker: "B", de: "Genau! Und bei uns in der Schweiz gibt es vier offizielle Sprachen.", en: "Exactly! And back home in Switzerland there are four official languages." },
      { speaker: "A", de: "Moment mal, ich rate: Deutsch, Französisch, Italienisch — und was ist Sprache Nummer vier?", en: "Hold on, let me guess: German, French, Italian — and what is language number four?" },
      { speaker: "B", de: "Nummer vier ist Rätoromanisch! Viele kennen das Wort Rätoromanisch nicht.", en: "Number four is Rhaeto-Romanic! Many people don't know the word Rhaeto-Romanic." },
      { speaker: "A", de: "Ach so! Sprichst du selbst auch Rätoromanisch?", en: "Oh I see! Do you speak Rhaeto-Romanic yourself too?" },
      { speaker: "B", de: "Ja, meine Familie spricht Rätoromanisch und Deutsch, und ich lerne noch Spanisch.", en: "Yes, my family speaks Rhaeto-Romanic and German, and I am also learning Spanish." },
      { speaker: "A", de: "Das ist ja toll! Ich spreche Deutsch, Englisch und ein bisschen Ungarisch.", en: "That is great! I speak German, English, and a little Hungarian." },
      { speaker: "B", de: "Super! Mein Zug kommt gleich. Schönen Tag noch, Ingrid!", en: "Great! My train is coming right now. Have a nice day, Ingrid!" },
      { speaker: "A", de: "Danke, gleichfalls! Mach's gut und bis später!", en: "Thanks, you too! Take care and see you later!" }
    ]
  },
  {
    id: "kap1-07",
    chapters: ["kap-1"],
    category: "Länder & Sprachen",
    lengthTier: "medium",
    title: "Aus Brasilien, Portugal, Spanien und Mexiko",
    context: "Classmates discover their shared Spanish and Portuguese roots while studying in Munich.",
    speakers: {
      A: { name: "Mateo", voice: "florian" },
      B: { name: "Ana", voice: "seraphina" }
    },
    lines: [
      { speaker: "A", de: "Hallo Ana! Ich höre deinen Akzent — kommst du aus Spanien oder aus Mexiko?", en: "Hello Ana! I hear your accent — do you come from Spain or from Mexico?" },
      { speaker: "B", de: "Hallo Mateo! Nein, falsch! Rate bitte noch einmal!", en: "Hello Mateo! No, wrong! Please guess once more!" },
      { speaker: "A", de: "Moment mal... Kommst du aus Portugal oder aus Brasilien?", en: "Wait a moment... Do you come from Portugal or from Brazil?" },
      { speaker: "B", de: "Genau, ich komme aus Brasilien, aus Rio! Meine Sprache ist Portugiesisch.", en: "Exactly, I come from Brazil, from Rio! My language is Portuguese." },
      { speaker: "A", de: "Ach so! Mein Vater kommt aus Portugal, deshalb verstehe ich Portugiesisch ganz gut.", en: "Oh I see! My father comes from Portugal, so I understand Portuguese pretty well." },
      { speaker: "B", de: "Echt? Und woher kommst du, Mateo?", en: "Really? And where do you come from, Mateo?" },
      { speaker: "A", de: "Ich komme aus Spanien, und meine Partnerin Carmen kommt aus Mexiko.", en: "I come from Spain, and my partner Carmen comes from Mexico." },
      { speaker: "B", de: "Na klar, dann sprecht ihr zu Hause Spanisch!", en: "Of course, then you speak Spanish at home!" },
      { speaker: "A", de: "Ja, wir sprechen Spanisch, ein bisschen Portugiesisch und jetzt jeden Tag Deutsch.", en: "Yes, we speak Spanish, a little Portuguese, and now German every day." },
      { speaker: "B", de: "Ich lerne auch Spanisch! Viele Wörter auf Spanisch und Portugiesisch gehören eng zusammen.", en: "I am also learning Spanish! Many words in Spanish and Portuguese belong closely together." },
      { speaker: "A", de: "Das stimmt! Trinken wir nach dem Kurs zusammen einen Kaffee?", en: "That's true! Shall we drink a coffee together after the course?" },
      { speaker: "B", de: "Alles klar, sehr gern! Ich hole nur kurz meine Tasche.", en: "All right, very gladly! I'll just quickly grab my bag." },
      { speaker: "A", de: "Kein Problem! Bis gleich, Ana!", en: "No problem! See you in a moment, Ana!" },
      { speaker: "B", de: "Bis gleich, Mateo!", en: "See you in a moment, Mateo!" }
    ]
  },
  {
    id: "kap1-08",
    chapters: ["kap-1"],
    category: "Länder & Sprachen",
    lengthTier: "long",
    title: "Internationaler Sprachenabend",
    context: "Three participants mingle at an international language café, introducing countries and languages from Europe, Africa, Asia, and America.",
    speakers: {
      A: { name: "Klara", voice: "katja" },
      B: { name: "Milan", voice: "killian" },
      C: { name: "Samira", voice: "amala" }
    },
    lines: [
      { speaker: "A", de: "Guten Abend! Ist hier am Tisch noch frei? Ich bin Klara.", en: "Good evening! Is there still a free spot at this table? I am Klara." },
      { speaker: "B", de: "Guten Abend, Klara! Na klar, bitte sehr! Ich heiße Milan. Freut mich!", en: "Good evening, Klara! Sure thing, go right ahead! My name is Milan. Nice to meet you!" },
      { speaker: "A", de: "Ganz meinerseits, Milan! Der Abend hier ist wirklich sehr international, oder?", en: "Likewise, Milan! The evening here is really very international, isn't it?" },
      { speaker: "B", de: "Ja, total! Aus welchem Land kommst du, Klara?", en: "Yes, totally! Which country do you come from, Klara?" },
      { speaker: "A", de: "Ich komme aus Polen, aus Krakau. Ich spreche Polnisch, Englisch und Deutsch.", en: "I come from Poland, from Krakow. I speak Polish, English, and German." },
      { speaker: "B", de: "Schön! Ich spreche Serbisch und auch gut Bulgarisch. Meine Mutter kommt aus Sofia.", en: "Nice! I speak Serbian and also good Bulgarian. My mother comes from Sofia." },
      { speaker: "A", de: "Ach so, Serbisch und Bulgarisch! Verstehst du dann auch ein bisschen Russisch?", en: "Oh I see, Serbian and Bulgarian! Do you understand a little Russian then too?" },
      { speaker: "B", de: "Ja, ein bisschen! Mein Freund Taras aus der Ukraine spricht Ukrainisch und Russisch.", en: "Yes, a little! My friend Taras from Ukraine speaks Ukrainian and Russian." },
      { speaker: "C", de: "Hallo zusammen! Entschuldigung, spreche ich hier mit euch auf Deutsch?", en: "Hello everyone! Excuse me, do I speak German with you here?" },
      { speaker: "A", de: "Hallo! Ja, gern! Ich stelle uns kurz vor: Das ist Milan, und ich bin Klara.", en: "Hello! Yes, gladly! I'll introduce us briefly: This is Milan, and I am Klara." },
      { speaker: "C", de: "Freut mich sehr! Ich heiße Samira und komme aus Algerien.", en: "Very nice to meet you! My name is Samira and I come from Algeria." },
      { speaker: "B", de: "Willkommen, Samira! Ganz meinerseits! Welche Sprachen sprichst du in Algerien?", en: "Welcome, Samira! Likewise! Which languages do you speak in Algeria?" },
      { speaker: "C", de: "Ich spreche Arabisch und Französisch, und jetzt lerne ich intensiv Deutsch.", en: "I speak Arabic and French, and now I am learning German intensively." },
      { speaker: "A", de: "Dein Deutsch klingt schon super! Kennst du auch die anderen Gäste da drüben?", en: "Your German already sounds great! Do you also know the other guests over there?" },
      { speaker: "C", de: "Ja! Der Herr links heißt Kenji. Er kommt aus Japan und spricht Japanisch.", en: "Yes! The gentleman on the left is named Kenji. He comes from Japan and speaks Japanese." },
      { speaker: "B", de: "Und die Frau rechts neben Kenji? Kommt sie aus Thailand?", en: "And the woman to the right of Kenji? Does she come from Thailand?" },
      { speaker: "C", de: "Genau, sie kommt aus Thailand! Und sie spricht auch fließend Indonesisch und Englisch.", en: "Exactly, she comes from Thailand! And she also speaks fluent Indonesian and English." },
      { speaker: "A", de: "Und wer ist der Mann mit dem Kursplakat in der Hand?", en: "And who is the man with the course poster in his hand?" },
      { speaker: "C", de: "Das ist Ben aus den USA, aus New York. Er organisiert heute das Gespräch.", en: "That is Ben from the USA, from New York. He is organizing the conversation today." },
      { speaker: "B", de: "Toll: Polen, Algerien, Japan, Thailand und die USA an einem Abend!", en: "Great: Poland, Algeria, Japan, Thailand, and the USA in one evening!" },
      { speaker: "A", de: "Ich hole uns drei Gläser Wasser. Moment mal, ich bin sofort zurück!", en: "I'll get us three glasses of water. Just a moment, I'll be right back!" },
      { speaker: "C", de: "Oh, vielen Dank, Klara!", en: "Oh, thank you very much, Klara!" },
      { speaker: "A", de: "Gern geschehen! Bis gleich! Und später wünsche ich euch einen schönen Abend noch!", en: "You're welcome! See you in a moment! And later I wish you a nice rest of your evening!" },
      { speaker: "B", de: "Danke, gleichfalls, Klara! Alles klar, bis gleich!", en: "Thanks, you too, Klara! All right, see you in a moment!" }
    ]
  },
  {
    id: "kap1-09",
    chapters: ["kap-1"],
    category: "Länder & Sprachen",
    lengthTier: "medium",
    title: "Zwischen Griechenland, Italien und der Türkei",
    context: "Two neighbors talk about Mediterranean countries, family languages, and living in Germany.",
    speakers: {
      A: { name: "Elena", voice: "seraphina" },
      B: { name: "Cem", voice: "conrad" }
    },
    lines: [
      { speaker: "A", de: "Hallo Cem! Wie geht es dir heute?", en: "Hello Cem! How are you today?" },
      { speaker: "B", de: "Hallo Elena! Sehr gut, danke! Und wie geht es dir?", en: "Hello Elena! Very good, thanks! And how are you?" },
      { speaker: "A", de: "Auch gut! Sag mal, kommst du aus der Türkei, aus Istanbul?", en: "Also good! Tell me, do you come from Turkey, from Istanbul?" },
      { speaker: "B", de: "Genau, aus der Türkei, aus Izmir! Ich spreche Türkisch, Deutsch und Englisch.", en: "Exactly, from Turkey, from Izmir! I speak Turkish, German, and English." },
      { speaker: "A", de: "Izmir ist nah bei Griechenland! Ich komme nämlich aus Griechenland, aus Athen.", en: "Izmir is close to Greece! Because I come from Greece, from Athens." },
      { speaker: "B", de: "Ach so, aus Athen! Dann sind wir ja fast Nachbarn!", en: "Oh I see, from Athens! Then we are almost neighbors!" },
      { speaker: "A", de: "Ja! Aber meine Schwester wohnt jetzt in Italien, in Rom.", en: "Yes! But my sister lives in Italy now, in Rome." },
      { speaker: "B", de: "Sprichst du dann auch Italienisch?", en: "Do you also speak Italian then?" },
      { speaker: "A", de: "Ja, ich spreche ganz gut Italienisch, und mein Partner Pierre kommt aus Frankreich.", en: "Yes, I speak pretty good Italian, and my partner Pierre comes from France." },
      { speaker: "B", de: "Aus Frankreich! Spricht er mit dir Französisch oder Deutsch?", en: "From France! Does he speak French or German with you?" },
      { speaker: "A", de: "Wir variieren jeden Tag: zuerst Französisch, dann Deutsch! Ich verstehe beides gut.", en: "We vary every day: first French, then German! I understand both well." },
      { speaker: "B", de: "Klasse! Ich gehe jetzt zum Bus. Schönen Abend noch, Elena!", en: "Awesome! I am going to the bus now. Have a nice evening, Elena!" },
      { speaker: "A", de: "Ebenso, Cem! Mach's gut und bis später!", en: "You too, Cem! Take care and see you later!" }
    ]
  },
  {
    id: "kap1-10",
    chapters: ["kap-1"],
    category: "Länder & Sprachen",
    lengthTier: "medium",
    title: "Internationale Wörter raten",
    context: "An Austrian teacher and an Italian learner discover German words used in other languages.",
    speakers: {
      A: { name: "Frau König", voice: "ingrid" },
      B: { name: "Paolo", voice: "jonas" }
    },
    lines: [
      { speaker: "A", de: "Guten Tag, Paolo! Machen wir heute zusammen ein kleines Wort-Spiel?", en: "Good day, Paolo! Shall we play a little word game together today?" },
      { speaker: "B", de: "Guten Tag, Frau König! Na klar, ich spiele sehr gern mit!", en: "Good day, Ms. König! Sure thing, I'd love to play along!" },
      { speaker: "A", de: "Viele deutsche Wörter sind international bekannt. Welche Wörter kennen Sie schon?", en: "Many German words are internationally well-known. Which words do you already know?" },
      { speaker: "B", de: "Moment mal, ich sammle kurz: In Italien sagen wir zum Beispiel Würstel!", en: "Just a moment, let me collect my thoughts briefly: In Italy, for example, we say 'Würstel'!" },
      { speaker: "A", de: "Genau! In Deutschland heißt das Wort Würstchen, und in Österreich sagen wir auch Würstel.", en: "Exactly! In Germany the word is called 'Würstchen', and in Austria we also say 'Würstel'." },
      { speaker: "B", de: "Lustig! Und in den USA sagt man Kindergarten und Autobahn auf Englisch, oder?", en: "Funny! And in the USA people say 'Kindergarten' and 'Autobahn' in English, right?" },
      { speaker: "A", de: "Richtig! Und wie heißen die Wörter Musik, Telefon und Dialog in Ihrer Sprache?", en: "Correct! And what are the words music, telephone, and dialogue called in your language?" },
      { speaker: "B", de: "Fast gleich auf Italienisch! Ich verstehe solche Wörter sofort ohne Wörterbuch.", en: "Almost the same in Italian! I understand such words immediately without a dictionary." },
      { speaker: "A", de: "Sehen Sie: Sie verstehen schon sehr gut deutsch!", en: "You see: You already understand German very well!" },
      { speaker: "B", de: "Das motiviert sehr! Ich notiere alle neuen Wörter in mein Heft.", en: "That is very motivating! I am noting down all the new words in my notebook." },
      { speaker: "A", de: "Alles klar, Paolo! Vielen Dank für das nette Gespräch heute.", en: "All right, Paolo! Thank you very much for the nice conversation today." },
      { speaker: "B", de: "Gern geschehen, Frau König! Schönen Tag noch!", en: "You're welcome, Ms. König! Have a nice day!" },
      { speaker: "A", de: "Danke, gleichfalls! Auf Wiedersehen!", en: "Thank you, you too! Goodbye!" }
    ]
  },
  {
    id: "kap1-11",
    chapters: ["kap-1"],
    category: "Länder & Sprachen",
    lengthTier: "long",
    title: "Wer kommt woher? Das Länder-Quiz",
    context: "Two study partners quiz each other on matching countries and languages to earn twenty points.",
    speakers: {
      A: { name: "Daria", voice: "leni" },
      B: { name: "Kenji", voice: "florian" }
    },
    lines: [
      { speaker: "A", de: "Hallo Kenji! Arbeiten wir heute zu zweit für das Quiz über Länder und Sprachen?", en: "Hello Kenji! Shall we work in pairs today for the quiz on countries and languages?" },
      { speaker: "B", de: "Hallo Daria! Na klar, kein Problem! Wie funktioniert das Spiel?", en: "Hello Daria! Sure thing, no problem! How does the game work?" },
      { speaker: "A", de: "Hier ist eine große Tabelle. Wir ordnen jedes Land und jede Sprache richtig zu.", en: "Here is a big table. We match each country and each language correctly." },
      { speaker: "B", de: "Alles klar! Welche Wörter gehören zusammen? Fragst du zuerst?", en: "All right! Which words belong together? Will you ask first?" },
      { speaker: "A", de: "Ja! Frage eins: Japan, Polen und Spanien — welche Sprachen sprechen die Personen dort?", en: "Yes! Question one: Japan, Poland, and Spain — which languages do the people speak there?" },
      { speaker: "B", de: "Das ist leicht! In Japan Japanisch, in Polen Polnisch und in Spanien Spanisch.", en: "That is easy! In Japan Japanese, in Poland Polish, and in Spain Spanish." },
      { speaker: "A", de: "Drei Punkte für dich! Jetzt Frage zwei: Brasilien, Portugal und Mexiko?", en: "Three points for you! Now question two: Brazil, Portugal, and Mexico?" },
      { speaker: "B", de: "In Brasilien und in Portugal spricht man Portugiesisch, und in Mexiko Spanisch!", en: "In Brazil and in Portugal one speaks Portuguese, and in Mexico Spanish!" },
      { speaker: "A", de: "Genau! Sechs Punkte! Jetzt du — stellst du mir auch eine Frage?", en: "Exactly! Six points! Now you — will you ask me a question too?" },
      { speaker: "B", de: "Gern! Wo spricht man Arabisch, Türkisch und Russisch? Nenne bitte drei Länder!", en: "Gladly! Where does one speak Arabic, Turkish, and Russian? Please name three countries!" },
      { speaker: "A", de: "Moment mal... Arabisch in Algerien, Türkisch in der Türkei und Russisch in Russland!", en: "Wait a moment... Arabic in Algeria, Turkish in Turkey, and Russian in Russia!" },
      { speaker: "B", de: "Super, Daria! Und welche Sprachen gehören noch in unsere Liste?", en: "Great, Daria! And which languages still belong in our list?" },
      { speaker: "A", de: "Hier stehen noch Bulgarisch, Serbisch, Ungarisch und Indonesisch.", en: "Here there are still Bulgarian, Serbian, Hungarian, and Indonesian." },
      { speaker: "B", de: "Ach so! Und vergiss nicht Frankreich mit Französisch und Italien mit Italienisch!", en: "Oh I see! And don't forget France with French and Italy with Italian!" },
      { speaker: "A", de: "Stimmt! Wir ergänzen auch Griechenland, Thailand, die Ukraine und die USA in der Tabelle.", en: "Right! We'll also add Greece, Thailand, Ukraine, and the USA to the table." },
      { speaker: "B", de: "Und natürlich Deutschland, Österreich und die Schweiz mit Deutsch und Rätoromanisch!", en: "And of course Germany, Austria, and Switzerland with German and Rhaeto-Romanic!" },
      { speaker: "A", de: "Ich zähle unsere Antworten zusammen: achtzehn, neunzehn, zwanzig Punkte! Perfekt!", en: "I'm counting our answers together: eighteen, nineteen, twenty points! Perfect!" },
      { speaker: "B", de: "Zwanzig Punkte! Wir kennen jetzt wirklich alle Länder aus Kapitel eins.", en: "Twenty points! We really know all the countries from Chapter One now." },
      { speaker: "A", de: "Ja, das Training zu zweit macht richtig Spaß!", en: "Yes, practicing in pairs is really fun!" },
      { speaker: "B", de: "Danke für deine Hilfe, Daria!", en: "Thanks for your help, Daria!" },
      { speaker: "A", de: "Gern geschehen, Kenji! Ich gehe jetzt nach Hause.", en: "You're welcome, Kenji! I am going home now." },
      { speaker: "B", de: "Mach's gut! Schönen Abend noch und bis bald!", en: "Take care! Have a nice evening and see you soon!" },
      { speaker: "A", de: "Ebenso, Kenji! Tschüs und ciao!", en: "You too, Kenji! Bye and ciao!" }
    ]
  },

  // ─── CATEGORY 3: Telefon, E-Mail & Buchstabieren (5 Clips: 3 Medium, 2 Long) ───
  {
    id: "kap1-12",
    chapters: ["kap-1"],
    category: "Telefon, E-Mail & Buchstabieren",
    lengthTier: "medium",
    title: "Handynummern im Café tauschen",
    context: "Two new friends exchange mobile and landline phone numbers using digits zero through ten.",
    speakers: {
      A: { name: "Mia", voice: "seraphina" },
      B: { name: "Noah", voice: "jonas" }
    },
    lines: [
      { speaker: "A", de: "Noah, das Gespräch mit dir ist super! Tauschen wir kurz unsere Nummern?", en: "Noah, talking with you is great! Shall we quickly exchange our numbers?" },
      { speaker: "B", de: "Na klar, Mia! Sehr gern! Fragst du nach meiner Handynummer?", en: "Sure thing, Mia! Very gladly! Are you asking about my mobile number?" },
      { speaker: "A", de: "Genau! Wie ist deine Handynummer?", en: "Exactly! What is your mobile number?" },
      { speaker: "B", de: "Moment mal, ich lese vor: null eins sieben zwei, drei vier fünf, sechs acht neun.", en: "Wait a moment, I'll read it out: zero one seven two, three four five, six eight nine." },
      { speaker: "A", de: "Oh, nicht so schnell! Bitte sag die Zahlen noch einmal ganz langsam!", en: "Oh, not so fast! Please say the numbers once more very slowly!" },
      { speaker: "B", de: "Kein Problem! Zuerst null eins sieben zwei, dann drei vier fünf, sechs acht neun.", en: "No problem! First zero one seven two, then three four five, six eight nine." },
      { speaker: "A", de: "Alles klar! Ich notiere die Nummer direkt in mein Telefon.", en: "All right! I am saving the number directly into my phone." },
      { speaker: "B", de: "Und wie ist deine Handynummer oder deine Telefonnummer zu Hause?", en: "And what is your mobile number or your telephone number at home?" },
      { speaker: "A", de: "Meine Telefonnummer zu Hause hat am Ende die Zahl zehn: null drei null, vier acht zehn.", en: "My phone number at home has the number ten at the end: zero three zero, four eight ten." },
      { speaker: "B", de: "Null drei null, vier acht zehn — ich schreibe sofort mit! Danke, Mia!", en: "Zero three zero, four eight ten — I'm writing it down right away! Thanks, Mia!" },
      { speaker: "A", de: "Gern geschehen! Ich schicke dir gleich eine kurze Nachricht.", en: "You're welcome! I'll send you a quick message right away." },
      { speaker: "B", de: "Perfekt! Ich gehe jetzt zur Arbeit. Schönen Tag noch, Mia!", en: "Perfect! I'm heading to work now. Have a nice day, Mia!" },
      { speaker: "A", de: "Danke, gleichfalls! Mach's gut und bis später!", en: "Thanks, you too! Take care and see you later!" }
    ]
  },
  {
    id: "kap1-13",
    chapters: ["kap-1"],
    category: "Telefon, E-Mail & Buchstabieren",
    lengthTier: "long",
    title: "Anmeldung am Telefon",
    context: "A complete telephone registration call involving spelling a surname, dictating an email address, and checking numbers 11 to 20.",
    speakers: {
      A: { name: "Herr Wolf", voice: "conrad" },
      B: { name: "Frau Szabó", voice: "katja" }
    },
    lines: [
      { speaker: "A", de: "Sprachschule Zentrum, Wolf am Telefon, guten Tag!", en: "Language School Center, Wolf on the phone, good day!" },
      { speaker: "B", de: "Guten Tag, Herr Wolf! Hier spricht Klara Szabó. Ich rufe wegen Kurs A eins an.", en: "Good day, Mr. Wolf! This is Klara Szabó speaking. I am calling about course A1." },
      { speaker: "A", de: "Guten Tag, Frau Szabó! Freut mich! Ich notiere gern Ihre Daten in unserer Tabelle.", en: "Good day, Ms. Szabó! Nice to speak with you! I will gladly note your details in our table." },
      { speaker: "B", de: "Vielen Dank! Mein Vorname ist Klara mit K.", en: "Thank you very much! My first name is Klara with a K." },
      { speaker: "A", de: "Alles klar. Und wie schreibt man Ihren Nachnamen? Bitte buchstabieren Sie langsam!", en: "All right. And how does one write your last name? Please spell it slowly!" },
      { speaker: "B", de: "Kein Problem, ich buchstabiere: S – Z – A – B – O.", en: "No problem, I'll spell it: S – Z – A – B – O." },
      { speaker: "A", de: "Moment mal: Welcher Buchstabe steht auf Position zwei? Z wie im Alphabet am Ende?", en: "Hold on: Which letter is in position two? Z like at the end of the alphabet?" },
      { speaker: "B", de: "Genau, der Buchstabe Z! S, dann Z, dann A, B, O. Der Name ist ungarisch.", en: "Exactly, the letter Z! S, then Z, then A, B, O. The name is Hungarian." },
      { speaker: "A", de: "Ach so, aus Ungarn! Jetzt habe ich jeden Buchstaben richtig.", en: "Oh I see, from Hungary! Now I have every letter right." },
      { speaker: "B", de: "Super! Fragen Sie auch nach meiner E-Mail-Adresse?", en: "Great! Do you also need my email address?" },
      { speaker: "A", de: "Ja, bitte! Wie ist Ihre E-Mail-Adresse, Frau Szabó?", en: "Yes, please! What is your email address, Ms. Szabó?" },
      { speaker: "B", de: "Meine E-Mail-Adresse ist klara unterstrich szabo minus wien at mail punkt at.", en: "My email address is klara underscore szabo minus wien at mail dot at." },
      { speaker: "A", de: "Entschuldigung, bitte sagen Sie den Teil nach szabo noch einmal!", en: "Excuse me, please say the part after szabo once more!" },
      { speaker: "B", de: "Gern: klara, dann Unterstrich, szabo, dann minus, wien, at mail Punkt a t.", en: "Gladly: klara, then underscore, szabo, then minus, wien, at mail dot a t." },
      { speaker: "A", de: "Perfekt: Unterstrich, minus und am Ende Punkt a t. Und wie ist Ihre Telefonnummer?", en: "Perfect: underscore, minus, and at the end dot a t. And what is your phone number?" },
      { speaker: "B", de: "Meine Nummer ist elf, zwölf, dreizehn, vierzehn, fünfzehn.", en: "My number is eleven, twelve, thirteen, fourteen, fifteen." },
      { speaker: "A", de: "Das ist ja eine lustige Nummer! Und haben Sie noch eine zweite Handynummer?", en: "That is a funny number! And do you also have a second mobile number?" },
      { speaker: "B", de: "Ja, beruflich: sechzehn, siebzehn, achtzehn, neunzehn, zwanzig!", en: "Yes, for work: sixteen, seventeen, eighteen, nineteen, twenty!" },
      { speaker: "A", de: "Ich lese laut mit: sechzehn, siebzehn, achtzehn, neunzehn, zwanzig. Wunderbar!", en: "I'll read aloud along with it: sixteen, seventeen, eighteen, nineteen, twenty. Wonderful!" },
      { speaker: "B", de: "In welchem Raum ist der Deutschkurs morgen früh, Herr Wolf?", en: "Which room is the German course in tomorrow morning, Mr. Wolf?" },
      { speaker: "A", de: "In Raum zwölf! Sie sind Person Nummer fünfzehn auf der Liste.", en: "In room twelve! You are person number fifteen on the list." },
      { speaker: "B", de: "Vielen Dank für die schnelle Hilfe, Herr Wolf!", en: "Thank you very much for the quick help, Mr. Wolf!" },
      { speaker: "A", de: "Gern geschehen, Frau Szabó! Schönen Tag noch und auf Wiederhören!", en: "You're welcome, Ms. Szabó! Have a nice day and goodbye!" },
      { speaker: "B", de: "Ebenso, Herr Wolf! Auf Wiederhören!", en: "You too, Mr. Wolf! Goodbye!" }
    ]
  },
  {
    id: "kap1-14",
    chapters: ["kap-1"],
    category: "Telefon, E-Mail & Buchstabieren",
    lengthTier: "medium",
    title: "Wie schreibt man Ihre E-Mail-Adresse?",
    context: "At a library desk, a student dictates her email address with dots, hyphens, and underscores.",
    speakers: {
      A: { name: "Herr Neumann", voice: "killian" },
      B: { name: "Lara", voice: "amala" }
    },
    lines: [
      { speaker: "A", de: "Guten Tag! Wie heißen Sie bitte, und wo wohnen Sie?", en: "Good day! What is your name please, and where do you live?" },
      { speaker: "B", de: "Guten Tag! Ich heiße Lara Lind und wohne jetzt hier in Köln.", en: "Good day! My name is Lara Lind and I live here in Cologne now." },
      { speaker: "A", de: "Freut mich, Frau Lind! Für Ihren Ausweis brauche ich noch Ihre E-Mail-Adresse.", en: "Nice to meet you, Ms. Lind! For your card I still need your email address." },
      { speaker: "B", de: "Ganz meinerseits! Meine E-Mail-Adresse ist lara minus lind unterstrich acht at web punkt de.", en: "Likewise! My email address is lara minus lind underscore eight at web dot de." },
      { speaker: "A", de: "Moment mal, ich schreibe langsam mit: zuerst lara minus lind?", en: "Just a moment, I'm writing along slowly: first lara minus lind?" },
      { speaker: "B", de: "Genau, mit minus zwischen lara und lind, und dann kommt ein Unterstrich.", en: "Exactly, with minus between lara and lind, and then comes an underscore." },
      { speaker: "A", de: "Ach so! Und welche Zahl steht nach dem Unterstrich?", en: "Oh I see! And which number comes after the underscore?" },
      { speaker: "B", de: "Die Zahl acht! Und danach at web Punkt d e.", en: "The number eight! And after that at web dot d e." },
      { speaker: "A", de: "Buchstabieren Sie bitte noch kurz Ihren Nachnamen zur Sicherheit!", en: "Please briefly spell your last name as well just to be sure!" },
      { speaker: "B", de: "Na klar: L – I – N – D. Vier Buchstaben.", en: "Sure thing: L – I – N – D. Four letters." },
      { speaker: "A", de: "Alles klar, Ihr Ausweis ist fertig! Hier bitte, Frau Lind.", en: "All right, your card is ready! Here you go, Ms. Lind." },
      { speaker: "B", de: "Super, vielen Dank!", en: "Great, thank you very much!" },
      { speaker: "A", de: "Gern geschehen! Schönen Tag noch und auf Wiedersehen!", en: "You're welcome! Have a nice day and goodbye!" },
      { speaker: "B", de: "Danke, gleichfalls! Auf Wiedersehen!", en: "Thank you, you too! Goodbye!" }
    ]
  },
  {
    id: "kap1-15",
    chapters: ["kap-1"],
    category: "Telefon, E-Mail & Buchstabieren",
    lengthTier: "medium",
    title: "Schlechte Verbindung am Telefon",
    context: "A noisy phone call from the street where numbers and letters have to be repeated loudly and clearly.",
    speakers: {
      A: { name: "Hanna", voice: "leni" },
      B: { name: "David", voice: "jan" }
    },
    lines: [
      { speaker: "A", de: "Hallo am Telefon! Wer spricht da, bitte?", en: "Hello on the phone! Who is speaking there, please?" },
      { speaker: "B", de: "Hallo Hanna, hier ist David! Hörst du mich gut?", en: "Hello Hanna, this is David! Do you hear me well?" },
      { speaker: "A", de: "Nein, David, die Straße hier ist sehr laut! Ich verstehe dich kaum!", en: "No, David, the street here is very loud! I barely understand you!" },
      { speaker: "B", de: "Kein Problem, ich spreche jetzt ganz laut und langsam! Hörst du mich jetzt?", en: "No problem, I am speaking very loudly and slowly now! Do you hear me now?" },
      { speaker: "A", de: "Ja, jetzt geht es gut! Hast du die Telefonnummer von Herrn Meier?", en: "Yes, now it's working well! Do you have Mr. Meier's telephone number?" },
      { speaker: "B", de: "Ja! Schreibst du mit? Die Zahlen sind: vierzehn, sechzehn, neunzehn, null sieben.", en: "Yes! Are you writing it down? The numbers are: fourteen, sixteen, nineteen, zero seven." },
      { speaker: "A", de: "Moment mal! Vierzehn, sechzehn — und dann siebzehn oder neunzehn?", en: "Wait a moment! Fourteen, sixteen — and then seventeen or nineteen?" },
      { speaker: "B", de: "Neunzehn! Ich sage es noch einmal: vierzehn, sechzehn, neunzehn, null sieben.", en: "Nineteen! I'll say it once more: fourteen, sixteen, nineteen, zero seven." },
      { speaker: "A", de: "Ach so, neunzehn! Und schreibt man Meier mit E – I oder A – Y?", en: "Oh I see, nineteen! And does one spell Meier with E – I or A – Y?" },
      { speaker: "B", de: "Ganz einfach: M – E – I – E – R.", en: "Very simple: M – E – I – E – R." },
      { speaker: "A", de: "Alles klar, ich notiere M – E – I – E – R. Danke, David!", en: "All right, I'm noting down M – E – I – E – R. Thanks, David!" },
      { speaker: "B", de: "Gern geschehen! Ich komme in zehn Minuten ins Café. Bis gleich!", en: "You're welcome! I'm coming to the café in ten minutes. See you in a moment!" },
      { speaker: "A", de: "Super, bis gleich und auf Wiederhören!", en: "Great, see you soon and goodbye!" },
      { speaker: "B", de: "Auf Wiederhören, Hanna!", en: "Goodbye, Hanna!" }
    ]
  },
  {
    id: "kap1-16",
    chapters: ["kap-1"],
    category: "Telefon, E-Mail & Buchstabieren",
    lengthTier: "long",
    title: "Das Alphabet und die Kontaktliste",
    context: "A course coordinator and a student volunteer proofread the class contact sheet together.",
    speakers: {
      A: { name: "Frau Berg", voice: "ingrid" },
      B: { name: "Leo", voice: "florian" }
    },
    lines: [
      { speaker: "A", de: "Guten Abend, Leo! Schön, du hilfst heute bei unserer Kontaktliste!", en: "Good evening, Leo! Nice that you are helping with our contact list today!" },
      { speaker: "B", de: "Guten Abend, Frau Berg! Na klar, sehr gern! Wie prüfen wir die Tabelle?", en: "Good evening, Ms. Berg! Sure thing, very gladly! How shall we check the table?" },
      { speaker: "A", de: "Ich lese jeden Namen laut vor, und du liest am Bildschirm mit.", en: "I will read every name out loud, and you read along on the screen." },
      { speaker: "B", de: "Alles klar, ich lese mit! Gleichzeitig üben wir das deutsche Alphabet.", en: "All right, I'll read along! At the same time we practice the German alphabet." },
      { speaker: "A", de: "Genau! Person Nummer eins heißt Yilmaz. Steht da Y am Anfang?", en: "Exactly! Person number one is named Yilmaz. Is there a Y at the beginning?" },
      { speaker: "B", de: "Moment mal... Nein, hier steht J! Ich korrigiere sofort: Y – I – L – M – A – Z.", en: "Wait a moment... No, there is a J here! I'll correct it immediately: Y – I – L – M – A – Z." },
      { speaker: "A", de: "Sehr gut, Leo! Jetzt prüfen wir seine Handynummer: null eins fünf eins, zwölf, dreizehn, achtzehn.", en: "Very good, Leo! Now let's check his mobile number: zero one five one, twelve, thirteen, eighteen." },
      { speaker: "B", de: "Ja, die Zahlen stimmen: null eins fünf eins, zwölf, dreizehn, achtzehn.", en: "Yes, the numbers are right: zero one five one, twelve, thirteen, eighteen." },
      { speaker: "A", de: "Super! Weiter zu Person Nummer zwei: Frau Agnieszka Nowak aus Polen.", en: "Great! Moving on to person number two: Ms. Agnieszka Nowak from Poland." },
      { speaker: "B", de: "Ui, der Vorname ist schwer! Bitte buchstabieren Sie Agnieszka langsam!", en: "Whoa, the first name is tough! Please spell Agnieszka slowly!" },
      { speaker: "A", de: "Kein Problem, sprich gern leise mit: A – G – N – I – E – S – Z – K – A.", en: "No problem, feel free to speak along quietly: A – G – N – I – E – S – Z – K – A." },
      { speaker: "B", de: "Ich spreche mit: A – G – N – I – E – S – Z – K – A! Neun Buchstaben, jetzt stimmt alles.", en: "I'm speaking along: A – G – N – I – E – S – Z – K – A! Nine letters, now everything is right." },
      { speaker: "A", de: "Und stimmt ihre E-Mail-Adresse? a punkt nowak minus krakau unterstrich zwei at pl punkt com?", en: "And is her email address right? a dot nowak minus krakau underscore two at pl dot com?" },
      { speaker: "B", de: "Ach so, mit Unterstrich zwei! Hier fehlt der Unterstrich. Ich ergänze ihn schnell.", en: "Oh I see, with underscore two! The underscore is missing here. I'll add it quickly." },
      { speaker: "A", de: "Prima! Und wie viele Personen stehen insgesamt auf der Liste?", en: "Great! And how many people are on the list in total?" },
      { speaker: "B", de: "Ich zähle die letzten Zeilen: fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn, zwanzig!", en: "I'll count the last rows: fifteen, sixteen, seventeen, eighteen, nineteen, twenty!" },
      { speaker: "A", de: "Zwanzig Personen, jede Telefonnummer und jede E-Mail-Adresse ist komplett.", en: "Twenty people, every telephone number and every email address is complete." },
      { speaker: "B", de: "Schreiben wir oben noch einen kurzen Titel über die Tabelle?", en: "Shall we write a short title above the table as well?" },
      { speaker: "A", de: "Ja: Deutschkurs Gruppe eins — Kontakte und Sprachen, mit Punkt am Ende.", en: "Yes: German Course Group One — Contacts and Languages, with a period at the end." },
      { speaker: "B", de: "Fertig! Vielen Dank für die gute Teamarbeit, Frau Berg!", en: "Done! Thank you very much for the good teamwork, Ms. Berg!" },
      { speaker: "A", de: "Gern geschehen, Leo! Danke für deine Hilfe!", en: "You're welcome, Leo! Thank you for your help!" },
      { speaker: "B", de: "Schönen Abend noch und gute Nacht!", en: "Have a nice evening and good night!" },
      { speaker: "A", de: "Ebenso, Leo! Mach's gut und bis bald!", en: "You too, Leo! Take care and see you soon!" }
    ]
  },

  // ─── CATEGORY 4: Unterwegs & International (4 Clips: 2 Medium, 2 Long) ───
  {
    id: "kap1-17",
    chapters: ["kap-1"],
    category: "Unterwegs & International",
    lengthTier: "long",
    title: "Ankunft mit Reiseführer und Reiseführerin",
    context: "Tourists arriving at the bus terminal meet their two tour guides, check luggage, and share travel snacks.",
    speakers: {
      A: { name: "Reiseführer Tom", voice: "conrad" },
      B: { name: "Reiseführerin Eva", voice: "ingrid" },
      C: { name: "Maja", voice: "amala" }
    },
    lines: [
      { speaker: "A", de: "Guten Morgen zusammen und willkommen in München! Ich bin Tom, Ihr Reiseführer.", en: "Good morning everyone and welcome to Munich! I am Tom, your tour guide." },
      { speaker: "B", de: "Und guten Morgen auch von mir! Ich heiße Eva und bin Ihre Reiseführerin aus Österreich.", en: "And good morning from me too! My name is Eva and I am your tour guide from Austria." },
      { speaker: "C", de: "Guten Morgen! Ich bin Maja. Freut mich sehr!", en: "Good morning! I am Maja. Very nice to meet you!" },
      { speaker: "A", de: "Ganz meinerseits, Frau Maja! Wie geht es Ihnen nach der Reise?", en: "Likewise, Ms. Maja! How are you after the trip?" },
      { speaker: "C", de: "Danke, ganz gut! Woher kommen die anderen Gäste in unserer Gruppe?", en: "Thanks, pretty good! Where do the other guests in our group come from?" },
      { speaker: "B", de: "Unsere Gruppe ist sehr international: aus Mexiko, Brasilien, Japan und aus der Schweiz!", en: "Our group is very international: from Mexico, Brazil, Japan, and from Switzerland!" },
      { speaker: "A", de: "Moment mal, Frau Maja — ist das da links Ihr großer Koffer?", en: "Just a moment, Ms. Maja — is that big suitcase over there on the left yours?" },
      { speaker: "C", de: "Ja, genau, das ist mein Koffer! Oben im Koffer liegt auch mein Handtuch für das Hotel.", en: "Yes, exactly, that is my suitcase! At the top of the suitcase is also my towel for the hotel." },
      { speaker: "B", de: "Perfekt! Und haben Sie etwas für die Fahrt? Wir fahren gleich lange auf der Autobahn.", en: "Perfect! And do you have something for the ride? We'll soon be driving a long way on the highway." },
      { speaker: "C", de: "Na klar! Hier in der Tasche sind eine Flasche Wasser und ein frisches Butterbrot.", en: "Sure thing! Here in the bag are a bottle of water and a fresh sandwich." },
      { speaker: "A", de: "Sehr klug! Und am Bus gibt es auch warme Snacks für alle.", en: "Very smart! And by the bus there are also warm snacks for everyone." },
      { speaker: "C", de: "Oh, was gibt es denn Gutes?", en: "Oh, what good things are there?" },
      { speaker: "A", de: "Hier in Deutschland gibt es heiße Würstchen und eine leckere Nudel-Box!", en: "Here in Germany there are hot sausages and a tasty noodle box!" },
      { speaker: "B", de: "Und bei uns in Wien sagen alle nicht Würstchen, sondern Würstel!", en: "And back home in Vienna everyone says 'Würstel' instead of 'Würstchen'!" },
      { speaker: "C", de: "Ach so, Würstchen und Würstel! Beide Wörter merke ich mir sofort.", en: "Oh I see, 'Würstchen' and 'Würstel'! I'll remember both words right away." },
      { speaker: "A", de: "Fehlt noch eine Person aus dem Bus, Eva?", en: "Is one person from the bus still missing, Eva?" },
      { speaker: "B", de: "Ja, Herr Santos bleibt heute im Hotel. Der Kranke braucht leider Ruhe und Tee.", en: "Yes, Mr. Santos is staying at the hotel today. The sick person unfortunately needs rest and tea." },
      { speaker: "C", de: "Oh, gute Besserung für ihn! Wo steht unser Bus jetzt?", en: "Oh, get well soon to him! Where is our bus parked now?" },
      { speaker: "A", de: "Direkt vorne neben dem Kindergarten, Hausnummer sechs! Danach geht es direkt auf die Autobahn.", en: "Right up front next to the kindergarten, house number six! After that we head straight onto the highway." },
      { speaker: "B", de: "Tom nimmt Ihren Koffer, Frau Maja, und wir gehen langsam vor.", en: "Tom will take your suitcase, Ms. Maja, and we'll walk ahead slowly." },
      { speaker: "C", de: "Oh, vielen Dank für Ihre Hilfe, Herr Tom!", en: "Oh, thank you very much for your help, Mr. Tom!" },
      { speaker: "A", de: "Gern geschehen, kein Problem! Steigen wir ein!", en: "You're welcome, no problem! Let's hop in!" },
      { speaker: "B", de: "Alles klar, alle Plätze sind frei. Gute Fahrt zusammen und bis gleich im Bus!", en: "All right, all seats are open. Have a good trip everyone and see you in a moment on the bus!" },
      { speaker: "C", de: "Super, danke schön! Bis gleich!", en: "Great, thank you very much! See you in a moment!" }
    ]
  },
  {
    id: "kap1-18",
    chapters: ["kap-1"],
    category: "Unterwegs & International",
    lengthTier: "medium",
    title: "Pause an der Autobahn",
    context: "Two friends stop at a rest area along the German highway for a quick bite.",
    speakers: {
      A: { name: "Jonas", voice: "jonas" },
      B: { name: "Katja", voice: "katja" }
    },
    lines: [
      { speaker: "A", de: "Puh, zwei Stunden auf der Autobahn! Machen wir hier kurz Pause, Katja?", en: "Phew, two hours on the highway! Shall we take a short break here, Katja?" },
      { speaker: "B", de: "Na klar, Jonas! Sehr gute Idee! Wie ist dein Befinden?", en: "Sure thing, Jonas! Very good idea! How are you feeling?" },
      { speaker: "A", de: "Ganz gut, aber ich habe Hunger! Was ist in unserer Tasche?", en: "Pretty good, but I'm hungry! What is in our bag?" },
      { speaker: "B", de: "Moment mal, ich schaue nach: Hier sind zwei Butterbrote und eine große Flasche Apfelsaft.", en: "Hold on, let me check: Here are two sandwiches and a big bottle of apple juice." },
      { speaker: "A", de: "Lecker, ein Butterbrot nehme ich sofort! Und am Kiosk da drüben riecht es gut.", en: "Yum, I'll take a sandwich right away! And it smells good at the kiosk over there." },
      { speaker: "B", de: "Genau, da gibt es heiße Nudeln und frische Würstchen.", en: "Exactly, they have hot noodles and fresh sausages over there." },
      { speaker: "A", de: "Haha, bei mir zu Hause in Graz heißt das immer ein Würstel!", en: "Haha, back home in Graz that's always called a 'Würstel'!" },
      { speaker: "B", de: "Ach so, stimmt! Und liegt unser kleines Handtuch im Koffer oder vorne im Auto?", en: "Oh right! And is our small towel in the suitcase or up front in the car?" },
      { speaker: "A", de: "Das Handtuch liegt direkt oben im Koffer. Ich hole es kurz.", en: "The towel is right at the top of the suitcase. I'll grab it quickly." },
      { speaker: "B", de: "Super, danke dir!", en: "Great, thank you!" },
      { speaker: "A", de: "Gern geschehen, kein Problem! Ich kaufe auch noch eine Nudel-Suppe für uns.", en: "You're welcome, no problem! I'll also buy a noodle soup for us." },
      { speaker: "B", de: "Alles klar! Ich warte hier am Tisch auf dich. Bis gleich, Jonas!", en: "All right! I'll wait for you here at the table. See you in a moment, Jonas!" },
      { speaker: "A", de: "Bis gleich, Katja!", en: "See you in a moment, Katja!" }
    ]
  },
  {
    id: "kap1-19",
    chapters: ["kap-1"],
    category: "Unterwegs & International",
    lengthTier: "medium",
    title: "Nachbarschaftshilfe beim Kindergarten",
    context: "Two neighbors meet outside the local kindergarten and talk about helping an ill neighbor.",
    speakers: {
      A: { name: "Frau Yilmaz", voice: "seraphina" },
      B: { name: "Herr Albrecht", voice: "florian" }
    },
    lines: [
      { speaker: "A", de: "Guten Tag, Herr Albrecht! Wohnen Sie auch hier neben dem Kindergarten?", en: "Good day, Mr. Albrecht! Do you also live here next to the kindergarten?" },
      { speaker: "B", de: "Guten Tag, Frau Yilmaz! Ja, direkt in Haus Nummer sieben. Wie geht es Ihnen?", en: "Good day, Ms. Yilmaz! Yes, right in house number seven. How are you?" },
      { speaker: "A", de: "Sehr gut, danke! Und Ihnen?", en: "Very good, thank you! And you?" },
      { speaker: "B", de: "Auch gut! Aber unser Nachbar Herr Kurz ist leider krank zu Hause.", en: "Also good! But our neighbor Mr. Kurz is unfortunately sick at home." },
      { speaker: "A", de: "Oh je! Wie geht es ihm heute? Ist der Kranke allein in der Wohnung?", en: "Oh dear! How is he today? Is the sick person alone in the apartment?" },
      { speaker: "B", de: "Seine Tochter kommt am Abend, und jetzt bringe ich ihm eine Flasche Tee und ein Butterbrot.", en: "His daughter is coming in the evening, and right now I'm bringing him a bottle of tea and a sandwich." },
      { speaker: "A", de: "Das ist aber nett von Ihnen! Ich koche zu Hause gerade frische Nudeln.", en: "That is very kind of you! I am cooking fresh noodles at home right now." },
      { speaker: "B", de: "Ach, eine warme Nudel-Suppe tut dem Kranken sicher sehr gut!", en: "Oh, a warm noodle soup will surely do the sick person a lot of good!" },
      { speaker: "A", de: "Na klar! Ich bringe die Suppe in zehn Minuten zu Wohnung drei.", en: "Of course! I'll bring the soup to apartment three in ten minutes." },
      { speaker: "B", de: "Wunderbar, Herr Kurz freut sich bestimmt sehr! Vielen Dank, Frau Yilmaz!", en: "Wonderful, Mr. Kurz will certainly be very pleased! Thank you very much, Ms. Yilmaz!" },
      { speaker: "A", de: "Gern geschehen, Herr Albrecht! Nachbarn helfen doch zusammen.", en: "You're welcome, Mr. Albrecht! Neighbors help out together, after all." },
      { speaker: "B", de: "Genau! Bis später dann und schönen Tag noch!", en: "Exactly! See you later then and have a nice day!" },
      { speaker: "A", de: "Danke, gleichfalls! Auf Wiedersehen!", en: "Thank you, you too! Goodbye!" }
    ]
  },
  {
    id: "kap1-20",
    chapters: ["kap-1"],
    category: "Unterwegs & International",
    lengthTier: "long",
    title: "Koffer packen und deutsche Wörter unterwegs",
    context: "Two roommates pack for a weekend trip while quizzing each other on everyday German words recognized around the world.",
    speakers: {
      A: { name: "Sarah", voice: "leni" },
      B: { name: "Marco", voice: "killian" }
    },
    lines: [
      { speaker: "A", de: "Hallo Marco! Bist du fertig für unsere Reise nach Wien?", en: "Hello Marco! Are you ready for our trip to Vienna?" },
      { speaker: "B", de: "Hallo Sarah! Fast! Mein Koffer steht hier offen auf dem Boden.", en: "Hello Sarah! Almost! My suitcase is lying open here on the floor." },
      { speaker: "A", de: "Moment mal, wir prüfen alles zusammen! Hast du schon ein großes Handtuch im Koffer?", en: "Hold on, let's check everything together! Do you already have a large towel in the suitcase?" },
      { speaker: "B", de: "Ja, zwei Handtücher sind drin! Und für den Zug habe ich eine Flasche Wasser.", en: "Yes, two towels are in there! And for the train I have a bottle of water." },
      { speaker: "A", de: "Super! Ich mache uns noch schnell ein Butterbrot und packe kalte Würstchen ein.", en: "Great! I'll quickly make us a sandwich and pack cold sausages." },
      { speaker: "B", de: "Haha, denk daran: In Österreich heißt unser Würstchen überall Würstel!", en: "Haha, remember: In Austria our 'Würstchen' is called 'Würstel' everywhere!" },
      { speaker: "A", de: "Genau! Weißt du was? Fast alle Dinge in unserem Koffer sind international bekannte Wörter!", en: "Exactly! You know what? Almost all the things in our suitcase are internationally known words!" },
      { speaker: "B", de: "Echt? Spielen wir ein kurzes Wort-Spiel! Welche deutschen Wörter kennt man im Ausland?", en: "Really? Let's play a quick word game! Which German words do people know abroad?" },
      { speaker: "A", de: "Ich sammle zuerst fünf Beispiele: Kindergarten, Autobahn, Würstchen, Nudel und Butterbrot!", en: "First I'll collect five examples: kindergarten, highway, sausage, noodle, and sandwich!" },
      { speaker: "B", de: "Stimmt! In den USA sagt jeder Kindergarten und oft auch Nudel — auf Englisch noodle!", en: "True! In the USA everyone says kindergarten and often also noodle!" },
      { speaker: "A", de: "Und in Russland heißt ein belegtes Brot tatsächlich auch Butterbrot!", en: "And in Russia an open-faced sandwich is actually called 'Butterbrot' too!" },
      { speaker: "B", de: "Ach so, wirklich? Das höre ich heute zum ersten Mal! Und Koffer?", en: "Oh really? That's the first time I'm hearing that today! And 'Koffer'?" },
      { speaker: "A", de: "Auf Französisch in Frankreich gibt es coffre — die Wörter gehören historisch zusammen!", en: "In French in France there is 'coffre' — the words belong together historically!" },
      { speaker: "B", de: "Wahnsinn! Und was ist mit den Wörtern Flasche, Handtuch und der Kranke?", en: "Amazing! And what about the words bottle, towel, and the sick person?" },
      { speaker: "A", de: "Auf Italienisch gibt es fiasco wie Flasche! So lernt man neue Wörter super leicht.", en: "In Italian there is 'fiasco' like 'Flasche'! That way one learns new words super easily." },
      { speaker: "B", de: "Du bist ja eine richtige Reiseführerin für Sprachen, Sarah!", en: "You're a real tour guide for languages, Sarah!" },
      { speaker: "A", de: "Und du bist ein super Reiseführer für gutes Essen unterwegs!", en: "And you're a great tour guide for good food on the road!" },
      { speaker: "B", de: "Na klar! So, mein Koffer ist jetzt zu. Um wie viel Uhr fährt das Taxi?", en: "Of course! Okay, my suitcase is closed now. What time does the taxi leave?" },
      { speaker: "A", de: "In fünfzehn Minuten direkt unten vor Haus Nummer vier!", en: "In fifteen minutes right downstairs in front of house number four!" },
      { speaker: "B", de: "Alles klar! Ich trage deinen Koffer auch gleich mit nach unten.", en: "All right! I'll carry your suitcase downstairs right away too." },
      { speaker: "A", de: "Oh, vielen Dank, Marco!", en: "Oh, thank you very much, Marco!" },
      { speaker: "B", de: "Gern geschehen, kein Problem! Geh schon mal vor, bis gleich an der Tür!", en: "You're welcome, no problem! Go on ahead, see you in a moment at the door!" },
      { speaker: "A", de: "Super, bis gleich!", en: "Great, see you in a moment!" }
    ]
  },

  // ─── CATEGORY 5: Im Deutschkurs (5 Clips: 3 Medium, 2 Long) ───
  {
    id: "kap1-21",
    chapters: ["kap-1"],
    category: "Im Deutschkurs",
    lengthTier: "medium",
    title: "Dialog zu zweit üben",
    context: "A German teacher guides a student through listening, reading along, speaking aloud, and varying a dialogue.",
    speakers: {
      A: { name: "Frau Klein", voice: "katja" },
      B: { name: "Sven", voice: "conrad" }
    },
    lines: [
      { speaker: "A", de: "Guten Morgen, Sven! Heute arbeiten alle im Kurs zu zweit.", en: "Good morning, Sven! Today everyone in the course is working in pairs." },
      { speaker: "B", de: "Guten Morgen, Frau Klein! Wer ist heute meine Partnerin?", en: "Good morning, Ms. Klein! Who is my partner today?" },
      { speaker: "A", de: "Deine Partnerin ist Elena aus Griechenland. Zuerst hört ihr zusammen Aufgabe sieben.", en: "Your partner is Elena from Greece. First you listen to exercise seven together." },
      { speaker: "B", de: "Hören wir nur zu, oder lesen wir den Dialog im Buch auch mit?", en: "Do we only listen, or do we also read along with the dialogue in the book?" },
      { speaker: "A", de: "Zuerst hört ihr ruhig zu und lest still mit.", en: "First you listen quietly and read along silently." },
      { speaker: "B", de: "Alles klar! Und beim zweiten Mal sprechen wir die Sätze laut mit?", en: "All right! And the second time we speak the sentences aloud along with it?" },
      { speaker: "A", de: "Genau! Ihr sprecht jedes Wort und alle Redemittel laut und deutlich mit.", en: "Exactly! You speak every word and all the useful phrases along loudly and clearly." },
      { speaker: "B", de: "Welche Redemittel stehen da im Fokus?", en: "Which useful phrases are in focus there?" },
      { speaker: "A", de: "Höflich grüßen, nach dem Namen fragen und sich am Ende freundlich verabschieden.", en: "Greeting politely, asking for the name, and saying goodbye warmly at the end." },
      { speaker: "B", de: "Ach so! Und danach variieren Elena und ich das Gespräch mit unseren eigenen Namen?", en: "Oh I see! And after that Elena and I vary the conversation with our own names?" },
      { speaker: "A", de: "Ja, perfekt! Ihr variiert Land, Stadt, Sprache und Telefonnummer.", en: "Yes, perfect! You vary country, city, language, and telephone number." },
      { speaker: "B", de: "Super, kein Problem! Vielen Dank für die Erklärung, Frau Klein!", en: "Great, no problem! Thank you very much for the explanation, Ms. Klein!" },
      { speaker: "A", de: "Gern geschehen, Sven! Viel Erfolg euch beiden und bis später!", en: "You're welcome, Sven! Good luck to both of you and see you later!" },
      { speaker: "B", de: "Danke! Bis später!", en: "Thanks! See you later!" }
    ]
  },
  {
    id: "kap1-22",
    chapters: ["kap-1"],
    category: "Im Deutschkurs",
    lengthTier: "long",
    title: "Grammatik-Werkstatt: W-Frage und Aussagesatz",
    context: "A lively classroom review of Chapter 1 grammar: W-questions, verb position, subjects, and personal pronouns.",
    speakers: {
      A: { name: "Lehrer Weber", voice: "florian" },
      B: { name: "Anna", voice: "seraphina" },
      C: { name: "Cem", voice: "killian" }
    },
    lines: [
      { speaker: "A", de: "Guten Tag zusammen! Wir schauen heute zehn Minuten auf die deutsche Grammatik.", en: "Good day everyone! Today we are looking at German grammar for ten minutes." },
      { speaker: "B", de: "Guten Tag, Herr Weber! Ich habe gleich eine Frage: Was genau ist eine W-Frage?", en: "Good day, Mr. Weber! I have a question right away: What exactly is a W-question?" },
      { speaker: "A", de: "Sehr gute Frage, Anna! In einer W-Frage steht auf Position eins immer ein W-Wort.", en: "Very good question, Anna! In a W-question, a W-word always stands in position one." },
      { speaker: "C", de: "Moment mal, ich sammle alle W-Wörter aus Kapitel eins: wer, wie, was, wo und woher!", en: "Hold on, let me collect all the W-words from Chapter One: who, how, what, where, and from where!" },
      { speaker: "A", de: "Genau, Cem! Und dazu kommt noch welche oder welcher — zum Beispiel: Welche Sprache sprichst du?", en: "Exactly, Cem! And on top of that comes 'welche' or 'welcher' — for example: Which language do you speak?" },
      { speaker: "B", de: "Ach so! Und wo steht das Verb in der W-Frage?", en: "Oh I see! And where does the verb stand in the W-question?" },
      { speaker: "A", de: "Das Verb steht immer fest auf Position zwei! Hören Sie: Woher kommst du? Wie heißt er?", en: "The verb always stands firmly in position two! Listen: Where do you come from? What is his name?" },
      { speaker: "C", de: "Und wie ist die Regel im normalen Aussagesatz?", en: "And what is the rule in a normal declarative sentence?" },
      { speaker: "A", de: "Auch im Aussagesatz steht das Verb auf Position zwei, und am Ende steht ein Punkt.", en: "In a declarative sentence, too, the verb stands in position two, and at the end there is a period." },
      { speaker: "B", de: "Und auf Position eins steht dann das Subjekt, richtig?", en: "And then the subject stands in position one, right?" },
      { speaker: "A", de: "Richtig! Das Subjekt ist oft ein Name oder ein Personalpronomen.", en: "Correct! The subject is often a name or a personal pronoun." },
      { speaker: "C", de: "Welche Personalpronomen kennen wir jetzt alle im Kurs?", en: "Which personal pronouns do we all know in the course now?" },
      { speaker: "B", de: "Ich sage sie auf: ich, du, er, sie, es — und für Personen im Plural auch sie und formell Sie!", en: "I'll recite them: I, you, he, she, it — and for people in the plural also 'they' and formal 'you'!" },
      { speaker: "A", de: "Bravo, Anna! Und im Dativ beim Befinden kennen wir noch dir und Ihnen.", en: "Bravo, Anna! And in the dative for asking how someone is, we also know 'dir' and 'Ihnen'." },
      { speaker: "C", de: "Wie geht es dir? — und formell: Wie geht es Ihnen? Das passt alles logisch zusammen!", en: "How are you (informal)? — and formally: How are you? That all fits together logically!" },
      { speaker: "A", de: "Genau! Jetzt schreiben Sie bitte zu zweit drei W-Fragen und drei kurze Antworten.", en: "Exactly! Now please write three W-questions and three short answers in pairs." },
      { speaker: "B", de: "Na klar! Cem, ich frage zuerst: Woher kommst du und wo wohnst du?", en: "Sure thing! Cem, I'll ask first: Where do you come from and where do you live?" },
      { speaker: "C", de: "Meine Antwort im Aussagesatz: Ich komme aus der Türkei und ich wohne in Berlin.", en: "My answer in a declarative sentence: I come from Turkey and I live in Berlin." },
      { speaker: "A", de: "Perfekte Antwort, Cem! Subjekt auf eins, Verb auf zwei, Punkt am Satzende!", en: "Perfect answer, Cem! Subject in one, verb in two, period at the end of the sentence!" },
      { speaker: "B", de: "So ist deutsche Grammatik gar nicht schwer! Vielen Dank, Herr Weber!", en: "That way German grammar isn't hard at all! Thank you very much, Mr. Weber!" },
      { speaker: "A", de: "Gern geschehen! Unsere Stunde ist für heute zu Ende.", en: "You're welcome! Our lesson is over for today." },
      { speaker: "C", de: "Alles klar! Schönen Tag noch, Herr Weber, und auf Wiedersehen!", en: "All right! Have a nice day, Mr. Weber, and goodbye!" },
      { speaker: "A", de: "Danke, gleichfalls! Bis morgen zusammen!", en: "Thank you, you too! See you tomorrow everyone!" },
      { speaker: "B", de: "Mach's gut, Cem! Tschüs und bis später!", en: "Take care, Cem! Bye and see you later!" }
    ]
  },
  {
    id: "kap1-23",
    chapters: ["kap-1"],
    category: "Im Deutschkurs",
    lengthTier: "medium",
    title: "Die Tabelle im Kurs ergänzen",
    context: "Two study partners complete a workbook chart matching verbs, endings, and expressions for wellbeing.",
    speakers: {
      A: { name: "Mina", voice: "amala" },
      B: { name: "Lukas", voice: "jonas" }
    },
    lines: [
      { speaker: "A", de: "Hallo Lukas! Machen wir Aufgabe acht zusammen? Mein Stift liegt schon bereit.", en: "Hello Lukas! Shall we do exercise eight together? My pen is already ready." },
      { speaker: "B", de: "Hallo Mina! Na klar! Zuerst ordnen wir die Sätze links und rechts richtig zu.", en: "Hello Mina! Sure thing! First we match the sentences on the left and right correctly." },
      { speaker: "A", de: "Moment mal, ich schaue genau hin: Welche Fragen und Antworten gehören hier zusammen?", en: "Wait a moment, let me look closely: Which questions and answers belong together here?" },
      { speaker: "B", de: "Frage eins fragt nach dem Befinden: Wie geht es Ihnen? Was passt dazu?", en: "Question one asks about how someone is doing: How are you? What goes with that?" },
      { speaker: "A", de: "Darauf reagiert man formell mit: Danke, sehr gut! Und Ihnen?", en: "To that one reacts formally with: Thank you, very good! And you?" },
      { speaker: "B", de: "Genau! Und jetzt ergänzen wir die Verben kommen, heißen und sprechen in der Tabelle.", en: "Exactly! And now we complete the verbs 'kommen', 'heißen', and 'sprechen' in the table." },
      { speaker: "A", de: "Ich schreibe: ich spreche, du sprichst, er oder sie spricht. Stimmt das mit i?", en: "I'm writing: I speak, you speak, he or she speaks. Is that right with an 'i'?" },
      { speaker: "B", de: "Ja, hundert Prozent richtig! Bei du und er wechselt e zu i: du sprichst, er spricht.", en: "Yes, one hundred percent right! With 'du' and 'er', 'e' changes to 'i': 'du sprichst', 'er spricht'." },
      { speaker: "A", de: "Ach so, wie bei lesen: ich lese, du liest, sie liest! Ich notiere mir das groß.", en: "Oh I see, like with 'lesen': I read, you read, she reads! I'll note that down in big letters." },
      { speaker: "B", de: "Super, die ganze Tabelle ist fertig! Gehen wir kurz in die Kaffeepause?", en: "Great, the whole table is finished! Shall we go on a quick coffee break?" },
      { speaker: "A", de: "Sehr gern! Ich packe nur kurz mein Buch ein.", en: "Very gladly! I'll just quickly pack up my book." },
      { speaker: "B", de: "Kein Problem! Ich warte draußen am Gang. Bis gleich, Mina!", en: "No problem! I'll wait outside in the hallway. See you in a moment, Mina!" },
      { speaker: "A", de: "Alles klar, danke dir! Bis gleich!", en: "All right, thank you! See you in a moment!" }
    ]
  },
  {
    id: "kap1-24",
    chapters: ["kap-1"],
    category: "Im Deutschkurs",
    lengthTier: "medium",
    title: "Rollenspiel: Formell und informell",
    context: "In an evening class, the instructor and a student practice formal and informal greetings and goodbyes.",
    speakers: {
      A: { name: "Frau Ingrid", voice: "ingrid" },
      B: { name: "Tim", voice: "jan" }
    },
    lines: [
      { speaker: "A", de: "Guten Abend, Tim! Spielen wir jetzt vor der Gruppe zwei kurze Situationen?", en: "Good evening, Tim! Shall we act out two short situations in front of the group now?" },
      { speaker: "B", de: "Guten Abend, Frau Ingrid! Na klar, sehr gern! Was ist Situation Nummer eins?", en: "Good evening, Ms. Ingrid! Sure thing, very gladly! What is situation number one?" },
      { speaker: "A", de: "Situation eins ist im Büro um acht Uhr, also ganz formell mit Herr, Frau und Sie.", en: "Situation one is in the office at eight o'clock, so completely formal with Mr., Ms., and 'Sie'." },
      { speaker: "B", de: "Alles klar! Ich fange an: Guten Morgen, Frau Ingrid! Wie geht es Ihnen heute?", en: "All right! I'll start: Good morning, Ms. Ingrid! How are you today?" },
      { speaker: "A", de: "Guten Morgen, Herr Tim! Danke, ganz gut. Und wie ist Ihr Nachname noch einmal?", en: "Good morning, Mr. Tim! Thank you, pretty good. And what is your last name once more?" },
      { speaker: "B", de: "Mein Nachname ist Frei: F – R – E – I. Schönen Tag noch und auf Wiedersehen!", en: "My last name is Frei: F – R – E – I. Have a nice day and goodbye!" },
      { speaker: "A", de: "Du reagierst perfekt! Jetzt Situation zwei: zwei Freunde am Abend, ganz informell!", en: "You react perfectly! Now situation two: two friends in the evening, completely informal!" },
      { speaker: "B", de: "Hallo Ingrid! Schön, du bist hier! Wie geht es dir und deinem Partner?", en: "Hello Ingrid! Nice, you are here! How are you and your partner?" },
      { speaker: "A", de: "Hallo Tim! Sehr gut, danke! Und wie ist deine neue Handynummer?", en: "Hello Tim! Very good, thanks! And what is your new mobile number?" },
      { speaker: "B", de: "Null sieben neun, drei fünf eins, vier sechs! Tschüs und ciao!", en: "Zero seven nine, three five one, four six! Bye and ciao!" },
      { speaker: "A", de: "Super, Tim! Du spielst das toll — formell und informell ist jetzt ganz klar.", en: "Great, Tim! You act that out wonderfully — formal and informal is completely clear now." },
      { speaker: "B", de: "Vielen Dank für das Training, Frau Ingrid!", en: "Thank you very much for the practice, Ms. Ingrid!" },
      { speaker: "A", de: "Gern geschehen! Schönen Abend noch und gute Nacht!", en: "You're welcome! Have a nice evening and good night!" },
      { speaker: "B", de: "Ebenso! Gute Nacht und bis bald!", en: "You too! Good night and see you soon!" }
    ]
  },
  {
    id: "kap1-25",
    chapters: ["kap-1"],
    category: "Im Deutschkurs",
    lengthTier: "long",
    title: "Das große Kursplakat zum Abschluss",
    context: "Three classmates put together a colorful course poster profiling everyone in their class to celebrate finishing Chapter 1.",
    speakers: {
      A: { name: "Sofia", voice: "seraphina" },
      B: { name: "Felix", voice: "conrad" },
      C: { name: "Nora", voice: "leni" }
    },
    lines: [
      { speaker: "A", de: "Hallo Felix, hallo Nora! Machen wir heute zusammen unser großes Kursplakat fertig?", en: "Hello Felix, hello Nora! Shall we finish our big course poster together today?" },
      { speaker: "B", de: "Hallo Sofia! Na klar! Das Papier und die bunten Stifte liegen schon hier auf dem Tisch.", en: "Hello Sofia! Sure thing! The paper and the colorful pens are already lying here on the table." },
      { speaker: "C", de: "Hallo ihr zwei! Freut mich sehr! Was schreiben wir zuerst auf das Kursplakat?", en: "Hello you two! Very happy to be here! What shall we write on the course poster first?" },
      { speaker: "A", de: "Zuerst schreiben wir für jede Person im Kurs einen kurzen Text — ohne den Namen!", en: "First we write a short text for every person in the course — without the name!" },
      { speaker: "B", de: "Moment mal — ohne Vorname und ohne Nachname? Warum das denn?", en: "Wait a moment — without first name and without last name? Why is that?" },
      { speaker: "A", de: "Na, wir machen daraus ein Rätsel! Die anderen im Kurs lesen den Text und raten: Wer ist das?", en: "Well, we turn it into a guessing game! The others in the course read the text and guess: Who is that?" },
      { speaker: "C", de: "Ach so, was für eine coole Idee! So sprechen wir über andere Personen auf Deutsch.", en: "Oh I see, what a cool idea! That way we speak about other people in German." },
      { speaker: "B", de: "Genau! Welche Infos sammeln wir dann über jede Person?", en: "Exactly! Which info do we collect about every person then?" },
      { speaker: "A", de: "Wir notieren Land, Stadt, Sprachen und ein Lieblingswort auf Deutsch!", en: "We note down country, city, languages, and a favorite word in German!" },
      { speaker: "C", de: "Ich fange gleich mit Karte Nummer eins an. Hört mal zu und ratet!", en: "I'll start right away with card number one. Listen and guess!" },
      { speaker: "B", de: "Alles klar, wir hören gut zu! Lies bitte laut vor, Nora!", en: "All right, we're listening closely! Please read aloud, Nora!" },
      { speaker: "C", de: "Er kommt aus Japan, wohnt in München, spricht Japanisch und Deutsch, und sein Wort ist Autobahn!", en: "He comes from Japan, lives in Munich, speaks Japanese and German, and his word is 'Autobahn'!" },
      { speaker: "A", de: "Haha, ganz leicht! Das ist Kenji!", en: "Haha, super easy! That is Kenji!" },
      { speaker: "B", de: "Richtig! Karte zwei: Sie kommt aus Brasilien und spricht Portugiesisch und Spanisch.", en: "Correct! Card two: She comes from Brazil and speaks Portuguese and Spanish." },
      { speaker: "C", de: "Und ihr Wort auf Deutsch ist Butterbrot — das ist Ana!", en: "And her word in German is 'Butterbrot' — that is Ana!" },
      { speaker: "A", de: "Super! Unten auf das Kursplakat schreiben wir auch Redemittel aus Kapitel eins.", en: "Great! At the bottom of the course poster we'll also write useful phrases from Chapter One." },
      { speaker: "B", de: "Ja: Hallo, Guten Morgen, Guten Tag, Freut mich! und Ganz meinerseits!", en: "Yes: Hello, Good morning, Good day, Nice to meet you!, and Likewise!" },
      { speaker: "C", de: "Und: Auf Wiedersehen, Schönen Tag noch, Mach's gut, Tschüs, Ciao und Bis bald!", en: "And: Goodbye, Have a nice day, Take care, Bye, Ciao, and See you soon!" },
      { speaker: "A", de: "Toll, wir verstehen jetzt so viele Wörter, Zahlen und Dialoge!", en: "Great, we understand so many words, numbers, and dialogues now!" },
      { speaker: "B", de: "Ja, das Kursplakat ist super!", en: "Yes, the course poster is great!" },
      { speaker: "C", de: "Ich hänge das Plakat gleich vorne an die Wand neben die Tür.", en: "I'll hang the poster right up front on the wall next to the door." },
      { speaker: "A", de: "Vielen Dank für eure tolle Mitarbeit heute, Nora und Felix!", en: "Thank you very much for your great collaboration today, Nora and Felix!" },
      { speaker: "B", de: "Gern geschehen, Sofia! Es ist schon spät — ich wünsche euch einen schönen Abend noch!", en: "You're welcome, Sofia! It's already late — I wish you a nice rest of your evening!" },
      { speaker: "C", de: "Danke, gleichfalls! Macht's gut, ihr beiden, und bis später!", en: "Thanks, you too! Take care, you two, and see you later!" },
      { speaker: "A", de: "Ebenso! Gute Nacht und bis bald im Kurs!", en: "Likewise! Good night and see you soon in class!" }
    ]
  }
];
