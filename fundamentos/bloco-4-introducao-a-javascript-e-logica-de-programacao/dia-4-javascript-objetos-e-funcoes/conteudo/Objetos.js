let player = {
   name: 'Marta',
   lastName: 'Silva',
   age: '34',
   bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
   medals: {
      golden: 2,
      silver: 3,
   }
}
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' possui a idade de ' + player.age + ' anos');


console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por: ' + player.bestInTheWorld.length + ' vezes!')

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata!');


// 1 - Crie um objeto player contendo as variáveis listadas abaixo.
// 2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.