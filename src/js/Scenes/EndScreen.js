import { Actor, Color, EasingFunctions, Font, FontUnit, Label, Scene, TextAlign, Vector } from "excalibur";
import { Tutorial } from "../TutorialActor"
import { EndScreenActor } from "../EndScreenActor";
import { Resources } from "../resources";

export class EndScreenScene extends Scene {

    onActivate() {
        const engine = this.engine
        
        const endScreen = new EndScreenActor()
        this.add(endScreen)

        this.wavesCleared = new Label({
            text: `Waves cleared: ${engine.currentWave - 1}`,
            pos: new Vector(engine.drawWidth / 2, 170

            ),
            color: Color.White,
            font: new Font({
                family: 'PlusJakarta',
                size: 25,
                unit: FontUnit.Px,
                color: Color.White,
                textAlign: TextAlign.Center
            }),
            z: 10
        })

        this.highScoreText = new Label({
            text: `Highest Waves cleared`,
            pos: new Vector(engine.drawWidth / 2, 40

            ),
            color: Color.White,
            font: new Font({
                family: 'PlusJakarta',
                size: 40,
                unit: FontUnit.Px,
                color: Color.White,
                textAlign: TextAlign.Center
            }),
            z: 10
        })

        this.highScoreNumber = new Label({
            text: `${engine.highScore - 1}`,
            pos: new Vector(engine.drawWidth / 2, 90

            ),
            color: Color.White,
            font: new Font({
                family: 'PlusJakarta',
                size: 40,
                unit: FontUnit.Px,
                color: Color.White,
                textAlign: TextAlign.Center
            }),
            z: 10
        })

        let restartButton = new Actor({
            width: Resources.RestartButton.width,
            height: Resources.RestartButton.height,
            pos: new Vector(engine.drawWidth / 2, 580)
        })
        let restartButtonSprite = Resources.RestartButton.toSprite()
        restartButtonSprite.tint = new Color(200, 200, 200)
        restartButton.graphics.use(restartButtonSprite)

        restartButton.on('pointerenter', () => {
            document.body.style.cursor = 'pointer'
            restartButtonSprite.tint = new Color(255, 255, 255)
            restartButton.actions.clearActions()
        })
        restartButton.on('pointerleave', () => {
            document.body.style.cursor = 'default'
            restartButtonSprite.tint = new Color(200, 200, 200)
            restartButton.actions.clearActions()
        })
        restartButton.on('pointerdown', () => {
            engine.goToScene('MainMenu')
        })

        this.add(restartButton)
        this.add(this.wavesCleared)
        this.add(this.highScoreText)
        this.add(this.highScoreNumber)

    }

    onDeactivate() {
        this.clear()
    }

}