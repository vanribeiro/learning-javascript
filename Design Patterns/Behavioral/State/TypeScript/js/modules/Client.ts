/**
 * This code example was pulled and adapted from the book:
 * Title: Aprendendo Padrões de Projeto em PHP
 * Author: William Sanders
 * Language(wich I'm Reading): Portuguese
 */
import Context from './Context';

class Client{
    private context: Context;

    constructor() {
        this.context = new Context();
        this.context.turnOnLight();
        this.context.turnOnLight();
        this.context.turnOffLight();
        this.context.turnOffLight();
    }
}

export default Client;