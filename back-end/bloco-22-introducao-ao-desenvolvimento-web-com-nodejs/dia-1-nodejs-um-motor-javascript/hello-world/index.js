const headline = require('readline-sync');

const name = headline.question('Qual seu nome? ');
const age = headline.questionInt('Qual sua idade? ');

console.log(`Hello, ${name}! You are ${age} years old!`);