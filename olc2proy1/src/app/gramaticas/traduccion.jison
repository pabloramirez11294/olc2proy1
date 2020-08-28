 
%{
    const { ArithmeticOption,Aritmetico} = require('../Expresiones/Aritmetico.js');
    const {Literal} = require('../Expresiones/Literal.js');
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
"-"                   return '-'
"+"                   return '+'
"**"                    return '**'
"*"                   return '*'
"/"                   return '/'
"%"                     return '%'
"++"                    return '++'
"--"                    return '--'
">"                     return '>'
"<"                     return '<'
">="                    return '>='
"<="                    return '<='
"=="                    return '=='
"!="                    return '!='
"&&"                    return '&&'
"||"                    return '||'
"!"                     return '!'
"?"                     return '?'
":"                     return ':'
"="                     return '='  

";"                   return ';'

"("                   return '('
")"                   return ')' 
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
        : Exp {
        $$ = $1;
    }
        | error { console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); }

;


Exp
    : Exp '+' Exp
    {
        $$ = new Aritmetico($1, $3, ArithmeticOption.PLUS, @1.first_line,@1.first_column);
    }
    | NUMERO{
        $$ = new Literal($1, @1.first_line, @1.first_column, 1);
    }

;




