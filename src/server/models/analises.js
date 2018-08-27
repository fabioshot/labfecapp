'use strict';
module.exports = (sequelize, DataTypes) => {
  const analises = sequelize.define('analises', {
    data_analise: DataTypes.DATE,
    hora_analise: DataTypes.TIME,
    turno: DataTypes.STRING,
    funcionario_id: DataTypes.INTEGER,
    acidez: DataTypes.DOUBLE,
    viscosidade: DataTypes.DOUBLE
  }, {});
  analises.associate = function(models) {
    analises.belongsTo(models.funcionario);
    analises.belongsToMany(models.amostra, {
      through: 'dados_analises',
      as: 'amostras',
      foreignKey: 'analises_id'
    });
  };
  return analises;
};
