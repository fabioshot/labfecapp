'use strict';
module.exports = (sequelize, DataTypes) => {
  const produto = sequelize.define('produto', {
    descricao: DataTypes.STRING,
    embalagem_id: DataTypes.INTEGER
  }, {});
  produto.associate = function(models) {
    produto.belongsTo(models.embalagem);
    produto.hasMany(models.amostra, {
      foreignKey: 'produto_id',
      as: 'amostras',
    });
  };
  return produto;
};
