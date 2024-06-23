import { Actor, CollisionGroup, CollisionType, Graphic, Input, Keys, Timer, Vector } from "excalibur";
import { Resources } from "./resources";
import playerAnim from "./Animations/playeranim.js";
import { Projectile } from "./projectile";
import { delay } from "excalibur/build/dist/Util/Util";
import { enemyBullet, player, playerBullet } from "./collisiongroups";
import { Game } from "./game";
import { ProjectileAnims } from "./Animations/projectileanim.js";

export class Player extends Actor {

    constructor(x, y, playerHP, playerMaxHP, controls, whichPlayer) {

        super({

            pos: new Vector(x, y),
            radius: 50,
            scale: new Vector(.4, .4),
            z: 2,
            collisionType: CollisionType.Active,
            collisionGroup: player
        })

        this.hp = playerHP
        this.maxHP = playerMaxHP
        this.isImmune = false

        this.ui = null

        this.lastFired = 0
        this.timeBetweenBullets = 800

        this.playerInput = true;
        this.controls = controls;
        this.whichPlayer = whichPlayer

    }

    takeDamage(amount) {

        if (!this.isImmune) {
            this.hp -= amount
            this.ui.reduceHealth(this.whichPlayer, this.hp, this.maxHP)
            this.isImmune = true

        } if (this.hp > 0) {
            this.actions.blink(40, 40, 25).callMethod(() => {
                this.isImmune = false;
            })

        } if (this.hp <= 0) {
            this.vel = new Vector(0, 0)
            this.playerInput = false
            this.graphics.use(playerAnim.playerExplodeAnim)
            playerAnim.playerExplodeAnim.events.on('end', () => {
                // this.scene?.engine.goToScene('GameOver')
                this.kill()
            })
        }

    }

    hitSomething(event) {

        if (event.other instanceof Projectile && !this.isImmune) {
            this.takeDamage(1)
            event.other.kill()
        }

    }

    onInitialize() {

        this.on('collisionstart', (event) => this.hitSomething(event))

    }

    onPreUpdate(engine) {
        if (this.hp > 0) {
            this.graphics.use(playerAnim.idleAnim)
            this.anchor.setTo(.5, .42)
        }

        let xspeed = 0
        let yspeed = 0

        if (!this.playerInput) return

        // movement
        if (engine.input.keyboard.isHeld(this.controls.up)) {
            yspeed = -300
        }

        if (engine.input.keyboard.isHeld(this.controls.down)) {
            yspeed = 300,
                this.graphics.use(playerAnim.brakeAnim)
        }

        if (engine.input.keyboard.isHeld(this.controls.right)) {
            xspeed = 300,
                this.graphics.use(playerAnim.rightAnim),
                this.anchor.setTo(.63, .42)
        }

        if (engine.input.keyboard.isHeld(this.controls.left)) {
            xspeed = -300,
                this.graphics.use(playerAnim.leftAnim),
                this.anchor.setTo(.37, .42)
        }

        this.vel = new Vector(xspeed, yspeed)

        // shooting
        const now = Date.now();
        if (engine.input.keyboard.isHeld(this.controls.shoot) && now - this.lastFired > this.timeBetweenBullets) {
            const bullet = new Projectile(
                // position v
                this.pos.x, this.pos.y - 50,
                // scale v
                2, 2,
                // collision v
                6, 8,
                // anchor v
                .5, .1,
                // bulletSpeed v
                - 850,
                // collisionType v
                player,
                // bulletSprite v
                ProjectileAnims.playerMainProjectileAnim
            );
            engine.add(bullet)
            this.lastFired = now

        }

    }

    onPostUpdate(engine, delta) {
        // player border
        const leftBoundary = this.width / 2
        const rightBoundary = engine.drawWidth - this.width / 2
        const topBoundary = this.height / 2
        const bottomBoundary = engine.drawHeight - this.height / 2

        if (this.pos.x < leftBoundary) {
            this.pos.x = leftBoundary
        }

        if (this.pos.x > rightBoundary) {
            this.pos.x = rightBoundary
        }

        if (this.pos.y < topBoundary) {
            this.pos.y = topBoundary
        }

        if (this.pos.y > bottomBoundary) {
            this.pos.y = bottomBoundary
        }
    }

}
