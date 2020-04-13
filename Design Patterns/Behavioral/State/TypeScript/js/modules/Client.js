"use strict";
exports.__esModule = true;
var Context_1 = require("./Context");
var Client = /** @class */ (function () {
    function Client() {
        this.context = new Context_1["default"]();
        this.context.turnOnLight();
        this.context.turnOnLight();
        this.context.turnOffLight();
        this.context.turnOffLight();
    }
    return Client;
}());
exports["default"] = Client;
