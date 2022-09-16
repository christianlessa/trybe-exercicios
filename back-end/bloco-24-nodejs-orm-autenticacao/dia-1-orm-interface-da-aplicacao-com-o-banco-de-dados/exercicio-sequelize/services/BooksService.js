const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const bookId = await Book.findOne({ where: { id } });
  return bookId;
};

const create = async (title, author, pageQuantity) => {
  const books = await Book.create({ title, author, pageQuantity });
  return books;
};

const update = async (id, title, author, pageQuantity) => {
  const updated = await Book.update(
    { title, author, pageQuantity },
    { where: { id } },
  );
  return updated;
};

const remove = async (id) => {
  const deleteBookId = await Book.destroy({ where: { id } });
  return deleteBookId;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
