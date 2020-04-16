/**
 * Turn On/Off The Light
 * This code example was pulled and adapted from the book:
 * Title: Aprendendo Padrões de Projeto em PHP
 * Author: William Sanders
 * Book's Language: Portuguese
 */
import OnState from './OnState.js';
import OffState from './OffState.js';

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

export default Context;