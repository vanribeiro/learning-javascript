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