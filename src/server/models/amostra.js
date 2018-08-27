'use strict';
module.exports = (sequelize, DataTypes) => {
  const amostra = sequelize.define('amostra', {
    validade: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    data_fabricacao: DataTypes.DATE,
    hora_fabricacao: DataTypes.TIME,
    identificacao_lote: DataTypes.STRING,
    produto_id: DataTypes.INTEGER
  }, {});
  amostra.associate = function(models) {
    amostra.belongsTo(models.produto);
    amostra.belongsToMany(models.analises, {
      through: 'dados_analises',
      as: 'analises',
      foreignKey: 'amostra_id'
    });
  };
  return amostra;
};
