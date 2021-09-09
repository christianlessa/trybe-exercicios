let arrayDeTeste = [2, 3, 6, 7, 10, 1];

 function maiorIndice () {
 let maiorIndice = 0;
  for (let key in arrayDeTeste) {
    if (arrayDeTeste[key] > arrayDeTeste[maiorIndice]) {
      maiorIndice = key
    }
  }
  return maiorIndice
} 
  console.log(maiorIndice()) 
   maiorIndice()

 



// //2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .