const root = document.documentElement;

class LightMode{
    switcher;
    constructor(switcherNow){
        this.switcher = switcherNow;
    }

    turnDarkMode(){
        root.style.setProperty('--light-color-font', '#efefef');
        root.style.setProperty('--light-background', '#595959');
        this.switcher.setMode(this.switcher.getDarkMode());
    }

    turnLightMode(){
        root.style.setProperty('--light-color-font', '#595959');
        root.style.setProperty('--light-background', '#efefef');
    }
}

export default LightMode;