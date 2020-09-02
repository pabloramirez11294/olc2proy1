"use strict";
exports.__esModule = true;
exports.Environment = exports.Simbolo = void 0;
var Simbolo = /** @class */ (function () {
    function Simbolo(valor, id, type) {
        this.valor = valor;
        this.id = id;
        this.type = type;
    }
    return Simbolo;
}());
exports.Simbolo = Simbolo;
var Environment = /** @class */ (function () {
    function Environment(anterior) {
        this.anterior = anterior;
        this.variables = new Map();
    }
    Environment.prototype.guardar = function (id, valor, type) {
        this.variables.set(id, new Simbolo(valor, id, type));
    };
    Environment.prototype.getVar = function (id) {
        var env = this;
        while (env != null) {
            if (env.variables.has(id)) {
                return env.variables.get(id);
            }
            env = env.anterior;
        }
        return null;
    };
    return Environment;
}());
exports.Environment = Environment;
