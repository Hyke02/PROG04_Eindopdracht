import { Keys, Scene } from "excalibur";
import { UI } from "../UI";
import { Background } from "../ScrollingBackground";
import { Clouds } from "../ScrollingClouds";
import { Player } from "../player";
import { WaveManager } from "../waveManager";

export class Level2 extends Scene {

    constructor() {
        super()
        this.players = []
        this.gameOver = false
        this.waveManager = null
    }

    onInitialize(engine) {

        const player1Controls = {
            up: Keys.W,
            down: Keys.S,
            left: Keys.A,
            right: Keys.D,
            shoot: Keys.Space
        }

        const player2Controls = {
            up: Keys.Up,
            down: Keys.Down,
            left: Keys.Left,
            right: Keys.Right,
            shoot: Keys.Num0
        }
        
        const waveManager = new WaveManager()
        engine.currentWave = waveManager.currentWave
        waveManager.spawnEnemies(waveManager.enemiesToKill, engine)

        const ui = new UI(waveManager)
        ui.z = 100
        this.add(ui)

        const background = new Background()
        this.add(background)

        const player1 = new Player(320, 600, 3, 3, player1Controls, 1)
        player1.ui = ui
        this.add(player1)
        this.players.push(player1)

        const player2 = new Player(960, 600, 3, 3, player2Controls, 2)
        player2.ui = ui
        this.add(player2)
        this.players.push(player2)

        const clouds = new Clouds()
        clouds.z = 3
        this.add(clouds)

        console.log(this.players);
    }

    onDeactivate() {
        this.players.forEach(player => {
            player.x = 640
            player.y = 600
            player.hp = 3
        })
    
        this.gameOver = false

        if (this.waveManager) {
            this.waveManager.currentWave = 1
            this.waveManager.enemiesToKill = 3
        }
    
        this.clear()

        this.players = []
    }

    checkGameOver() {
        if (this.players.every(player => player.hp <= 0) && this.gameOver == false) {
            this.gameOver = true
            this.engine.goToScene('GameOver');
        }
    }

    onPreUpdate() {
        this.checkGameOver()
    }



}