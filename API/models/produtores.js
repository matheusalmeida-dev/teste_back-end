'use strict';
const { // Modelo da tabela Produtores o qual a ORM utiliza para fazer as querys no BD
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtores extends Model {
    static associate(models) {
    }
  }
  Produtores.init({
    idProdutor: DataTypes.INTEGER,
    nomeProdutor: DataTypes.STRING,
    cpfProdutor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produtores',
  });
  return Produtores;
};