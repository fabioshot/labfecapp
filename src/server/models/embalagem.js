'use strict';
module.exports = (sequelize, DataTypes) => {
  const embalagem = sequelize.define('embalagem', {
    descricao: DataTypes.STRING,
    peso: DataTypes.DOUBLE
  }, {});
  embalagem.associate = function(models) {
    embalagem.hasMany(models.produto, {
      foreignKey: 'embalagem_id',
      as: 'produtos',
    });
  };
  return embalagem;
};
