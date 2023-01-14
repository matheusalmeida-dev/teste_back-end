'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = { // Seed para inserir Produtores no BD
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produtores', [{
      nomeProdutor: 'Albert Amaral',
      cpfProdutor: '111.111.111-11'
    },
    {
      nomeProdutor: 'Bonner Benjamin',
      cpfProdutor: '222.222.222-22'
    },
    {
      nomeProdutor: 'Carla Costa',
      cpfProdutor: '333.333.333-33'
    },
    {
      nomeProdutor: 'Daniel Danner',
      cpfProdutor: '444.444.444-44'
    },
    {
      nomeProdutor: 'Eduardo Einstein',
      cpfProdutor: '555.555.555-55'
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produtores', null, {});
  }
};
