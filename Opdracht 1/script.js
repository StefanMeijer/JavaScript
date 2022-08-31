function displayText(text) {
    document.querySelector('.dynamicText').innerHTML += text += "<br>";
}

// Opdracht 1
// a. Schrijf een programma dat 'Hello World' (of je eigen naam) op een webpagina
// weergeeft.
displayText("Stefan Meijer <br>"); //documment.writeln zou ook kunnnen

// b. Schrijf een programma dat vier verschillende wiskundige berekeningen
// uitvoert op twee getallen die je als variabelen hebt opgeslagen. Geef de
// berekeningen en de uitkomsten weer op een webpagina.
var num1 = 16;
var num2 = 5;

displayText(num1 - num2);
displayText(num1 + num2);
displayText(num1 * num2);
displayText(num1 / num2);

// c. De relativiteitstheorie volgens Albert Einstein E = mc2 bestaat al meer dan 100
// jaar. De E staat voor energie (gemeten in Joule), m voor massa (gemeten in
// kilogram), en c voor de snelheid van het licht (ongeveer gemeten als
// 300.000.000 meter per seconde). De formule betekent dat massa en energie
// equivalent zijn. Schrijf een programma dat een geheel getal (in kilogrammen)
// het equivalente aantal Joules als een geheel getal weergeeft.
// Bonus: bewerk het programma, zodat de kilogrammen ingevoerd kunnen
// worden.
var kilograms = document.getElementById('kilograms');
kilograms.addEventListener('input', function (e) {
    //e = energie (weet je niet)
    //m = massa = kg (vul je in)
    //c = snehelheid van het licht(300000000 meter per seconde)
    //e = massa * c^2
    var c = 300000000; // meter per seconde
    var kilogram = kilograms.value;
    var massa = Math.round(kilogram * Math.pow(c, 2));

    document.querySelector('.energyText').innerHTML = massa;
});

// d. Schrijf een programma dat een boodschappenlijstje actueel kan houden. Toon
// alle items van het boodschappenlijstje op een webpagina. Je lijstje moet
// minstens 10 items hebben. Verander item # 8 (bijvoorbeeld suiker in plaats
// van zout).
// Bonus: maak de boodschappenlijst direct bewerkbaar vanaf de webpagina.
const boodschappenlijst = ['brood', 'melk', 'kaas', 'vlees', 'noedels', 'wafels', 'cola', 'ijsthee', 'zout', 'koffiebonen'];
var ul = document.getElementById("groceryList"); //ul list
//Show all products
for (const boodschap of boodschappenlijst) {
    // console.log(boodschap);
    ul.innerHTML += `<li id="${boodschap}">${boodschap}</li>`;
}

var grocery8 = document.getElementById("grocery8"); //input field
grocery8.addEventListener('input', function (e) {
    var item8 = ul.getElementsByTagName("li")[8]; //Get 8th li item
    item8.innerText = grocery8.value; //Change text of li item
    item8.id = grocery8.value; //Change id of li item
});
