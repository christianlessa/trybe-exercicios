const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
      
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function checkTest(array1, array2) {
  let result = 0;
  for (let index = 0; index < array1.length; index += 1) {
    if (array1[index] === array2[index]) {
      result += 1;
    } else if (array1[index] !== array2[index] && array2[index] !== 'N.A') {
      result -= 0.5;
    }
  }
  return result;
}

function total(array1, array2, func) {
return func(array1, array2);
}

console.log(total(rightAnswers, studentAnswers, checkTest));