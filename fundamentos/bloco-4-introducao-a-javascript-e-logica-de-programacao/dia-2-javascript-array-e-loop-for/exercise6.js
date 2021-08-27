let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numerosImpares = 0;

for (index = 0; index < numbers.length; index += 1) {
    numerosImpares = numbers[index]
   if(numerosImpares % 2 === 0) {
       console.log("nenhum valor impar encontrado");
   } else {
       console.log(numbers[index]);
   }
}





//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";