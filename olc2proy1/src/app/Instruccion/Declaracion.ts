import { Expression } from "../Modelos/Expression.js";
import { Instruction } from "../Modelos/Instruction.js";
import { Environment } from "../Entornos/Environment.js";
import {Type} from "../Modelos/Retorno.js";
import {Error_} from '../Reportes/Errores.js';
export class Declaracion extends Instruction{


    constructor(private id: string,private tipo:Type ,private exp : Expression,
         line : number, column: number){
        super(line, column);
    }

    public execute(environment: Environment) {
        const valor = this.exp.execute(environment);
        //TODO colocar el ambito
        if(valor.type != this.tipo){
            throw new Error_(this.line, this.column, 'Semantico', 'DECLARACION: no coincide el tipo con el valor, valor:' + valor.value+", tipo: "+this.tipo ,"");        }
        environment.guardar(this.id, valor.value, this.tipo);
    }
}
