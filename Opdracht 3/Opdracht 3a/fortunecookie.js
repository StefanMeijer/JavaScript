var fortunecookie = document.getElementById('fortunecookie');
fortunecookie.addEventListener('click', function (e) {
    var quoteText = document.getElementById('quoteText');

    //array met quotes
    let citaten = [
        'Loop niet te hard, het geluk loopt dikwijls achter je.', 
        'Op het geluk moet je niet wachten, je moet het tegemoet gaan.Op het geluk moet je niet wachten, je moet het tegemoet gaan.',
        'Geluk is een ramp. Je wordt er zo lui van. Als je niet oppast ga je nog van het leven houden ook.', 
        'Geluk bestaat uit zoveel losse stukken dat er bijna altijd één ontbreekt.', 
        'Het geluk is in het ogenblik; het ongeluk in de tijd.'
    ];

    //Randomm array number
    let random = Math.floor(Math.random() * citaten.length);

    //Write quote to html
    quoteText.innerHTML = citaten[random];
});