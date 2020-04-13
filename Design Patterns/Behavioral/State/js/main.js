"use strict";
exports.__esModule = true;
var Client_1 = require("./modules/Client");
var body = document.querySelector('body');
body.onload = function main() {
    console.log("Oi!");
    var newClient = new Client_1["default"]();
};
