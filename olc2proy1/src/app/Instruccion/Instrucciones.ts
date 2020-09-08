import { Instruction } from "../Modelos/Instruction";
import { Environment } from "../Entornos/Environment";
import { errores } from "../Reportes/Errores";
export class Instrucciones extends Instruction{

    constructor(private code : Array<Instruction>,private nombre:string ,line : number, column : number){
        super(line, column);
    }

    public execute(env : Environment) {
        const newEnv = new Environment(env,this.nombre);
        for(const instr of this.code){
            const i:any=instr;
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
