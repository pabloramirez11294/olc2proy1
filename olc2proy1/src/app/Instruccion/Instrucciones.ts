import { Instruction } from "../Modelos/Instruction";
import { Environment } from "../Entornos/Environment";
import { errores } from "../Reportes/Errores";
import { Type } from '../Modelos/Retorno';
export class Instrucciones extends Instruction{

    constructor(public code : Array<Instruction> ,line : number, column : number){
        super(line, column);
    }

    public execute(env : Environment) {
        const newEnv = new Environment(env,env.getNombre());
        for(const instr of this.code){
            try {
                const element = instr.execute(newEnv);
                if(element != undefined || element != null)
                    return element;        
            } catch (error) {
                errores.push(error);
            }
        }
    }
}
