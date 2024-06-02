import { Scene } from "excalibur";
import { MenuButton } from "../PlayerButton";

export class Menu extends Scene {
    
    onInitialize(engine) {
        const buttons = new MenuButton
        this.add(buttons)
    }

}