import { Actor, CollisionType, Keys, SpriteFont, SpriteSheet, Timer, Vector, range } from "excalibur";
import * as ex from "excalibur"
import { Resources } from "./resources";
import { vector } from "excalibur/build/dist/Util/DrawUtil";
import { enemy, enemyBullet } from "./collisiongroups";
import { Projectile } from "./projectile";
import { Player } from "./player";
import { ProjectileAnims } from "./Animations/projectileanim.js";
import enemyAnim from "./Animations/enemyanim.js";
import { WaveManager } from "./waveManager.js";

export class Enemy extends Actor {

    constructor(x, y, scaleX, scaleY, ySpeed, HP, waveManager, engine) {

        super({

            pos: new Vector(x, y),
            radius: 50,
            scale: new Vector(scaleX, scaleY),
            collisionType: CollisionType.Passive,
            collisionGroup: enemy,

        })

        this.enemyHP = HP

        this.graphics.use(enemyAnim.gruntAnim)

        this.vel.y = ySpeed

        this.lastFired = 0
        this.timeBetweenBullets = 1000

        this.z = 2

        this.waveManager = waveManager
        this.engine = engine

    }

    onInitialize(engine) {

        this.on('collisionstart', (event) => this.hitSomething(event, engine))
    }

    onPostUpdate(engine) {

        if (this.pos.y > 720 + 100) {
            this.pos.y = -100
        }

        const now = Date.now();
        if (now - this.lastFired > this.timeBetweenBullets) {
            const bullet = new Projectile(
                // position v
                this.pos.x, this.pos.y,
                // scale v
                1.5, 1.5,
                // collision v
                20, 20,
                // anchor v
                .5, .6,
                // bulletSpeed v
                300,
                // collisionGroup v
                enemy,
                // bulletsprite v
                ProjectileAnims.projectileGruntAnim
            );
            engine.add(bullet);
            this.lastFired = now;
        }

    }

    hitSomething(event, engine) {
        if (event.other instanceof Projectile) {
            this.enemyHP--
            console.log(this.enemyHP);
            event.other.kill()
        } if (this.enemyHP <= 0) {
            this.waveManager.enemyKilled(engine)
            this.kill()

        }

        if (event.other instanceof Player) {
            event.other.takeDamage(1)
        }
    }

}