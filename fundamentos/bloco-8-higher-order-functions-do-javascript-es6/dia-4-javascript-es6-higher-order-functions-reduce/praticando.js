// 1- praticando
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEven = (acumulator, itemArray) => {
  if(itemArray % 2 === 0) {
  return acumulator + itemArray;
 } else {
   return acumulator;
 }
};

const sumTotal = numbers.reduce(sumEven, 0);
console.log(sumTotal);


// 2 - praticando
const even = (itemArray) => itemArray % 2 === 0;
const sum = (acumulator, itemArray) => acumulator + itemArray;

const verification = (array) => array.filter(even).reduce(sum);
console.log(verification(numbers));

