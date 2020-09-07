
import { Type } from "../Modelos/Retorno.js";
import {Error_} from '../Reportes/Errores.js';
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

    public guardar(id: string, valor: any, type: Type,linea:number,columna:number){
        if(this.variables.has(id))
            throw new Error_(linea, columna, 'Semantico',
            'DECLARACION: ya existe la variable: '+id ,this.getNombre());
    
        this.variables.set(id, new Simbolo(valor, id, type));
    }
    //para el tipo       nombVar = exp;
    public asignar(id: string, valor: any,type: Type,linea:number,columna:number){
        if(!this.variables.has(id))
            throw new Error_(linea, columna, 'Semantico','ASIGNACIÓN: no existe la variable:' + id,this.getNombre());
        
        const sim:Simbolo = this.getVar(id); 
        if(type!= sim.tipo)
            throw new Error_(linea, columna,  'Semantico',
                'ASIGNACIÓN: no coincide el tipo con el valor asginado, Tipovalor:' + type+", tipo: "+sim.tipo ,this.getNombre());
        sim.valor=valor;
        this.variables.set(id,sim);
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