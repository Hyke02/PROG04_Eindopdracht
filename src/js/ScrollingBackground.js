import { Actor, Sprite, Vector } from "excalibur";
import { Resources } from "./resources";

export class Background extends Actor {

    sprite

    onInitialize(engine) {
        this.sprite = new Sprite({
            image: Resources.ForestBackground,
            sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight },

        })
        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
    }

    onPostUpdate(engine, delta) {
        this.sprite.sourceView.y -= .5 * delta;
    }
}