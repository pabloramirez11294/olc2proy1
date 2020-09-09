 
%{
    const { ArithmeticOption,Aritmetico} = require('../Expresiones/Aritmetico');
    const {Relacional, RelationalOption} = require('../Expresiones/Relacional');
    const {Literal} = require('../Expresiones/Literal');
    const {Variable} = require('../Expresiones/Variable');
    const {Unario,OperadorOpcion} = require('../Expresiones/Unario');
    const {Console} = require('../Instruccion/Console');
    const {errores,Error_} = require('../Reportes/Errores');
    const { Type } = require("../Modelos/Retorno");
    const {If} = require('../Instruccion/If');
    const {Declaracion} = require('../Instruccion/Declaracion');
    const {Break,Continue,TipoEscape} = require('../Instruccion/BreakContinue');
    const {While} = require('../Instruccion/While');
    const {For} = require('../Instruccion/For');
    const {Instrucciones} = require('../Instruccion/Instrucciones');
    const {InstrucUnaria} = require('../Instruccion/InstrucUnaria');
    const {Funcion} = require('../Instruccion/Funcion');
    const {Simbolo} = require('../Entornos/Environment');
%}

%lex
%options case-sensitive
entero [0-9]+
number {entero}("."{entero})?
string  (\"[^"]*\")

%%
\s+                   /* skip whitespace */
"//".*										// comentario simple línea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]			// comentario multiple líneas
//valores
{number}              return 'NUMERO'
{string}             return 'CADENA'
//tipos de datos
"number"			  return 'NUMBER'
"string"			  return 'STRING'
"boolean"			  return 'BOOLEAN'
"true"                return 'TRUE'
"false"               return 'FALSE'
"void"                  return 'VOID'
"type"                  return 'TYPE'   
//palabras reservadas
"let"                  return 'LET'
"const"                 return 'CONST'
"console.log"           return 'CONSOLE'
//sentenicas de control y ciclos
"if"                    return 'IF'
"else"                  return 'ELSE'
"while"                 return 'WHILE'
"break"                 return 'BREAK'
"continue"              return 'CONTINUE'
"for"                   return 'FOR'
"function"              return 'FUNCTION'


"++"                    return '++'
"--"                    return '--'
"+"                   return '+'
"-"                   return '-'
"**"                    return '**'
"*"                   return '*'
"/"                   return '/'
"%"                     return '%'
">="                    return '>='
"<="                    return '<='
">"                     return '>'
"<"                     return '<'
"=="                    return '=='
"!="                    return '!='
"&&"                    return '&&'
"||"                    return '||'
"!"                     return '!'
"?"                     return '?'
":"                     return ':'
"="                     return '='  
"("                     return '('
")"                     return ')' 
"{"                     return '{'
"}"                     return '}' 
";"                   return ';'


([a-zA-Z_])[a-zA-Z0-9_ñÑ]*	return 'ID'
<<EOF>>		          return 'EOF'

/lex

%left '||'
%left '&&'
%left '==', '!='
%left '>=', '<=', '<', '>'
%left '+' '-'
%left '*' '/'
%left '**' '%'
//%left MENOS
%start Init

%%

Init    
    : Instrucciones EOF 
    {
        return $1;
    }
;

Instrucciones
    : Instrucciones Cont  
    {
        $1.push($2);
        $$ = $1;
    }
    | Cont{
        $$ = [$1];
    }
;


Cont
    : Instruc { $$ = $1; }
    | Funciones { $$ = $1; }
;

Funciones
        : 'FUNCTION' ID '(' Parametros ')' ':' Tipo InstruccionesSent
        {
            $$ = new Funcion($2,$4,$7,$8,@1.first_line, @1.first_column);
        }
        | 'FUNCTION' ID '(' ')' ':' Tipo InstruccionesSent  
        {
            $$ = new Funcion($2, [],$6,$7 , @1.first_line, @1.first_column);
        }
;

Parametros
        : Parametros ',' ID ':' Tipo 
        {
            $1.push(new Simbolo(undefined,$3,$5));
            $$ = $1;
        }
        | ID ':' Tipo 
        {
            $$ = [new Simbolo(undefined,$1,$3)];
        }
;

Instruc
        : 'CONSOLE' '(' Exp ')' ';'
        {
             $$ = new Console($3, @1.first_line, @1.first_column);
        }
        | Sentencia_if {
            $$ = $1;
        }
        | 'FOR' '(' Declaracion Exp ';' Actualizacion ')' InstruccionesSent
        {
            $$ = new For($3,$4,$6, $8,@1.first_line, @1.first_column);
        }
        | 'WHILE' '(' Exp ')' InstruccionesSent 
        {
            $$ = new While($3,$5, @1.first_line, @1.first_column);
        }
        | 'BREAK' ';' { $$ = new Break(@1.first_line, @1.first_column); }
        | 'CONTINUE' ';'  { $$ = new Continue(@1.first_line, @1.first_column); }
        | Declaracion {$$ = $1;}
        | Unario ';' {$$ = new InstrucUnaria($1,@1.first_line, @1.first_column);}
        | error 
        { 
            //console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); 
            throw new Error_(this._$.first_line , this._$.first_column, 'Sintáctico',yytext,'');
        }

