import { Actor, Sprite, Vector } from "excalibur";
import { Resources } from "./resources";

export class Clouds extends Actor {

    sprite

    onInitialize(engine) {
        this.sprite = new Sprite({
            image: Resources.Clouds,
            sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight },
            opacity: .7

        })
        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
    }

    onPostUpdate(engine, delta) {
        this.sprite.sourceView.y -= .5 * delta
        this.sprite.sourceView.x += .02 * delta
    }
}