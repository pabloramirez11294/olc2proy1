import { Instruction } from "../Modelos/Instruction";
import { Expression } from "../Modelos/Expression";
import { Environment ,Simbolo} from "../Entornos/Environment";
import { txtConsola ,reporte} from '../Reportes/Consola';
import {Type} from '../Modelos/Retorno';
import { Arreglo } from '../Estructuras/Arreglo';
export class Graficarts extends Instruction{
    constructor(public value : Array<Expression>, line : number, column : number){
        super(line, column);
    }
    public execute(amb : Environment) {
        let tablaVar=amb.getTablaSimbolos();
        this.setTablaSimbolos(tablaVar);
    }

    setTablaSimbolos(simbolos:Map<string,Simbolo>):void{  
        for (var simbolo of simbolos.values()) {
          const s:Array<string>=new Array<string>(simbolo.id,simbolo.valor,simbolo.tipo.toString(),
                                                      simbolo.ambito,simbolo.linea,simbolo.columna);
            reporte.simbolos.push(s);
        }
      //  console.log(reporte.simbolos);
      }
    
}