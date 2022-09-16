const connection = require('./connection');

const getAllModel = async (req, res, next) => {
  try {
   const [character] = await connection.execute('SELECT * FROM live_lecture_23_1.characters');
    return character;
  } catch (e) {
    next(e);
  }
}

const getByIdModel = async (id) => {
  const [ character ] = await connection.execute(
    'SELECT * FROM live_lecture_23_1.characters WHERE id = ?',
    [id],
  );
  return character;
}

const createModel = async ({ name, cartoon }) => {
  const [ character ] = await connection.execute(
    'INSERT INTO live_lecture_23_1.characters (name, cartoon) VALUES (?, ?)',
    [name, cartoon],
  );
  return {
    id: character.insertId,
    name,
    cartoon,
  }
}

module.exports = {
  getAllModel,
  getByIdModel,
  createModel,
}


// const connection = require('./connection');

// const getAll = async () => {
//   const [ character ] = await connection.execute('SELECT * FROM live_lecture_23_1.characters;');

//   return character;
// }

// const getById = async (id) => {
//   const [ results ] = await connection.execute('SELECT * FROM live_lecture_23_1.characters WHERE id = ?',
//    [id],
//   );

//   return results;
// }

// const create = async (character) => {
//   const [ result ] = await connection.execute(
//     'INSERT INTO live_lecture_23_1.characters (name, cartoon) VALUES (?, ?);',
//     [ character.name, character.cartoon ]
//   );

//   return {
//     id: result.insertId,
//     ...character,
//   }
// }

// const deleti = async (id) => {
//   const result = await connection.execute(
//     'DELETE FROM live_lecture_23_1.characters WHERE id = ?',
//     [id],
//   )

//   return result;
// }

// module.exports = {
//   getAll,
//   getById,
//   create,
//   deleti,
// }