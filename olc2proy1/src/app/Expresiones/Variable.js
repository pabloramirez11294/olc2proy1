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
exports.Variable = void 0;
var Errores_js_1 = require("../Reportes/Errores.js");
var Expression_js_1 = require("../Modelos/Expression.js");
var Variable = /** @class */ (function (_super) {
    __extends(Variable, _super);
    function Variable(id, linea, columna) {
        var _this = _super.call(this, linea, columna) || this;
        _this.id = id;
        return _this;
    }
    Variable.prototype.execute = function (amb) {
        var id = amb.getVar(this.id);
        if (id == null)
            throw new Errores_js_1.Error_(this.line, this.column, 'Semantico', 'VARIABLE: no existe la variable:' + this.id, amb.getNombre());
        return { value: id.valor, type: id.tipo };
    };
    return Variable;
}(Expression_js_1.Expression));
exports.Variable = Variable;
