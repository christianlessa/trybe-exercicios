const express = require('express');
const routers = require('./controller/routes');

const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/character', routers.characterRouter);

app.listen(PORT, () => {
  console.log(`Servidor online na porta ${PORT}`);
});


// const characterController = require('./controller/character');
// const error = require('./middleware/middleware');

// const express = require('express');
// const app = express();

// const PORT = 3000;

// app.use(express.json());

// app.get('/character', characterController.list);
// app.get('/character/:id', characterController.getById);
// app.post('/character', characterController.create);
// app.delete('/character/:id', characterController.deleti);

// app.use(error);

// app.listen(PORT, () => console.log(`ouvindo a porta ${PORT}`));