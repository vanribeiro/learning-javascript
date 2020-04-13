"use strict";
exports.__esModule = true;
var OffState = /** @class */ (function () {
    function OffState(contextNow) {
        this.context = contextNow;
    }
    OffState.prototype.turnLightOn = function () {
        console.log("Light on!");
        this.context.setState(this.context.getOnState());
    };
    OffState.prototype.turnLightOff = function () {
        console.log("Light is already off -> take no action");
    };
    return OffState;
}());
exports["default"] = OffState;
