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
        "die Milch - мляко","der Zucker - захар","der Pfannkuchen - палачинка","die Schokolade - шоколад",
        "Ich komme; du kommst; er/sie/es kommt; wir kommen; ihr kommt; Sie/sie kommen",
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
