import { Expression } from "../Modelos/Expression.js";
import { Retorno, Type } from "../Modelos/Retorno.js";

export class Literal extends Expression{
    
    constructor(private value : any, line : number, column: number, private type : number){
        super(line, column);
    }

    public execute() : Retorno{
        if(this.type == Type.NUMBER)
            return {value : Number(this.value), type : Type.NUMBER};
        else
            return {value : this.value, type : Type.STRING};
    }
}