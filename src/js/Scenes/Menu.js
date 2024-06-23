import { Scene } from "excalibur";
import { MenuButton } from "../PlayerButton";

export class Menu extends Scene {

    onActivate() {
        const buttons = new MenuButton
        this.add(buttons)
    }

    onDeactivate() {
        this.clear()
    }

}