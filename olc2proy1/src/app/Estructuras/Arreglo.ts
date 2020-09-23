import { Instruction } from "../Modelos/Instruction";
import { Environment } from "../Entornos/Environment";
import {Type} from "../Modelos/Retorno";
import { Expression } from '../Modelos/Expression';

export class Arreglo {
    constructor(public tipoArreglo:Type ,public arr : Array<any>){
   }

    public getVal(indice:number):Arreglo {
        return this.arr[indice];
    }
    public setVal(indice:number,val:any):void {
        this.arr[indice]=val;
    }

    
    public toString():string{
        let txt='[';
        for(var t of this.arr){
            txt+=t.toString()+',';
        }
        return txt.slice(0,txt.length-1)+']\n';
    }

    public length():number{
        return this.arr.length;
    }

}