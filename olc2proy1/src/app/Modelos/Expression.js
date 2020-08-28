"use strict";
exports.__esModule = true;
exports.Expression = void 0;
var Retorno_js_1 = require("./Retorno.js");
var Expression = /** @class */ (function () {
    function Expression(line, column) {
        this.line = line;
        this.column = column;
    }
    Expression.prototype.tipoDominante = function (tipo1, tipo2) {
        if (tipo1 == Retorno_js_1.Type.NULL || tipo2 == Retorno_js_1.Type.NULL)
            return Retorno_js_1.Type.NULL;
        else if (tipo1 == Retorno_js_1.Type.STRING || tipo2 == Retorno_js_1.Type.STRING)
            return Retorno_js_1.Type.STRING;
        else if (tipo1 == Retorno_js_1.Type.NUMBER || tipo2 == Retorno_js_1.Type.NUMBER)
            return Retorno_js_1.Type.NUMBER;
        return Retorno_js_1.Type.BOOLEAN;
    };
    return Expression;
}());
exports.Expression = Expression;
