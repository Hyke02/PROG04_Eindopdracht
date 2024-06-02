import { Scene } from "excalibur";
import { UI } from "../UI";
import { Background } from "../ScrollingBackground";
import { Clouds } from "../ScrollingClouds";
import { Enemy } from "../enemy";
import { Player } from "../player";
import { WaveManager } from "../waveManager";

export class Level1 extends Scene {

    onInitialize(engine) {
        
        const waveManager = new WaveManager()
        engine.waveManager = waveManager
        waveManager.spawnEnemies(waveManager.enemiesToKill, engine)

        const ui = new UI(waveManager)
        ui.z = 100
        this.add(ui)

        const background = new Background()
        this.add(background)

        const player = new Player(640, 600, 3, 3)
        this.add(player)
        player.ui = ui

        const clouds = new Clouds()
        clouds.z = 3
        this.add(clouds)
    }

}