const numeroFatorial  = number => number >  1 ? number * numeroFatorial(number - 1) : 1;
console.log(numeroFatorial(6));