const angulo1 = 100;
const angulo2 = 50;
const angulo3 = 30;
var somaDosAngulos = (angulo1 + angulo2 + angulo3);

if (somaDosAngulos === 180){
 console.log(true);
} else if (somaDosAngulos > 180 || somaDosAngulos < 180){
 console.log(false);
} else {
    console.log("Erro, Angulo invalido");
};





let degreeAngleA = 65;
let degreeAngleB = 100;
let degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}