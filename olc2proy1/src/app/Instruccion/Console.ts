import { Instruction } from "../Modelos/Instruction";
import { Expression } from "../Modelos/Expression";
import { Environment } from "../Entornos/Environment";
import { txtConsola } from '../../environments/environment';

export class Console extends Instruction{

    constructor(public value : Expression, line : number, column : number){
        super(line, column);
    }
    public execute(environment : Environment) {
        const value = this.value.execute(environment);
        console.log(value);
        this.setConsola(value);
    }

    setConsola(contenido:any){
        txtConsola.consolatxt+=contenido.value+"\n";
      }
}