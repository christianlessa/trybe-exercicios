
// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

const header = document.getElementById('header');

const tagH1 = document.createElement('h1');
tagH1.innerText = 'Exercício 5.2 - JavaScript DOM como filho da tag body'

header.appendChild(tagH1);

// 2. Adicione a tag main com a classe main-content como filho da tag body ;

const tagMain = document.createElement('main');
tagMain.classList.add('main-content');
document.body.appendChild(tagMain);

// 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const tagSection = document.createElement('section');
tagSection.classList.add('center-content');
tagMain.appendChild(tagSection);

// 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const tagP = document.createElement('p');
tagSection.appendChild(tagP).innerText = "Vamos aprender sobre JavaScript";

// 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const tagSectionLeft = document.createElement('section');
tagSectionLeft.classList.add('left-content');
tagMain.appendChild(tagSectionLeft);

// 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const tagSectionRight = document.createElement('section');
tagSectionRight.classList.add('right-content');
tagMain.appendChild(tagSectionRight);

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

const tagImg = document.createElement('img');
tagImg.src = 'https://picsum.photos/200';
tagImg.classList.add('small-image');
tagSectionLeft.appendChild(tagImg);

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

const listNotOrder = document.createElement('ul');
tagSectionRight.appendChild(listNotOrder)
const numeros = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let element of numeros) {
  const tagLi = document.createElement('li');
  tagLi.innerText = element;
  listNotOrder.appendChild(tagLi);
}

// 9. Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

for (let index = 1; index <= 3; index += 1) {
  const tagH3 = document.createElement('h3');
  tagMain.appendChild(tagH3);
  tagH3.classList.add('description');
}

//exercicio bônus

// 1. Adicione a classe title na tag h1 criada;

tagH1.classList.add('title');

// 2. Adicione a classe description nas 3 tags h3 criadas;

//coloquei no for do exercicio 9.

// 3. Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;

tagMain.removeChild(tagSectionLeft);
     

// 4. Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;


tagSectionRight.style.marginRight = 'auto';


// 5. Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;


tagMain.style.backgroundColor = 'green';


// 6. Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.


listNotOrder.removeChild(listNotOrder.childNodes[9]);
listNotOrder.removeChild(listNotOrder.childNodes[8]);