;
//*********************SENTENCIAS DE CONTROL
Sentencia_if
            : 'IF' '(' Exp ')' InstruccionesSent Sentencia_else
            {
                $$ = new If($3, $5, $6, @1.first_line, @1.first_column);
            }
;

Sentencia_else
                : 'ELSE' Sentencia_if { $$ = $2;}
                | 'ELSE' InstruccionesSent { $$ = $2;}
                |  { $$ = null;}
;

InstruccionesSent
    : '{' Instrucciones '}' 
    {
        $$ = new Instrucciones($2, @1.first_line, @1.first_column);
    }
    | '{' '}' {
        $$ = new Instrucciones(new Array(), @1.first_line, @1.first_column);
    }
;
//*********************** CICLOS
Actualizacion
            : Unario { $$ = $1; }
            | ID '=' Exp ';'
            {
                $$ = new Declaracion($1,undefined,$3,true, @1.first_line, @1.first_column);
            }
;


//*********************** DECLARACION DE VARIABLES

Declaracion
            : 'LET' ID ':' Tipo '=' Exp ';'
            {
                $$ = new Declaracion($2,$4,$6,false, @1.first_line, @1.first_column);
            }
            | 'LET' ID ':' Tipo ';'
            {
                $$ = new Declaracion($2,$4,undefined,false, @1.first_line, @1.first_column);
            }
            | 'LET' ID  ';'
            {
                $$ = new Declaracion($2,undefined,undefined,false, @1.first_line, @1.first_column);
            }
            | 'LET' ID '=' Exp ';'
            {
                $$ = new Declaracion($2,undefined,$4,false, @1.first_line, @1.first_column);
            }
            | ID '=' Exp ';'
            {
                $$ = new Declaracion($1,undefined,$3,true, @1.first_line, @1.first_column);
            }
            | 'CONST' ID ':' Tipo '=' Exp ';' 
;


Tipo
    : 'NUMBER' { $$ = Type.NUMBER; }
    | 'STRING' { $$ = Type.STRING; }
    | 'BOOLEAN' { $$ = Type.BOOLEAN; }
    | 'VOID' { $$ = Type.VOID; }
;


Exp
    : Exp '+' Exp
    {
        $$ = new Aritmetico($1, $3, ArithmeticOption.SUMA, @1.first_line,@1.first_column);
    }       
    | Exp '-' Exp
    {
        $$ = new Aritmetico($1, $3, ArithmeticOption.RESTA, @1.first_line,@1.first_column);
    }
    | Exp '*' Exp
    { 
        $$ = new Aritmetico($1, $3, ArithmeticOption.MULT, @1.first_line,@1.first_column);
    }       
    | Exp '/' Exp
    {
        $$ = new Aritmetico($1, $3, ArithmeticOption.DIV, @1.first_line,@1.first_column);
    }            
    | Exp '>' Exp   
    {
        $$ = new Relacional($1, $3,RelationalOption.MAYOR, @1.first_line, @1.first_column);
    }
    | Exp '<' Exp   
    {
        $$ = new Relacional($1, $3,RelationalOption.MENOR, @1.first_line, @1.first_column);
    }
    | Exp '>=' Exp   
    {
        $$ = new Relacional($1, $3,RelationalOption.MAYORIGUAL, @1.first_line, @1.first_column);
    }
    | Exp '<=' Exp   
    {
        $$ = new Relacional($1, $3,RelationalOption.MENORIGUAL, @1.first_line, @1.first_column);
    }
    | Exp '==' Exp   
    {
        $$ = new Relacional($1, $3,RelationalOption.IGUAL, @1.first_line, @1.first_column);
    }
    | Exp '!=' Exp  
    {
        $$ = new Relacional($1, $3,RelationalOption.NOIGUAL, @1.first_line, @1.first_column);
    } 
    | '(' Exp ')'
    {
        $$ = $2;
    }
    | Unario { $$ = $1}
    | F
    {
        $$ = $1;
    }
;


F
    : NUMERO
    {
        $$ = new Literal($1, @1.first_line, @1.first_column, Type.NUMBER);
    }
    | CADENA
    {
        $$ = new Literal($1.replace(/\"/g,""), @1.first_line, @1.first_column, Type.STRING);
    }
    | TRUE
    {
         $$ = new Literal(true, @1.first_line, @1.first_column, Type.BOOLEAN);
    }
    | FALSE
    {
        $$ = new Literal(false, @1.first_line, @1.first_column, Type.BOOLEAN);
    }
    | ID
    {
        $$ = new Variable($1,@1.first_line, @1.first_column);
    }
    | ID '.' LlamadaTypes
;

Unario 
    : ID '++'
    {
        $$ = new Unario($1,OperadorOpcion.INCRE,@1.first_line, @1.first_column);
    }
    | ID '--'    
    {
        $$ = new Unario($1,OperadorOpcion.DECRE,@1.first_line, @1.first_column);
    }
    /*TODO terminar operador unario -
    |'-' Exp %prec MENOS	
    {
       // $$ = new Aritmetico(null, $2, ArithmeticOption.MINUS, @1.first_line,@1.first_column);
    }*/
;



