const wakeUp = () => 'Acordando!!';
const coffee = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (qualquer) => {
  console.log(qualquer());
}

doingThings(wakeUp);
doingThings(coffee);
doingThings(sleep);