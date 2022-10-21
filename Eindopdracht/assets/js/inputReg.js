/**
 * Class to register input events
 */
class InputReg {
    constructor() {
        this.inputReg();
    }

    inputReg() {
        document.getElementById('name').addEventListener('input', function (e) {
            if (document.getElementById('name').value != "") {

                localStorage.removeItem("player");
                localStorage.removeItem("score");

                localStorage.setItem('player', document.getElementById('name').value);

                document.querySelector(".buttonStart").href = "pages/game.html";
            } else {
                document.querySelector(".buttonStart").href = "#";
            }
        });
    }
}

//instantiate class
new InputReg();
