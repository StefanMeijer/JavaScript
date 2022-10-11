class SceneGame extends Phaser.Scene {
    score = 0;

    constructor() {
        super("playGame");
    }

    //used to prepare data
    init() {

    }

    //used to load music and images into memory
    preload() {
        //Background
        this.load.image("background", "../assets/images/background.png");

        //Figures
        this.load.spritesheet("figure1", "../assets/images/figure1.png", {
            frameWidth: "100%",
            frameHeight: "100%"
        });
        this.load.spritesheet("figure2", "../assets/images/figure2.png", {
            frameWidth: "100%",
            frameHeight: "100%"
        });
        this.load.spritesheet("figure3", "../assets/images/figure3.png", {
            frameWidth: "100%",
            frameHeight: "100%"
        });

        //Character
        // this.load.spritesheet("characterStill", "../assets/images/characterStill.png",{
        //     frameWidth: "100%",
        //     frameHeight: "100%"
        // });
        // this.load.spritesheet("characterWalk", "../assets/images/characterWalk.png",{
        //     frameWidth: "100%",
        //     frameHeight: "100%"
        // });
        // this.load.spritesheet("characterShoot", "../assets/images/characterShoot.png",{
        //     frameWidth: "100%",
        //     frameHeight: "100%"
        // });

    }

    //used to add the objects to the game
    create() {
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);
        this.background.setInteractive();

        //Add figures to game
        this.figure1 = this.add.sprite(Phaser.Math.Between(0, config.width), 0, "figure1");
        this.figure2 = this.add.sprite(Phaser.Math.Between(0, config.width), 0, "figure2");
        this.figure3 = this.add.sprite(Phaser.Math.Between(0, config.width), 0, "figure3");

        // Resize figures
        this.figure1.setScale(0.2);
        this.figure2.setScale(0.2);
        this.figure3.setScale(0.2);

        //Make the figures clickable to destroy them
        this.figure1.setInteractive();
        this.figure2.setInteractive();
        this.figure3.setInteractive();

        //Clicked
        this.input.on('gameobjectdown', this.objectHandler, this);

        this.add.text(20, 20, this.score, {
            font: "25px Arial",
            fill: "yellow"
        });

        // this.Scene.start("stopGame");
    }

    //loop that runs constantly
    update() {
        this.moveFigure(this.figure1, Phaser.Math.Between(1, 5));
        this.moveFigure(this.figure2, Phaser.Math.Between(1, 5));
        this.moveFigure(this.figure3, Phaser.Math.Between(1, 5));
    }

    /**
     * Function to move figure
     * @param {*} figure 
     * @param {*} speed 
     */
    moveFigure(figure, speed) {
        figure.y += speed;
        if (figure.y > config.height) {
            this.resetFigurePos(figure);
        }
    }

    /**
     * Function to reset figure position
     * @param {*} figure 
     */
    resetFigurePos(figure) {
        figure.y = 0;
        let randomX = Phaser.Math.Between(0, config.width);
        figure.x = randomX;
    }

    /**
     * Function to destroy figure or handle image click
     * @param {*} pointer 
     * @param {*} gameObject 
     */
    objectHandler(pointer, gameObject) {
        console.log(gameObject);

        if (gameObject.type == "Image") { //Check if object is an image(background)
            if (this.score > 0) {
                this.score -= 5;
            }
        } else {
            //Destroy figure
            gameObject.active = false;
            gameObject.visible = false;

            //add score
            this.score += 10;

            //Reset figure
            this.resetFigurePos(gameObject);
            gameObject.active = true;
            gameObject.visible = true;
        }
        
        console.log(this.score);
    }
}