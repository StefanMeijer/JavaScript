var amount = 50;
var spareChange;

/**
 * Function to calculate change
 * @param {int} money 
 */
function vendingMachineCalculator(money) {
    amount = amount - money;
    if (amount < 0) {
        document.getElementById("amount").innerHTML = 0;

        let spareChange = amount.toString().replace('-', '');
        document.getElementById("spareChange").innerHTML = spareChange;
    } else {
        document.getElementById("amount").innerHTML = amount;
    }
}

/**
 * One of these functions is called when one of the buttons is clicked
 */
var button25 = document.getElementById('25_button');
var button10 = document.getElementById('10_button');
var button5 = document.getElementById('5_button');
button25.addEventListener('click', function (e) {
    vendingMachineCalculator(25);
});
button10.addEventListener('click', function (e) {
    vendingMachineCalculator(10);
});
button5.addEventListener('click', function (e) {
    vendingMachineCalculator(5);
});