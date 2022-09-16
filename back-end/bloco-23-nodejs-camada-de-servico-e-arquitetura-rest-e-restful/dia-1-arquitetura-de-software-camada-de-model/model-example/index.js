const express = require('express');
const app = express();
const PORT = 3000;

const Author = require('./src/models/user');

app.use('/user')

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
