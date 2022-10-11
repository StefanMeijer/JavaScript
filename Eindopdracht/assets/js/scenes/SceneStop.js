class SceneStop extends Phaser.Scene {
    constructor() {
        super("stopGame");
    }

    create() {
        this.add.text(20, 20, "Stopping game", { font: "25px Arial", fill: "yellow" });
    }
}