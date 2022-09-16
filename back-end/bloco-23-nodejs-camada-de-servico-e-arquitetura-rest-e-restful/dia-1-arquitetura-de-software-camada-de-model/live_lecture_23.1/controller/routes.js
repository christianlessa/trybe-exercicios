const express = require('express');
const characterController = require('./character');

const characterRouter = express.Router({ mergeParams: true });

characterRouter.get('/', characterController.list);
characterRouter.get('/:id', characterController.getById);
characterRouter.post('/', characterController.create);

module.exports = {
  characterRouter,
}  
