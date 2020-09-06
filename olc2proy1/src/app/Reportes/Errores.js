"use strict";
exports.__esModule = true;
exports.errores = exports.Error_ = void 0;
var Error_ = /** @class */ (function () {
    function Error_(linea, columna, tipo, descripcion, ambito) {
        this.linea = linea;
        this.columna = columna;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.ambito = ambito;
    }
    Error_.prototype.execute = function () {
        throw new Error_(this.linea, this.columna, this.tipo, this.descripcion, this.ambito);
    };
    return Error_;
}());
exports.Error_ = Error_;
exports.errores = new Array();
