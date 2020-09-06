 
%{
    const { ArithmeticOption,Aritmetico} = require('../Expresiones/Aritmetico.js');
    const {Relacional, RelationalOption} = require('../Expresiones/Relacional.js');
    const {Literal} = require('../Expresiones/Literal.js');
    const {Variable} = require('../Expresiones/Variable.js');
    const {Console} = require('../Instruccion/Console.js');
    const {errores,Error_} = require('../Reportes/Errores.js');
    const { Type } = require("../Modelos/Retorno.js");
    const {If} = require('../Instruccion/If.js');
    const {Declaracion} = require('../Instruccion/Declaracion.js');
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
//sentenicas de control
"if"                    return 'IF'
"else"                  return 'ELSE'



"+"                   return '+'
"-"                   return '-'
"**"                    return '**'
"*"                   return '*'
"/"                   return '/'
"%"                     return '%'
"++"                    return '++'
"--"                    return '--'
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
    : Cont EOF 
    {
        return $1;
    }
;

Cont
    : Cont Instruc  
    {
        $1.push($2);
        $$ = $1;
    }
    | Instruc{
        $$ = [$1];
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
        | Declaracion {$$ = $1;}
        | error 
        { 
            //console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); 
            $$ =new Error_(this._$.first_line , this._$.first_column, 'Sintáctico',yytext,'');
        }

;
//*********************SENTENCIAS DE CONTROL
Sentencia_if
            : 'IF' '(' Exp ')' Instrucciones Sentencia_else
            {
                $$ = new If($3, $5, $6, @1.first_line, @1.first_column);
            }
;

Sentencia_else
                : 'ELSE' Sentencia_if { $$ = $2;}
                | 'ELSE' Instrucciones { $$ = $2;}
                |  { $$ = null;}
;

Instrucciones
    : '{' Instruc '}' {$$ = $2;}
    | '{' '}' { $$ = null;}
;


//*********************** DECLARACION DE VARIABLES

Declaracion
            : 'LET' ID ':' Tipo '=' Exp ';'
            {
                $$ = new Declaracion($2,$4,$6, @1.first_line, @1.first_column);
            }
            | 'LET' ID ':' Tipo ';'
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
        $$ = new Aritmetico($1, $3, ArithmeticOption.PLUS, @1.first_line,@1.first_column);
    }       
    | Exp '-' Exp
    {
        $$ = new Aritmetico($1, $3, ArithmeticOption.MINUS, @1.first_line,@1.first_column);
    }
    | Exp '*' Exp
    { 
        $$ = new Aritmetico($1, $3, ArithmeticOption.TIMES, @1.first_line,@1.first_column);
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
    | ID '++'
    | ID '--'
    | ID '.' LlamadaTypes
    /*TODO terminar operador unario -
    |'-' Exp %prec MENOS	
    {
       // $$ = new Aritmetico(null, $2, ArithmeticOption.MINUS, @1.first_line,@1.first_column);
    }*/
;




