import { Instruction } from "../Modelos/Instruction.js";
import { Expression } from "../Modelos/Expression.js";
import { Environment } from "../Entornos/Environment.js";
import { Type } from "../Modelos/Retorno.js";
import {Error_} from '../Reportes/Errores.js';
export class If extends Instruction{

    constructor(private condition : Expression, private code : Instruction, private elsSt : Instruction | null,
        line : number, column : number){
        super(line, column);
    }

    public execute(env : Environment) {
        const condition = this.condition.execute(env);
        if(condition.type != Type.BOOLEAN){
            throw {error: "La condicion no es booleana", linea: this.line, columna : this.column};
        }
        
        if(condition.value == true){
            return this.code.execute(env);
        }
        else{
            return this.elsSt?.execute(env);
        }
    }
}
