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
exports.Literal = void 0;
var Expression_js_1 = require("../Modelos/Expression.js");
var Retorno_js_1 = require("../Modelos/Retorno.js");
var Literal = /** @class */ (function (_super) {
    __extends(Literal, _super);
    function Literal(value, line, column, type) {
        var _this = _super.call(this, line, column) || this;
        _this.value = value;
        _this.type = type;
        return _this;
    }
    Literal.prototype.execute = function () {
        if (this.type == Retorno_js_1.Type.NUMBER)
            return { value: Number(this.value), type: Retorno_js_1.Type.NUMBER };
        else
            return { value: this.value, type: Retorno_js_1.Type.STRING };
    };
    return Literal;
}(Expression_js_1.Expression));
exports.Literal = Literal;
