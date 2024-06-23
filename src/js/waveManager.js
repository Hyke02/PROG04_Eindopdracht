import { Actor, Engine, Scene } from "excalibur";
import { Enemy } from "./enemy";
import { UI } from "./UI";

export class WaveManager extends Actor {
    constructor() {
        super()
        this.currentWave = 1
        this.enemiesKilled = 0
        this.enemiesToKill = 3
        this.enemiesPerWave = 3
        this.enemyPositions = []
    }

    enemyKilled(engine) {
        this.enemiesKilled++
        if (this.enemiesKilled >= this.enemiesToKill) {
            this.nextWave(engine)
        }
    }

    nextWave(engine) {
        console.log("next wave");
        this.currentWave ++
        engine.currentWave = this.currentWave
        console.log(engine.currentWave);
        this.enemiesKilled = 0
        this.enemiesToKill += this.enemiesPerWave
        this.enemyPositions = []
        this.spawnEnemies(this.enemiesToKill, engine)
    }

    spawnEnemies(enemiesCount, engine) {
        for (let i = 0; i < enemiesCount; i++) {
            let x, y
            let validPosition = false
            
            while (!validPosition) {
                x = Math.random() * (1150 - 130) + 130
                y = Math.random() * (-300 - -100) + -100
                validPosition = true

                for (let pos of this.enemyPositions) {
                    if (Math.hypot(pos.x - x, pos.y - y) < 100) {
                        validPosition = false
                        break
                    }
                }
            }

            if (validPosition) {
                let enemy = new Enemy(x, y, .7, .7, 100, 2, this)
                this.enemyPositions.push({ x, y })
                engine.add(enemy)
                
            }
        }
    }
}