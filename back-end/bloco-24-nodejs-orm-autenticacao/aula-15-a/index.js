const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  username: 'christian',
  password: '@Admin123',
  database: 'lecture_24_1',
  dialect: 'mysql'
});

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
  },
}, {
  tableName: 'products',
  timestamps: false,
});

Product.create({ name: 'Detergente', description: 'Produto de limpeza', price: 13.40 });