import { Expression } from "../Modelos/Expression.js";
import { Retorno, Type } from "../Modelos/Retorno.js";
import { Environment } from "../Entornos/Environment.js";
export enum RelationalOption{
    MENOR,
    MAYOR,
    MENORIGUAL,
    MAYORIGUAL,
    IGUAL,
    NOIGUAL
}

export class Relacional extends Expression{
    constructor(private left: Expression, private right: Expression, private type : RelationalOption, line: number, column: number){
        super(line,column);
    }

    public execute(environment : Environment) : Retorno{
        const leftValue = this.left.execute(environment);
        const rightValue = this.right.execute(environment);
        let result : Retorno={value:null,type:null};
        this.mismoTipo(leftValue.type, rightValue.type);
        if(this.type == RelationalOption.MENOR){     
            result.value = leftValue.value < rightValue.value;         
            result.type = Type.BOOLEAN;
        }else if(this.type == RelationalOption.MAYOR){     
            result.value = leftValue.value > rightValue.value;         
            result.type = Type.BOOLEAN;
        }else if(this.type == RelationalOption.MENORIGUAL){     
            result.value = leftValue.value <= rightValue.value;         
            result.type = Type.BOOLEAN;
        }else if(this.type == RelationalOption.MAYORIGUAL){     
            result.value = leftValue.value >= rightValue.value;         
            result.type = Type.BOOLEAN;
        }else if(this.type == RelationalOption.IGUAL){     
            result.value = leftValue.value == rightValue.value;         
            result.type = Type.BOOLEAN;
        }else if(this.type == RelationalOption.NOIGUAL){     
            result.value = leftValue.value != rightValue.value;         
            result.type = Type.BOOLEAN;
        }
        return result;
    }
}