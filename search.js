document.getElementById('search-input').addEventListener('input', function() {
    let input = this.value.toLowerCase();
    let resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';

    let words = ["Bargain - изгодна сделка, пазарлък", "Change - ресто, смяна на пари", "Discount - отстъпка, намаление", "Receipt - разписка, квитанция", "Refund - връщане, възстановяване на сума",
"Value for Money - струва си парите, стойност на парите", "Waste Money On - пилея, харча за", "ATM - банкомат", "Bank Charges/Fees - банкови такси", "Cashpoint - банкомат", "Current Account - текуща сметка",
"Get into Debt - влизам в дългове, задлъжнявам", "Give Somebody a Loan - давам на нкг заем", "High/Low Interest - висока/ниска лихва", "Lend Money From - заемам пари, вземам назаем", "Overdraft - превишаване на кредит",
"Withdraw Money - тегля пари", "Medium of Exchange - средство за размяна", "Come to - стигна (се) до", "Cut Back - намалям, понижавам", "Get By - преживявам", "Give Away - раздавам, подарявам", "Pay Back - връщам пари",
"Pick Up an Amazing Bargain - попаднах на страхотно изгодна цена", "Sell Out - разпродавам", "Set Money Aside - заделям пари настрана", "Splash Out for a Designer Jacket - пръскам, прахосвам, пропилявам",
"Abbreviation - съкращение, абревиатура", "A Great Deal Of - много, голямо количество", "Assurance - увереност, уверение, гарантиране", "Be Worth It - струва си", "Civil Servant - държавен служител",
"(On) Demand - изисквам, търся, търси ce", "Fortune - състояние, богатство", "Optional - по избор, по-желание","Owe - дължа", "Retain - запазвам", "Transaction - транзакция", "Unattended - без надзор",
"Vending Machine - автомат за продажба на дребни стоки (цигари, напитки)", "Barter - бартер, размяна", "Savings Account - спестовна сметка", "Standardising - стандартизиране, ~зация", "Budget - бюджет; без излишни разходи",
"Run Out of Cash/Money - свършват ми парите", "To Tempt Somebody - изкушавам нкг", "Live Within Your Limits - живея според възможностите си", "Celebrity Culture - the influence of famous people on other people's behavior",
"Peer Pressure - натиск, влияние от връстници = influence that other people of your age have on you", "Expenses, Costs - разходи, разноски", "Money to Live On - пари, с които да живея/преживявам", "Be Broke - разорен съм",
"Be Down on Your Luck - не ми върви", "To Be On the Dole - receiving money from the government because you are unemployed", "To Be Skint/Broke/Hard-Up - having no money, especially for a short time = без пукнат лев съм/разорен съм/закъсал съм я",
"Be Strapped for Cash - having little or not enough money = не ми достигат парите/закъсал съм я", "Pay Through the Nose for Sth - плащане, което ми излиза през носа/твърде скъпо", "Be Unable to Make Ends Meet - не мога да свържа двата края",
"Be In/Go Into the Red - на червено съм, дължа повече отколкото имам to owe more money than you have", "Credit-Card Debt - дълг по кредитна карта", "Payday Loan - заем до заплата = small, short loans with very high interest",
"Get Into the Habit Of - свиквам да", "Resist Temptation - устоявам на изкушението", "Get Out of Control/Hand - излиза извън контрол", "Be Well Off - to be rich = be able to spend money like water", "To Have a Lot of Money - be loaded with money",
"Be Full of Money", "Be In the Black - have money in your bank account/be profitable", "Have Money to Burn - spend a lot of money on things that are not necessary", "Have a Lot of Dosh - have a lot of extra money",


        
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
