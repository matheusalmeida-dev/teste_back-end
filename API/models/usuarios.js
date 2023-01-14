'use strict';
const { // Modelo da tabela Usuario o qual a ORM utiliza para fazer as querys no BD
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    static associate(models) {
    }
  }
  Usuarios.init({
    idUsuario: DataTypes.INTEGER,
    nomeUsuario: DataTypes.STRING,
    senhaUsuario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};