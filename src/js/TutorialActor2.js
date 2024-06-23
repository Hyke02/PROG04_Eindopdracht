import { Actor, Sprite, Vector } from "excalibur";
import { Resources } from "./resources";

export class Tutorial2 extends Actor {
    
    onInitialize(engine) {
        this.sprite = new Sprite({
            image: Resources.Tutorial2Player,
            sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }

        })
        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
    }
}