import IState from './IState';
import OffState from './OffState';
import OnState from './OnState';

class Context{
    private offState: OffState;
    private onState: OnState;
    private currentState: IState;
    constructor() {
        this.offState = new OffState(this);
        this.onState = new OnState(this);
        this.currentState = this.offState;
    }

    turnOnLight() {
        this.currentState.turnLightOn();
    }

    turnOffLight() {
        this.currentState.turnLightOff();
    }

    setState(state: IState) {
        this.currentState = state;
    }

    getOnState() {
        return this.onState;
    }

    getOffState(){
        return this.offState;
    }
}

export default Context;