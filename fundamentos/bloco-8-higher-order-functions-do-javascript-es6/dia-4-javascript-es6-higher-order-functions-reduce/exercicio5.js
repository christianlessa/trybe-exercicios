// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    return names.reduce((acc, curr) => 
    acc + curr.split('').reduce((accumulator, current) => {
      if (current === 'A' || current === 'a') return accumulator + 1;
      return accumulator;
    }, 0), 0);
  }

  console.log(containsA());