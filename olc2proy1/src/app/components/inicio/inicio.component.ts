import { Component, OnInit } from '@angular/core';
import Ejecucion from '../../gramaticas/ejecucion';
import {  Error_ ,errores} from '../../Reportes/Errores';
import { Environment, Simbolo } from '../../Entornos/Environment';
import {TipoEscape} from '../../Instruccion/BreakContinue';
import { Funcion } from '../../Instruccion/Funcion';
import { txtConsola,reporte } from '../../../environments/environment';
import { Stream } from 'stream';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'olc2proy1';
  simbolos:Array<Array<string>>;
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
    errores.length=0;
    const entorno = new Environment(null, 'global');
    try {
      const instrucciones = Ejecucion.parse(this.editor);
      for(const instruc of instrucciones){
        try {
            if(instruc instanceof Funcion)
            instruc.execute(entorno);
        } catch (error) {
            errores.push(error);  
        }
      }

      for (const instruc of instrucciones) {
        if(instruc instanceof Funcion)
            continue;
        try {          
          const actual = instruc.execute(entorno);
          this.setConsola();
          if ((actual != null || actual != undefined)&& (actual.type==TipoEscape.BREAK || actual.type==TipoEscape.CONTINUE)) {
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
      console.log(error)
      if(error.ambito!=null){
        error.ambito='';
        errores.push(error);  
      }else
        errores.push(new Error_(error.lineNumber, 0, 'Lexico', error.message, ''));
    }
    const tablaVar=entorno.getTablaSimbolos();
    reporte.simbolos=tablaVar;
    console.log('Tabla de Simbolos: ', tablaVar);
    this.setTablaSimbolos(tablaVar);
    console.log('Funciones: ', entorno.getFunciones());
    console.log('Reporte errores:', errores);
  }

  setConsola() {
    this.consola=txtConsola.consolatxt;
  }

  limpiar(){
    this.editor='';
    this.consola='';
    txtConsola.consolatxt="";
  }
  setTablaSimbolos(simbolos:Map<string,Simbolo>):void{
    this.simbolos=new Array<Array<string>>();
    for (var simbolo of simbolos.values()) {
      const s:Array<string>=new Array<string>(simbolo.id,simbolo.valor,simbolo.tipo.toString());
      this.simbolos.push(s);
    }
    console.log(this.simbolos);
  }

}
