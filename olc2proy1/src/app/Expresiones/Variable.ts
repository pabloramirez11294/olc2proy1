import {Error_} from '../Reportes/Errores.js';
import { Expression } from "../Modelos/Expression.js";
import { Retorno } from "../Modelos/Retorno.js";
import { Environment } from "../Entornos/Environment.js";

export class Variable extends Expression{

    constructor(private id: string, linea : number, columna: number){
        super(linea,columna);
    }
    public execute(amb:Environment): Retorno{
        const id = amb.getVar(this.id);
        if(id == null)
            throw new Error_(this.line, this.column, 'Semantico', 'VARIABLE: no existe la variable:' + this.id,amb.getNombre());
        if(id.valor == undefined)
            throw new Error_(this.line, this.column, 'Semantico', 'VARIABLE: no tiene valor asignado:' + this.id,amb.getNombre());
        
        return {value: id.valor,type: id.tipo};
    }

}