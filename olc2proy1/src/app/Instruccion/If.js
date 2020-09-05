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
exports.If = void 0;
var Instruction_js_1 = require("../Modelos/Instruction.js");
var Retorno_js_1 = require("../Modelos/Retorno.js");
var If = /** @class */ (function (_super) {
    __extends(If, _super);
    function If(condicion, codeIF, codeElse, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.condicion = condicion;
        _this.codeIF = codeIF;
        _this.codeElse = codeElse;
        return _this;
    }
    If.prototype.execute = function (ent) {
        var _a;
        var condicion = this.condicion.execute(ent);
        if (condicion.type != Retorno_js_1.Type.BOOLEAN) {
            throw { error: "La expresion no regresa un valor booleano.", linea: this.line, columna: this.column };
        }
        if (condicion.value == true) {
            return this.codeIF.execute(ent);
        }
        else {
            return (_a = this.codeElse) === null || _a === void 0 ? void 0 : _a.execute(ent);
        }
    };
    return If;
}(Instruction_js_1.Instruction));
exports.If = If;
