const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const allPeson = persons.map((person) => {
  return `${person.firstName} ${person.lastName}`;
});
console.log(allPeson);