import { Instruction } from "../Modelos/Instruction";
import { Expression } from "../Modelos/Expression";
import { Environment } from "../Entornos/Environment";
import { Type } from "../Modelos/Retorno";
import {Error_} from '../Reportes/Errores';
import {TipoEscape} from "../Instruccion/BreakContinue";
import {Declaracion} from "../Instruccion/Declaracion";

export class For extends Instruction{

    constructor(private declaracion:Declaracion,private condicion : Expression,private Actualizacion:Expression, private code : Instruction, line : number, column : number){
        super(line, column);
    }

    public execute(amb : Environment) {
        //declaración
        this.declaracion.execute(amb);        
        //condición
        let condicion = this.condicion.execute(amb);
        if(condicion.type != Type.BOOLEAN){
            throw new Error_(this.line, this.column, 'Semantico', 'La expresion no regresa un valor booleano: ' + condicion.value+", es de tipo: "+condicion.type ,amb.getNombre());
        }
        //for
        while(condicion.value){
            const code = this.code.execute(amb);
            if(code != null || code != undefined){
                if(code.type == TipoEscape.BREAK)
                    break;
                else if(code.type == TipoEscape.CONTINUE)
                    continue;
            }
            this.Actualizacion.execute(amb);
            condicion = this.condicion.execute(amb);
            if(condicion.type != Type.BOOLEAN){
                throw new Error_(this.line, this.column, 'Semantico', 'La expresion no regresa un valor booleano: ' + condicion.value+", es de tipo: "+condicion.type ,amb.getNombre());
            }
        }

    }
    
}