/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var ejecucion = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,7],$V1=[1,4],$V2=[1,8],$V3=[1,9],$V4=[1,10],$V5=[1,11],$V6=[2,5,7,14,20,21,25],$V7=[2,5,7,14,19,20,21,25],$V8=[1,20],$V9=[1,26],$Va=[1,22],$Vb=[1,23],$Vc=[1,24],$Vd=[1,25],$Ve=[1,32],$Vf=[1,33],$Vg=[1,34],$Vh=[1,35],$Vi=[1,36],$Vj=[1,37],$Vk=[1,38],$Vl=[1,39],$Vm=[1,40],$Vn=[1,41],$Vo=[10,11,30,31,32,33,34,35,36,37,38,39],$Vp=[1,48],$Vq=[1,49],$Vr=[1,50],$Vs=[1,51],$Vt=[1,68],$Vu=[11,24],$Vv=[10,11,30,31,34,35,36,37,38,39],$Vw=[10,11,34,35,36,37,38,39],$Vx=[10,11,38,39],$Vy=[2,5,7,14,17,19,20,21,25];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"Init":3,"Cont":4,"EOF":5,"Instruc":6,"CONSOLE":7,"(":8,"Exp":9,")":10,";":11,"Sentencia_if":12,"Declaracion":13,"IF":14,"Instrucciones":15,"Sentencia_else":16,"ELSE":17,"{":18,"}":19,"LET":20,"ID":21,":":22,"Tipo":23,"=":24,"CONST":25,"NUMBER":26,"STRING":27,"BOOLEAN":28,"VOID":29,"+":30,"-":31,"*":32,"/":33,">":34,"<":35,">=":36,"<=":37,"==":38,"!=":39,"F":40,"NUMERO":41,"CADENA":42,"TRUE":43,"FALSE":44,"++":45,"--":46,".":47,"LlamadaTypes":48,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"CONSOLE",8:"(",10:")",11:";",14:"IF",17:"ELSE",18:"{",19:"}",20:"LET",21:"ID",22:":",24:"=",25:"CONST",26:"NUMBER",27:"STRING",28:"BOOLEAN",29:"VOID",30:"+",31:"-",32:"*",33:"/",34:">",35:"<",36:">=",37:"<=",38:"==",39:"!=",41:"NUMERO",42:"CADENA",43:"TRUE",44:"FALSE",45:"++",46:"--",47:".",48:"LlamadaTypes"},
productions_: [0,[3,2],[4,2],[4,1],[6,5],[6,1],[6,1],[6,1],[12,6],[16,2],[16,2],[16,0],[15,3],[15,2],[13,7],[13,5],[13,4],[13,7],[23,1],[23,1],[23,1],[23,1],[9,3],[9,3],[9,3],[9,3],[9,3],[9,3],[9,3],[9,3],[9,3],[9,3],[9,3],[9,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,2],[40,2],[40,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

        return $$[$0-1];
    
break;
case 2:

        $$[$0-1].push($$[$0]);
        this.$ = $$[$0-1];
    
break;
case 3:

        this.$ = [$$[$0]];
    
break;
case 4:

             this.$ = new Console($$[$0-2], _$[$0-4].first_line, _$[$0-4].first_column);
        
break;
case 5:

            this.$ = $$[$0];
        
break;
case 6:
this.$ = $$[$0];
break;
case 7:
 
            //console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); 
            this.$ =new Error_(this._$.first_line , this._$.first_column, 'Sintáctico',yytext,'');
        
break;
case 8:

                this.$ = new If($$[$0-3], $$[$0-1], $$[$0], _$[$0-5].first_line, _$[$0-5].first_column);
            
break;
case 9: case 10:
 this.$ = $$[$0];
break;
case 11: case 13:
 this.$ = null;
break;
case 12:
this.$ = $$[$0-1];
break;
case 14:

                this.$ = new Declaracion($$[$0-5],$$[$0-3],$$[$0-1], _$[$0-6].first_line, _$[$0-6].first_column);
            
break;
case 15:

                this.$ = new Declaracion($$[$0-3],$$[$0-1],undefined, _$[$0-4].first_line, _$[$0-4].first_column);
            
break;
case 16:

                this.$ = new Declaracion($$[$0-3],undefined,$$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column);
            
break;
case 18:
 this.$ = Type.NUMBER; 
break;
case 19:
 this.$ = Type.STRING; 
break;
case 20:
 this.$ = Type.BOOLEAN; 
break;
case 21:
 this.$ = Type.VOID; 
break;
case 22:

        this.$ = new Aritmetico($$[$0-2], $$[$0], ArithmeticOption.SUMA, _$[$0-2].first_line,_$[$0-2].first_column);
    
break;
case 23:

        this.$ = new Aritmetico($$[$0-2], $$[$0], ArithmeticOption.RESTA, _$[$0-2].first_line,_$[$0-2].first_column);
    
break;
case 24:
 
        this.$ = new Aritmetico($$[$0-2], $$[$0], ArithmeticOption.MULT, _$[$0-2].first_line,_$[$0-2].first_column);
    
break;
case 25:

        this.$ = new Aritmetico($$[$0-2], $$[$0], ArithmeticOption.DIV, _$[$0-2].first_line,_$[$0-2].first_column);
    
break;
case 26:

        this.$ = new Relacional($$[$0-2], $$[$0],RelationalOption.MAYOR, _$[$0-2].first_line, _$[$0-2].first_column);
    
break;
case 27:

        this.$ = new Relacional($$[$0-2], $$[$0],RelationalOption.MENOR, _$[$0-2].first_line, _$[$0-2].first_column);
    
break;
case 28:

        this.$ = new Relacional($$[$0-2], $$[$0],RelationalOption.MAYORIGUAL, _$[$0-2].first_line, _$[$0-2].first_column);
    
break;
case 29:

        this.$ = new Relacional($$[$0-2], $$[$0],RelationalOption.MENORIGUAL, _$[$0-2].first_line, _$[$0-2].first_column);
    
break;
case 30:

        this.$ = new Relacional($$[$0-2], $$[$0],RelationalOption.IGUAL, _$[$0-2].first_line, _$[$0-2].first_column);
    
break;
case 31:

        this.$ = new Relacional($$[$0-2], $$[$0],RelationalOption.NOIGUAL, _$[$0-2].first_line, _$[$0-2].first_column);
    
break;
case 32:

        this.$ = $$[$0-1];
    
break;
case 33:

        this.$ = $$[$0];
    
break;
case 34:

        this.$ = new Literal($$[$0], _$[$0].first_line, _$[$0].first_column, Type.NUMBER);
    
break;
case 35:

        this.$ = new Literal($$[$0].replace(/\"/g,""), _$[$0].first_line, _$[$0].first_column, Type.STRING);
    
break;
case 36:

         this.$ = new Literal(true, _$[$0].first_line, _$[$0].first_column, Type.BOOLEAN);
    
break;
case 37:

        this.$ = new Literal(false, _$[$0].first_line, _$[$0].first_column, Type.BOOLEAN);
    
break;
case 38:

        this.$ = new Variable($$[$0],_$[$0].first_line, _$[$0].first_column);
    
break;
}
},
table: [{2:$V0,3:1,4:2,6:3,7:$V1,12:5,13:6,14:$V2,20:$V3,21:$V4,25:$V5},{1:[3]},{2:$V0,5:[1,12],6:13,7:$V1,12:5,13:6,14:$V2,20:$V3,21:$V4,25:$V5},o($V6,[2,3]),{8:[1,14]},o($V7,[2,5]),o($V7,[2,6]),o($V7,[2,7]),{8:[1,15]},{21:[1,16]},{24:[1,17]},{21:[1,18]},{1:[2,1]},o($V6,[2,2]),{8:$V8,9:19,21:$V9,40:21,41:$Va,42:$Vb,43:$Vc,44:$Vd},{8:$V8,9:27,21:$V9,40:21,41:$Va,42:$Vb,43:$Vc,44:$Vd},{22:[1,28]},{8:$V8,9:29,21:$V9,40:21,41:$Va,42:$Vb,43:$Vc,44:$Vd},{22:[1,30]},{10:[1,31],30:$Ve,31:$Vf,32:$Vg,33:$Vh,34:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn},{8:$V8,9:42,21:$V9,40:21,41:$Va,42:$Vb,43:$Vc,44:$Vd},o($Vo,[2,33]),o($Vo,[2,34]),o($Vo,[2,35]),o($Vo,[2,36]),o($Vo,[2,37]),o($Vo,[2,38],{45:[1,43],46:[1,44],47:[1,45]}),{10:[1,46],30:$Ve,31:$Vf,32:$Vg,33:$Vh,34:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn},{23:47,26:$Vp,27:$Vq,28:$Vr,29:$Vs},{11:[1,52],30:$Ve,31:$Vf,32:$Vg,33:$Vh,34:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn},{23:53,26:$Vp,27:$Vq,28:$Vr,29:$Vs},{11:[1,54]},{8:$V8,9:55,21:$V9,40:21,41:$Va,42:$Vb,43:$Vc,44:$Vd},{8:$V8,9:56,21:$V9,40:21,41:$Va,42:$Vb,43:$Vc,44:$Vd},{8:$V8,9:57,21:$V9,40:21,41:$Va,42:$Vb,43:$Vc,44:$Vd},{8:$V8,9:58,21:$V9,40:21,41:$Va,42:$Vb,43:$Vc,44:$Vd},{8:$V8,9:59,21:$V9,40:21,41:$Va,42:$Vb,43:$Vc,44:$Vd},{8:$V8,9:60,21:$V9,40:21,41:$Va,42:$Vb,43:$Vc,44:$Vd},{8:$V8,9:61,21:$V9,40:21,41:$Va,42:$Vb,43:$Vc,44:$Vd},{8:$V8,9:62,21:$V9,40:21,41:$Va,42:$Vb,43:$Vc,44:$Vd},{8:$V8,9:63,21:$V9,40:21,41:$Va,42:$Vb,43:$Vc,44:$Vd},{8:$V8,9:64,21:$V9,40:21,41:$Va,42:$Vb,43:$Vc,44:$Vd},{10:[1,65],30:$Ve,31:$Vf,32:$Vg,33:$Vh,34:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn},o($Vo,[2,39]),o($Vo,[2,40]),{48:[1,66]},{15:67,18:$Vt},{11:[1,70],24:[1,69]},o($Vu,[2,18]),o($Vu,[2,19]),o($Vu,[2,20]),o($Vu,[2,21]),o($V7,[2,16]),{24:[1,71]},o($V7,[2,4]),o($Vv,[2,22],{32:$Vg,33:$Vh}),o($Vv,[2,23],{32:$Vg,33:$Vh}),o($Vo,[2,24]),o($Vo,[2,25]),o($Vw,[2,26],{30:$Ve,31:$Vf,32:$Vg,33:$Vh}),o($Vw,[2,27],{30:$Ve,31:$Vf,32:$Vg,33:$Vh}),o($Vw,[2,28],{30:$Ve,31:$Vf,32:$Vg,33:$Vh}),o($Vw,[2,29],{30:$Ve,31:$Vf,32:$Vg,33:$Vh}),o($Vx,[2,30],{30:$Ve,31:$Vf,32:$Vg,33:$Vh,34:$Vi,35:$Vj,36:$Vk,37:$Vl}),o($Vx,[2,31],{30:$Ve,31:$Vf,32:$Vg,33:$Vh,34:$Vi,35:$Vj,36:$Vk,37:$Vl}),o($Vo,[2,32]),o($Vo,[2,41]),o($V7,[2,11],{16:72,17:[1,73]}),{2:$V0,6:74,7:$V1,12:5,13:6,14:$V2,19:[1,75],20:$V3,21:$V4,25:$V5},{8:$V8,9:76,21:$V9,40:21,41:$Va,42:$Vb,43:$Vc,44:$Vd},o($V7,[2,15]),{8:$V8,9:77,21:$V9,40:21,41:$Va,42:$Vb,43:$Vc,44:$Vd},o($V7,[2,8]),{12:78,14:$V2,15:79,18:$Vt},{19:[1,80]},o($Vy,[2,13]),{11:[1,81],30:$Ve,31:$Vf,32:$Vg,33:$Vh,34:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn},{11:[1,82],30:$Ve,31:$Vf,32:$Vg,33:$Vh,34:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn},o($V7,[2,9]),o($V7,[2,10]),o($Vy,[2,12]),o($V7,[2,14]),o($V7,[2,17])],
defaultActions: {12:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

    const { ArithmeticOption,Aritmetico} = require('../Expresiones/Aritmetico.js');
    const {Relacional, RelationalOption} = require('../Expresiones/Relacional.js');
    const {Literal} = require('../Expresiones/Literal.js');
    const {Variable} = require('../Expresiones/Variable.js');
    const {Console} = require('../Instruccion/Console.js');
    const {errores,Error_} = require('../Reportes/Errores.js');
    const { Type } = require("../Modelos/Retorno.js");
    const {If} = require('../Instruccion/If.js');
    const {Declaracion} = require('../Instruccion/Declaracion.js');
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-sensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:// comentario simple línea
break;
case 2:// comentario multiple líneas
break;
case 3:return 41
break;
case 4:return 42
break;
case 5:return 26
break;
case 6:return 27
break;
case 7:return 28
break;
case 8:return 43
break;
case 9:return 44
break;
case 10:return 29
break;
case 11:return 'TYPE'   
break;
case 12:return 20
break;
case 13:return 25
break;
case 14:return 7
break;
case 15:return 14
break;
case 16:return 17
break;
case 17:return 30
break;
case 18:return 31
break;
case 19:return '**'
break;
case 20:return 32
break;
case 21:return 33
break;
case 22:return '%'
break;
case 23:return 45
break;
case 24:return 46
break;
case 25:return 36
break;
case 26:return 37
break;
case 27:return 34
break;
case 28:return 35
break;
case 29:return 38
break;
case 30:return 39
break;
case 31:return '&&'
break;
case 32:return '||'
break;
case 33:return '!'
break;
case 34:return '?'
break;
case 35:return 22
break;
case 36:return 24  
break;
case 37:return 8
break;
case 38:return 10 
break;
case 39:return 18
break;
case 40:return 19 
break;
case 41:return 11
break;
case 42:return 21
break;
case 43:return 5
break;
}
},
rules: [/^(?:\s+)/,/^(?:\/\/.*)/,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/,/^(?:(([0-9]+)(\.([0-9]+))?))/,/^(?:(("[^"]*")))/,/^(?:number\b)/,/^(?:string\b)/,/^(?:boolean\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:void\b)/,/^(?:type\b)/,/^(?:let\b)/,/^(?:const\b)/,/^(?:console\.log\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:\+)/,/^(?:-)/,/^(?:\*\*)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:\+\+)/,/^(?:--)/,/^(?:>=)/,/^(?:<=)/,/^(?:>)/,/^(?:<)/,/^(?:==)/,/^(?:!=)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:!)/,/^(?:\?)/,/^(?::)/,/^(?:=)/,/^(?:\()/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?:;)/,/^(?:([a-zA-Z_])[a-zA-Z0-9_ñÑ]*)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = ejecucion;
exports.Parser = ejecucion.Parser;
exports.parse = function () { return ejecucion.parse.apply(ejecucion, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}