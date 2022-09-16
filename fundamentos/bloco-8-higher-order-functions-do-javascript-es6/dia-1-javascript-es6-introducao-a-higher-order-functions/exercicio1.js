const nomeComEmail = (nomes) => {
  const nomeCompleto = nomes ;
  const email = `${nomeCompleto.toLowerCase().split(' ').join('_')}@trybe.com`
  return {
    nomeCompleto,
    email
  }
}

const newEmployees = (nomeComEmail) => {
  const employees = {
    id1: nomeComEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: nomeComEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: nomeComEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(nomeComEmail));
