
import { Type } from "../Modelos/Retorno.js";
export class Simbolo{
    public valor :any;
    public id : string;
    public type : Type;

    constructor(valor: any, id: string, type: Type){
        this.valor = valor;
        this.id = id;
        this.type = type;
    }
}
export class Environment{
    
    private variables : Map<string, Simbolo>;
    
    constructor(public anterior : Environment | null){
        this.variables = new Map();
    }

    public guardar(id: string, valor: any, type: Type){
        this.variables.set(id, new Simbolo(valor, id, type));
    }
    
    public getVar(id: string) : Simbolo | undefined | null{
        let env : Environment | null = this;
        while(env != null){
            if(env.variables.has(id)){
                return env.variables.get(id);
            }
            env = env.anterior;
        }
        return null;
    }   

    
}