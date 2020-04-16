/**
 * Turn On/Off The Light
 * This code example was pulled and adapted from the book:
 * Title: Aprendendo Padrões de Projeto em PHP
 * Author: William Sanders
 * Book's Language: Portuguese
 */

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

export default OnState;