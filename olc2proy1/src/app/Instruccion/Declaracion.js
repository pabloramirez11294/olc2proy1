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
exports.Declaracion = void 0;
var Instruction_js_1 = require("../Modelos/Instruction.js");
var Errores_js_1 = require("../Reportes/Errores.js");
var Declaracion = /** @class */ (function (_super) {
    __extends(Declaracion, _super);
    function Declaracion(id, tipo, exp, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.id = id;
        _this.tipo = tipo;
        _this.exp = exp;
        return _this;
    }
    Declaracion.prototype.execute = function (amb) {
        if (this.exp == undefined) {
            amb.guardar(this.id, undefined, this.tipo, this.line, this.column);
        }
        else if (this.tipo == undefined) {
            var valor = this.exp.execute(amb);
            amb.asignar(this.id, valor.value, valor.type, this.line, this.column);
        }
        else {
            var valor = this.exp.execute(amb);
            if (valor.type != this.tipo) {
                throw new Errores_js_1.Error_(this.line, this.column, 'Semantico', 'DECLARACION: no coincide el tipo con el valor, valor:' + valor.value + ", tipo: " + this.tipo, amb.getNombre());
            }
            amb.guardar(this.id, valor.value, this.tipo, this.line, this.column);
        }
    };
    return Declaracion;
}(Instruction_js_1.Instruction));
exports.Declaracion = Declaracion;
