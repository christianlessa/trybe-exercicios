function invertString(str) {

  let dividiString = str.split("");
  let invertString = dividiString.reverse();
  let juntaString = invertString.join("");

   if ( juntaString === str) {
       console.log(true);
   } else {
       console.log(false);
   }
  
//   console.log(juntaString);
}
invertString("arara")




//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.