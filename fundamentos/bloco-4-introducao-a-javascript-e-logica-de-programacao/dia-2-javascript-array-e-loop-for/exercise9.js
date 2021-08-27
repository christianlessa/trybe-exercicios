let numbers = [];
let result = 0;


for (index = 1; index <= 25; index += 1) {
    numbers.push(index);
}

for (index = 0; index < numbers.length; index += 1) {
   result = numbers[index] / 2
   console.log(result)
}



// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .