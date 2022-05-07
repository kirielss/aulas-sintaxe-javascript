var jogador1 = 1;
var jogador2 = -1;
var placar;

/*if (jogador1 != -1){
    if (jogador1 > 0){
        console.log('Jogador 1 marcou ponto!')
    } else if(jogador2 > 0){
        console.log('jogador 2 marcou ponto!')
    } {
        console.log()
    }
} */

// if ternário: faz a verificação em uma única linha
/* COMO FUNCIIONA:
condition ? expr1 : expr2 

condition
Uma expressão que é avaliada como true ou false.

expr1, expr2
Expressões com valores de qualquer tipo.

Se condition é true, o operador retornará o valor de expr1; se não, ele retorna o valor de exp2.

PS: DIFERENTE EM JAVASCRIPT NÃO É ><, É != */

/*
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores Inválidos');
    if (jogador1 > 0){
        console.log('Jogador 1 marcou ponto!')
    } else if(jogador2 > 0){
        console.log('jogador 2 marcou ponto!')
    } else {
        console.log('Ninguém marcou ponto!')
    }
*/

jogador1 != -1 && jogador2 != -1 ?
    (console.log('Os jogadores são válidos'),
        jogador1 > 0 && jogador2 == 0 ?
            (console.log('Jogador 1 marcou ponto!'),
            placar = jogador1 > jogador2)
        :
        jogador2 > 0 && jogador1 == 0?
            (console.log('jogador 2 marcou ponto!'),
            placar = jogador2>jogador1)
            :
            console.log('Ninguém marcou ponto!')
    ) 
    :
    console.log('Jogadores Inválidos');

// SWITCH/CASE
/* Exemplo:
switch(${expressao}){
    case1:
        ${instrucao};
    break;
    case2:
        ${instrucao};
    break;
} */

switch (placar){
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!!!');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou!!!');
        break;
    default:
       if (jogador1 >0 && jogador2 >0)
            console.log('Ninguém ganhou...');
}

// Laços de repetição
/*
- For
- For/in
- For/of
- While
- Do/while
*/

// FOR
/* Funciona como estrutura de repetição de instrução até que a condição seja falsa.
for([expressaoInicial];[condicao];[incremento]){declaracao}
Exemplo:
var array = ['valor1','valor2','valor3','valor4']

    for (let i=0;i < array.length; i++){
        console.log(i);
    } */

let array = ['valor1','valor2','valor3','valor4','valor5',];

let object = {propriedade1:'valor1',propriedade2:'valor2',propriedade3:'valor3',}

for (let contador=0;contador<array.length;contador++){
    console.log(contador);  
}

// For/in
/*
Funciona como uma repetição a partir de uma propriedade:
for([indice] in [objeto ou array]){declaracao}
Exemplo:
var array = ['termo1','termo2',termo3','termo4','termo5',]
    for (i in array){
        console.log(i);
    } */

for(let i in array){
    console.log(i);
}
// Irá imprimir os índices do array, porém dessa vez não fica em azul no console, sinalizando que não está em valores numéricos e sim em string

for(i in object){
    console.log(i);
}

// For/of
/*
Funciona como uma repetição a partir de um valor:

for ([indice] of [array]){declaracao}
Exemplo:

var array = ['valor','valor2','valor3','valor4',]

    for (i of array){
        console.log(i);
    } */

for (i of array){
    console.log(i);
}
// Basicamente ele roda o for pelo array e vai imprimindo os valores da array

//PS: O For/of não funciona com objetos pois as propriedades variam, diferente do índice em um array que sempre será composto por números inteiros. Ao tentar, ele irá imprimir um caractere em cada linha

for (i of object.propriedade1){
    console.log(i);
}

// While
/*
Executa uma instrução enquanto determinada condição for verdadeira. A verificação é feita antes da execução.
Exemplo:

var a=0;
    while(a<10){
        a++;
        console.log(a) ;
    } */
/*
var a=0;

while(a<10){
    a++;
    console.log(a);
}
*/

//Do/while
/*
Executa uma instrução "até que" determinada condição seja falsa. A verificação é feita DEPOIS da execução.
Exemplo:

var a=0;
    do{
        a++;
        console.log(a);
    } while (a<10) */

var i=0;
    do{
        i++
        console.log(i);
    }while (i<13);