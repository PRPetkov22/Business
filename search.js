document.getElementById('search-input').addEventListener('input', function() {
    let input = this.value.toLowerCase();
    let resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';

    let words = [
        "absent from - отсъствам от",
"additionally/in addition - допълнително/освен това",
"apply for - кандидатствам за",
"attach to - прикрепям към",
"attend an interview - на интервю съм/явявам се на интервю",
"be in agreement with - съгласен съм с",
"be in business - занимавам се с бизнес",
"be on/off duty - дежурен съм/не съм",
"bring out a product - пускам на пазара",
"close down a company - спирам производство",
"come to a decision - вземам решение",
"come to an arrangement - постигам/стигам до споразумение",
"day by day - ден след ден",
"dedicated to - посветен/отдаден на",
"do one's duty - върша си задълженията",
"earn/get/pay an interest - печеля/получавам/плащам лихва",
"experienced in/at sth - опитен в",
"good at - добър съм по (в)",
"go on business - отивам по работа",
"have a sense of duty - имам чувство за отговорност",
"have/take/get a day off - имам/взимам си ден почивка",
"in/applicable - не/приложим",
"industrial - трудолюбив, усърден",
"interest - лихва",
"irresponsibility - безотговорност",
"machinery - машини",
"make a complaint - подавам жалба, оплакване",
"make an agreement with - споразумявам се с",
"put effort into - полагам/хвърлям усилие",
"put/keep on hold - държа нкг на телефона, карам го да изчака",
"qualified in - квалифициран в",
"references - препоръки",
"responsible for sth - отговорен за",
"see to sth = deal with sth - заемам се, погрижвам се",
"set to = start doing in a determined, enthusiastic way - захващам се ентусиазирано",
"set up a business = start a business, company - основавам компания",
"slow down = decrease speed - намалявам темпо, скорост, забавям",
"small business - малка фирма/компания",
"speak your mind - казвам каквото мисля",
"specialise in - специализирам в",
"speed up - ускорявам",
"stand in for sb = do sb's job when they're not available - поемам временно функциите",
"successful applicant - успешен кандидат",
"supervision - наблюдение, надзор",
"take on = start to employ - наемам, назначавам на служба",
"take over = take control of a business; shift - поемам длъжност/ръководство",
"temporary position - временна работа/длъжност",
"think for yourself - имам собствено мнение",
"turn down an offer, invitation = not accept - отказвам, не приемам",
"un/workable plan - не/приложим/изпълним план",
"use your own initiative - бъди инициативен",
"wage - надница",
"Accept what life offers - Приемай живота",
"All things considered - Всичко взето предвид",
"All things considered - Обиждам някого",
"Apply for a job - Кандидатствай за работа",
"Apply to someone for something - Обърни се с молба към някого за нещо",
"Back-breaking work - Тежък труд",
"Be at the high pick of your career - Върха на кариерата",
"Be dismissed/fired/sacked - Уволнен",
"Beg - Умолявам",
"Behave yourself - Държи се добре",
"Be made redundant - Съкратен от работа",
"Be on flexitime/work flexible hours - На гъвкаво работно време",
"Be on the dole - Получавам помощ като безработен",
"Blue-collar worker - Ръчен работник",
"Boring and repetitive - Скучна и монотонна",
"Burn yourself out - Изтощавам се след усилен труд",
"A career takes off - Кариерата възлетява",
"Caretaker/janitor - Домоуправител, пазач",
"Carry out - Изпълнявам",
"Carry the can for someone - Неса вина за нещо",
"Challenging and stressful - Предизвикателно и напрегнато",
"Climb the career ladder - Изкачвам се в кариерата",
"Come out on strike - Обявявам стачка",
"Competitive salary - Конкурентна заплата",
"Constructively - Градивно",
"Dead-end job - Безперспективна работа",
"Decide on your priorities - Решавай приоритетите си",
"Defy the gravity - Предизвиквам гравитацията",
"Demanding job - Изискваща работа",
"Distraction - Разсейване",
"Do overtime - Работя извънредно",
"Do paperwork - Занимавам се с бумащина",
"Do shift work - Работя на смени",
"Do something at a time - Върша нещо непрекъснато",
"Drag on - Проточвам се",
"Draw up (a plan) - Изготвям план",
"Embark on a career - Започвам кариера",
"Evaluate - Оценявам",
"Face your fears - Справяй се със страховете си",
"Fielding phone calls/questions - Отговарям на телефонни обаждания/въпроси",
"Fill in a form - Попълвам документ",
"Follow up - Поддържам и развивам",
"Frustrating - Обезсърчаващ",
"A fulfilling job - Задоволяваща професия",
"Fulfil your dreams - Изпълни мечтите си",
"Furthermore - Още повече",
"Gap year - Свободна година",
"Generous perks/benefits - Щедри облаги, привилегии",
"Get a golden handshake - Получавам голяма сума при напускане/пенсиониране",
"Get ahead in a profession - Продължавам успешно в професията",
"Glittering career - Бляскава кариера",
"Good/bad work conditions - Добри/лоши условия за работа",
"Hand in notice - Подавам оставка",
"Have an impact on - Оказвам влияние върху",
"Have your travel expenses paid - Плащат ми пътните разноски",
"Headhunter - Ловец на глави",
"A high-powered job - Влиятелна и добре платена работа",
"Job satisfaction - Удовлетворение от работата",
"Keep a record of - Водя записки",
"Keep at - Продължавам, въпреки трудността",
"Keep up with - Не изоставам",
"Lay off - Съкращавам",
"Lucrative job - Доходоносна професия",
"Luxurious - Разкошен",
"Manual job/labor - Ръчен труд",
"Memorable - Паметен",
"Nevertheless - Въпреки това",
"The only drawback - Единствен недостатък",
"Particle - Частица",
"Pay rise - Повишение на заплатата",
"Predecessor - Предшественик",
"A promising career - Обещаваща кариера",
"Promote, get a promotion - Повишавам/получавам повишение",
"Properly - Правилно",
"Put up with - Търпя, понасям",
"Resign - Подавам оставка",
"Responsible for - Отговорен за",
"Satisfying and rewarding - Удовлетворителна и благодарна",
"Scorching hot/temperatures - Горещо",
"Sense of self-respect - Чувство за самоуважение",
"Set up a business/company - Основавам бизнес",
"Set yourself targets - Поставям си цели",
"Shear, shore, shorn - Стрижа",
"Sick/maternity leave - Отпуск по болест/майчинство",
"Sign a contract - Подписвам договор",
"Slave driver - Натоварващ трудоделец",
"Sleep in a barn - Спя в обор",
"Spare a thought for someone - Помисли за някого",
"Start work at short notice - Започвам работа в кратък срок",
"Stay completely still - Стоя напълно неподвижен",
"Steady job - Постоянна работа",
"Stick to - Придържам се към",
"Sting - Stung - Stung - Жиля, ожилвам",
"Straight away - Незабавно",
"Take charge of - Поемам ръководството",
"Take on more responsibility - Поемам повече отговорност",
"Take over - Поемам контрол",
"Take the minutes at a meeting - Протоколирам на събрание",
"Tell someone off for something - Нахоквам, смъмрям",
"To stick with the job - Постоянствам, не се отказвам",
"Tough job - Трудна, тежка работа",
"Trial - Проба, изпитание",
"Turn down an offer - Отхвърлям предложение",
"White-collar worker - Работник в офис на банка",
"Work for peanuts - Работя за много малко пари",
"Work indoors/outdoors - Работя в затворено помещение/на открито",
"Work on a project - Разработвам проект",
"Wreck/ruin someone's career - Съсипвам нечия кариера"
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