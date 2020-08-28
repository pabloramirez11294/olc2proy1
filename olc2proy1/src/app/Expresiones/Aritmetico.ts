import { Expression } from "../Modelos/Expression.js";
import { Retorno, Type } from "../Modelos/Retorno.js";

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

    public execute() : Retorno{
        const leftValue = this.left.execute();
        const rightValue = this.right.execute();
        let result : Retorno;
        const tipoDominante = this.tipoDominante(leftValue.type, rightValue.type);
        
        if(this.type == ArithmeticOption.PLUS){
            if(tipoDominante == Type.STRING)
                result = {value : (leftValue.value.toString() + rightValue.value.toString()), type : Type.NUMBER};
            else(tipoDominante == Type.NUMBER)
                result = {value : (leftValue.value + rightValue.value), type : Type.NUMBER};
            
        }
        else if(this.type == ArithmeticOption.MINUS){
            if(tipoDominante == Type.STRING)
            //    throw new Error_(this.line, this.column, 'Semantico', 'No se puede operar: ' + leftValue.type + ' _ ' + rightValue.type);
            result = {value : (leftValue.value - rightValue.value), type : Type.NUMBER};
        }
        else if(this.type == ArithmeticOption.TIMES){
            result = {value : (leftValue.value * rightValue.value), type : Type.NUMBER};
        }
        else{
            if(rightValue.value == 0){
              //  throw new Error_(this.line, this.column, "Semantico", "No se puede dividir entre 0");
            }
            result = {value : (leftValue.value / rightValue.value), type : Type.NUMBER};
        }
       // console.log("num1: "+result.value);
        return result;
    }
}