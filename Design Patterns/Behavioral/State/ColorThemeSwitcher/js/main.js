import Switcher from './modules/Switcher.js';

var body = document.querySelector('body');
var switchButton = document.querySelector('#switcher-theme-color');

switchButton.addEventListener('change', (event) => {
    const switcher = new Switcher();
    if(switchButton.checked){
        switcher.turnModeDark();
    } else{
        switcher.turnModeLight();
    }
    
});