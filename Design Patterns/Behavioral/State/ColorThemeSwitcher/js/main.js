class Context{
    onState;
    offState;
    currentState;
    constructor(){
        this.onState = new OnState(this)
        this.offState = new OffState(this);
        this.currentState = this.offState;
    }

    turnOnLight(){
        this.currentState.turnLightOn();
    }

    turnOffLight(){
        this.currentState.turnLightOff();
    }

    setState(state){
        this.currentState = state;
    }

    getOnState(){
        return this.onState;
    }

    getOffState(){
        return this.offState;
    }

}

class OnState{
    context;
    constructor(contexNow){
        this.context = contexNow;
    }

    turnLightOn(){
        console.log("Light is already On!");
    }

    turnLightOff(){
        console.log("Light off!");
        this.context.setState(this.context.getOffState());
    }
}

class OffState{
    context;
    constructor(contextNow){
        this.context = contextNow;
    }

    turnLightOn(){
        console.log("Lights on! Now I can see!");
        this.context.setState(this.context.getOnState());
    }

    turnLightOff(){
        console.log("Lights is already Off!");
    }
}

class Client{
    context = new Context();
    constructor(){
        this.context.turnOnLight();
        this.context.turnOnLight();
        this.context.turnOffLight();
        this.context.turnOffLight();
    }
}

var body = document.querySelector('body');
var switchButton = document.querySelector('#switcher-theme-color');

body.onload = () => {
    console.log("oi");
    client = new Client();

    console.log(client);
}