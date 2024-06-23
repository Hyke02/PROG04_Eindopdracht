import { Scene } from "excalibur";
import { Tutorial2 } from "../TutorialActor2";

export class TutorialScreen2 extends Scene {

    onInitialize(engine) {
        const tutorialScreen = new Tutorial2()
        this.add(tutorialScreen)

        this.engine.clock.schedule(() => {engine.goToScene('2player')}, 3000)
    }

    onDeactivate() {
        this.clear()
    }
}