const estadosID = document.querySelector('#inputEstado');
const allStates = {
  "AC": "Acre",
  "AL": "Alagoas",
  "AP": "Amapá",
  "AM": "Amazonas",
  "BA": "Bahia",
  "CE": "Ceará",
  "DF": "Distrito Federal",
  "ES": "Espírito Santo",
  "GO": "Goiás",
  "MA": "Maranhão",
  "MT": "Mato Grosso",
  "MS": "Mato Grosso do Sul",
  "MG": "Minas Gerais",
  "PA": "Pará",
  "PB": "Paraíba",
  "PR": "Paraná",
  "PE": "Pernambuco",
  "PI": "Piauí",
  "RJ": "Rio de Janeiro",
  "RN": "Rio Grande do Norte",
  "RS": "Rio Grande do Sul",
  "RO": "Rondônia",
  "RR": "Roraima",
  "SC": "Santa Catarina",
  "SP": "São Paulo",
  "SE": "Sergipe",
  "TO": "Tocantins",
  "EX": "Estrangeiro",
}

for (let key in allStates) {
  const createOption = document.createElement('option');
  createOption.value = key;
  createOption.innerText = allStates[key];
  estadosID.appendChild(createOption);
}

const submitButton = document.querySelector('#submitButton');
const formResult = document.querySelector('#form1');
const textForms1 = document.querySelector('#textForms');
submitButton.addEventListener('click', submitPreventDef);
function submitPreventDef (event) {
  event.preventDefault();
  textForms1.innerHTML = formResult.value;
}
