const { expect } = require('chai');
const characterModel = require('../models/character');

describe('listar os personagens', () => {
  it('o resultado eh um array', () => {
    const characters = characterModel.getAll();

    expect(characters).to.be.an('array');
  });

  it(' cada objeto no array tem as propriedades id, name e cartoon', () => {
    const characters = characterModel.getAll();

    characters.forEcha(char => {
      expect(char).to.have.keys('id', 'name', 'cartoon');
    });
  });
});
