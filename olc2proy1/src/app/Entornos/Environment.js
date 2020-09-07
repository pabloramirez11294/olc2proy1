"use strict";
exports.__esModule = true;
exports.Environment = exports.Simbolo = void 0;
var Errores_js_1 = require("../Reportes/Errores.js");
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
    Environment.prototype.guardar = function (id, valor, type, linea, columna) {
        if (this.variables.has(id))
            throw new Errores_js_1.Error_(linea, columna, 'Semantico', 'DECLARACION: ya existe la variable: ' + id, this.getNombre());
        this.variables.set(id, new Simbolo(valor, id, type));
    };
    //para el tipo       nombVar = exp;
    Environment.prototype.asignar = function (id, valor, type, linea, columna) {
        if (!this.variables.has(id))
            throw new Errores_js_1.Error_(linea, columna, 'Semantico', 'ASIGNACIÓN: no existe la variable:' + id, this.getNombre());
        var sim = this.getVar(id);
        if (type != sim.tipo)
            throw new Errores_js_1.Error_(linea, columna, 'Semantico', 'ASIGNACIÓN: no coincide el tipo con el valor asginado, Tipovalor:' + type + ", tipo: " + sim.tipo, this.getNombre());
        sim.valor = valor;
        this.variables.set(id, sim);
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
