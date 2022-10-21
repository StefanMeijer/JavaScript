var config = {
  width: 1000,
  height: 700,
  backgroundColor: 0x000000,
  scene: [SceneGame, SceneStop],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade:{
        debug: false
    }
  }
}

var gameSettings = {
  score: 0,
  gameLenghtinMiliseconds: 30000,
  playerSpeed: 1,
  enemySpeed: 14,
}


var game = new Phaser.Game(config);