import { Actor, CollisionType, ImageSource, Vector, vec } from "excalibur";
import { vector } from "excalibur/build/dist/Util/DrawUtil";
import { Resources } from "./resources";

export class Projectile extends Actor {

    constructor(x, y, scalex, scaley, collisionX, collisionY, vectorX, vectorY, bulletSpeed, collisionGroup, sprite) {

        super({

            pos: new Vector(x, y),
            vel: new Vector(0, bulletSpeed),
            height: collisionY,
            width: collisionX,
            scale: new Vector(scalex, scaley),
            collisionType: CollisionType.Passive,
            collisionGroup: collisionGroup,
            anchor: new Vector(vectorX, vectorY)

        })

        this.graphics.use(sprite)

    }

    onPostUpdate(engine) {

        const viewportWidth = engine.drawWidth
        const viewportHeight = engine.drawHeight

        if (this.isOffScreen) {
            engine.remove(this)
        }

    }
}