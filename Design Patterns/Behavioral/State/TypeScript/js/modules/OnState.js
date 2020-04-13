"use strict";
exports.__esModule = true;
var OnState = /** @class */ (function () {
    function OnState(contextNow) {
        this.context = contextNow;
    }
    OnState.prototype.turnLightOn = function () {
        console.log("Light is already on -> take no action");
    };
    OnState.prototype.turnLightOff = function () {
        console.log("Light off!");
        this.context.setState(this.context.getOffState());
    };
    return OnState;
}());
exports["default"] = OnState;
