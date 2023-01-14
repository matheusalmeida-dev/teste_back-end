'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = { // Seed para inserir Propriedades no BD
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Propriedades', [{
      nomePropriedade: 'Lorem ipsum',
      cadastroRural: 'UF-1111111-E6D3.395B.6D27.4F42.AE22.DD56.987C.1111'
    },
    {
      nomePropriedade: 'Lobortis mattis',
      cadastroRural: 'UF-2222222-E6D3.395B.6D27.4F42.AE22.DD56.987C.2222'
    },
    {
      nomePropriedade: 'Consectetur lorem',
      cadastroRural: 'UF-3333333-E6D3.395B.6D27.4F42.AE22.DD56.987C.3333'
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Propriedades', null, {});
  }
};
