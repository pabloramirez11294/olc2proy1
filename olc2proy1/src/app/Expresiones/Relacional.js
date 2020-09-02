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
exports.Relacional = exports.RelationalOption = void 0;
var Expression_js_1 = require("../Modelos/Expression.js");
var Retorno_js_1 = require("../Modelos/Retorno.js");
var RelationalOption;
(function (RelationalOption) {
    RelationalOption[RelationalOption["MENOR"] = 0] = "MENOR";
    RelationalOption[RelationalOption["MARYOR"] = 1] = "MARYOR";
    RelationalOption[RelationalOption["MENORIGUAL"] = 2] = "MENORIGUAL";
    RelationalOption[RelationalOption["MAYORIGUAL"] = 3] = "MAYORIGUAL";
    RelationalOption[RelationalOption["IGUAL"] = 4] = "IGUAL";
    RelationalOption[RelationalOption["NOIGUAL"] = 5] = "NOIGUAL";
})(RelationalOption = exports.RelationalOption || (exports.RelationalOption = {}));
var Relacional = /** @class */ (function (_super) {
    __extends(Relacional, _super);
    function Relacional(left, right, type, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.left = left;
        _this.right = right;
        _this.type = type;
        return _this;
    }
    Relacional.prototype.execute = function (environment) {
        var leftValue = this.left.execute(environment);
        var rightValue = this.right.execute(environment);
        var result;
        this.mismoTipo(leftValue.type, rightValue.type);
        if (this.type == RelationalOption.MENOR) {
            result.value = leftValue.value < rightValue.value;
            result.type = Retorno_js_1.Type.BOOLEAN;
        }
        return result;
    };
    return Relacional;
}(Expression_js_1.Expression));
exports.Relacional = Relacional;
