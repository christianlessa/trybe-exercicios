const booksServices = require('../services/BooksService');

const getAll = async (_req, res) => {
  try {
    const books = await booksServices.getAll();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const bookId = await booksServices.getById(id);
    return res.status(200).json(bookId);
  } catch (error) {
    return res.status(404).json({ message: "Book not found" });
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    
    const created = await booksServices.create(title, author, pageQuantity);
    return res.status(200).json(created);
  } catch (error) {
    return res.status(404).json({ message: "Error Creating" });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;

    await booksServices.update(id, title, author, pageQuantity);
    const bookUpdated = { id, title, author, pageQuantity }
    return res.status(200).json(bookUpdated);
  } catch (error) {
    return res.status(404).json({ message: "Error Updating" });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;

    await booksServices.remove(id);
    return res.status(200).json({ message: `book ${id} removed!`});
  } catch (error) {
    return res.status(404).json({ message: "Error removing" });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
