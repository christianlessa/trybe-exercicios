
let numeros = [-3, -2, -1, -3]
let result = 0;
let contador = 0;

for (index = 0; index <= numeros.length; index += 1) {
    if (result < numeros[index]) {
        result = numeros[index];

    } 
}    

for (indexP = 0; indexP < numeros.length; indexP += 1) {
    if (result === numeros[indexP]) {
        contador += 1;
    }
}

console.log(contador);