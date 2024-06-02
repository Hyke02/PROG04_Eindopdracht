import * as ex from "excalibur";
import { Resources } from "../resources";
import { Color, SpriteSheet } from "excalibur";

const gruntSpriteSheet = SpriteSheet.fromImageSource({
    image: Resources.EnemyGrunt,
    grid: {
        rows: 1,
        columns: 8,
        spriteWidth: 500,
        spriteHeight: 500 }
})
const gruntAnim = ex.Animation.fromSpriteSheet(gruntSpriteSheet, ex.range(0, 7), 100)

export const enemyAnim = {
    gruntAnim
}

export default enemyAnim
