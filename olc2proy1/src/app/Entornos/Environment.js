"use strict";
exports.__esModule = true;
exports.Environment = exports.Simbolo = void 0;
var Simbolo = /** @class */ (function () {
    function Simbolo(valor, id, tipo) {
        this.valor = valor;
        this.id = id;
        this.tipo = tipo;
    }
    return Simbolo;
}());
exports.Simbolo = Simbolo;
var Environment = /** @class */ (function () {
    function Environment(anterior, nombre) {
        this.anterior = anterior;
        this.nombre = nombre;
        this.variables = new Map();
        this.nombre = nombre;
    }
    Environment.prototype.getNombre = function () {
        return this.nombre;
    };
    Environment.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
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
    Environment.prototype.getTablaSimbolos = function () {
        return this.variables;
    };
    return Environment;
}());
exports.Environment = Environment;
