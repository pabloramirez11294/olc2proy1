import { Component } from '@angular/core';
import Traduccion from './gramaticas/traduccion';
import Ejecucion from './gramaticas/ejecucion';
import {errores,Error_} from './Reportes/Errores';
import { Environment } from "./Entornos/Environment.js";
import { countColumn } from 'codemirror';
localStorage.setItem('CONSOLA','');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'olc2proy1';
  editor = `if(1000 < 20){
    console.log(1); 
  }else if(500<100){
    console.log(2); 
  }else{
    console.log(3); 
  }`;  
  consola='';
  
  ejecutar(){
    let errores=new Array<Error_>();
    const entorno = new Environment(null);
    try {
      const value = Ejecucion.parse(this.editor);     
      
      for(const instr of value){
        try {       
            const actual = instr.execute(entorno);
            this.setConsola();
            if(actual != null || actual != undefined){
                errores.push(new Error_(actual.line, actual.column, 'Semantico', actual.type + ' fuera de un ciclo',''));
            }
        } catch (error) {
          if(error.linea!=undefined){
            errores.push(error);
          }
        }
    }
    
    } catch (error) {
      errores.push(new Error_(error.lineNumber, 0,'Lexico', error.message,''));
    }
    console.log("Tabla de Simbolos: ",entorno.getTablaSimbolos());
    console.log("Reporte errores:",errores);
  }
  
  setConsola(){
    this.consola = localStorage.getItem('CONSOLA');
  }
}



