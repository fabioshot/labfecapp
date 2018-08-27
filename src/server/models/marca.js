'use strict';
module.exports = (sequelize, DataTypes) => {
  const marca = sequelize.define('marca', {
    descricao: DataTypes.STRING
  }, {});
  marca.associate = function(models) {
    marca.hasMany(models.modelo, {
      foreignKey: 'marca_id',
      as: 'modelos'
    });
  };
  return marca;
};
