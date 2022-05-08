function funcao(){
    console.log('Essa mensagem veio de uma função.');
}

funcao();

// Como declarar?
/*
Geralmente se utiliza a palavra reservada "function" seguida de parênteses "()" e chaves "{}":
Exemplo:
    function funcao(){
        console.log("MENSAGEM");
    }

    funcao();

() - indica que é um objeto do tipo function;
{} - indica que é um bloco de instrução
*/

// Funções com parâmetros
/* As funções podem receber em sua declaração parâmetros que servem como variáveis, em que sua atribuição pode ser feita durante a chamada da função.

Exemplo:
    function nomeDaFuncao(parametro){
        ${instrucao};
    }

    nomeDaFuncao(valorDoParametro);
*/

function mensagem(primeiro,segundo){
    console.log(primeiro,segundo)
}

mensagem('Tudo certo','chefia');

// Funções declarativas
/*
São funções que possuem o uso mais comum, deve ser declarada usando a palavra reservada "function" seguida do nome da função, parênteses "()" e chaves "{}":

Ex: function nomeDaFuncao(){
    ${instrucao};
}
PS: O nome da função é obrigatório.
*/

// Expressões de Funções
/*
São funções atribuídas à expressões. A nomeação das funções por expressão é opcional:
Exemplo:

var funcao = function nomeDaFuncao(){
    ${instrucao};
}

x

var funcao = function(){
    ${instrucao};
}
*/

var funcao = function funcao() {
    console.log('Sou uma mensagem de função de expressão');
}
funcao();

// Arrow Function
/*
São funções de expressão de sintaxe curta. Arrow functions sempre serão anônimas, e portanto, não podem ser nomeadas. Deve ser declarada com parênteses "()", seguido de "=>" e depois chaves "{}"
Exemplo:

var funcao = () => {
    ${instrucao};
}
*/

var funcao = () => {
    console.log('Sou uma arrow function');
}  
funcao();

// Funções aritméticas
/*
- Number() - Para converter valores em números;
- Prompt() - para registrar entradas de usuário;
- Alert() - para mostrar mensagem ao usuário;
- Template Strings - para usar strings junto com expressões;
PS: template strings se usa mediante elemento entre crases com cifrao no inicio de cada um e com chave => `$[elemento1] + $[elemento2]`
IMPORTANTE: NUMBER PRECISA ESTAR COM A PRIMEIRA LETRA MAIUSCULA! Number()
*/