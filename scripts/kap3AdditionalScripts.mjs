// 15 Brand New, Authentic Zero-Out-of-Syllabus / Scaffolding German Dialogues
// for A1 Kapitel 3 ("In der Stadt / Alltag")
// Topics expanded to 8 clips per category (total 40 clips across Kapitel 3).
// Adheres strictly to Goethe-Institut / Netzwerk neu A1 curriculum standards:
// Strict Präsens (Present Tense), Imperativ mit Sie, Akkusativ, natural fillers,
// and rich cultural context across Germany, Austria, and Switzerland.

export const KAP3_ADDITIONAL_CONVERSATIONS = [
  // ─── CATEGORY 1: Anmeldung & Sportclub (Clips 6, 7, 8 -> Total 8) ───
  {
    id: "kap3-26",
    chapters: ["kap-3"],
    lengthTier: "medium",
    category: "Anmeldung & Sportclub",
    title: "Probetraining im Schwimmclub",
    context: "A prospective member arrives for a trial session at the local swimming club and receives locker room instructions.",
    speakers: {
      A: { name: "Empfang Katja", voice: "katja" },
      B: { name: "Herr Berger", voice: "conrad" }
    },
    lines: [
      { speaker: "A", de: "Guten Tag! Willkommen im Schwimmclub Alster! Haben Sie heute einen Termin?", en: "Good day! Welcome to the Alster Swimming Club! Do you have an appointment today?" },
      { speaker: "B", de: "Guten Tag! Ja, genau, ich heiße Thomas Berger und habe heute mein erstes Probetraining.", en: "Good day! Yes, exactly, my name is Thomas Berger and I have my first trial session today." },
      { speaker: "A", de: "Wunderbar, Herr Berger! Freut mich sehr. Schwimmen Sie schon lange?", en: "Wonderful, Mr. Berger! Very pleased to meet you. Have you been swimming for a long time?" },
      { speaker: "B", de: "Ja, ich schwimme regelmäßig, aber dieser Club ist ganz neu für mich.", en: "Yes, I swim regularly, but this club is completely new to me." },
      { speaker: "A", de: "Alles klar! Hier ist Ihre Chipkarte für den Eingang und für Ihren Spind.", en: "All right! Here is your chip card for the entrance and for your locker." },
      { speaker: "B", de: "Danke schön! Wo finde ich denn die Umkleidekabine für Herren?", en: "Thank you very much! Where do I find the men's locker room then?" },
      { speaker: "A", de: "Gehen Sie hier bitte geradeaus durch die Glastür und dann gleich links!", en: "Please go straight ahead through the glass door and then immediately left!" },
      { speaker: "B", de: "Alles klar: Geradeaus und dann links. Wie funktioniert der Spind?", en: "All right: Straight ahead and then left. How does the locker work?" },
      { speaker: "A", de: "Halten Sie die Karte einfach an das Schloss. Das Fach schließt automatisch.", en: "Simply hold the card against the lock. The compartment locks automatically." },
      { speaker: "B", de: "Das ist ja praktisch! Und wo geht es zum großen Schwimmbecken?", en: "That is really convenient! And where does one go to the big swimming pool?" },
      { speaker: "A", de: "Hinter den Duschen gehen Sie direkt rechts in die Schwimmhalle zum Becken.", en: "Behind the showers you turn directly right into the indoor pool area toward the basin." },
      { speaker: "B", de: "Super! Liegt das Probetraining zeitlich fest, oder schwimme ich frei?", en: "Great! Is the trial session scheduled for a fixed time, or do I swim freely?" },
      { speaker: "A", de: "Unser Trainer wartet um sechzehn Uhr am Becken auf Sie. Viel Spaß beim Schwimmen!", en: "Our coach is waiting for you at the pool at four p.m. Have fun swimming!" },
      { speaker: "B", de: "Herzlichen Dank für Ihre Hilfe! Bis später!", en: "Heartfelt thanks for your help! See you later!" }
    ],
    newWords: [
      { word: "das Probetraining", meaning: "trial training session" },
      { word: "die Umkleidekabine", meaning: "locker room / changing cubicle" },
      { word: "der Spind", meaning: "locker" },
      { word: "das Schwimmbecken", meaning: "swimming pool" }
    ]
  },
  {
    id: "kap3-27",
    chapters: ["kap-3"],
    lengthTier: "medium",
    category: "Anmeldung & Sportclub",
    title: "Pause für den Tennisclub",
    context: "A club member visits the office to pause her tennis club membership for three months due to a work project.",
    speakers: {
      A: { name: "Frau Sommer", voice: "seraphina" },
      B: { name: "Clubsekretär Florian", voice: "florian" }
    },
    lines: [
      { speaker: "A", de: "Guten Tag! Ich habe eine wichtige Frage zu meiner Mitgliedschaft im Tennisclub.", en: "Good day! I have an important question about my membership in the tennis club." },
      { speaker: "B", de: "Guten Tag, Frau Sommer! Kein Problem, wie helfe ich Ihnen heute?", en: "Good day, Ms. Sommer! No problem, how can I help you today?" },
      { speaker: "A", de: "Ich habe ein großes Projekt in der Firma und möchte meine Mitgliedschaft drei Monate pausieren.", en: "I have a big project at my company and would like to pause my membership for three months." },
      { speaker: "B", de: "Ach so, Sie möchten den Vertrag pausieren und nicht komplett kündigen?", en: "I see, you would like to pause the contract and not cancel it completely?" },
      { speaker: "A", de: "Genau, nicht kündigen! Ab Oktober spiele ich wieder sehr gern Tennis hier.", en: "Exactly, not cancel! Starting in October I will gladly play tennis here again." },
      { speaker: "B", de: "Wunderbar! Nennen Sie mir bitte kurz Ihre Mitgliedsnummer?", en: "Wonderful! Could you please briefly tell me your membership number?" },
      { speaker: "A", de: "Meine Mitgliedsnummer ist die vier acht zwei null eins.", en: "My membership number is four eight two zero one." },
      { speaker: "B", de: "Danke schön. Ich sehe Ihr Profil im Computer: Marion Sommer, wohnhaft in Hamburg.", en: "Thank you very much. I see your profile on the computer: Marion Sommer, residing in Hamburg." },
      { speaker: "A", de: "Richtig! Zahlen Mitglieder während einer Pause den normalen Beitrag?", en: "Right! Do members pay the normal fee during a pause?" },
      { speaker: "B", de: "Nein, während der Pause zahlen Sie keine sechzig Euro, sondern nur fünf Euro Verwaltungsgebühr im Monat.", en: "No, during the pause you do not pay sixty euros, but only a five euro administrative fee per month." },
      { speaker: "A", de: "Das ist wirklich sehr fair und unkompliziert! Brauchen Sie noch ein Formular von mir?", en: "That is really very fair and uncomplicated! Do you still need a form from me?" },
      { speaker: "B", de: "Unterschreiben Sie bitte nur hier unten auf dem Bildschirm für die Bestätigung.", en: "Please just sign down here on the screen for confirmation." },
      { speaker: "A", de: "Alles klar, hier ist meine Unterschrift. Bekomme ich die Bestätigung per E-Mail?", en: "All right, here is my signature. Do I receive the confirmation by email?" },
      { speaker: "B", de: "Ja, genau, die Bestätigung geht sofort an Ihre E-Mail-Adresse. Einen schönen Tag noch, Frau Sommer!", en: "Yes, exactly, the confirmation goes immediately to your email address. Have a nice day, Ms. Sommer!" }
    ],
    newWords: [
      { word: "die Mitgliedschaft", meaning: "membership" },
      { word: "pausieren", meaning: "to pause" },
      { word: "kündigen", meaning: "to cancel / terminate" },
      { word: "die Mitgliedsnummer", meaning: "membership number" }
    ]
  },
  {
    id: "kap3-28",
    chapters: ["kap-3"],
    lengthTier: "long",
    category: "Anmeldung & Sportclub",
    title: "Sicherheits-Check in der Berner Kletterhalle",
    context: "A Swiss climber checks in at a climbing hall in Bern, registers her details, and completes a safety review.",
    speakers: {
      A: { name: "Empfang Jan", voice: "jan" },
      B: { name: "Kletterin Nina", voice: "leni" }
    },
    lines: [
      { speaker: "A", de: "Grüezi mittenand! Herzlich willkommen in der Kletterhalle Bern! Klettern Sie heute zum ersten Mal bei uns?", en: "Hello everyone! A warm welcome to the Bern Climbing Hall! Are you climbing with us for the first time today?" },
      { speaker: "B", de: "Grüezi! Ja, genau, ich wohne seit zwei Wochen in Bern und suche eine Kletterhalle.", en: "Hello! Yes, exactly, I have been living in Bern for two weeks and am looking for a climbing gym." },
      { speaker: "A", de: "Super, das freut uns sehr! Klettern Sie mit Seil an der hohen Wand oder lieber Bouldern ohne Seil?", en: "Great, we are very pleased! Do you climb with a rope on the high wall or do you prefer bouldering without a rope?" },
      { speaker: "B", de: "Ich mache beides sehr gern, aber heute klettere ich mit einer Partnerin an der großen Wand.", en: "I like doing both very much, but today I am climbing with a partner on the big wall." },
      { speaker: "A", de: "Wunderbar! Für die Sicherheit an der Wand brauchen wir zuerst eine kurze Anmeldung.", en: "Wonderful! For safety on the wall we first need a brief registration." },
      { speaker: "B", de: "Kein Problem! Liegt hier ein Anmeldeformular?", en: "No problem! Is there a registration form here?" },
      { speaker: "A", de: "Ja, füllen Sie bitte dieses Formular aus: Name, Vorname, Geburtsdatum und Ihre Adresse in Bern.", en: "Yes, please fill out this form: surname, first name, date of birth, and your address in Bern." },
      { speaker: "B", de: "Alles klar, mein Name ist Nina Keller, geboren am fünfzehnten August neunzehnhundertfünfundneunzig.", en: "All right, my name is Nina Keller, born on the fifteenth of August nineteen ninety-five." },
      { speaker: "A", de: "Haben Sie schon eigene Kletterschuhe und einen Klettergurt dabei?", en: "Do you already have your own climbing shoes and a climbing harness with you?" },
      { speaker: "B", de: "Meine Kletterschuhe habe ich in der Tasche, aber ich brauche noch einen Klettergurt.", en: "I have my climbing shoes in my bag, but I still need a climbing harness." },
      { speaker: "A", de: "Kein Problem! Hier ist ein passender Klettergurt in Größe M. Probieren Sie den Gurt bitte an.", en: "No problem! Here is a suitable climbing harness in size M. Please try the harness on." },
      { speaker: "B", de: "Danke schön! Der Gurt passt perfekt und sitzt sehr bequem.", en: "Thank you very much! The harness fits perfectly and sits very comfortably." },
      { speaker: "A", de: "Prima! Jetzt noch eine wichtige Sicherheitsfrage: Kennen Sie die Partner-Sicherung und die Hallenregeln?", en: "Great! Now one more important safety question: Are you familiar with partner belaying and the gym rules?" },
      { speaker: "B", de: "Ja, absolut, ich klettere seit vier Jahren regelmäßig und kenne alle Knoten und Sicherungsgeräte.", en: "Yes, absolutely, I have climbed regularly for four years and know all knots and belay devices." },
      { speaker: "A", de: "Sehr gut! Schauen Sie bitte kurz auf diese Infotafel rechts: Partnercheck vor jedem Start ist Pflicht!", en: "Very good! Please look briefly at this information board on the right: A partner check before every climb is mandatory!" },
      { speaker: "B", de: "Selbstverständlich, Sicherheit geht immer vor!", en: "Of course, safety always comes first!" },
      { speaker: "A", de: "Wunderbar. Das Ticket für den ganzen Tag kostet zwanzig Franken, inklusive Gurt sind das vierundzwanzig Franken.", en: "Wonderful. The ticket for the whole day costs twenty francs; including the harness that is twenty-four francs." },
      { speaker: "B", de: "Zahlen kann ich sicher mit der Karte, oder?", en: "I can surely pay by card, right?" },
      { speaker: "A", de: "Genau, halten Sie Ihre Karte einfach an das Gerät. Perfekt, das klappt sofort!", en: "Exactly, simply hold your card against the device. Perfect, that works immediately!" },
      { speaker: "B", de: "Toll! Wo finde ich die Umkleideräume und die Schließfächer?", en: "Great! Where do I find the changing rooms and the lockers?" },
      { speaker: "A", de: "Gehen Sie hier links die Treppe hoch: Oben sind die Umkleiden und der Zugang zur Kletterwand.", en: "Go upstairs on the left here: Upstairs are the locker rooms and the entrance to the climbing wall." },
      { speaker: "B", de: "Herzlichen Dank für die freundliche Einführung! Uf Wiederluege!", en: "Heartfelt thanks for the friendly introduction! Goodbye!" }
    ],
    newWords: [
      { word: "die Kletterhalle", meaning: "climbing gym" },
      { word: "klettern", meaning: "to climb" },
      { word: "die Sicherheit", meaning: "safety" },
      { word: "der Klettergurt", meaning: "climbing harness" },
      { word: "die Kletterschuhe", meaning: "climbing shoes" }
    ]
  },

  // ─── CATEGORY 2: Stadttour in Hamburg (Clips 6, 7, 8 -> Total 8) ───
  {
    id: "kap3-29",
    chapters: ["kap-3"],
    lengthTier: "medium",
    category: "Stadttour in Hamburg",
    title: "Mit der Hafenfähre auf der Elbe",
    context: "A guide and a visitor take public ferry 62 from Landungsbrücken along the Elbe river past Hamburg's docklands.",
    speakers: {
      A: { name: "Tourguide Malte", voice: "florian" },
      B: { name: "Touristin Sophie", voice: "amala" }
    },
    lines: [
      { speaker: "A", de: "Moin Sophie! Schau mal, hier an den Landungsbrücken liegt schon unsere Fähre zweiundsechzig!", en: "Hello Sophie! Look, here at the Landungsbrücken piers our ferry sixty-two is already moored!" },
      { speaker: "B", de: "Moin Malte! Toll! Brauchen wir für die Fähre eine extra Schifffahrtskarte?", en: "Hello Malte! Great! Do we need an extra boat ticket for the ferry?" },
      { speaker: "A", de: "Nein, überhaupt nicht! Die Fähre gehört zum normalen Stadtverkehr, deine U-Bahn-Fahrkarte gilt hier auch.", en: "No, not at all! The ferry belongs to normal city transit; your subway ticket is valid here too." },
      { speaker: "B", de: "Ach so, das ist ja fantastisch und richtig günstig!", en: "I see, that is really fantastic and very affordable!" },
      { speaker: "A", de: "Genau! Gehen wir an Bord und steigen wir die Treppe hoch auf das Sonnendeck.", en: "Exactly! Let's go on board and climb the stairs up to the sun deck." },
      { speaker: "B", de: "Wunderbar, von hier oben hat man einen herrlichen Blick über das Wasser und das Ufer!", en: "Wonderful, from up here one has a splendid view across the water and the shore!" },
      { speaker: "A", de: "Ja! Schau nach links: Da drüben liegen die riesigen Docks und die Container-Terminals.", en: "Yes! Look to the left: Over there lie the gigantic dry docks and container terminals." },
      { speaker: "B", de: "Wahnsinn, die Schiffe sind so hoch wie Hochhäuser! Spürst du den leichten Wellengang?", en: "Incredible, the ships are as tall as skyscrapers! Do you feel the gentle swell?" },
      { speaker: "A", de: "Ja, wenn ein großes Frachtschiff vorbeifährt, gibt es immer ein bisschen Wellengang auf dem Fluss.", en: "Yes, whenever a large cargo ship passes by, there is always a little swell on the river." },
      { speaker: "B", de: "Wohin fährt diese Fähre eigentlich genau?", en: "Where does this ferry actually travel to exactly?" },
      { speaker: "A", de: "Sie fährt von den Landungsbrücken elbabwärts bis nach Finkenwerder.", en: "It travels down the Elbe from Landungsbrücken all the way to Finkenwerder." },
      { speaker: "B", de: "Wie lange dauert die ganze Fahrt auf dem Wasser?", en: "How long does the whole journey on the water take?" },
      { speaker: "A", de: "Die Fahrt dauert circa dreißig Minuten. Ein perfekter Mini-Ausflug!", en: "The ride takes about thirty minutes. A perfect mini excursion!" },
      { speaker: "B", de: "Das gefällt mir riesig! Schiffsreisen in Hamburg sind einfach einmalig!", en: "I enjoy that immensely! Boat trips in Hamburg are simply unique!" }
    ],
    newWords: [
      { word: "die Fähre", meaning: "ferry" },
      { word: "die Landungsbrücken", meaning: "landing piers (Hamburg harbor)" },
      { word: "das Ufer", meaning: "river bank / shore" },
      { word: "der Wellengang", meaning: "swell / waves" }
    ]
  },
  {
    id: "kap3-30",
    chapters: ["kap-3"],
    lengthTier: "long",
    category: "Stadttour in Hamburg",
    title: "Früh am Sonntagmorgen auf dem Fischmarkt",
    context: "Two friends wake up at sunrise on Sunday to experience Hamburg's legendary Altona fish market.",
    speakers: {
      A: { name: "Finn", voice: "killian" },
      B: { name: "Laura", voice: "seraphina" }
    },
    lines: [
      { speaker: "A", de: "Guten Morgen Laura! Es ist erst sechs Uhr morgens, aber schau mal: Der Fischmarkt ist schon voller Leben!", en: "Good morning Laura! It is only six o'clock in the morning, but look: The fish market is already full of life!" },
      { speaker: "B", de: "Guten Morgen Finn! Puh, so früh am Sonntag aufstehen ist hart, aber die Atmosphäre ist echt genial!", en: "Good morning Finn! Phew, getting up so early on Sunday is tough, but the atmosphere is genuinely awesome!" },
      { speaker: "A", de: "Hörst du die lauten Stimmen da vorne? Das sind die berühmten Marktschreier!", en: "Do you hear the loud voices up ahead? Those are the famous market criers!" },
      { speaker: "B", de: "Haha, ja! Der Mann ruft ganz laut: 'Frischer Fisch, zehn Heringe für zehn Euro!'", en: "Haha, yes! The man calls out loudly: 'Fresh fish, ten herrings for ten euros!'" },
      { speaker: "A", de: "Genau, das ist Tradition in Hamburg! Sie verkaufen Fisch, Obstkörbe, Blumen und vieles mehr.", en: "Exactly, that is tradition in Hamburg! They sell fish, fruit baskets, flowers, and much more." },
      { speaker: "B", de: "Und der Duft hier am Hafen! Riechst du die gebratenen Fische und den frischen Kaffee?", en: "And the scent here at the harbor! Do you smell the fried fish and the fresh coffee?" },
      { speaker: "A", de: "Oh ja! Ich habe jetzt schon richtig Hunger. Holen wir uns ein typisches Fischbrötchen?", en: "Oh yes! I am already quite hungry now. Shall we get ourselves a typical fish roll?" },
      { speaker: "B", de: "Unbedingt! Was für ein Fischbrötchen nimmst du am liebsten?", en: "Definitely! What kind of fish roll do you like best?" },
      { speaker: "A", de: "Ich nehme ein Brötchen mit Lachs und Zwiebeln. Und du?", en: "I'll take a roll with salmon and onions. And you?" },
      { speaker: "B", de: "Für mich bitte ein Fischbrötchen mit Nordseekrabben. Das schmeckt hier super frisch.", en: "For me a fish roll with North Sea shrimp, please. That tastes super fresh here." },
      { speaker: "A", de: "Alles klar, gehen wir zu dem Stand da drüben. Guten Morgen! Zwei Fischbrötchen und zwei Kaffee bitte!", en: "All right, let's head to the stall over there. Good morning! Two fish rolls and two coffees, please!" },
      { speaker: "B", de: "Danke schön! Mmmh, das Brötchen ist wirklich köstlich und noch warm.", en: "Thank you very much! Mmm, the roll is truly delicious and still warm." },
      { speaker: "A", de: "Und schau mal da drüben: Was ist das für ein großes Gebäude aus Backstein und Glas?", en: "And take a look over there: What kind of large building made of brick and glass is that?" },
      { speaker: "B", de: "Das ist die historische Fischauktionshalle. Da spielen sonntags morgens Live-Bands Rock und Jazz!", en: "That is the historic Fish Auction Hall. On Sunday mornings live bands play rock and jazz in there!" },
      { speaker: "A", de: "Echt? Musik schon um sieben Uhr morgens?", en: "Really? Music as early as seven o'clock in the morning?" },
      { speaker: "B", de: "Ja, genau! Viele Menschen kommen direkt nach der Party auf der Reeperbahn hierher zum Frühstücken.", en: "Yes, exactly! Many people come here directly after partying on the Reeperbahn to have breakfast." },
      { speaker: "A", de: "Das ist ja eine bunte Mischung aus Frühaufstehern und Nachtschwärmern!", en: "That is really a colorful mix of early birds and night owls!" },
      { speaker: "B", de: "Total! Schau, die Möwen fliegen über dem Wasser und die Sonne geht langsam auf.", en: "Totally! Look, the seagulls are flying over the water and the sun is slowly rising." },
      { speaker: "A", de: "Ein wunderschöner Sonntagmorgen an der Elbe. Wie lange hat der Fischmarkt heute geöffnet?", en: "A beautiful Sunday morning on the Elbe. How long is the fish market open today?" },
      { speaker: "B", de: "Nur bis halb zehn! Um zehn Uhr ist hier schon wieder alles ruhig und aufgeräumt.", en: "Only until nine thirty! By ten o'clock everything here is quiet and cleaned up again." },
      { speaker: "A", de: "Gut, dass wir so früh hier sind! Jetzt gehen wir noch zur Musik in die Halle, oder?", en: "Good thing we are here so early! Now we'll also check out the music in the hall, right?" },
      { speaker: "B", de: "Auf jeden Fall! Komm, trinken wir noch einen Kaffee und hören der Band zu!", en: "In any case! Come on, let's drink another coffee and listen to the band!" }
    ],
    newWords: [
      { word: "der Fischmarkt", meaning: "fish market" },
      { word: "das Fischbrötchen", meaning: "fish roll / sandwich" },
      { word: "der Marktschreier", meaning: "market crier / barker" },
      { word: "sonntags", meaning: "on Sundays" },
      { word: "frisch", meaning: "fresh" }
    ]
  },
  {
    id: "kap3-31",
    chapters: ["kap-3"],
    lengthTier: "medium",
    category: "Stadttour in Hamburg",
    title: "Spaziergang durch die historische Speicherstadt",
    context: "A guide leads an Austrian visitor through Hamburg's UNESCO world heritage brick warehouse district.",
    speakers: {
      A: { name: "Guide Hannes", voice: "conrad" },
      B: { name: "Touristin Ingrid", voice: "ingrid" }
    },
    lines: [
      { speaker: "A", de: "Moin Ingrid! Herzlich willkommen in der Speicherstadt, unserem weltberühmten Lagerhauskomplex!", en: "Hello Ingrid! A warm welcome to the Speicherstadt, our world-famous warehouse complex!" },
      { speaker: "B", de: "Grüß Gott, Hannes! Wow, diese roten Backsteingebäude am Wasser sehen absolut beeindruckend aus!", en: "Good day, Hannes! Wow, these red brick buildings along the water look absolutely impressive!" },
      { speaker: "A", de: "Ja, das ist das größte zusammenhängende Lagerhausviertel der Welt und gehört zum UNESCO-Weltkulturerbe.", en: "Yes, that is the largest contiguous warehouse district in the world and belongs to UNESCO World Heritage." },
      { speaker: "B", de: "Und wie heißen diese schmalen Wasserstraßen zwischen den Häusern? Das sind keine normalen Flüsse, oder?", en: "And what are these narrow waterways between the buildings called? Those are not normal rivers, right?" },
      { speaker: "A", de: "Richtig, auf Hamburgisch heißen diese Kanäle Fleete. Das Wasser steigt und fällt mit den Gezeiten der Nordsee.", en: "Correct, in Hamburg dialect these canals are called Fleete. The water rises and falls with the tides of the North Sea." },
      { speaker: "B", de: "Sehr interessant! Was lagern die Kaufleute heute in diesen hohen Speichern?", en: "Very interesting! What do merchants store in these tall warehouses today?" },
      { speaker: "A", de: "Früher lagern sie Kaffee, Tee, Kakao und Gewürze. Heute gibt es hier Museen, Cafés und riesige Teppichlager.", en: "In the past they stored coffee, tea, cocoa, and spices. Today there are museums, cafés, and huge carpet warehouses here." },
      { speaker: "B", de: "Riecht man hier noch die Gewürze?", en: "Can you still smell the spices here?" },
      { speaker: "A", de: "Ja, direkt da vorne ist das Gewürzmuseum! Da probieren Besucher Pfeffer, Zimt und Vanille.", en: "Yes, right up ahead is the Spice Museum! There visitors taste pepper, cinnamon, and vanilla." },
      { speaker: "B", de: "Wunderbar! Und wie viele Brücken verbinden die einzelnen Lagerhäuser?", en: "Wonderful! And how many bridges connect the individual warehouses?" },
      { speaker: "A", de: "Allein hier im Viertel gibt es Dutzende Brücken aus altem Eisen und Stein.", en: "In this district alone there are dozens of bridges made of old iron and stone." },
      { speaker: "B", de: "Die Perspektive von dieser Brücke auf das Fleet ist ein wunderschönes Fotomotiv!", en: "The view from this bridge onto the canal is a gorgeous photo motif!" },
      { speaker: "A", de: "Machen Sie gern ein paar Fotos! Danach gehen wir in ein traditionelles Kaffeekontor.", en: "Feel free to take a few photos! Afterward we will go into a traditional coffee merchant house." },
      { speaker: "B", de: "Klasse Idee! Ein heißer Kaffee in historischer Umgebung klingt perfekt!", en: "Great idea! A hot coffee in historical surroundings sounds perfect!" }
    ],
    newWords: [
      { word: "die Speicherstadt", meaning: "historic warehouse district" },
      { word: "das Lagerhaus", meaning: "warehouse / storehouse" },
      { word: "der Backstein", meaning: "red brick" },
      { word: "das Fleet", meaning: "tidal canal in Hamburg" }
    ]
  },

  // ─── CATEGORY 3: Verkehr & Wegbeschreibung (Clips 6, 7, 8 -> Total 8) ───
  {
    id: "kap3-32",
    chapters: ["kap-3"],
    lengthTier: "long",
    category: "Verkehr & Wegbeschreibung",
    title: "Anschlusszug verpasst am DB-Reisezentrum",
    context: "A traveler misses her connecting train due to a delay and seeks an alternate route at the Deutsche Bahn counter.",
    speakers: {
      A: { name: "Reisende Frau Meier", voice: "katja" },
      B: { name: "DB Schalterbeamter", voice: "florian" }
    },
    lines: [
      { speaker: "A", de: "Guten Tag! Ich brauche bitte dringend Hilfe. Mein Zug hat Verspätung und mein Anschlusszug ist weg!", en: "Good day! I urgently need help, please. My train has a delay and my connecting train is gone!" },
      { speaker: "B", de: "Guten Tag! Keine Panik, bitte zeigen Sie mir kurz Ihre Fahrkarte. Wohin reisen Sie?", en: "Good day! Don't panic, please briefly show me your ticket. Where are you travelling to?" },
      { speaker: "A", de: "Hier ist mein Ticket. Ich fahre von Hamburg nach Frankfurt am Main.", en: "Here is my ticket. I am traveling from Hamburg to Frankfurt am Main." },
      { speaker: "B", de: "Alles klar, ich sehe es: Ihr Zug aus Rostock hat zwanzig Minuten Verspätung, deshalb verpassen Sie den ICE um zehn Uhr.", en: "All right, I see it: Your train from Rostock has a twenty-minute delay, which is why you miss the ten o'clock ICE." },
      { speaker: "A", de: "Genau! Gilt mein Ticket jetzt auch für einen anderen Zug, oder brauche ich eine neue Fahrkarte?", en: "Exactly! Is my ticket valid for another train now, or do I need a new ticket?" },
      { speaker: "B", de: "Bei dieser Verspätung ist die Zugbindung aufgehoben. Sie nutzen einfach den nächsten passenden Zug ohne Aufpreis.", en: "With this delay the train-specific restriction is lifted. You simply use the next suitable train without extra charge." },
      { speaker: "A", de: "Puh, ein Glück! Wann fährt denn die nächste Verbindung nach Frankfurt?", en: "Phew, what luck! When does the next connection to Frankfurt depart then?" },
      { speaker: "B", de: "Moment, ich tippe die Strecke in mein System... Der nächste ICE fährt um zehn Uhr zweiundvierzig.", en: "One moment, I'll type the route into my system... The next ICE departs at ten forty-two." },
      { speaker: "A", de: "Um zehn Uhr zweiundvierzig, also in circa fünfundzwanzig Minuten. Von welchem Gleis fährt dieser Zug ab?", en: "At ten forty-two, so in about twenty-five minutes. Which platform does this train depart from?" },
      { speaker: "B", de: "Er fährt von Gleis dreizehn ab. Das ist hier im Hauptbahnhof direkt auf der anderen Seite.", en: "It departs from platform thirteen. That is right on the other side here in the main station." },
      { speaker: "A", de: "Muss ich bei diesem Zug unterwegs noch einmal umsteigen?", en: "Do I have to change trains once more en route on this train?" },
      { speaker: "B", de: "Nein, das ist eine direkte Verbindung! Der Zug fährt ohne Umsteigen durch bis zum Frankfurter Hauptbahnhof.", en: "No, that is a direct connection! The train runs without transfers all the way to Frankfurt central station." },
      { speaker: "A", de: "Wunderbar! Brauche ich für Gleis dreizehn einen Stempel auf meiner Fahrkarte?", en: "Wonderful! Do I need a stamp on my ticket for platform thirteen?" },
      { speaker: "B", de: "Ja, ich gebe Ihnen hier einen offiziellen Bestätigungsstempel auf das Ticket und drucke Ihnen den neuen Fahrplan aus.", en: "Yes, I will give you an official confirmation stamp on the ticket here and print out the new timetable for you." },
      { speaker: "A", de: "Herzlichen Dank! Wie komme ich am schnellsten mit meinem schweren Koffer zu Gleis dreizehn?", en: "Heartfelt thanks! How do I get to platform thirteen quickest with my heavy suitcase?" },
      { speaker: "B", de: "Gehen Sie hier aus dem Reisezentrum nach rechts in den Mitteltunnel. Bei Gleis dreizehn gibt es einen Aufzug.", en: "Turn right out of the travel center into the central pedestrian tunnel. At platform thirteen there is an elevator." },
      { speaker: "A", de: "Ein Aufzug ist super, dann muss ich die schweren Koffer nicht über die Treppe tragen.", en: "An elevator is great, then I don't have to carry the heavy suitcases over the stairs." },
      { speaker: "B", de: "Genau. Und im Zug gibt es auch ein Bordbistro mit Kaffee und kalten Getränken.", en: "Exactly. And on board the train there is also a bistro with coffee and cold drinks." },
      { speaker: "A", de: "Perfekt, ein Kaffee tut jetzt wirklich gut nach der Aufregung!", en: "Perfect, a coffee will really do me good now after all the excitement!" },
      { speaker: "B", de: "Hier ist Ihr Reiseplan und Ihr gestempeltes Ticket. Haben Sie noch eine Frage?", en: "Here is your travel itinerary and your stamped ticket. Do you have any further questions?" },
      { speaker: "A", de: "Nein, alles ist glasklar. Vielen Dank für Ihren freundlichen und schnellen Service!", en: "No, everything is crystal clear. Thank you very much for your friendly and swift service!" },
      { speaker: "B", de: "Sehr gern geschehen! Gute Reise nach Frankfurt und einen schönen Tag!", en: "You are very welcome! Have a good journey to Frankfurt and have a nice day!" }
    ],
    newWords: [
      { word: "der Anschlusszug", meaning: "connecting train" },
      { word: "die Verspätung", meaning: "delay" },
      { word: "verpassen", meaning: "to miss (train/bus)" },
      { word: "umsteigen", meaning: "to transfer / change trains" },
      { word: "das Gleis", meaning: "platform / track" }
    ]
  },
  {
    id: "kap3-33",
    chapters: ["kap-3"],
    lengthTier: "medium",
    category: "Verkehr & Wegbeschreibung",
    title: "Ein Mietrad per App in München",
    context: "Two friends use a smartphone mobility app to rent city bikes near Marienplatz in Munich.",
    speakers: {
      A: { name: "Max", voice: "jonas" },
      B: { name: "Anna", voice: "amala" }
    },
    lines: [
      { speaker: "A", de: "Servus Anna! Das Wetter in München ist heute herrlich. Fahren wir mit dem Leihrad an die Isar?", en: "Hello Anna! The weather in Munich is splendid today. Shall we ride to the Isar river with a rental bike?" },
      { speaker: "B", de: "Servus Max! Tolle Idee! Hier an der Ecke stehen vier gelbe Fahrräder. Wie funktioniert der Verleih?", en: "Hello Max! Great idea! Four yellow bikes are parked here at the corner. How does the rental work?" },
      { speaker: "A", de: "Ganz einfach: Wir öffnen die Mobilitäts-App auf dem Smartphone und scannen den QR-Code am Hinterrad.", en: "Very simple: We open the mobility app on our smartphone and scan the QR code on the rear wheel." },
      { speaker: "B", de: "Ah, warte, ich öffne schnell meine App... Mein Bildschirm zeigt: 'Fahrrad erkannt'!", en: "Ah, wait, I'll quickly open my app... My screen shows: 'Bicycle detected'!" },
      { speaker: "A", de: "Super! Jetzt tippst du auf 'Fahrrad entsperren'. Dann öffnet sich das Schloss automatisch.", en: "Great! Now tap on 'Unlock bicycle'. Then the lock opens automatically." },
      { speaker: "B", de: "Klick! Das Schloss ist offen! Das geht ja blitzschnell!", en: "Click! The lock is open! That really happens in a flash!" },
      { speaker: "A", de: "Genau, mein Leihrad ist jetzt auch frei. Prüfen wir kurz die Bremsen und das Licht.", en: "Exactly, my rental bike is free now too. Let's briefly check the brakes and the lights." },
      { speaker: "B", de: "Die Bremsen greifen super und der Sattel passt perfekt. Was kostet die Fahrt eigentlich?", en: "The brakes bite well and the saddle fits perfectly. What does the ride actually cost?" },
      { speaker: "A", de: "Die ersten dreißig Minuten kosten nur einen Euro. Das ist viel billiger als ein Taxi!", en: "The first thirty minutes cost only one euro. That is much cheaper than a taxi!" },
      { speaker: "B", de: "Absolut! Kennst du den Weg vom Marienplatz bis zur Isar?", en: "Absolutely! Do you know the route from Marienplatz to the Isar river?" },
      { speaker: "A", de: "Ja, wir biegen hier rechts ab und folgen direkt dem ausgeschilderten Radweg.", en: "Yes, we turn right here and directly follow the signposted cycle path." },
      { speaker: "B", de: "Gibt es auf der ganzen Strecke einen sicheren Radweg?", en: "Is there a safe cycle lane along the entire route?" },
      { speaker: "A", de: "Ja, München hat viele breite Fahrradwege abseits vom Autoverkehr. Also los, treten wir in die Pedale!", en: "Yes, Munich has many wide cycle paths away from motor traffic. So let's go, let's hit the pedals!" },
      { speaker: "B", de: "Wunderbar, dann gute Fahrt! Ich fahre direkt hinter dir!", en: "Wonderful, then have a good ride! I'll ride directly behind you!" }
    ],
    newWords: [
      { word: "das Leihrad", meaning: "rental bike" },
      { word: "die App", meaning: "smartphone application" },
      { word: "der QR-Code", meaning: "QR code" },
      { word: "entsperren", meaning: "to unlock" },
      { word: "der Radweg", meaning: "bicycle path / lane" }
    ]
  },
  {
    id: "kap3-34",
    chapters: ["kap-3"],
    lengthTier: "medium",
    category: "Verkehr & Wegbeschreibung",
    title: "Nach dem Weg zur U-Bahn fragen",
    context: "A lost tourist in a pedestrian zone asks a helpful local for walking directions to the nearest subway station.",
    speakers: {
      A: { name: "Tourist Carlos", voice: "killian" },
      B: { name: "Passantin Elena", voice: "seraphina" }
    },
    lines: [
      { speaker: "A", de: "Entschuldigung, guten Tag! Sprechen Sie Deutsch? Ich habe mich leider verlaufen.", en: "Excuse me, good day! Do you speak German? I have unfortunately gotten lost." },
      { speaker: "B", de: "Guten Tag! Ja, kein Problem, ich helfe gern. Was suchen Sie denn?", en: "Good day! Yes, no problem, I am glad to help. What are you looking for then?" },
      { speaker: "A", de: "Ich suche die nächste U-Bahn-Station. Ist eine Station hier in der Nähe?", en: "I am looking for the nearest subway station. Is there a station nearby here?" },
      { speaker: "B", de: "Ja, die U-Bahn-Station 'Jungfernstieg' ist gar nicht weit von hier.", en: "Yes, the 'Jungfernstieg' subway station is not far from here at all." },
      { speaker: "A", de: "Oh, prima! Wie komme ich von diesem Platz am besten dorthin?", en: "Oh, great! What is the best way to get there from this square?" },
      { speaker: "B", de: "Gehen Sie hier zuerst durch die Fußgängerzone circa zweihundert Meter geradeaus.", en: "First walk straight ahead through the pedestrian zone here for about two hundred meters." },
      { speaker: "A", de: "Also zweihundert Meter geradeaus durch die Fußgängerzone, verstanden.", en: "So two hundred meters straight ahead through the pedestrian precinct, understood." },
      { speaker: "B", de: "An der großen Kreuzung sehen Sie eine Ampel. Überqueren Sie die Straße an der Ampel!", en: "At the big intersection you will see a traffic light. Cross the street at the traffic light!" },
      { speaker: "A", de: "An der Ampel über die Straße. Und wie geht es dann weiter?", en: "Across the street at the traffic light. And how do I continue then?" },
      { speaker: "B", de: "Biegen Sie nach der Kreuzung gleich links ab. Da sehen Sie ein großes blaues Schild mit einem weißen 'U'.", en: "Turn left immediately after the intersection. There you will see a large blue sign with a white 'U'." },
      { speaker: "A", de: "Ein blaues Schild mit weißem 'U' — das ist der Eingang zur U-Bahn?", en: "A blue sign with a white 'U' — that is the entrance to the subway?" },
      { speaker: "B", de: "Genau, das ist der Eingang mit der Rolltreppe nach unten zu den Bahnsteigen.", en: "Exactly, that is the entrance with the escalator downstairs to the platforms." },
      { speaker: "A", de: "Wie viele Minuten gehe ich bis dorthin zu Fuß?", en: "How many minutes do I walk to get there on foot?" },
      { speaker: "B", de: "Zu Fuß brauchen Sie höchstens fünf Minuten. Einen schönen Aufenthalt noch in unserer Stadt!", en: "On foot you need at most five minutes. Enjoy the rest of your stay in our city!" }
    ],
    newWords: [
      { word: "die Fußgängerzone", meaning: "pedestrian precinct / zone" },
      { word: "die Kreuzung", meaning: "intersection / crossroads" },
      { word: "die Ampel", meaning: "traffic light" },
      { word: "der Eingang", meaning: "entrance" }
    ]
  },

  // ─── CATEGORY 4: Konzert, Film & Festival (Clips 6, 7, 8 -> Total 8) ───
  {
    id: "kap3-35",
    chapters: ["kap-3"],
    lengthTier: "medium",
    category: "Konzert, Film & Festival",
    title: "Tickets fürs Freiluftkino im Stadtpark",
    context: "A movie fan buys tickets at an open-air summer cinema in the park and asks about seating and blankets.",
    speakers: {
      A: { name: "Kassenmitarbeiterin Katja", voice: "katja" },
      B: { name: "Filmfan Tobias", voice: "florian" }
    },
    lines: [
      { speaker: "A", de: "Schönen guten Abend! Willkommen im Sommer-Freiluftkino im Stadtpark!", en: "A very good evening! Welcome to the summer open-air cinema in the city park!" },
      { speaker: "B", de: "Guten Abend! Ich möchte gern zwei Tickets für den Film heute Abend kaufen.", en: "Good evening! I would like to buy two tickets for the movie tonight." },
      { speaker: "A", de: "Sehr gern! Wir zeigen heute eine preisgekrönte Komödie. Möchten Sie Plätze im Liegestuhl oder auf der Wiese?", en: "Very gladly! Today we are screening an award-winning comedy. Would you like deck chair seats or spots on the lawn?" },
      { speaker: "B", de: "Liegestühle klingen herrlich bequem. Sind da noch Plätze frei?", en: "Deck chairs sound wonderfully comfortable. Are there still free spots available?" },
      { speaker: "A", de: "Ja, in der fünften Reihe vor der großen Leinwand haben wir noch freie Plätze.", en: "Yes, in the fifth row in front of the large cinema screen we still have open places." },
      { speaker: "B", de: "Perfekt! Wie viel kosten zwei Tickets für die Liegestühle?", en: "Perfect! How much do two tickets for the deck chairs cost?" },
      { speaker: "A", de: "Ein Ticket kostet zwölf Euro, zusammen macht das vierundzwanzig Euro.", en: "One ticket costs twelve euros; together that makes twenty-four euros." },
      { speaker: "B", de: "Hier bitte, vierundzwanzig Euro passend in bar.", en: "Here you go, twenty-four euros exact in cash." },
      { speaker: "A", de: "Vielen Dank! Hier sind Ihre beiden Eintrittskarten.", en: "Thank you very much! Here are your two admission tickets." },
      { speaker: "B", de: "Danke schön! Wann beginnt die Vorführung genau?", en: "Thank you! When exactly does the screening begin?" },
      { speaker: "A", de: "Der Film startet um einundzwanzig Uhr dreißig, direkt nach dem Sonnenuntergang, wenn es dunkel wird.", en: "The movie starts at nine thirty p.m., directly after sunset once it gets dark." },
      { speaker: "B", de: "Alles klar! Kann man sich hier eine warme Decke leihen, falls es später kühl wird?", en: "All right! Can one borrow a warm blanket here in case it turns chilly later?" },
      { speaker: "A", de: "Ja, am Getränkestand drüben bekommen Sie Decken gegen zwei Euro Pfand und frisches Popcorn.", en: "Yes, over at the drinks stand you can get blankets for a two-euro deposit, as well as fresh popcorn." },
      { speaker: "B", de: "Wunderbar! Herzlichen Dank für die Information und einen schönen Abend!", en: "Wonderful! Heartfelt thanks for the information and have a pleasant evening!" }
    ],
    newWords: [
      { word: "das Freiluftkino", meaning: "open-air / outdoor cinema" },
      { word: "die Leinwand", meaning: "cinema screen" },
      { word: "der Sonnenuntergang", meaning: "sunset" },
      { word: "die Decke", meaning: "blanket" }
    ]
  },
  {
    id: "kap3-36",
    chapters: ["kap-3"],
    lengthTier: "long",
    category: "Konzert, Film & Festival",
    title: "Street-Food und Live-Bands auf dem Straßenfest",
    context: "Two friends navigate a vibrant street music festival, checking the stage schedule and sampling international food stalls.",
    speakers: {
      A: { name: "Tim", voice: "conrad" },
      B: { name: "Maya", voice: "amala" }
    },
    lines: [
      { speaker: "A", de: "Wahnsinn Maya, schau dir diese Menschenmenge an! Das Straßenmusikfestival ist heute proppenvoll!", en: "Incredible Maya, look at this crowd! The street music festival is packed full today!" },
      { speaker: "B", de: "Ja, Tim! Überall spielen Musiker auf der Straße und es riecht fantastisch nach gutem Essen!", en: "Yes, Tim! Musicians are playing on the street everywhere and it smells fantastic with good food!" },
      { speaker: "A", de: "Hast du den Programmflyer mit dem Zeitplan für die verschiedenen Bühnen?", en: "Do you have the program flyer with the timetable for the various stages?" },
      { speaker: "B", de: "Ja, hier im Flyer steht alles: Es gibt drei große Bühnen und zehn kleine Akustik-Ecken.", en: "Yes, everything is listed in the flyer here: There are three main stages and ten small acoustic spots." },
      { speaker: "A", de: "Welche Musik spielt gerade auf Bühne eins am Marktplatz?", en: "What music is playing right now on stage one at the market square?" },
      { speaker: "B", de: "Auf Bühne eins spielt jetzt eine lateinamerikanische Band Cumbia und Salsa.", en: "On stage one a Latin American band is playing cumbia and salsa now." },
      { speaker: "A", de: "Klasse, das klingt nach richtig guter Tanzstimmung! Und was kommt auf Bühne zwei im Park?", en: "Awesome, that sounds like really great dance vibes! And what is on stage two in the park?" },
      { speaker: "B", de: "Auf Bühne zwei beginnt um achtzehn Uhr eine Indie-Rock-Band aus Hamburg.", en: "On stage two an indie rock band from Hamburg begins at six p.m." },
      { speaker: "A", de: "Super, die Band möchte ich unbedingt hören! Aber vorher brauche ich etwas zu essen.", en: "Great, I definitely want to hear that band! But beforehand I need something to eat." },
      { speaker: "B", de: "Gute Idee, ich habe auch großen Hunger! Schau mal, diese lange Reihe mit Essensständen!", en: "Good idea, I am very hungry too! Look at this long row of food stalls!" },
      { speaker: "A", de: "Was für Essensstände gibt es hier? Da drüben sehe ich Falafel, Tacos und vietnamesische Frühlingsrollen.", en: "What kind of food stalls are here? Over there I see falafel, tacos, and Vietnamese spring rolls." },
      { speaker: "B", de: "Mmh, ich liebe Falafel im Fladenbrot! Möchtest du auch Falafel probieren?", en: "Mmm, I love falafel in pita bread! Would you like to taste falafel as well?" },
      { speaker: "A", de: "Ich nehme lieber zwei Tacos mit Guacamole und dazu eine erfrischende Bio-Limonade.", en: "I'd rather have two tacos with guacamole and a refreshing organic lemonade to go with it." },
      { speaker: "B", de: "Alles klar, stellen wir uns hier an dem mexikanischen Stand an. Was kosten die Tacos?", en: "All right, let's queue up here at the Mexican stall. How much do the tacos cost?" },
      { speaker: "A", de: "Drei Tacos kosten acht Euro fünfzig. Das ist für ein Festival echt fair.", en: "Three tacos cost eight euros fifty. That is genuinely fair for a festival." },
      { speaker: "B", de: "Und mein Falafel-Teller kostet sieben Euro. Ich bestelle für uns beide!", en: "And my falafel plate costs seven euros. I'll order for both of us!" },
      { speaker: "A", de: "Perfekt, danke Maya! Ich suche in der Zwischenzeit einen freien Holztisch an der Wiese.", en: "Perfect, thanks Maya! In the meantime I'll look for an empty wooden table by the lawn." },
      { speaker: "B", de: "Guter Plan! Da drüben unter der Kastanie ist noch eine Bank frei.", en: "Good plan! Over there under the chestnut tree another bench is vacant." },
      { speaker: "A", de: "Super, ich reserviere den Tisch! Bringst du bitte auch zwei Servietten mit?", en: "Super, I'll reserve the table! Could you please bring along two napkins as well?" },
      { speaker: "B", de: "Klar, mache ich! Hier kommt schon unser dampfendes Essen!", en: "Sure, will do! Here comes our steaming food already!" },
      { speaker: "A", de: "Das riecht herrlich! Guten Appetit, und danach gehen wir direkt vor die Rockbühne!", en: "That smells wonderful! Enjoy your meal, and after that we'll head right in front of the rock stage!" },
      { speaker: "B", de: "Guten Appetit! Das Festival heute ist einfach ein echtes Highlight!", en: "Enjoy your meal! The festival today is simply a true highlight!" }
    ],
    newWords: [
      { word: "das Straßenmusikfestival", meaning: "street music festival" },
      { word: "die Bühne", meaning: "stage" },
      { word: "die Band", meaning: "musical band" },
      { word: "der Essensstand", meaning: "food stall" },
      { word: "probieren", meaning: "to try / taste" }
    ]
  },
  {
    id: "kap3-37",
    chapters: ["kap-3"],
    lengthTier: "medium",
    category: "Konzert, Film & Festival",
    title: "Kombiticket für die Lange Nacht der Museen",
    context: "Two Austrian visitors buy special passes for the Long Night of the Museums covering entries and shuttle buses until 2 a.m.",
    speakers: {
      A: { name: "Museumskasse Ingrid", voice: "ingrid" },
      B: { name: "Besucher Stefan", voice: "jonas" }
    },
    lines: [
      { speaker: "A", de: "Grüß Gott! Willkommen an der Infokasse zur Langen Nacht der Museen!", en: "Good day! Welcome to the information desk for the Long Night of the Museums!" },
      { speaker: "B", de: "Grüß Gott! Wir möchten gern zwei Eintrittskarten für die Museumsnacht heute kaufen.", en: "Good day! We would like to buy two tickets for the Museum Night today." },
      { speaker: "A", de: "Sehr gern! Sie erwerben ein praktisches Kombiticket: Es gilt für über fünfzig Museen in der ganzen Stadt.", en: "Very gladly! You are purchasing a practical combination ticket: It is valid for over fifty museums across the entire city." },
      { speaker: "B", de: "Für über fünfzig Museen mit nur einem einzigen Ticket? Das ist ja enorm!", en: "For over fifty museums with just a single ticket? That is really enormous!" },
      { speaker: "A", de: "Ja, genau! Und das Beste: Alle Shuttlebusse zwischen den Museen sind im Ticketpreis inbegriffen.", en: "Yes, exactly! And best of all: All shuttle buses between the museums are included in the ticket price." },
      { speaker: "B", de: "Wie praktisch, dann müssen wir keine separaten Fahrkarten für die Busse kaufen!", en: "How practical, then we don't need to purchase separate tickets for the buses!" },
      { speaker: "A", de: "Richtig! Die gelben Shuttlebusse fahren alle zehn Minuten direkt vor den Museumseingängen ab.", en: "Correct! The yellow shuttle buses depart every ten minutes directly in front of the museum entrances." },
      { speaker: "B", de: "Wie lange haben die Ausstellungen heute Nacht geöffnet?", en: "How late are the exhibitions open tonight?" },
      { speaker: "A", de: "Alle Häuser bleiben heute Nacht bis zwei Uhr morgens geöffnet.", en: "All venues remain open tonight until two o'clock in the morning." },
      { speaker: "B", de: "Bis zwei Uhr morgens, fantastisch! Wie viel kostet das Kombiticket pro Person?", en: "Until two in the morning, fantastic! How much does the combination ticket cost per person?" },
      { speaker: "A", de: "Ein Ticket kostet neunzehn Euro, für zwei Personen sind das achtunddreißig Euro.", en: "One ticket costs nineteen euros; for two people that comes to thirty-eight euros." },
      { speaker: "B", de: "Gerne, ich zahle kontaktlos mit meiner Bankkarte.", en: "Gladly, I'll pay contactless with my bank card." },
      { speaker: "A", de: "Vielen Dank! Hier sind Ihre beiden Eintrittsbändchen und der offizielle Museumsplan.", en: "Thank you very much! Here are your two entry wristbands and the official museum guide." },
      { speaker: "B", de: "Herzlichen Dank für die tolle Beratung und einen schönen Abend!", en: "Heartfelt thanks for the great advice and have a pleasant evening!" }
    ],
    newWords: [
      { word: "die Museumsnacht", meaning: "museum night" },
      { word: "das Kombiticket", meaning: "combination ticket" },
      { word: "der Shuttlebus", meaning: "shuttle bus" },
      { word: "geöffnet", meaning: "open / opened" }
    ]
  },

  // ─── CATEGORY 5: Im Deutschkurs: Artikel & Imperativ (Clips 6, 7, 8 -> Total 8) ───
  {
    id: "kap3-38",
    chapters: ["kap-3"],
    lengthTier: "medium",
    category: "Im Deutschkurs: Artikel & Imperativ",
    title: "Wegbeschreibung an der Tafel üben",
    context: "In German class, a teacher and student practice giving walking directions on a large city map projected on the board.",
    speakers: {
      A: { name: "Lehrer Herr Braun", voice: "conrad" },
      B: { name: "Studentin Yuka", voice: "amala" }
    },
    lines: [
      { speaker: "A", de: "Guten Tag zusammen! Schauen Sie bitte alle nach vorne an die Tafel: Hier sehen Sie unseren großen Stadtplan.", en: "Good day everyone! Please all look to the front at the board: Here you see our large city map." },
      { speaker: "B", de: "Guten Tag, Herr Braun! Machen wir heute wieder eine Wegbeschreibung mit dem Imperativ?", en: "Good day, Mr. Braun! Are we doing directions with the imperative again today?" },
      { speaker: "A", de: "Genau, Yuka! Kommen Sie bitte nach vorne an die Tafel und nehmen Sie den Zeigestock.", en: "Exactly, Yuka! Please come to the front of the board and take the pointer." },
      { speaker: "B", de: "Alles klar, ich stehe an der Tafel. Wo ist unser Startpunkt auf dem Plan?", en: "All right, I am standing at the board. Where is our starting point on the map?" },
      { speaker: "A", de: "Ihr Startpunkt ist hier unten beim Hauptbahnhof. Erklären Sie mir den Weg zum Museum!", en: "Your starting point is down here at the central station. Explain the way to the museum to me!" },
      { speaker: "B", de: "Gerne! Gehen Sie zuerst vom Hauptbahnhof geradeaus durch die Bahnhofstraße.", en: "Gladly! First walk straight ahead from the central station along Bahnhofstraße." },
      { speaker: "A", de: "Sehr gut! Und was mache ich an der großen Kreuzung vor der Post?", en: "Very good! And what do I do at the large intersection before the post office?" },
      { speaker: "B", de: "Biegen Sie an der Kreuzung nach rechts in die Schillerstraße ab!", en: "Turn right into Schillerstraße at the intersection!" },
      { speaker: "A", de: "Wunderbar: 'Biegen Sie rechts ab!' Wie geht es nach zweihundert Metern weiter?", en: "Wonderful: 'Turn right!' How does it continue after two hundred meters?" },
      { speaker: "B", de: "Überqueren Sie bitte an der Fußgängerampel die breite Straße!", en: "Please cross the wide street at the pedestrian traffic lights!" },
      { speaker: "A", de: "Perfekt formuliert: 'Überqueren Sie die Straße!' Und wo liegt das Museum?", en: "Formulated perfectly: 'Cross the street!' And where is the museum located?" },
      { speaker: "B", de: "Das Museum liegt dann direkt links neben dem Stadtpark vor Ihnen.", en: "The museum is then located right in front of you on the left beside the city park." },
      { speaker: "A", de: "Ausgezeichnet, Yuka! Das sind völlig fehlerfreie Imperativ-Sätze mit Höflichkeitsform!", en: "Excellent, Yuka! Those are completely flawless imperative sentences using the polite form!" },
      { speaker: "B", de: "Vielen Dank, Herr Braun! Mit dem Stadtplan an der Tafel ist die Übung ganz anschaulich!", en: "Thank you very much, Mr. Braun! With the city map on the board the exercise is really clear and vivid!" }
    ],
    newWords: [
      { word: "der Stadtplan", meaning: "city map" },
      { word: "an der Tafel", meaning: "at / on the board" },
      { word: "abbiegen", meaning: "to turn (left/right)" },
      { word: "überqueren", meaning: "to cross (a street)" }
    ]
  },
  {
    id: "kap3-39",
    chapters: ["kap-3"],
    lengthTier: "medium",
    category: "Im Deutschkurs: Artikel & Imperativ",
    title: "Höfliche Bitten mit dem Imperativ",
    context: "A German teacher and student roleplay classroom instructions and polite requests using the formal imperative.",
    speakers: {
      A: { name: "Lehrerin Frau Klein", voice: "katja" },
      B: { name: "Schüler Leo", voice: "killian" }
    },
    lines: [
      { speaker: "A", de: "Guten Morgen, Leo! Heute wiederholen wir typische Anweisungen und Aufforderungen im Sprachkurs.", en: "Good morning, Leo! Today we are reviewing typical instructions and prompts in language class." },
      { speaker: "B", de: "Guten Morgen, Frau Klein! Wie formulieren wir eine höfliche Bitte im Imperativ mit Sie?", en: "Good morning, Ms. Klein! How do we formulate a polite request in the imperative with 'Sie'?" },
      { speaker: "A", de: "Ganz einfach: Nehmen Sie das Verb im Infinitiv an Position eins, setzen Sie 'Sie' dahinter und ergänzen Sie ein freundliches 'bitte'!", en: "Very simple: Take the verb in the infinitive at position one, place 'Sie' behind it, and add a friendly 'bitte'!" },
      { speaker: "B", de: "Ach so: Verb, dann Sie, dann bitte! Können wir dazu ein kurzes Rollenspiel machen?", en: "I see: Verb, then 'Sie', then 'bitte'! Can we do a short roleplay on that?" },
      { speaker: "A", de: "Sehr gerne! Ich beginne als Lehrerin: Leo, öffnen Sie bitte Ihr Kursbuch auf Seite zweiunddreißig!", en: "Very gladly! I'll start as the teacher: Leo, please open your course textbook to page thirty-two!" },
      { speaker: "B", de: "Ich öffne das Buch auf Seite zweiunddreißig. Was soll ich als Nächstes tun?", en: "I am opening the book to page thirty-two. What should I do next?" },
      { speaker: "A", de: "Hören Sie bitte aufmerksam zu und sprechen Sie den Dialog nach!", en: "Please listen attentively and repeat the dialogue aloud!" },
      { speaker: "B", de: "'Hören Sie zu' und 'sprechen Sie nach' — beide Verben haben trennbare Vorsilben, richtig?", en: "'Hören Sie zu' and 'sprechen Sie nach' — both verbs have separable prefixes, right?" },
      { speaker: "A", de: "Ganz genau erkannt! 'Zu' und 'nach' wandern im Imperativ ganz ans Ende vom Satz.", en: "Identified exactly right! 'Zu' and 'nach' migrate all the way to the end of the sentence in the imperative." },
      { speaker: "B", de: "Das ist logisch! Jetzt bin ich der Kursleiter und gebe Ihnen eine Aufgabe, Frau Klein!", en: "That is logical! Now I am the course instructor and will give you a task, Ms. Klein!" },
      { speaker: "A", de: "Sehr gern, ich bin gespannt auf Ihre Aufforderung!", en: "Very gladly, I am excited for your prompt!" },
      { speaker: "B", de: "Frau Klein, schreiben Sie bitte drei neue Beispielsätze an die Tafel!", en: "Ms. Klein, please write three new example sentences on the board!" },
      { speaker: "A", de: "Hervorragend, Leo! Korrekte Verbform, Höflichkeitsform und Position eins für das Verb!", en: "Outstanding, Leo! Correct verb form, polite form, and position one for the verb!" },
      { speaker: "B", de: "Danke schön! So macht das Grammatiktraining richtig Spaß!", en: "Thank you! That makes grammar training really enjoyable!" }
    ],
    newWords: [
      { word: "die Aufforderung", meaning: "instruction / prompt" },
      { word: "das Kursbuch", meaning: "course textbook" },
      { word: "zuhören", meaning: "to listen attentively" },
      { word: "nachsprechen", meaning: "to repeat after someone" }
    ]
  },
  {
    id: "kap3-40",
    chapters: ["kap-3"],
    lengthTier: "long",
    category: "Im Deutschkurs: Artikel & Imperativ",
    title: "Den Akkusativ im Alltag meistern",
    context: "A German teacher and a student practice accusative objects with 'ich suche', contrasting masculine, neuter, and feminine nouns.",
    speakers: {
      A: { name: "Lehrerin Frau Sommer", voice: "seraphina" },
      B: { name: "Student Tariq", voice: "florian" }
    },
    lines: [
      { speaker: "A", de: "Guten Morgen, Tariq! Setzen Sie sich bitte. Heute vertiefen wir den Akkusativ bei Nomen im Alltag.", en: "Good morning, Tariq! Please sit down. Today we deepen the accusative case with everyday nouns." },
      { speaker: "B", de: "Guten Morgen, Frau Sommer! Der Akkusativ ist der Fall für das direkte Objekt, richtig?", en: "Good morning, Ms. Sommer! The accusative is the case for the direct object, right?" },
      { speaker: "A", de: "Ganz genau! Wenn wir Verben wie suchen, brauchen oder finden nutzen, steht das Nomen im Akkusativ.", en: "Exactly right! When we use verbs like search, need, or find, the noun stands in the accusative case." },
      { speaker: "B", de: "Und welcher Artikel ändert sich dabei im Akkusativ?", en: "And which article changes in the accusative case then?" },
      { speaker: "A", de: "Nur der maskuline Artikel ändert sich: Aus 'der' wird 'den' und aus 'ein' wird 'einen'!", en: "Only the masculine article changes: 'der' turns into 'den' and 'ein' turns into 'einen'!" },
      { speaker: "B", de: "Ach ja: 'den' und 'einen'! Das Neutrum und das Femininum bleiben unverändert, oder?", en: "Ah yes: 'den' and 'einen'! The neuter and the feminine remain unchanged, right?" },
      { speaker: "A", de: "Völlig richtig: Das Café bleibt 'ein Café' und die Apotheke bleibt 'eine Apotheke'.", en: "Completely correct: 'das Café' remains 'ein Café' and 'die Apotheke' remains 'eine Apotheke'." },
      { speaker: "B", de: "Können wir dazu ein praktisches Frage-Antwort-Spiel mit Stadt-Vokabeln machen?", en: "Can we do a practical question-and-answer game with city vocabulary for that?" },
      { speaker: "A", de: "Sehr gern! Stellen Sie sich vor: Sie sind neu in der Stadt und suchen verschiedene Orte.", en: "Very gladly! Imagine: You are new in the city and looking for various places." },
      { speaker: "B", de: "Alles klar! Satz eins für maskulin: 'Ich bin am Marktplatz und ich suche einen Bahnhof.'", en: "All right! Sentence one for masculine: 'I am at the marketplace and I am looking for a train station.'" },
      { speaker: "A", de: "Hervorragend! 'Einen Bahnhof', maskulin mit der Endung -en. Bilden Sie noch einen Satz mit Supermarkt!", en: "Outstanding! 'Einen Bahnhof', masculine with the ending -en. Form another sentence with supermarket!" },
      { speaker: "B", de: "'Ich habe Hunger und ich suche einen Supermarkt in der Nähe.'", en: "'I am hungry and I am looking for a supermarket nearby.'" },
      { speaker: "A", de: "Perfekt! Und wie heißt es bei einem neutralen Wort wie Hotel, Kino oder Café?", en: "Perfect! And how is it for a neuter word like hotel, cinema, or café?" },
      { speaker: "B", de: "Bei neutral sage ich: 'Ich suche ein gemütliches Café' oder 'Ich brauche ein ruhiges Hotel'.", en: "For neuter I say: 'Ich suche ein gemütliches Café' or 'Ich brauche ein ruhiges Hotel'." },
      { speaker: "A", de: "Sehr gut! 'Ein Café' und 'ein Hotel' — das 'ein' bleibt genau wie im Nominativ.", en: "Very good! 'Ein Café' and 'ein Hotel' — the 'ein' stays exactly as in the nominative." },
      { speaker: "B", de: "Und bei femininen Wörtern wie Bank, Apotheke oder U-Bahn-Station heißt es: 'Ich suche eine Apotheke'!", en: "And for feminine words like bank, pharmacy, or subway station it is: 'Ich suche eine Apotheke'!" },
      { speaker: "A", de: "Ganz genau! 'Eine Apotheke' mit der typischen -e Endung für feminin.", en: "Exactly right! 'Eine Apotheke' with the typical -e ending for feminine." },
      { speaker: "B", de: "Und wie funktioniert die Verneinung im Akkusativ mit 'kein'?", en: "And how does negation work in the accusative with 'kein'?" },
      { speaker: "A", de: "Genau nach demselben Muster: 'Ich sehe keinen Bahnhof', 'Ich finde kein Café', 'Hier ist keine Apotheke'!", en: "Following the exact same pattern: 'Ich sehe keinen Bahnhof', 'Ich finde kein Café', 'Hier ist keine Apotheke'!" },
      { speaker: "B", de: "Aha! Also maskulin 'keinen', neutral 'kein', feminin 'keine'!", en: "Aha! So masculine 'keinen', neuter 'kein', feminine 'keine'!" },
      { speaker: "A", de: "Ausgezeichnet, Tariq! Sie haben das Prinzip vom Akkusativ jetzt vollkommen verstanden.", en: "Excellent, Tariq! You have now completely understood the principle of the accusative case." },
      { speaker: "B", de: "Vielen Dank für die klare Erklärung, Frau Sommer! Das hilft mir enorm beim Sprechen im Alltag!", en: "Thank you very much for the clear explanation, Ms. Sommer! That helps me immensely when speaking in everyday life!" }
    ],
    newWords: [
      { word: "der Akkusativ", meaning: "accusative case" },
      { word: "das Café", meaning: "café / coffee shop" },
      { word: "die Apotheke", meaning: "pharmacy / chemist" },
      { word: "der Supermarkt", meaning: "supermarket" }
    ]
  }
];
