import * as ex from "excalibur";
import { Resources } from "../resources";
import { Color, SpriteSheet } from "excalibur";

const projectileSpriteSheet = SpriteSheet.fromImageSource({
    image: Resources.EnemyProjectileGrunt,
    grid: {
        columns: 4,
        rows: 1,
        spriteWidth: 32,
        spriteHeight: 32
    },
})

const projectileGruntAnim = ex.Animation.fromSpriteSheet(projectileSpriteSheet, ex.range(0, 3), 100)
projectileGruntAnim.rotation = Math.PI / 2

const playerMainProjectileSheet = SpriteSheet.fromImageSource({
    image: Resources.PlayerMainBullet,
    grid: {
        columns: 4,
        rows: 1,
        spriteWidth: 16,
        spriteHeight: 16
    }
})

const playerMainProjectileAnim = ex.Animation.fromSpriteSheet(playerMainProjectileSheet, ex.range(0, 3), 100)
playerMainProjectileAnim.rotation = Math.PI / -2


export const ProjectileAnims = {
    projectileGruntAnim,
    playerMainProjectileAnim
}

export default ProjectileAnims
