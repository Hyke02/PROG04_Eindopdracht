import { ImageSource, Sound, Resource, Loader, ImageWrapping, FontSource } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    InsectPlayer: new ImageSource('images/insect.png'),
    PlayerAnimation: new ImageSource('images/insect_spritesheet.png'),
    PlayerProjectiles: new ImageSource('images/player_bullets.png'),
    EnemyProjectiles: new ImageSource('images/enemy_bullet.png'),
    EnemyProjectileGrunt: new ImageSource('images/enemy_bullet_grunt.png'),
    PlayerMainBullet: new ImageSource('images/player_main_bullet.png'),
    PlaceholderBullet: new ImageSource('images/bullet_placeholder.png'),
    EnemyGrunt: new ImageSource('images/enemy_grunt.png'),
    ForestBackground: new ImageSource('images/forest_background.png', { wrapping: ImageWrapping.Repeat }),
    Clouds: new ImageSource('images/clouds.png', { wrapping: ImageWrapping.Repeat }),
    Explosion: new ImageSource('images/explosion.png'),
    PlayerExplosion: new ImageSource('images/player_explosion.png'),
    ShipIcon: new ImageSource('images/ship_icon.png'),
    OnePlayerButton: new ImageSource('images/1Player.png'),
    TwoPlayerButton: new ImageSource('images/2Player.png'),
    Tutorial: new ImageSource('images/tutorial.png'),
    PlusJakartaSans: new FontSource('fonts/PlusJakartaSans-Variable.ttf', 'PlusJakarta'),
    GameOver: new ImageSource('images/gameover.png')
}




const ResourceLoader = new Loader()

for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }