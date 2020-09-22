import { Instruction } from "../Modelos/Instruction";
import { Environment } from "../Entornos/Environment";
import {Type} from "../Modelos/Retorno";
import { Expression } from '../Modelos/Expression';

export class Arreglo extends Instruction{
    public constante:boolean=false;
    constructor(public id: string,private tipo:Type,private tipoArreglo:Type ,private arr : Array<Expression>,private asignacion:boolean,
        line : number, column: number){
       super(line, column);
   }

    public execute(amb: Environment) {
        amb.guardarArr(this.id,this.arr,this.tipo,this.tipoArreglo ,this.line,this.column,this.constante);
    }

}