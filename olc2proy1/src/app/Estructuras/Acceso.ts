import { Instruction } from "../Modelos/Instruction";
import { Environment } from "../Entornos/Environment";
import { Expression } from '../Modelos/Expression';
import { Retorno } from '../Modelos/Retorno';

export class Acceso extends Instruction{

    constructor(public id: string,private indices : Array<Expression>,private val:Expression,private asignacion:boolean,
        line : number, column: number){
       super(line, column);
   }

    public execute(amb: Environment) {
        let arreglo:Array<any> = amb.getVar(this.id).valor;

        
        
        
        const indi:Retorno = this.indices[this.indices.length-1].execute(amb);
        const valor:Retorno = this.val.execute(amb); 
        arreglo[0][indi.value]=valor.value;
    }

}