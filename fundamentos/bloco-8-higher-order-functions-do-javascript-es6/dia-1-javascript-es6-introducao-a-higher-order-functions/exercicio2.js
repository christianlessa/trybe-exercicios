const random = 5;

const sorteio = () => {
  const generateNumber = Math.floor(Math.random() * (6 - 1) + 1);
  return generateNumber;
};

checkNumber = (random) => {
  debugger
  const luck = sorteio();
  if(random !== luck) {
    return "Tente novamente";
  } 
  return "Parabéns você ganhou";
}

console.log(checkNumber(random));