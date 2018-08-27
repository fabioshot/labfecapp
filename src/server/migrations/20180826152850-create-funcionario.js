'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('funcionarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING(150)
      },
      cargo_id: {
        type: Sequelize.INTEGER
      },
      admissao: {
        type: Sequelize.DATE
      },
      saida: {
        type: Sequelize.DATE
      },
      usuario: {
        type: Sequelize.STRING(50)
      },
      senha: {
        type: Sequelize.STRING(50)
      },
      bloqueio: {
        type: Sequelize.BOOLEAN
      },
      sutuacao: {
        type: Sequelize.BOOLEAN
      },
      observacao: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('funcionarios');
  }
};
