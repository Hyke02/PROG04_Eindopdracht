import { Scene } from "excalibur";
import { Tutorial } from "../TutorialActor"

export class TutorialScreen extends Scene {

    onInitialize(engine) {
        const tutorialScreen = new Tutorial()
        this.add(tutorialScreen)

        this.engine.clock.schedule(() => engine.goToScene('level1'), 3000)
    }
}