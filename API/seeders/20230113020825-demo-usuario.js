'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = { // Seed para inserir Usuarios no BD
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [{
      nomeUsuario: 'admin',
      senhaUsuario: 'admin'
    },
    {
      nomeUsuario: 'Carlos123',
      senhaUsuario: '123456'
    },
    {
      nomeUsuario: 'AnaFonseca',
      senhaUsuario: '1234567'
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
