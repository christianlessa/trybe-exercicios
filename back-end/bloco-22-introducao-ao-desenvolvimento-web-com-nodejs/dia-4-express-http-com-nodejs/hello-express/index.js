const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'coca-cola', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Fanta-uva', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Guarana', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  
})
