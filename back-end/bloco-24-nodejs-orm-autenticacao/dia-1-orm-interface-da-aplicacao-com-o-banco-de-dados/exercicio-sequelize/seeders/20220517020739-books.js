'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Books", [
      {
        id: 1,
        title: "O Ladrao de raios",
        author: "Percy Jackson",
        pageQuantity: "15"
      },
      { 
        id: 2,
        title: "Desenvolvedor",
        author: "Christian Lessa",
        pageQuantity: "20"
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Books", null, {});
  }
};
