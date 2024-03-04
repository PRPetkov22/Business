document.getElementById('search-input').addEventListener('input', function() {
    let input = this.value.toLowerCase();
    let resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';

    let words = [
        "Bargain - изгодна сделка, пазарлък",
  "change - ресто, смяна на пари",
  "discount - отстъпка, намаление",
  "receipt - разписка, квитанция",
  "refund - връщане, възстановяване на сума",
  "value for money - струва си парите, стойност на парите",
  "waste money on - пилея, харча за",
  "ATM - банкомат",
  "bank charges/ fees - банкови такси",
  "cashpoint - банкомат",
  "current account - текуща сметка",
  "get into debt - влизам в дългове, задлъжнявам",
  "give somebody a loan - давам на нкг заем",
  "high/ low interest - висока/ ниска лихва",
  "lend money from - заемам пари, вземам назаем",
  "overdraft - превишаване на кредит",
  "withdraw money - тегля пари",
  "a medium of exchange - средство за размяна",
  "come to - стигна (се) до",
  "cut back - намалям, понижавам",
  "get by - преживявам",
  "give away - раздавам, подарявам",
  "pay back - връщам пари",
  "pick up an amazing bargain - попаднах на страхотно изгодна цена",
  "sell out - разпродавам",
  "set money aside -заделям пари настрана",
  "splash out for a designer jacket - пръскам, прахосвам, пропилявам",
  "abbreviation - съкращение, абревиатура",
  "a great deal of - много, голямо количество",
  "assurance - увереност, уверение, гарантиране",
  "be worth it - струва си",
  "civil servant - държавен служител",
  "(on) demand - изисквам, търся, търси ce",
  "fortune - състояние, богатство",
  "optional - по избор, по- желание",
  "owe - дължа",
  "retain - запазвам",
  "transaction - транзакция",
  "unattended - без надзор",
  "vending machine - автомат за продажба на дребни стоки (цигари, напитки)",
  "barter - бартер, размяна",
  "savings account - спестовна сметка",
  "standardising - стандартизиране, ~ зация",
  "budget - бюджет; без излишни разходи",
  "run out of cash / money - свършват ми парите",
  "to tempt sb - изкушавам нкг",
  "live within your limits - живея според възможностите си",
  "celebrity culture - the influence of famous people on other people's behaviour",
  "peer pressure - натиск, влияние от връстници= influence that other people of your age have on you",
  "expenses, costs - разходи, разноски",
  "money to live on - пари, с които да живея/преживявам",
  "be broke - разорен съм",
  "be down on your luck - не ми върви",
  "to be on the dole - receiving money from the government because you are unemployed",
  "to be skint/broke/hard-up - having no money, especially for a short time= без пукнат лев съм/разорен съм/закъсал съм я",
  "be strapped for cash - having little or not enough money= не ми достигат парите/ закъсал съм я",
  "pay through the nose for sth - плащане, което ми излиз през носа/ твърде скъпо",
  "be unable to make ends meet - не мога да свържа двата края",
  "be in/go into the red - на червено съм, дължа повече отколкото имам to owe more money than you have",
  "credit-card debt - дълг по кредитна карта",
  "payday loan - заем до заплата=small, short loans with very high interest",
  "get into the habit of - свиквам да",
  "resist temptation - устоявам на изкушението",
  "get out of control/hand - излиза извън контрол",
  "be well off - to be rich - be able to spend money like water",
  "to have a lot of money - be loaded with money, be full of money",
  "be in the black - have money in your bank account/be profitable",
  "have money to burn - spend a lot of money on things that are not necessary",
  "have a lot of dosh - have a lot of extra money",
  "bank on - depend on sth happening",
  "come by - obtain sth, especially sth hard to get",
  "come into - to inherit",
  "do without sth - to manage without sth",
  "get by - manage to survive / live",
  "get through - to finish, to use all of it",
  "give away - give something to someone else for free",
  "live on - use as a source of money",
  "look around - to try to find something, search",
  "make out a cheque - to fill in a cheque",
  "make up for sth - reduce the bad effect of sth",
  "put by money - to save an amount of money for the future",
  "save up for - to save money little by little for a specific purpose",
  "amount to - to add up the total",
  "owe sb a debt of gratitude - be grateful to so who has helped you",
  "at your own expense - you pay for yourself",
  "short of money - little money",
  "at short notice - you don't have much time to prepare for",
  "give sb notice of - tell your employer you'll be leaving soon",
  "economic - the system in a country that involves making, buying, and selling goods",
  "economical - careful about spending money or using resources",
  "uneconomical - ineffective use, as of time, money or material; wasteful of resources",
  "bargain - deal",
  "a make - a product that is made by a particular company",
  "brand - a product/group of product that has its own name and is made by one particular company",
  "discount - reduction in price during a stated period of time or of larger quantities",
  "wealth - total value of money and other assets",
  "fortune - a very large amount of money",
  "till - a machine in the shops for adding the product prices when you pay",
  "check out - the place where you pay in a supermarket",
  "fake - not real",
  "refund - money that is given back",
  "invaluable - too valuable to measure; priceless",
  "valueless - worthless",
  "bank on somebody - depend on sth happening",
  "come across - find sth / meet sb by chance",
  "do without - live without (sth you can't afford)",
  "make up for - do sth. as a way of correcting/improving sth else",
  "put by / set aside - save an amount of money for the future",
  "run up - create a lot of debt quickly and carelessly",
  "cut back on - reduce the amount of money you spend",
  "rip off - cheat sb by charging them too much",
  "chip in - each gives some money to help pay for sth",
  "put down - pay a deposit",
  "shop around for - compare prices and quality in different shops before buying",
  "pay back - return borrowed money to someone",
  "fork out - spend a lot of money on sth unwillingly",
  "splash out - spend a lot of money on sth expensive",
  "come to - reach a total sum",
  "pick up - buy/obtain by payment",
  "sold out - no more products available for selling"
        
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
