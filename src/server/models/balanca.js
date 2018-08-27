'use strict';
module.exports = (sequelize, DataTypes) => {
  const balanca = sequelize.define('balanca', {
    equipamento: DataTypes.STRING,
    identificacao: DataTypes.STRING,
    modelo_id: DataTypes.INTEGER
  }, {});
  balanca.associate = function(models) {
    balanca.belongsTo(models.modelo);
    balanca.belongsToMany(models.funcionario, {
      through: 'calibragem',
      as: 'funcionarios',
      foreignKey: 'balanca_id'
    });
  };
  return balanca;
};
