document.getElementById('search-input').addEventListener('input', function() {
    let input = this.value.toLowerCase();
    let resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';

    let words = [
        "das Fotos - снимка" , "Guten Tag - добър ден", "Auf Wiedersehen - довиждане",
        "tschus - чао","Guten Abend - добър вечер","die Dame-n - дама","willkommen - добре дошъл",
        "international - интернационален","Guten Morgen - добро утро","die Frau-en - жена",
        "Gute Nacht - лека нощ","der Herr-en - господин","der Name-n - име","die Entschuldigung - извинение",
        "wie - как","Sie - Вие","wer - кой","freut mich - радвам се","Merzlich - сърдечно",
        "Bis spater - до по късно","Ich weiB es nicht - не знам","woher - откъде","kommen - идвам",
        "aus - от","die Firma-en - Фирма","das Deutschland - Германия","die Osterreich - Австрия",
        "die Schweiz - Швейцария","nur - само","was - какво","ein bisschen - малко",
        "Sprechen-sprach-hat gesprochen - говоря","die Sprache - език","der Buchstabe-n - буква",
        "das Alphabet - азбука","Wie bitte - как моля","buchstabieren - спелувам","bitte - моля",
        "da - тук,там","der Moment-e - един момент","tut-mir-leid - съжалявам","nich - (отрицание)",
        "Vielen Dank - благодаря много","Auf Wiederhoren - до чуване","die Adresse-n - адрес",
        "die Visiten - визитна картичка","die Familie-n - фамилия","die Zahl - число",
        "die Vorname-n - Собствено име","die StraBe-n - улица","die Stadt-e - град","die Land-er - земя",
        "die Telefon-e - телефон","die E-Mail-e - имейл","das Formular-e - формуляр","die Postleitzahl-en - пощенски код",
        "gehen-ging-ist gegangen - отивам","groB - голям","die GroBmutter=die Oma - баба",
        "der Lehrer - учител","lernen-lernte-hat gelernte - уча","auch - също","haben-hatte-hat gehabt - имам",
        "die Pause-n - почивка" ,"der Park-s - парк","die Familie-n - семейство","der Vater - баща",
        "die GroBeltern - баба и дядо","die Mutter - майка","die Eltern - родители","der Bruder - брат",
        "die Geschwister - братя и сестри","das Jahr-e - година","lebt-lebte-hat gelebt - живея",
        "in - във","super - супер","Sehr - много(за качество)","gut - добър","na ja - е да","so - толкова",
        "der Enkel - внук","die Enkelin - внучка","die Tochter - дъщеря","der Sohn-e - син","das Kind-er - дете",
        "die Schwester-n - сестра","die Oma-s - баба","die GroBmutter - баба","der Mann-er - мъж","der Opa-s - дядо",
        "der GroBvater - дядо","dein - твой","mein - мой","Ihr - ваш","der Ehermann-er - съпруг","falsch - грешно",
        "genau - точно,правилно","die Liste-n - списък","sie - тя","zusammen - заедно","sie - те",
        "geschieden - разведен","wohnt-wohnte-hat gewohnt - живея","jetzt - сега","ihr - вие",
        "die Zahl-en - число","die Null-en - нула","wo - къде","geboren - роден","die Nummer-n - номер",
        "verheiratet - семеен","alt - стар","ledig - несемеен","verwitwen - вдовец","das Alter - възраст","die Hauptstadt-е - столица",
        "also - следователно","hier - тук","dort - там","aber - но","die Polizei - полиция","schon - красив","lange - дълго време","die Arzt-e - лекар",
        "der partner - партньор","zurzeit - за момента","die Banane-n - банан","die Butter - масло","das Ei-er - яйце","das Mehl - брашно",
        "die Milch - мляко","der Zucker - захар","der Pfannkuchen - палачинка","die Schokolade - шоколад","kaufen - купувам","der Hunger - гладен съм","der Euro - Евро",
        "dann - тогава","die Welt-en - свят","der Apfel - ябълка","die Orange-n - портокал","der Kuchen - сладкиш","der Kaffee - кафе","der Saft-e - сок",
        "das Brotchen - хлебче","das Wurstchen - наденичка","die Birne-n - круша","die Tomate-n - домат","das Brot - хляб","die Kartoffel-n - картов",
        "der Joghurt-s - кисело мляко","die Zwiebel-n - лук","lecker - вкусен","etwas - нещо","noch einmal - още веднъж","sonst - в против случай","ncoh - още",
        "der Fisch-e - риба","das Regal-e - рафт","der Kase - сирене","das Salz - сол","der Tee-s - чай","das Obst - плодове","das Gemuse - зеленчуци","das Mineralwasser - мин вода",
        "das Wasser - вода","das Fleisch - месо","der Reis - ориз","der Wein-e - вино","das Bier-е - бира","der Preis-e - цена","der Cent - цент","der Prospekt-e - брошура",
        "das Sonderangebot-e - промоция","das Lebensmittel - хранителни продукти","die Abteilung-en - отдел","die Wurst-e - наденица","das Hackfleisch - кайма",
        "das Ol-e - олио","wie viel - колко","kosten - струва","das Kilo(gramm) - килограм","das Gramm - грам","das Pfund - половин кило","der Liter - литър",
        "Becher - чаша","die Packung - опаковка","die Flasche-n - бутилка","die Dose-n - кенче","die Sahne - сметана","das Restaurant-s - ресторант","die Mensa Mensen - столова",
        "essen - ям","das Steak-s - пържола","der Salat-s - салата","die SoBe-n - сос","das Hahnchen - пиле","die Pommes frites - пържени картофи","die Pizza Pizzen - пица",
        "das Cola-s - кола","der Durst - жаден съм","kochen - готвя","fur - за","Lieblings - любим","das Essen - ядене","das Rezept-e - рецепта","typisch - типичен",
        "ganz - цял","einfach - обикновен, прост","die Portion-en - порция","groB - голям(за хора)","schmecken - нещо е вкусно","trinken - пия","das Glas-er - стъкло,чаша",
        "studieren - следвам(студенти)","die Suppe-n - супа","die Leute - хора","zu hause - вкъщи","nach hause - вкъщи","zum Beispiel - например","der Pfeffer - черен пипер",
        "reichen - абсурд","der Tag-е - ден","teuer - скъп","billig - евтин","gern-e - с удоволствие","das Getrank-e - напитка","Ich komme; du kommst; er/sie/es kommt; wir kommen; ihr kommt; Sie/sie kommen",
        "Ich spreche; du sprichst; er/sie/es spricht; wir sprechen; ihr sprecht; Sie/sie sprechen",
        "Ich heiBe; du heiBt; er/sie/es heiBt; wir heiBen; ihr heiBt; Sie/sie heiBen",
        "Ich bin; du bist; er/sie/es ist; wir sind; ihr seid; Sie/sie sind",
        "Ich habe; du hast; er/sie/es hat; wir haben; ihr habt; Sie/sie haben",
        "Ich lebe; du lebst; er/sie/es lebt; wir leben; ihr lebt; Sie/sie leben",
        "Ich wohne; du wohnst; er/sie/es wohnt; wir wohnen; ihr wohnt; Sie/sie wohnen",
        "Ich lerne; du lernst; er/sie/es lernt; wir lernen; ihr lernt; Sie/sie lernen",
        "mein - моя","dein - твоя","ihr - неговия","kennen - kannte - hat gekannt - познавам","noch einmal - още веднъж","meinen - мисля","zeigen - zeignte - hat gezeignt - показвам",
        "die Wohnung-en - жилище","die Lampe-n - лампа","das Zimmer - стая","die Kuche-n - кухня","das Bad-er -  баня","neu - нов","klein - малък","hell - светъл","dunkel - тъмен",
        "billig - евтин","schon - красив","hasslich - грозен","der Flur-e - коридор","die Toilette-n - тоалетна","der Balkon-e - балкон","das Wohnzimmer - всекидневна","das Haus-er - къща",
        "dort - там","der Monat-e - месец","das Beispiel-e - пример","schmal - тесен","richtig - вярно","breit - широк","der Schrank-e - шкаф","der Kuhlschrank-e - хладилник","der Traum-et - мечта",
        "schlafen - schlef - hat geschlafen - спя","waschen - wusch - hat gewaschen - пера","das Waschbecken - мивка","das Waschmaschine - пералня","das Sofa-s - диван","der Tisch-e - маса",
        "der Stuhl-e - стол","das Bett-en - легло","der Fernseher - телевизор","die Dusche-n - душ","der Herd-e - печка","die Badewanne-n - вана","der Teppich-e - килим","der Sessel - кресло",
        "die Mobel - мебели","Еlectro - електрически","gefallen - gefiel - hat gefallen - нещо не се харесва на вид","die Farbe-n - цвят","finden - fand - hat gefunden - намирам","modern - модерно",
        "schwarz - черно","grau - сиво","weiB - бяло","grun - зелено","braun - кафяво","blau - синьо","rot - червен","gelb - жълт","der Zantimeter - сантиметър","das Handy-s - мобилен телефон",
        "mieten,mietete,hat miet - наемам","die Arbeit - работа","die Anzeige-n - обява","nett - мил","das Ehepaar-e - съпруг или съпруга","suchen-suchte-hat sesucht - търся","der Garten - градина",
        "vermieten-te-h-et - давам под наем","das Apartment-s - апартамент","der Raum-e - помещение","der Stock - етаж","circa - около","privat - частен","sofort - веднага","maximal - максимално",
        "der Anruf-e - звъня по тела","mobilert - обзаведен","das TV - ТВ","die Garage-n - гараж","der Quadratmeter - квадратен метър","die Miete-n - наем","bezahlen - плащам","das Buch-er - книга",
        "der Stift-e - молив","welch- - какъв език","der Schreibtisch-e - бюро","ungefahr - приблизително","der Meter - метър","lang - дълъг","hoch - висок за предмети","der Platz - площад","der Computer - компютър",
        "das Heft-e - тетрадка","ziemlich - доста","egal - все едно","lieben - обичам","immer - винаги","die Hausaufgabe-n - домашна","glauben - вярвам","machen-machte-hat gemacht - правя","die Presentation-en - презентация",
        "fruhstucken-te-h-t - закусвам","einkaufen - пазарувам","spazieren gehen,te,h-te - разхождам се","aufraumen,te,h-t - подреждам","aufstehen-stand auf-ist auf gestanden - ставам от сън","gehen-ging-ist gegangen - вървя",
        "oder - или","arbeiten - работя","mude - изморен","anrufen-riefan-hat angerufe - позвънявам","fruh - рано","der Supermarkt-e - супермаркет","fernsehen-sah fern-hat ferng sehen - гледам телевизия","mit - със","spielen - играя",
        "spat - късно","schon - вече","das Viertel - четвърт","vor - преди","nach - след","halb - половин","die Uhr-en - час","kurz - къс, кратък","gleich - веднага","wann - кога","am-fing an-hang gefangen - започвам",
        "von... bis... - от до","die Party-s - парти","der Montag-e - Понеделник","der Dienstag-e - вторник ","der Mittwoch-e - сряда","der Donnerstag-e - Четвъртък","der Freitag-e - Петък","der Samstag-e - Събота","der Sonntag-e - Неделя",
        "das Wochenende-n - уикенд","die Mama-s - мама","schlafen-schlief,hat geschlafen - спя","der Termin-e - оговорен час","der Terminkalender - трафик","nachst - следващ","die Woche-n - седмица","der Morgen - сутрин",
        "der Vormittag-e - предиобяд","der Mittag-e - обяд","der Nachmittag-e - следобяд","der Abend-e - вечер","die Nacht-e - нош","das Kino-s - кино","chatten - чатя","horen-horte-hat gehort - слушам",
        "raten-riet-hat geraten - познавам","jeder - всеки","das Cafe-s - кафене","taglich - ежедневно","das Fahrrad-er - колело","die Bibliothek-en - библиотека","der Feiertag-e - почивен ден","geschlossen - затворено",
        "die Ansage-n - съобщение","offiziell  - официално","der Film-e - филм","sehen-sah-hat gesehen - виждам","das Museum - музей","geoffnet - отворен","das Schiff-e - кораб","die Tour-en - обиколка","das Kaufhaus-er - търговски център",
        "das Europa - Европа","der Moment-e - момент","kennenlernen-lernte kennen-hat kennengelernt - опознай","die Abfahrt-en - отпътуване","der Erwachsene-n - възрастен","der Plan-e - план",
        "der Reifen,- : гума/обрач", "üben : упражнявам се" ,"fragen, -te, h-t : питам","schicken, -te, h-t: пращам, изпращам" , "funktionieren: функционира" ,"reiten, rit, ist geritten: яздя кон",
        "schwierich : труден", "gar nicht :  изобщо" ,"malen, -te, -t: рисувам", "backen, -backte ,h gebacken: пека", "das Tennis(spielen): играя тенис" ,"singen, sang, h gesungen: пея",
        "das Klavier,-e: пиано", "wollen: искам", "der Kurs,-e: курс", "der Stress: стрес", "die Kommunikation: комуникация",
        "das Training: трейнинг:" , "die Psychologie: психология", "das Theather,-: театър", "die Mathematik: математика", "die Ferien: ваканция/почивка", "schreiben, schrieb, h geshrieben: пиша",
        "noch: още", "gestern: вчера", "finden,fand,h gefunden: намирам", "früher: рано", "oft: често" ,"einmal: веднъж", "nie: никога" ,"öfter: по-често", "schwer: тежък/труден","leicht: лек/лесен",
        "cool: готин", "die Zeitung,-en: вестник", "meistens: обикновено/в повечето случаи", "die Antwort,-en: отговор", "der Bus,-se: автобус", "die Geschichte-n: история",
        "das Krankenhaus-er: болница", "das Interview-s: интервю", "die Ausbildung-en: образование", "der Beruf-e: професия", "der Chef: шев", "der Patient-en: пациент", "der Journalist-en: журналист",
        "der Hausmeister-nen: домакин", "das Thema-en: тема", "eigen: собствен/свой", "als: работя като", "der Arzt-e: доктор", "der Ingenieur-e: инженер", "der Hausmann-er: домакин(вкъщи)", "der Polizist-en: полицай",
        "der Krankenpfleger: мед.сестра", "der Krankenschwester-n: мед.сестра", "beruflich: професионално", "der Schuler: ученик", "IT-Spezialistin: ИТ специалист", "der Student-en: студент", "der Job-s: работа",
        "die ArbeitsStelle-n: работно място","selbstsanding: самостоятелен", "arbeitslos: безработен", "dauern: продължава", "seit: от(предлог)", "die Bewerbung-en: кандидатстване", "das Praktikum: практика",
        "der Leiter: ръководител", "die Frage-n: въпрос", "geehrt: уважаем", "die Abteilung-en: отдел", "die Wirtschaft: икономика/стопанство", "gerade: туку що", "das Diplom-e: диплома", "das Buro-s: офис",
        "die Information-en: информация", "der GruB-е: поздрав", "das Amt-er - служба, институция", "gultig - валиден", "mieten - взимам под наем", "auslandisch - чуждестранен", "das Ausland - чужбина",
        "europaisch - европейски", "die Europaische Union - европейски съюз", "jung - млад", "die Fahrkarte-n -  билет", "die Fahrt-en - пътуване", "der Antrag-e - заявление, молба", "aus fullen - попълвам",
        "der Ausweis-e - лична карта", "mit bringen, brachte, hat mitgebracht - нося", "der Pass-e - паспорт", "die Kreditkarte-n - кредитна карта", "verstehen - разбирам", "der Automat-en - автомат",
        "aus wahlen, te, hat ausgewahlt - избирам от", "das Ziel-e - цел", "wahlen, -te, hat gewahlt - избирам общ", "man - безличен подлог", "zuerst - първо", "danach - след това", "dann - после",
        "der Schluss - край", "wissen, wusste, hat gewusst - знам", "vermiefen - взимам под наем", "vorne - отпред", "der Laden - магазин", "ab-holen - вдигам", "leise - тих", "die Ubung-en - упражнение",
        "erklaren - обещавам", "laut - шумен", "aus machen - изключвам", "schlieBen, schloB, hat geschlossen - заключвам" , "offnen - отварям", "zu-horen - вслушвам", "der Text-e - текст", "auf-stehen - ставам",
        "punktlich - точен", "warten, wartete, hat gewartet - чакай ", "die Anmeldung-en - регистрация", "die Gebuhr-en - такса", "die Kasse-n - каса", "ander - друг", "der Unterricht - учебен час", "lachen, lachte, hat gelacht - смея се",
        "beantragen - подавам заявление", "die Zigarette-n - цигари", "rauchen - пуша", "die offnungszeiten - работно време", "langsam - бавно", "der Parkplatz-e - паркинг", "parken - паркирам", "Achtung - внимание",
        "erlaubt - позволен", "verboten - забранен", "mit nehmen - взимам със себе си", "das Eis - сладолет", "das Gepack - багаж", "ab-geben - предавам", "benutzen - използвам", "das Hotel - хотел", "die Minute-n - минута",
        "der Rundgang-e - обиколка", "die Sehenswurdigkeit-en - забележителност", "beginnen, began, hat-begonnen - започвам", "der EinKauf-e - пазарувам", "beruhmt - известен", "der Einwohner - жител", "der Stadtplan-e - карта",
        "besuchen - посещение", "die Geburt-en - раждане", "die ErmaBigung-en - да направиш умерена цената", "die Oper - опера", "die Fuhrung-en - обиколка с екскурзувот", "der Dom-e - катедрала", "paar - няколко",
        "der Schritt-e -  стъпка/кратка", "das Gebaude - сграда", "der Eintritt - вход за мероприятие", "die Auskunft-e - информация", "das Zentrum - център", "inklusive - инклузив", "kostenlos - безплатно", "das Ergebnis-se - резултат",
        "wachsen, wuchs, ist gewachsen - раста", "die Altstadt-e - стария град", "der See-n - езеро", "die Klimaanlage-n - климатик", "das Fruhstuck - закупка", "die Lage-n - местоположение", "zentral - централа",
        "der Blick-e - гледка", "die Terrasse-n - тераса", "das Schwimmbad-er - басейн", "die Haltestelle-n - спирка", "buchen - резервирам", "das Doppelzimmer - двойна стая", "das Einzelzimmer - стая за един човек",
        "der Gast-e - гост", "der Wunsch-e - пожелание", "die Nichtraucher - непушач", "die Ankunft-e - пристигащ", "die Rezeption-en - рецепция", "fertig - готово", "wiederholen - повтарям", "der Rahm - каймак",
        "die Vollpension - пълен пансион", "die Halbpension - Полупансион"
    ];

    words.forEach(function(word) {
        if (word.toLowerCase().includes(input)) {
            let listItem = document.createElement('li');
            listItem.textContent = word;
            resultsList.appendChild(listItem);
        }
    });

    if (resultsList.children.length > 0) {
        resultsList.style.display = 'block';
    } else {
        resultsList.style.display = 'none';
    }
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.search-container')) {
        document.getElementById('results-list').style.display = 'none';
    }
});
