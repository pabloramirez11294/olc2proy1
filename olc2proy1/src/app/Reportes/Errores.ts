import { Environment } from "../Entornos/Environment.js";
export class Error_{
    
    constructor(private linea : number, private columna: number, private tipo : string, 
        private descripcion : string, private ambito: string){
            
    }
    public execute(environment : Environment) {
        throw new Error_(this.linea , this.columna, this.tipo,this.descripcion,this.ambito);
    }
}

export let errores : Array<Error_> = new Array();

