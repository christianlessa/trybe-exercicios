let ArrayDeTeste = [2, 3, 6, 7, 10, 1];
let maiorNumero = 0;

 function maiorIndice (ArrayDeTeste)
  for (index = 0; index < ArrayDeTeste.length; index += 1) {
      maiorNumero = ArrayDeTeste[index];
      if (maiorNumero > ArrayDeTeste[index +1]){
      console.log(maiorNumero);
      } 
  } 
  

 



// //2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .