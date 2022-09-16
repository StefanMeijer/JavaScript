/**
 * This class contains the song of baby shark(as default)
 * to test, write in console: const song = new Song('baby shark');
 */
class Song {
    constructor(songName) {
        this.songName = songName;
        //For easy use i filled this in.
        this.chorus = "doo ".repeat(6);
        this.couplet = ["Baby shark", "Mommy shark", "Daddy shark", "Grandma shark", "Grandpa shark", "Let's go hunt", "Run away", "Safe at last", "It's the end"];

        //Used to print the song
        console.log(this.singSong());
    }

    /**
     * Function to sing the song
     * @returns {string} message that the song has been singed
     */
    singSong() {
        //Clears webpage when song is singed(for new couplets/lines)
        document.body.textContent = "";

        //Loop over couplet array
        for (let i = 0; i < this.couplet.length; i++) {
            //Print couplet&chorus 5 times
            for (let j = 0; j < 5; j++) {
                document.write(this.getCouplet()[i] + ", " + this.getChorus() + "<br>");
                //Print couplet 1 extra time
                if (j == 4) {
                    document.write(this.getCouplet()[i] + "<br><br>");
                }
            }
        }

        return 'The song has been singed!';
    }

    //Getter & Setter
    setChorus(chorus) {
        this.chorus = chorus;
    }
    getChorus() {
        return this.chorus;
    }

    setCouplet(couplet) {
        if (Array.isArray(couplet) && couplet.length) {
            this.couplet = couplet;
        } else {
            console.log("Couplet is not an array!");
        }
    }
    getCouplet() {
        return this.couplet;
    }
}

const song = new Song('baby shark');