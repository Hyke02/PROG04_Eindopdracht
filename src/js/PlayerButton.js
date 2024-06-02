import { Actor, Color, EasingFunctions, Label, Vector } from "excalibur";
import { Resources } from "./resources";

export class MenuButton extends Actor {

    onInitialize(engine) {
        let buttonOne = new Actor({
            width: Resources.OnePlayerButton.width,
            height: Resources.OnePlayerButton.height,
            pos: new Vector(1100, 300)
        })
        let buttonOneSprite = Resources.OnePlayerButton.toSprite()
        buttonOneSprite.tint = new Color(200, 200, 200)
        buttonOne.graphics.use(buttonOneSprite)

        buttonOne.on('pointerenter', () => {
            buttonOneSprite.tint = new Color(255, 255, 255)
            buttonOne.actions.clearActions()
            buttonOne.actions.easeTo(new Vector(900, 300), 400, EasingFunctions.EaseInOutCubic)
        })
        buttonOne.on('pointerleave', () => {
            buttonOneSprite.tint = new Color(200, 200, 200)
            buttonOne.actions.clearActions()
            buttonOne.actions.easeTo(new Vector(1100, 300), 200, EasingFunctions.EaseInOutCubic)
        })
        buttonOne.on('pointerdown', () => {
            engine.goToScene('Tutorial')
        })
        this.addChild(buttonOne)

        let buttonTwo = new Actor({
            width: Resources.TwoPlayerButton.width,
            height: Resources.TwoPlayerButton.height,
            pos: new Vector(1100, 500)
        })
        let buttonTwoSprite = Resources.TwoPlayerButton.toSprite()
        buttonTwoSprite.tint = new Color(200, 200, 200)
        buttonTwo.graphics.use(buttonTwoSprite)
        
        buttonTwo.on('pointerenter', () => {
            buttonTwoSprite.tint = new Color(255, 255, 255)
            buttonTwo.actions.clearActions()
            buttonTwo.actions.easeTo(new Vector(900, 500), 400, EasingFunctions.EaseInOutCubic)
        })
        buttonTwo.on('pointerleave', () => {
            buttonTwoSprite.tint = new Color(200, 200, 200)
            buttonTwo.actions.clearActions()
            buttonTwo.actions.easeTo(new Vector(1100, 500), 200, EasingFunctions.EaseInOutCubic)
        })
        buttonTwo.on('pointerdown', () => {
            engine.goToScene('level1')
        })
        this.addChild(buttonTwo)
    }

    
}