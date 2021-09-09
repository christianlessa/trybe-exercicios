function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //exercise 1

function createDaysList () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');
   
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const listItem = document.createElement('li');
    const day = dezDaysList[index]
    listItem.innerHTML = day;
    listItem.classList.add('day');
    if (day === 24 || day === 25 || day === 31){
      listItem.classList.add('holiday');
    } if (day === 4 || day === 11 || day === 18 || day === 25) {
      listItem.classList.add('friday');
    }
    daysList.appendChild(listItem);
  }
}
createDaysList();

  
// exercise 2

function createHolidayButton(string) {
  const buttonContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerText = string;
  buttonContainer.appendChild(button);
}
createHolidayButton('Feriados');


//exercise 3


function changeHolidayBackground(){
  const getHolidayButton = document.querySelector('#btn-holiday');
  const getHolidays = document.querySelectorAll('.holiday');

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === 'white') {
        getHolidays[index].style.backgroundColor = 'unset';
      } else {
        getHolidays[index].style.backgroundColor = 'white';
      }      
    }
  })
}
changeHolidayBackground();


//exercise 4

function createSextou(sextouString) {
  const sextouButton = document.createElement('button');
  const getButtonContainer = document.querySelector('.buttons-container');
  sextouButton.innerText = sextouString;
  sextouButton.setAttribute('id', 'btn-friday');
  getButtonContainer.appendChild(sextouButton);
}
createSextou('Sexta-feira');


//exercise 5

function changeFridayText() {
  const fridayButton = document.querySelector('#btn-friday');
  const fridayDayList = document.querySelectorAll('.friday');
  const fridayText = '#sextouu!';
  const fridaysArray = [];
  for (let index = 0; index < fridayDayList.length; index += 1) {
    fridaysArray.push(fridayDayList[index].innerText);
  }

  fridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridayDayList.length; index += 1) {
      if (fridayDayList[index].innerText === fridayText) {
        fridayDayList[index].innerText = fridaysArray[index];
      } else {
        fridayDayList[index].innerText = fridayText;
      }
    }
  })
}
changeFridayText();


//exercise 6



function changeTextSize() {
  const dayList = document.querySelectorAll('.day');
  for (let index = 0; index < dayList.length; index += 1) {
    dayList[index].addEventListener('mouseover', function(event){
      event.target.style.fontSize = '2.5em';
    });

    dayList[index].addEventListener('mouseleave', function(event){
      event.target.style.fontSize = 'unset';
    })
  }
}
changeTextSize();


