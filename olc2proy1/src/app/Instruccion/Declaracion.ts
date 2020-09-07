import { Expression } from "../Modelos/Expression";
import { Instruction } from "../Modelos/Instruction";
import { Environment, Simbolo } from "../Entornos/Environment";
import {Type} from "../Modelos/Retorno";
import {Error_} from '../Reportes/Errores';
export class Declaracion extends Instruction{


    constructor(private id: string,private tipo:Type ,private exp : Expression,
         line : number, column: number){
        super(line, column);
    }

    public execute(amb: Environment) {
        if(this.exp == undefined){
            amb.guardar(this.id,undefined,this.tipo ,this.line,this.column);
        }else if(this.tipo==undefined){
            const valor = this.exp.execute(amb);                         
            amb.asignar(this.id ,valor.value,valor.type,this.line,this.column);
        }else{
            const valor = this.exp.execute(amb);
            if(valor.type != this.tipo){
                throw new Error_(this.line, this.column, 'Semantico',
                'DECLARACION: no coincide el tipo con el valor, valor:' + valor.value+", tipo: "+this.tipo ,amb.getNombre());
            }
            amb.guardar(this.id, valor.value, this.tipo,this.line,this.column);
        }

    }
}
