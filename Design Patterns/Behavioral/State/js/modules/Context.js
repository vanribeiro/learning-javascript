"use strict";
exports.__esModule = true;
var OffState_1 = require("./OffState");
var OnState_1 = require("./OnState");
var Context = /** @class */ (function () {
    function Context() {
        this.offState = new OffState_1["default"](this);
        this.onState = new OnState_1["default"](this);
        this.currentState = this.offState;
    }
    Context.prototype.turnOnLight = function () {
        this.currentState.turnLightOn();
    };
    Context.prototype.turnOffLight = function () {
        this.currentState.turnLightOff();
    };
    Context.prototype.setState = function (state) {
        this.currentState = state;
    };
    Context.prototype.getOnState = function () {
        return this.onState;
    };
    Context.prototype.getOffState = function () {
        return this.offState;
    };
    return Context;
}());
exports["default"] = Context;
