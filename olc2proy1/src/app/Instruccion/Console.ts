import { Instruction } from "../Modelos/Instruction.js";
import { Expression } from "../Modelos/Expression.js";
import { Environment } from "../Entornos/Environment.js";




export class Console extends Instruction{

    constructor(private value : Expression, line : number, column : number){
        super(line, column);
    }
    public execute(environment : Environment) {
        const value = this.value.execute(environment);
        console.log(value);
        this.setConsola(value);
    }

    setConsola(contenido:any){
        if(localStorage.getItem('CONSOLA')==undefined){
          return null;
        }
        localStorage.setItem('CONSOLA',localStorage.getItem('CONSOLA')+contenido.value+"\n");
      }
}