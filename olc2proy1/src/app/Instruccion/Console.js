"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Console = void 0;
var Instruction_js_1 = require("../Modelos/Instruction.js");
var Console = /** @class */ (function (_super) {
    __extends(Console, _super);
    function Console(value, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.value = value;
        return _this;
    }
    Console.prototype.execute = function (environment) {
        var value = this.value.execute();
        console.log(value);
    };
    return Console;
}(Instruction_js_1.Instruction));
exports.Console = Console;
