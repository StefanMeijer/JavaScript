class SceneStop extends Phaser.Scene {
    /**
     * Constructor
     */
    constructor() {
        super("stopGame");
    }

    /**
     * Function to create objects
     */
    create() {
        //End game screen
        this.add.text(20, 20, "Spel geëindigd", { font: "25px Arial", fill: "yellow" });

        //Score
        this.add.text(20, 80, "Score: " + localStorage.getItem('score'), { font: "25px Arial", fill: "yellow" });

        //Message that tells player to press space to go to scroebord
        this.add.text(20, 140, "Druk op spatie om naar het scorebord te gaan", { font: "25px Arial", fill: "yellow" });
        this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //if space is pressed, go to scoreboard
        this.keySpace.on('down', () => {
            game.destroy(true);
            location.href = 'scorebord.html';
        });
    }
}