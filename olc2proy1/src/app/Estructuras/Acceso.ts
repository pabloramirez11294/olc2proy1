import { Instruction } from "../Modelos/Instruction";
import { Environment, Simbolo } from "../Entornos/Environment";
import { Expression } from '../Modelos/Expression';
import { Retorno } from '../Modelos/Retorno';
import {Error_} from '../Reportes/Errores';
export class Acceso extends Instruction{

    constructor(public id: string,private indice : Expression,private val:Expression,
        line : number, column: number){
       super(line, column);
   }

    public execute(amb: Environment) {
        let variable:Simbolo= amb.getVar(this.id);
        let arreglo:Array<Expression> =variable.valor;       
        if(arreglo==null || arreglo==undefined){
            throw new Error_(this.line,this.column, 'Semantico','Arreglo sin asignar ' + this.id,amb.getNombre());
        }
        const indi:Retorno = this.indice.execute(amb);
        if(indi==null || indi==undefined){
            throw new Error_(this.line,this.column, 'Semantico','error en el indice de: ' + this.id,amb.getNombre());
        }
        const valor:Retorno = this.val.execute(amb); 
        if(indi==null || indi==undefined){
            throw new Error_(this.line,this.column, 'Semantico','error al obtener el valor a asignar de: ' + this.id,amb.getNombre());
        }
        if(variable.tipoArreglo!=valor.type)
            throw new Error_(this.line, this.column, 'Semantico',
            'Asignacion arreglo: no coincide el tipo con el valor, valor:' + valor.value+", tipo: "+variable.tipoArreglo ,amb.getNombre());
    
        arreglo[indi.value]=valor.value;
     /*   for (let i=0;arreglo.length;i++) {
            if(arreglo[i]==undefined)
                arreglo[i]=null;
        }*/
    }

}