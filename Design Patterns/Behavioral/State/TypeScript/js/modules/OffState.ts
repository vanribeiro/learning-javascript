/**
 * This code example was pulled and adapted from the book:
 * Title: Aprendendo Padrões de Projeto em PHP
 * Author: William Sanders
 * Language(wich I'm Reading): Portuguese
 */

import IState from './IState';
import Context from './Context';

class OffState implements IState{
    private context: Context;

    constructor(contextNow: Context) {
        this.context = contextNow;
    }

    turnLightOn(){
        console.log("Light on!");
        this.context.setState(this.context.getOnState());
    }

    turnLightOff(){
        console.log("Light is already off -> take no action");
    }
}

export default OffState;