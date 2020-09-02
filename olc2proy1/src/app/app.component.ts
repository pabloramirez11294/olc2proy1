import { Component } from '@angular/core';
import Traduccion from './gramaticas/traduccion';
import Ejecucion from './gramaticas/ejecucion';
import {errores,Error_} from './Reportes/Errores';
import { Environment } from "./Entornos/Environment.js";
localStorage.setItem('CONSOLA','');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'olc2proy1';
  editor = "console.log(5+99+8+7+5);";  
  consola='';
  
  ejecutar(){
    let errores=new Array<Error_>();
    try {
      const value = Ejecucion.parse(this.editor);
      const entorno = new Environment(null);
      
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
    console.log("Reporte errores:",errores);
  }
  
  setConsola(){
    this.consola = localStorage.getItem('CONSOLA');
  }
}



