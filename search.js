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
"mein - моя","dein - твоя","ihr - неговия","---"
        
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
