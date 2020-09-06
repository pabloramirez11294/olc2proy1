import { Expression } from "../Modelos/Expression.js";
import { Retorno, Type } from "../Modelos/Retorno.js";
import { Environment } from "../Entornos/Environment.js";
import {Error_} from '../Reportes/Errores.js';
export enum ArithmeticOption{
    PLUS,
    MINUS,
    TIMES,
    DIV
}

export class Aritmetico extends Expression{

    constructor(private left: Expression, private right: Expression, private type : ArithmeticOption, line: number, column: number){
        super(line,column);
    }

    public execute(environment : Environment) : Retorno{
        const leftValue = this.left.execute(environment);
        const rightValue = this.right.execute(environment);
        let result : Retorno;
        const tipoDominante = this.tipoDominante(leftValue.type, rightValue.type);
        
        if(this.type == ArithmeticOption.PLUS){
            if(tipoDominante == Type.STRING)
                result = {value : (leftValue.value.toString() + rightValue.value.toString()), type : Type.STRING};
            else if(tipoDominante == Type.NUMBER)
                result = {value : (leftValue.value + rightValue.value), type : Type.NUMBER};
            else
                throw new Error_(this.line, this.column, "Semantico", "Error no se pueden sumar :"+leftValue.type+" y "+ rightValue.type,environment.getNombre());
            
            
        }
        else if(this.type == ArithmeticOption.MINUS){
            if(tipoDominante == Type.STRING)
                throw new Error_(this.line, this.column, 'Semantico', 'No se puede restar: ' + leftValue.type + ' con ' + rightValue.type,"");
            result = {value : (leftValue.value - rightValue.value), type : Type.NUMBER};
        }
        else if(this.type == ArithmeticOption.TIMES){
            result = {value : (leftValue.value * rightValue.value), type : Type.NUMBER};
        }
        else{
            if(rightValue.value == 0){
              //TODO  throw new Error_(this.line, this.column, "Semantico", "No se puede dividir entre 0");
            }
            result = {value : (leftValue.value / rightValue.value), type : Type.NUMBER};
        }
       
        return result;
    }
}