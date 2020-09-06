
import { Type } from "../Modelos/Retorno.js";
export class Simbolo{
    public valor :any;
    public id : string;
    public tipo : Type;

    constructor(valor: any, id: string, tipo: Type){
        this.valor = valor;
        this.id = id;
        this.tipo = tipo;
    }
}
export class Environment{
    
    private variables : Map<string, Simbolo>;
    
    constructor(public anterior : Environment | null,private nombre:string){
        this.variables = new Map();        
        this.nombre = nombre;
    }

    public getNombre():string{
        return this.nombre;
    }
    public setNombre(nombre:string){
        this.nombre=nombre;
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

    public getTablaSimbolos():Map<string, Simbolo>{
        return this.variables;
    }
    
}