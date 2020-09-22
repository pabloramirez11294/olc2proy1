import { Instruction } from "../Modelos/Instruction";
import { Environment } from "../Entornos/Environment";
import {Type} from "../Modelos/Retorno";
import { Expression } from '../Modelos/Expression';

export class Arreglo {
    constructor(public tipoArreglo:Type ,public arr : Array<Arreglo>){
   }

    public getVal(indice:number):Arreglo {
        return this.arr[indice];
    }
    public setVal(indice:number,val:any):void {
        this.arr[indice]=val;
    }

}