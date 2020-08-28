import { Component } from '@angular/core';
//import Traduccion from './gramaticas/traduccion';
//import Ejecucion from './gramaticas/ejecucion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'olc2proy1';
  editor = "console.log(5+99+8+7+5);";
  consola = "";
  ejecutar(){
    try {
     /* const value = Ejecucion.parse(this.editor);
      for(const instr of value){
        try {
            console.log(instr);
            const actual = instr.execute();
            if(actual != null || actual != undefined){
               // errores.push(new Error_(actual.line, actual.column, 'Semantico', actual.type + ' fuera de un ciclo'));
            }
        } catch (error) {
            //errores.push(error);  
            console.log(error);
        }
    }*/
    } catch (error) {
      console.log(error);
      //alert("Aun no valido errores")
    }
  }
}
