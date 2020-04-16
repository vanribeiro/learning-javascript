import LightMode from './LightMode.js';
import DarkMode from './DarkMode.js';

class Switcher{
    lightMode;
    darkMode;
    currentMode;
    constructor(){
        this.darkMode = new DarkMode(this);
        this.lightMode = new LightMode(this);
        this.currentMode = this.lightMode; 
    }

    turnModeDark(){
        this.currentMode.turnDarkMode();
    }

    turnModeLight(){
        this.currentMode.turnLightMode();
    }

    setMode(mode){
        this.currentMode = mode;
    }

    getDarkMode(){
        return this.darkMode;
    }

    getLightMode(){
        return this.lightMode;
    }
}

export default Switcher;