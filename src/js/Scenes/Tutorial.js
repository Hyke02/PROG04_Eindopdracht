import { Scene } from "excalibur";
import { Tutorial } from "../TutorialActor"

export class TutorialScreen extends Scene {

    onActivate() {
        const tutorialScreen = new Tutorial()
        this.add(tutorialScreen)

        const engine = this.engine

        this.engine.clock.schedule(() => {engine.goToScene('level1')}, 3000)
        console.log('next screeeen');
    }

    onDeactivate() {
        this.clear()
    }

}