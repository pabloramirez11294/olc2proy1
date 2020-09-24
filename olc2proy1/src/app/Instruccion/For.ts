import { Instruction } from "../Modelos/Instruction";
import { Expression } from "../Modelos/Expression";
import { Environment } from "../Entornos/Environment";
import { Type } from "../Modelos/Retorno";
import {Error_} from '../Reportes/Errores';
import {TipoEscape} from "../Instruccion/BreakContinue";
import {Declaracion} from "../Instruccion/Declaracion";
import { Instrucciones } from './Instrucciones';

export class For extends Instruction{

    constructor(private declaracion:Declaracion,private condicion : Expression,private Actualizacion:Expression, private code : Instrucciones, line : number, column : number){
        super(line, column);
    }

    public execute(amb : Environment) {
        //declaración
        const ambFor:Environment=new Environment(amb,amb.getNombre()+"_for");
        this.declaracion.execute(ambFor);        
        //condición
        let condicion = this.condicion.execute(ambFor);
        if(condicion.type != Type.BOOLEAN){
            throw new Error_(this.line, this.column, 'Semantico', 'La expresion no regresa un valor booleano: ' + condicion.value+", es de tipo: "+condicion.type ,ambFor.getNombre());
        }
        //for
        while(condicion.value){
            const code = this.code.execute(ambFor);
            if(code != null || code != undefined){
                if(code.type == TipoEscape.BREAK)
                    break;
                else if(code.type == TipoEscape.CONTINUE)
                    continue;
                else
                    return code;
            }
            this.Actualizacion.execute(ambFor);
            condicion = this.condicion.execute(ambFor);
            if(condicion.type != Type.BOOLEAN){
                throw new Error_(this.line, this.column, 'Semantico', 'La expresion no regresa un valor booleano: ' + condicion.value+", es de tipo: "+condicion.type ,ambFor.getNombre());
            }
        }

    }
    
}