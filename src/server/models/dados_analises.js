'use strict';
module.exports = (sequelize, DataTypes) => {
  const dados_analises = sequelize.define('dados_analises', {
    amostras_id: DataTypes.INTEGER,
    analises_id: DataTypes.INTEGER,
    umidade: DataTypes.STRING,
    ph_agua: DataTypes.DOUBLE,
    fator_acido: DataTypes.DOUBLE,
    polpa: DataTypes.DOUBLE,
    pontos_pretos: DataTypes.INTEGER,
    vazamento: DataTypes.DOUBLE,
    cor: DataTypes.STRING
  }, {});
  dados_analises.associate = function(models) {
    // associations can be defined here
  };
  return dados_analises;
};
