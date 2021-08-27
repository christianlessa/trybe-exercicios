let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 1000;

for (index = 0; index < numbers.length; index += 1) {
    let numeroAtual = numbers[index]
    if(numeroAtual < maiorNumero){
        maiorNumero = numeroAtual
    }
}
console.log(maiorNumero);


//Utilizando for , descubra qual o menor valor contido no array e imprima-o;