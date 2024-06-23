import { Actor, Color, Font, FontUnit, Label, ScreenElement, Vector } from "excalibur"
import { WaveManager } from "./waveManager"
import { Resources } from "./resources"

export class UI extends ScreenElement {

    constructor(waveManager) {
        super()

        this.waveManager = waveManager
    }

    healthbar
    maxAmount = 1

    mylabel
    nextWaveLabel


    onInitialize(engine) {
        // Player 1 HP bar
        let barbackgroundP1 = new Actor({ x: 20, y: 680, color: Color.fromRGB(0, 0, 0, 0.4), width: 200, height: 20, anchor: Vector.Zero })
        this.addChild(barbackgroundP1)

        this.healthbarP1 = new Actor({ x: 20, y: 680, color: Color.fromRGB(146, 179, 95), width: 190, height: 10, anchor: new Vector(-.025, -.5) })
        this.healthbarP1.z = 10
        this.addChild(this.healthbarP1)
        
        this.shipIcon = Resources.ShipIcon
        this.enemyIcon = new Actor({ x: 70, y: 114, scale: new Vector(2, 2), z: 10})
        this.enemyIcon.graphics.use(this.shipIcon.toSprite())
        this.addChild(this.enemyIcon)

        // Player 2 HP bar
        let barbackgroundP2 = new Actor({ x: 1050, y: 680, color: Color.fromRGB(0, 0, 0, 0.4), width: 200, height: 20, anchor: Vector.Zero })
        this.addChild(barbackgroundP2)

        this.healthbarP2 = new Actor({ x: 1050, y: 680, color: Color.fromRGB(146, 179, 95), width: 190, height: 10, anchor: new Vector(-.025, -.5) })
        this.healthbarP2.z = 10
        this.addChild(this.healthbarP2)
        
        // Ships remaining icon
        this.shipIcon = Resources.ShipIcon
        this.enemyIcon = new Actor({ x: 70, y: 114, scale: new Vector(2, 2), z: 10})
        this.enemyIcon.graphics.use(this.shipIcon.toSprite())
        this.addChild(this.enemyIcon)

        this.mylabel = new Label({
            text: `WAVE: ${this.waveManager.currentWave}`,
            pos: new Vector(50, 50),
            font: new Font({
                family: 'PlusJakarta',
                size: 40,
                unit: FontUnit.Px,
                color: Color.White
            })

        })
        this.mylabel.z = 10
        this.addChild(this.mylabel)

        this.nextWaveLabel = new Label({
            text: `${this.waveManager.enemiesKilled} / ${this.waveManager.enemiesToKill}`,
            pos: new Vector(95, 100),
            font: new Font({
                family: 'PlusJakarta',
                size: 30,
                unit: FontUnit.Px,
                color: Color.White
            }),
            z: 10
        })

        this.addChild(this.nextWaveLabel)

    }   
    
    onPostUpdate(engine) {
        this.nextWaveLabel.text = `${this.waveManager.enemiesKilled} / ${this.waveManager.enemiesToKill}`
        this.mylabel.text = `WAVE: ${this.waveManager.currentWave}`
    }

    reduceHealth(player, playerHP, playerMaxHP) {
        let healthbar
        if (player === 1) {
            healthbar = this.healthbarP1
            console.log('i player 1');
        } else if (player === 2) {
            healthbar = this.healthbarP2
            console.log('i player 2');
        }

        if (healthbar) {
            healthbar.scale = new Vector(playerHP / playerMaxHP, 1)
            if (playerHP / playerMaxHP < .6) {
                healthbar.color = Color.fromRGB(252, 141, 61)
            } if (playerHP / playerMaxHP < .3) {
                healthbar.color = Color.fromRGB(252, 61, 61)
            }
        }
            
    }

}