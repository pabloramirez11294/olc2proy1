import { Instruction } from "../Modelos/Instruction.js";
import { Expression } from "../Modelos/Expression.js";
import { Environment } from "../Entornos/Environment.js";
import { Type } from "../Modelos/Retorno.js";
import {Error_} from '../Reportes/Errores.js';
export class If extends Instruction{

    constructor(private condicion : Expression, private codeIF : Instruction, private codeElse : Instruction | null,
        line : number, column : number){
        super(line, column);
    }

    public execute(ent : Environment) {
        const condicion = this.condicion.execute(ent);
        if(condicion.type != Type.BOOLEAN){
            throw {error: "La expresion no regresa un valor booleano.", linea: this.line, columna : this.column};
        }
        
        if(condicion.value == true){
            return this.codeIF.execute(ent);
        }else{
            return this.codeElse?.execute(ent);
        }
    }
}
