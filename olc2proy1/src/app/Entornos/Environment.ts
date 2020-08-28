
import { Type } from "../Modelos/Retorno.js";

export class Environment{
    
    private variables : any;
    
    constructor(public anterior : Environment | null){
        this.variables = null;
    }

    
}