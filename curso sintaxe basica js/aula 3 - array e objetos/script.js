// o que são vetores ou arrays

// como declarar um array
/*let array = ['string',1,true];
console.log(array);*/

// pode guardar varios tipos de dados/
let array = ['string',1,true,['array1'],['array2'],['array3'],['array4']];
//console.log(array[3]);

//manipulando arrays
/*
forEach() - itera um array
push() - add item no final do array
pop() - remove item no final do array
shift() - remove item no início do array
unshift() - add item no início do array
indexOf() - retorna o índice de um valor
splice() - remove ou substitui um item pelo índice
slice() - retorna uma parte de ummm array existente
*/

 // forEach
 /* array.forEach(function(item,index){console.log(item,index)});
 //exibe o array em tela com o número na frente de índice*/

 // push
 /*array.push('novo item');
 console.log(array);*/ 
 // adiciona o item no final da array

//pop
/*array.pop();
console.log(array);*/
//remove o último item do array

//shift
/*array.shift();
console.log(array);
//remove o primeiro item do array*/

//unshift
/*array.unshift('first');
console.log(array);*/
//adiciona o item entre parenteses no inicio do array

//indexOf
/*console.log(array.indexOf(true));
// usa dentro do console.log, retorna o número do indice do elemento entre parenteses*/

//splice
/*array.splice(0,3);
console.log(array);*/
// deleta os elementos indicados entre parenteses array.splice(x,y) - (de X, ate Y)

//slice
/* let novoArray = array.slice(0,3);
console.log(novoArray);
// deleta os elementos não indicados entre parenteses array.slice(x,y) - (tudo o que estiver antes de X e depois de Y)
PS: a diferença é como as ferramentas do paint que selecionam um retangulo na imagem e salvam apenas aquilo / as que selecionam e retiram aquilo da imagem */


// Objetos
/* Dados que possuem propriedades e valores que definem suas características. Deve ser declarado entre chaves "{}"
Exemplo: uma xícara azul receberia cor(azul) tamanho(pequena) funcao(tomarCafe)
Essas propriedades são atribuídas a variáveis, facilitando a manipulação do objeto. (DESESTRUTURAÇÃO).
Exemplo:
    var xicara = {cor:'azul',tamanho:'p',funcao: tomarCafe()}
        var cor = xicara.cor;
        var tamanho = xicara.tamanho;
        var funcao = tomarCafe();
*/

let object = { string: 'string', number:1, boolean:true, array: ['array'], objectInterno:{objectInterno: 'objeto interno'}}

/*console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);
*/

var {string, boolean, objectInterno} = object;
console.log(string,boolean,objectInterno)
// explicação muito complicada... só vou entender a utilidade na prática.