/**
 * Class to display highscores
 */
class Highscore {
    constructor() {
        this.highscore();
    }

    highscore() {
        //Create highscore array if not exist
        if (localStorage.getItem("highscore") == null) {
            localStorage.setItem('highscore', JSON.stringify([]));
        }

        //Update highscore array
        if (localStorage.getItem("player") != null && localStorage.getItem("score") != null) {
            //Get player name and score from local storage
            var player = localStorage.getItem("player");
            var score = localStorage.getItem("score");

            //Get all highscores from localstorage
            var allhighscores = JSON.parse(localStorage.getItem("highscore"));

            //Create object of new scores
            var newScore = [{
                player: player,
                score: score
            }];

            //Add new score to highscores
            allhighscores.push(newScore);

            //Set new highscores in localstorage
            localStorage.setItem("highscore", JSON.stringify(allhighscores));

            //Remove player and score from localstorage
            localStorage.removeItem("player");
            localStorage.removeItem("score");
        }

        //loop over all highscores and display sorted on high to low score
        if (localStorage.getItem("highscore") != null) {
            var allhighscores = JSON.parse(localStorage.getItem("highscore"));
            allhighscores.sort(function (a, b) {
                return b[0].score - a[0].score;
            });
            for (var i = 0; i < allhighscores.length; i++) {
                //if score is higher than 0 display it
                if (allhighscores[i][0].score > 0) {
                    document.getElementById("score").innerHTML += "<tr><th>" + i + "</th><td>" + allhighscores[i][0].player + "</td><td>" + allhighscores[i][0].score + "</td></tr>";
                }
            }
        }
    }
}

//instantiate class
new Highscore();

