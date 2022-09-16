const { 
  getAllModel, getByIdModel, createModel 
} = require('../models/character');
const { StatusCodes } = require('http-status-codes')

const list = async (req, res, next) => {
  try {
    const result = await getAllModel();

    res.status(StatusCodes.OK).json(result);
  } catch(e) {
    next(e);
  }
}

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await getByIdModel(id);

  if(!result.length) {
    res.status(StatusCodes.NOT_FOUND).send('Erro: nao existe ninguem com esse ID')
  }

  res.status(StatusCodes.OK).json(result);

  next();
}

const create = async (req, res, next) => {
  const { name, cartoon } = req.body;
  const result = await createModel({ name, cartoon })

  res.status(StatusCodes.CREATED).json(result)
}

module.exports = {
  list,
  getById,
  create,
}

// const characterModels = require('../models/character');
// const { StatusCodes } = require('http-status-codes');

// const list = async (req, res, next) => {
//   try {
//     const caracters = await characterModels.getAll();

//     res.status(StatusCodes.OK).json(caracters);
//   } catch (error) {
//     next(error);
//   }
// };

// const getById = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     const character = await characterModels.getById(id);
//     if (!character.length) {
//       res.status(StatusCodes.NOT_FOUND).send('pagina nao encontrada')
//     }
//     res.status(StatusCodes.OK).json(character[0]);
//   } catch (error) {
//     next(error);
//   }
// }

// const create = async (req, res, next) => {
//   try {
//     const { name, cartoon } = req.body;

//     const created = await characterModels.create({ name, cartoon })

//     return res.status(StatusCodes.CREATED).json(created);
//   } catch (error) {
//     next(error);
//   }
// }

// const deleti = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     await characterModels.deleti(id);

//     return res.status(StatusCodes.OK).end();
//   } catch (error) {
//     next(error);
//   }
// }

// module.exports = {
//   list,
//   getById,
//   create,
//   deleti,
// }