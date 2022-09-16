const headline = require('readline-sync');

const peso = headline.questionFloat('Digite seu peso (kG) ');
const altura = headline.questionFloat('Digite sua altura (CM) ');

const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

const saudavel = 24.99;
const obesidade = 39.99;

if(imc <= saudavel) {
  console.log(`Seu IMC é ${imc} você está saudável`);
} else if (imc <= obesidade) {
  console.log(`Seu IMC é ${imc} você está com sobrepeso`);
} else {
  console.log(`Seu IMC é ${imc} você está com obesidade mórbida`);
}
