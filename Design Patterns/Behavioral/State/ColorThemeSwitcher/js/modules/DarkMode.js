const root = document.documentElement;
class DarkMode{
    switcher;
    constructor(switcherNow){
        this.switcher = switcherNow;
    }

    turnDarkMode(){
        root.style.setProperty('--light-color-font', '#efefef');
        root.style.setProperty('--light-background', '#595959');
    }

    turnLightMode(){
        root.style.setProperty('--light-color-font', '#595959');
        root.style.setProperty('--light-background', '#efefef');
        this.switcher.setMode(this.switcher.getLightMode());
    }
}

export default DarkMode;