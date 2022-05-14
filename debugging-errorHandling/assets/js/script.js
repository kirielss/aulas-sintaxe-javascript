function validaArray(arr,num) {
    try {
        if(!arr && !num) throw ReferenceError("Envie os parâmetros");

        if (typeof arr !== 'object') throw new TypeError("O Array precisa ser do tipo OBJECT");
    
        if (typeof num !== 'number') throw new TypeError("Você não digitou um número válido");
    
        if (arr.length !== num) throw new RangeError('O array não corresponde ao tamanho indicado')

        return arr;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError");
            console.log(e.message);
        }
        else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError");
            console.log(e.message);
        }
        else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError");
            console.log(e.message);
        }
        else {
            console.log("Tipo de erro não esperado:" + e);
        }
     }
}

console.log(validaArray([0,1,7,3,9],5));