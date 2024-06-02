import { Scene } from "excalibur";
import { Tutorial } from "../TutorialActor"
import { EndScreenActor } from "../EndScreenActor";

export class EndScreenScene extends Scene {

    onInitialize(engine) {
        const endScreen = new EndScreenActor()
        this.add(endScreen)
    }
}