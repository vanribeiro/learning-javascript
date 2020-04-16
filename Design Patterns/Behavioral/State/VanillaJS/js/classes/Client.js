/**
 * Turn On/Off The Light
 * This code example was pulled and adapted from the book:
 * Title: Aprendendo Padrões de Projeto em PHP
 * Author: William Sanders
 * Book's Language: Portuguese
 */

import Context from './Context.js';

class Client{
    context = new Context();
    constructor(){
        this.context.turnOnLight();
        this.context.turnOnLight();
        this.context.turnOffLight();
        this.context.turnOffLight();
    }
}

export default new Client();