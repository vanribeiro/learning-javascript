/**
 * This code example was pulled and adapted from the book:
 * Title: Aprendendo Padrões de Projeto em PHP
 * Author: William Sanders
 * Language(wich I'm Reading): Portuguese
 */
import IState from './IState';
import Context from './Context';

class OnState implements IState{
    private context: Context;
    constructor(contextNow: Context) {
        this.context = contextNow;
    }
    
    turnLightOn(){
        console.log("Light is already on -> take no action");
    }

    turnLightOff(){
        console.log("Light off!");
        this.context.setState(this.context.getOffState());
    }
}

export default OnState;