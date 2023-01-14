'use strict';
const { // Modelo da tabela Propriedade o qual a ORM utiliza para fazer as querys no BD
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Propriedades extends Model {
    static associate(models) {
    }
  }
  Propriedades.init({
    idPropriedade: DataTypes.INTEGER,
    nomePropriedade: DataTypes.STRING,
    cadastroRural: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Propriedades',
  });
  return Propriedades;
};