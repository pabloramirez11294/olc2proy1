import { Component } from '@angular/core';
import Ejecucion from './gramaticas/ejecucion';
import {  Error_ ,errores} from './Reportes/Errores';
import { Environment } from './Entornos/Environment';
localStorage.setItem('CONSOLA', '');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'olc2proy1';
  editor = `console.log(3);
  let a:number=1.99;
  let b:string="hola mundo";
  let c:boolean=true;
  if(1000 < 20){
    console.log(1); 
  }else if(500<100){
    console.log(2); 
  }else{
    console.log(3); 
  }`;
  consola = '';

  ejecutar() {
    const entorno = new Environment(null, 'global');
    try {
      const instrucciones = Ejecucion.parse(this.editor);

      for (const instruc of instrucciones) {
        try {          
          const actual = instruc.execute(entorno);
          this.setConsola();
          if (actual != null || actual != undefined) {
            errores.push(new Error_(actual.line,actual.column,'Semantico',actual.type + ' fuera de un ciclo',''));
          }         
        } catch (error) {
          //console.log(error)
          if(error.ambito!=null){
            error.ambito='global';
            errores.push(error);  
          }else
            console.log(error);
                    
        }
      }
    } catch (error) {
      //console.log(error)
      if(error.ambito!=null){
        error.ambito='';
        errores.push(error);  
      }else
        errores.push(new Error_(error.lineNumber, 0, 'Lexico', error.message, ''));
    }
    console.log('Tabla de Simbolos: ', entorno.getTablaSimbolos());
    console.log('Reporte errores:', errores);
  }

  setConsola() {
    this.consola = localStorage.getItem('CONSOLA');
  }

  limpiar(){
    if(localStorage.getItem('CONSOLA')==undefined){
      this.editor='';
      this.consola='';
      return null;
    }
    localStorage.setItem('CONSOLA',"");
    this.editor='';
    this.consola='';
  }
}
