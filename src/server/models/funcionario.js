'use strict';
module.exports = (sequelize, DataTypes) => {
  const funcionario = sequelize.define('funcionario', {
    nome: DataTypes.STRING,
    cargo_id: DataTypes.INTEGER,
    admissao: DataTypes.DATE,
    saida: DataTypes.DATE,
    usuario: DataTypes.STRING,
    senha: DataTypes.STRING,
    bloqueio: DataTypes.BOOLEAN,
    sutuacao: DataTypes.BOOLEAN,
    observacao: DataTypes.TEXT
  }, {});
  funcionario.associate = function(models) {
    funcionario.belongsTo(models.cargo);
    funcionario.hasMany(models.analises, {
      foreignKey: 'funcionario_id',
      as: 'analises',
    });
    funcionario.belongsToMany(models.balanca, {
      through: 'calibragem'
      as: 'balancas',
      foreignKey: 'funcionario_id'
    });
  };
  return funcionario;
};
