/*function getAdmins(map) {
    let admins = [];
    for ([key, value] of map)  {
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios)); */

var n;
var nfat;

n = prompt('Digite um número para calcular o fatorial');
nfat = n;

function fatorial(){
    if (n != 0) {
        for (let i=n; i>1;i--){
            nfat = (nfat * (i - 1));
        }
        return nfat;
    }
    else {
        return 1;
    }
}
console.log(fatorial());