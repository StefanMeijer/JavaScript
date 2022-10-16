class SceneGame extends Phaser.Scene {
    
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
        this.load.spritesheet("characterStill", "../assets/images/characterStill.gif", {
            frameWidth: "100%",
            frameHeight: "100%"
        });
        this.load.spritesheet("characterShooting", "../assets/images/characterShooting.gif",{
            frameWidth: "100%",
            frameHeight: "100%"
        });

    }

    //used to add the objects to the game
    create() {
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);
        this.background.setInteractive();

        //Add figures to game
        this.figure1 = this.physics.add.sprite(Phaser.Math.Between(0, config.width), 0, "figure1");
        this.figure2 = this.physics.add.sprite(Phaser.Math.Between(0, config.width), 0, "figure2");
        this.figure3 = this.physics.add.sprite(Phaser.Math.Between(0, config.width), 0, "figure3");

        // Resize figures
        this.figure1.setScale(0.2);
        this.figure2.setScale(0.2);
        this.figure3.setScale(0.2);

        //Make the figures clickable to destroy them
        this.figure1.setInteractive();
        this.figure2.setInteractive();
        this.figure3.setInteractive();

        //Add character to game
        this.character = this.physics.add.sprite(config.width / 2, config.height - 85, "characterShooting");
        this.character.setScale(0.75); //Resize character
        this.character.setCollideWorldBounds(true); //make character collide with world bounds
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A); //add key A to keyboard
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D); //add key D to keyboard

        //Collision detection
        this.physics.add.overlap(this.character, this.figure1, this.collisionDetection, null, this);
        this.physics.add.overlap(this.character, this.figure2, this.collisionDetection, null, this);
        this.physics.add.overlap(this.character, this.figure3, this.collisionDetection, null, this);

        //Clicked/shooting
        this.input.on('gameobjectdown', this.objectHandler, this);

        //Score
        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '25px Arial', fill: 'yellow' });

        //Stop game after 60 seconds
        setTimeout(() => {
            localStorage.setItem('score', gameSettings.score);
            this.scene.start("stopGame");
        }, gameSettings.gameLenghtinMiliseconds);
        
    }

    //loop that runs constantly
    update() {

        this.moveFigure(this.figure1, Phaser.Math.Between(1, gameSettings.enemySpeed));
        this.moveFigure(this.figure2, Phaser.Math.Between(1, gameSettings.enemySpeed));
        this.moveFigure(this.figure3, Phaser.Math.Between(1, gameSettings.enemySpeed));

        this.movePlayerManager();
    }

    /**
     * Function to move character
     */
    movePlayerManager() {
        if (this.keyA.isDown) {
            this.character.setTexture('characterStill')
            this.character.flipX = true;
            this.character.x -= 7.5;
            setTimeout(() => {
                this.character.setTexture('characterShooting');
            }, 500);
        } else if (this.keyD.isDown) {
            this.character.setTexture('characterStill')
            this.character.flipX = false;
            this.character.x += 7.5;
            setTimeout(() => {
                this.character.setTexture('characterShooting');
            }, 500);
        }
    }

    /**
     * Function to move figure
     * @param {*} figure 
     * @param {*} speed 
     */
    moveFigure(figure, speed) {
        figure.y += speed;
        if (figure.y > config.height - 60) {
            this.resetFigurePos(figure);
        }
    }

    /**
     * Function to reset figure position
     * @param {*} figure 
     */
    resetFigurePos(figure) {
        figure.y = 0;
        let randomX = Phaser.Math.Between(60, config.width - 60);
        figure.x = randomX;
    }

    /**
     * Function to destroy figure or handle image click
     * @param {*} pointer 
     * @param {*} gameObject 
     */
    objectHandler(pointer, gameObject) {
        // console.log(gameObject);

        if (gameObject.type == "Image") { //Check if object is an image(background)
            if (gameSettings.score > 0) {
                gameSettings.score -= 5;
                this.scoreText.setText('Score: ' + gameSettings.score);
            }
        } else {
            //Destroy figure
            gameObject.active = false;
            gameObject.visible = false;

            //add score
            gameSettings.score += 10;
            this.scoreText.setText('Score: ' + gameSettings.score);

            //Reset figure
            this.resetFigurePos(gameObject);
            gameObject.active = true;
            gameObject.visible = true;
        }
    }

    /**
     * Function to handle collision detection
     * @param {*} character 
     * @param {*} figure 
     */
    collisionDetection(character, figure) {
        this.resetFigurePos(figure);
        if (gameSettings.score >= 10) {
            gameSettings.score -= 10;
            this.scoreText.setText('Score: ' + gameSettings.score);
        } else {
            gameSettings.score = 0;
            this.scoreText.setText('Score: ' + gameSettings.score);
        }
    }
}