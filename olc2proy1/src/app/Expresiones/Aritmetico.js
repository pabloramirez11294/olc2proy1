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
exports.Aritmetico = exports.ArithmeticOption = void 0;
var Expression_js_1 = require("../Modelos/Expression.js");
var Retorno_js_1 = require("../Modelos/Retorno.js");
var Errores_js_1 = require("../Reportes/Errores.js");
var ArithmeticOption;
(function (ArithmeticOption) {
    ArithmeticOption[ArithmeticOption["PLUS"] = 0] = "PLUS";
    ArithmeticOption[ArithmeticOption["MINUS"] = 1] = "MINUS";
    ArithmeticOption[ArithmeticOption["TIMES"] = 2] = "TIMES";
    ArithmeticOption[ArithmeticOption["DIV"] = 3] = "DIV";
})(ArithmeticOption = exports.ArithmeticOption || (exports.ArithmeticOption = {}));
var Aritmetico = /** @class */ (function (_super) {
    __extends(Aritmetico, _super);
    function Aritmetico(left, right, type, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.left = left;
        _this.right = right;
        _this.type = type;
        return _this;
    }
    Aritmetico.prototype.execute = function (environment) {
        var leftValue = this.left.execute(environment);
        var rightValue = this.right.execute(environment);
        var result;
        var tipoDominante = this.tipoDominante(leftValue.type, rightValue.type);
        if (this.type == ArithmeticOption.PLUS) {
            if (tipoDominante == Retorno_js_1.Type.STRING)
                result = { value: (leftValue.value.toString() + rightValue.value.toString()), type: Retorno_js_1.Type.NUMBER };
            else
                (tipoDominante == Retorno_js_1.Type.NUMBER);
            result = { value: (leftValue.value + rightValue.value), type: Retorno_js_1.Type.NUMBER };
        }
        else if (this.type == ArithmeticOption.MINUS) {
            if (tipoDominante == Retorno_js_1.Type.STRING)
                throw new Errores_js_1.Error_(this.line, this.column, 'Semantico', 'No se puede restar: ' + leftValue.type + ' con ' + rightValue.type, "");
            result = { value: (leftValue.value - rightValue.value), type: Retorno_js_1.Type.NUMBER };
        }
        else if (this.type == ArithmeticOption.TIMES) {
            result = { value: (leftValue.value * rightValue.value), type: Retorno_js_1.Type.NUMBER };
        }
        else {
            if (rightValue.value == 0) {
                //  throw new Error_(this.line, this.column, "Semantico", "No se puede dividir entre 0");
            }
            result = { value: (leftValue.value / rightValue.value), type: Retorno_js_1.Type.NUMBER };
        }
        return result;
    };
    return Aritmetico;
}(Expression_js_1.Expression));
exports.Aritmetico = Aritmetico;
