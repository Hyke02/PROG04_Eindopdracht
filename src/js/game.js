import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Color, FadeInOut, Keys, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Player } from './player.js'
import { Enemy } from './enemy.js'
import { Background } from './ScrollingBackground.js'
import { Clouds } from './ScrollingClouds.js'
import { UI } from './UI.js'
import { Level1 } from './Scenes/LVL1.js'
import { Menu } from './Scenes/Menu.js'
import { TutorialScreen } from './Scenes/Tutorial.js'
import { EndScreenScene } from './Scenes/EndScreen.js'
import { Level2 } from './Scenes/level2Players.js'
import { Tutorial2 } from './TutorialActor2.js'
import { TutorialScreen2 } from './Scenes/TutorialTwoPlayers.js'



export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            suppressPlayButton: true,
            displayMode: DisplayMode.FitScreen,
            pixelArt: true,
            suppressHiDPIScaling: true,
        })

        this.currentWave = 1
        this.highScore = parseInt(localStorage.getItem('highScore') || '0') 
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {

        console.log("start de game!")

        const transitions = {
            in: new FadeInOut({ duration: 400, direction: 'in', color: Color.Black }),
            out: new FadeInOut({ duration: 800, direction: 'out', color: Color.Black })
        }

        this.add('MainMenu', new Menu)
        this.add('Tutorial', { scene: new TutorialScreen(), transitions })
        this.add('Tutorial2', { scene: new TutorialScreen2(), transitions})
        this.add('level1', { scene: new Level1(), transitions })
        this.add('2player', { scene: new Level2(), transitions}) 
        this.add('GameOver', { scene: new EndScreenScene(), transitions })

        this.goToScene('MainMenu')

    }

    updateHighScore() {
        if (this.currentWave > this.highScore) {
            this.highScore = this.currentWave
            localStorage.setItem('highScore', this.currentWave.toString())
        }
    }

    onPreUpdate() {
        this.updateHighScore()
        
    }

}

new Game()
