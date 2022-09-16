const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const booksRoutes = require('./Routes/booksRoutes');

app.use(express.json());

app.use('/books', booksRoutes);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
