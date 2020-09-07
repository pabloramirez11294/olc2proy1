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
exports.Unario = exports.OperadorOpcion = void 0;
var Expression_js_1 = require("../Modelos/Expression.js");
var Retorno_js_1 = require("../Modelos/Retorno.js");
var Errores_js_1 = require("../Reportes/Errores.js");
var OperadorOpcion;
(function (OperadorOpcion) {
    OperadorOpcion[OperadorOpcion["INCRE"] = 0] = "INCRE";
    OperadorOpcion[OperadorOpcion["DECRE"] = 1] = "DECRE";
    OperadorOpcion[OperadorOpcion["NEGACION"] = 2] = "NEGACION";
})(OperadorOpcion = exports.OperadorOpcion || (exports.OperadorOpcion = {}));
var Unario = /** @class */ (function (_super) {
    __extends(Unario, _super);
    function Unario(id, type, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.id = id;
        _this.type = type;
        return _this;
    }
    Unario.prototype.execute = function (amb) {
        var id = amb.getVar(this.id);
        var result;
        if (id == null)
            throw new Errores_js_1.Error_(this.line, this.column, 'Semantico', 'VARIABLE: no existe la variable:\'' + this.id + "'", amb.getNombre());
        if (id.tipo != Retorno_js_1.Type.NUMBER)
            throw new Errores_js_1.Error_(this.line, this.column, "Semantico", "Para una opración unaria se necesita que: \'" + this.id + "' sea Number.", amb.getNombre());
        if (OperadorOpcion.INCRE == this.type) {
            result = { value: id.valor++, type: id.tipo };
        }
        else if (OperadorOpcion.DECRE == this.type) {
            result = { value: id.valor--, type: id.tipo };
        }
        return result;
    };
    return Unario;
}(Expression_js_1.Expression));
exports.Unario = Unario;
