const customerModel = require('../controllers/customerController');

const getAll = () => {
  try {
    const customers = await customerModel.getAll();
    return res.status(200).json(customers);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }

}

module.exports = getAll
