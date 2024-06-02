import * as ex from "excalibur";
import { Resources } from "../resources";
import { Color, SpriteSheet } from "excalibur";

const playerSpriteSheet = SpriteSheet.fromImageSource({
    image: Resources.PlayerAnimation,
    grid: {
        columns: 3,
        rows: 3,
        spriteWidth: 500,
        spriteHeight: 500
    }
})
const idleAnim = ex.Animation.fromSpriteSheet(playerSpriteSheet, ex.range(0, 1), 80)
const leftAnim = ex.Animation.fromSpriteSheet(playerSpriteSheet, ex.range(3, 4), 80)
const rightAnim = ex.Animation.fromSpriteSheet(playerSpriteSheet, ex.range(6, 7), 80)
const brakeAnim = ex.Animation.fromSpriteSheet(playerSpriteSheet, [0], 80)

const playerExplosionSpriteSheet = SpriteSheet.fromImageSource({
    image: Resources.PlayerExplosion,
    grid: {
        columns: 4,
        rows: 4,
        spriteWidth: 512,
        spriteHeight: 512
    }
})
const playerExplodeAnim = ex.Animation.fromSpriteSheet(playerExplosionSpriteSheet, ex.range(0, 14), 80, ex.AnimationStrategy.End)

export const playerAnim = {
    idleAnim,
    leftAnim,
    rightAnim,
    brakeAnim,
    playerExplodeAnim
}

export default playerAnim
