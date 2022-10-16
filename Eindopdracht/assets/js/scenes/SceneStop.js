class SceneStop extends Phaser.Scene {
    constructor() {
        super("stopGame");
    }

    create() {
        this.add.text(0, 0, "Het spel is afgelopen, je wordt nu doorgestuurd naar het scorebord", { font: "25px Arial", fill: "yellow" });

        //call function after 5 seconds
        setTimeout(() => {
            game.destroy(true);
            location.href = 'scorebord.html';
        }, 1000);
    }
}