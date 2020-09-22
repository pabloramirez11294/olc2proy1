import { Instruction } from "../Modelos/Instruction";
import { Environment } from "../Entornos/Environment";
import {Type} from "../Modelos/Retorno";
import { Expression } from '../Modelos/Expression';

export class Arreglo {
    public constante:boolean=false;
    constructor(private tipoArreglo:Type ,private arr : Array<Expression>){
   }

    public execute(amb: Environment) {
    }

}