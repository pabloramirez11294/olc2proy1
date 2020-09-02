"use strict";
exports.__esModule = true;
exports.Expression = void 0;
var Retorno_js_1 = require("./Retorno.js");
var Errores_js_1 = require("../Reportes/Errores.js");
var Expression = /** @class */ (function () {
    function Expression(line, column) {
        this.line = line;
        this.column = column;
    }
    Expression.prototype.mismoTipo = function (tipo1, tipo2) {
        if (tipo1 == Retorno_js_1.Type.STRING && tipo2 == Retorno_js_1.Type.STRING) {
            return Retorno_js_1.Type.STRING;
        }
        else if (tipo1 == Retorno_js_1.Type.NUMBER && tipo2 == Retorno_js_1.Type.NUMBER) {
            return Retorno_js_1.Type.NUMBER;
        }
        else {
            //TODO colocar el ambito
            throw new Errores_js_1.Error_(this.line, this.column, "Semantico", "Error los valores deben de ser del mismo tipo.", "");
        }
    };
    Expression.prototype.tipoDominante = function (tipo1, tipo2) {
        if (tipo1 == Retorno_js_1.Type.NULL || tipo2 == Retorno_js_1.Type.NULL)
            return Retorno_js_1.Type.NULL;
        else if (tipo1 == Retorno_js_1.Type.STRING || tipo2 == Retorno_js_1.Type.STRING)
            return Retorno_js_1.Type.STRING;
        else if (tipo1 == Retorno_js_1.Type.NUMBER && tipo2 == Retorno_js_1.Type.NUMBER)
            return Retorno_js_1.Type.NUMBER;
        else if ((tipo1 == Retorno_js_1.Type.BOOLEAN && tipo2 == Retorno_js_1.Type.STRING) || (tipo2 == Retorno_js_1.Type.BOOLEAN && tipo1 == Retorno_js_1.Type.STRING))
            return Retorno_js_1.Type.STRING;
        else if (tipo1 == Retorno_js_1.Type.BOOLEAN && tipo2 == Retorno_js_1.Type.BOOLEAN)
            return Retorno_js_1.Type.BOOLEAN;
        else {
            //TODO colocar el ambito
            throw new Errores_js_1.Error_(this.line, this.column, "Semantico", "Error en los tipos de datos", "");
        }
    };
    return Expression;
}());
exports.Expression = Expression;
