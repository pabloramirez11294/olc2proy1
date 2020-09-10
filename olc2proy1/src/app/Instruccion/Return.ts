import { Instruction } from "../Modelos/Instruction";
import { Expression } from "../Modelos/Expression";
import { Environment } from "../Entornos/Environment";
import { Retorno } from "../Modelos/Retorno";
export class Return extends Instruction{

    constructor(private exp:Expression,line : number, column : number){
        super(line, column);
    }

    public execute(env : Environment): Retorno {
        const resultado = this.exp.execute(env);
        return {value:resultado.value, type :resultado.type };
    }
}