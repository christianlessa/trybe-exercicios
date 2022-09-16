const customerModel = require('../models/User');
const customerService = require('../services/customerService');

const getAll = async (req, res) => {
  try {
    const customers = await customerService.getAll();
    return res.status(200).json(customers);
  } catch (error) {

  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const customers = await customerModel.getById(id);
    return res.status(200).json(customers);
  } catch ( error) {
    console.log(error);
    return res.status(500).end();
  }
}