import {Error_} from '../Reportes/Errores';
import { Expression } from "../Modelos/Expression";
import { Retorno ,Type} from "../Modelos/Retorno";
import { Environment } from "../Entornos/Environment";
import { Arreglo } from './Arreglo';

export class Length extends Expression{

    constructor(private id: Expression, linea : number, columna: number){
        super(linea,columna);
    }
    public execute(amb:Environment): Retorno{
        //TODO validadciones
        const res:Arreglo = this.id.execute(amb).value;
        return {value: res.length(),type: Type.NUMBER};
    }

}