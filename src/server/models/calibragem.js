'use strict';
module.exports = (sequelize, DataTypes) => {
  const calibragem = sequelize.define('calibragem', {
    balanca_id: DataTypes.INTEGER,
    funcionario_id: DataTypes.INTEGER,
    data: DataTypes.DATE,
    hora: DataTypes.TIME,
    peso_padrao: DataTypes.DOUBLE,
    peso_obtido: DataTypes.DOUBLE
  }, {});
  calibragem.associate = function(models) {
    // associations can be defined here
  };
  return calibragem;
};
