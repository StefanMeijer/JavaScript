/**
 * Function to display new node in the DOM
 * @param {String} text 
 */
 function displayText(text) {
    const div = document.getElementById("dynamicText");
    const p = document.createElement("span");
    const textNode = document.createTextNode(text);

    p.appendChild(textNode);
    div.append(p);
}

let n1 = 0;
let n2 = 1;
let nextNumber = n1 + n2;

// Display first 2 numbers in the series '0' & '1'
displayText(n1 + ", ");
displayText(n2 + ", ");

// Display the rest of the series
for (i=0; i < 18; i++) {
    displayText(nextNumber + ", ");

    n1 = n2;
    n2 = nextNumber;
    nextNumber = n1 + n2;
}
