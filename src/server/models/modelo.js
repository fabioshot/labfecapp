'use strict';
module.exports = (sequelize, DataTypes) => {
  const modelo = sequelize.define('modelo', {
    descricao: DataTypes.STRING,
    marca_id: DataTypes.INTEGER
  }, {});
  modelo.associate = function(models) {
    modelo.belongsTo(models.marca)
    modelo.hasMany(models.balanca, {
      foreignKey: 'modelo_id',
      as: 'balancas'
    });
  };
  return modelo;
};
