'use strict';
module.exports = (sequelize, DataTypes) => {
  const cargo = sequelize.define('cargo', {
    descricao: DataTypes.STRING
  }, {});
  cargo.associate = function(models) {
    cargo.hasMany(models.funcionario, {
      foreignKey: 'cargo_id',
      as: 'funionarios',
    });
  };
  return cargo;
};
