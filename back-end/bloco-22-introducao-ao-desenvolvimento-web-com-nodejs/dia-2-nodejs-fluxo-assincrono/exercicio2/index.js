const fs = require('fs').promises;

function sumSimpsons(param1, param2, param3) {
  const promise = new Promise((resolve, reject) => {
    if(param1 !== typeOf(number) || param2 !== typeOf(number) || param3 !== typeOf(number)) reject(console.log('informe apenas numeros'));

    const result = (param1 + param2) * param3;

    if(result < 50) {
      return reject('valor muito baixo');
    }

    resolve(result);
  });
  return promise;
};
