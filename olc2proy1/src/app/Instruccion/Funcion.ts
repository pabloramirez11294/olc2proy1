import { Instruction } from "../Modelos/Instruction";
import { Instrucciones } from "./Instrucciones";
import { Environment } from "../Entornos/Environment";
import {Type} from "../Modelos/Retorno";
export class Funcion extends Instruction{

    constructor(private id: string, public parametros : Array<string>, private tipo: Type,
                    public instrucciones: Instrucciones, line : number, column : number){
        super(line, column);
    }

    public execute(environment : Environment) {
        environment.guardarFuncion(this.id, this);
    }
}
