       /*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */



 //exercise 1

 const paragraph = document.getElementsByTagName('p')[1];
 paragraph.innerText = "ser um dev full-stack";


 //exercise 2

 const changeColor = document.getElementsByClassName('main-content')[0];
 changeColor.style.backgroundColor = 'rgb(76,164,109)';

 //exercise 3

 const changeColor2 = document.getElementsByClassName('center-content')[0];
 changeColor2.style.backgroundColor = '#fff';

 //exercise 4

const changeTagH1 = document.querySelector('.title');
changeTagH1.innerText = 'Exercício 5.1 - JavaScript'


//exercise 5 & exercise 6

const changeText = document.getElementsByTagName('p');
for (let element of changeText) {
  element.style.textTransform = "uppercase"
  console.log(element.innerText)
}

















