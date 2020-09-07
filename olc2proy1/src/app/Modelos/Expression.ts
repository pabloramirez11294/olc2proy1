import { Retorno, Type } from "./Retorno";
import { Environment } from "../Entornos/Environment";
import {errores,Error_} from '../Reportes/Errores';
export abstract class Expression {

    public line: number;
    public column: number;

    constructor(line: number, column: number) {
        this.line = line;
        this.column = column;
    }

    public abstract execute(environment : Environment) : Retorno;


    public mismoTipo(tipo1 : Type, tipo2 : Type){
        if(tipo1 == Type.STRING && tipo2 == Type.STRING){
            return Type.STRING;
        }else if(tipo1 == Type.NUMBER && tipo2 == Type.NUMBER){
            return Type.NUMBER;
        }else{
            //TODO colocar el ambito
            throw new Error_(this.line, this.column, "Semantico", "Error los valores deben de ser del mismo tipo.","");
        }
    }

    public tipoDominante(tipo1 : number, tipo2 : number) : Type{
        
        if(tipo1 == Type.NULL || tipo2 == Type.NULL)
            return Type.NULL;
        else if(tipo1 == Type.STRING || tipo2 == Type.STRING)
            return Type.STRING;
        else if(tipo1 == Type.NUMBER && tipo2 == Type.NUMBER)
            return Type.NUMBER;
        else if((tipo1 == Type.BOOLEAN && tipo2 == Type.STRING) || (tipo2 == Type.BOOLEAN && tipo1 == Type.STRING))
            return Type.STRING;
        else if(tipo1 == Type.BOOLEAN && tipo2 == Type.BOOLEAN)
            return Type.BOOLEAN;
        else{
            //TODO colocar el ambito
            throw new Error_(this.line, this.column, "Semantico", "Error en los tipos de datos","");
        }
            
            
    }

}

