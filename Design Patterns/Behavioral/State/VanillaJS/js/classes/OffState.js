/**
 * Turn On/Off The Light
 * This code example was pulled and adapted from the book:
 * Title: Aprendendo Padrões de Projeto em PHP
 * Author: William Sanders
 * Book's Language: Portuguese
 */
class OffState{
    context;
    constructor(contextNow){
        this.context = contextNow;
    }

    turnLightOn(){
        console.log("Light on! Now I can see!");
        this.context.setState(this.context.getOnState());
    }

    turnLightOff(){
        console.log("Lights is already Off!");
    }
}

export default OffState;