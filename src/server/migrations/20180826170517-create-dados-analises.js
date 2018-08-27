'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dados_analises', {
      amostra_id: {
        allowNull: false,
        primaryKey:true,
        type: Sequelize.INTEGER,
        references:{
          model: 'amostras',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      analise_id: {
        allowNull: false,
        primaryKey:true,
        type: Sequelize.INTEGER,
        references:{
          model: 'analises',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      umidade: {
        type: Sequelize.STRING(50)
      },
      ph_agua: {
        type: Sequelize.DOUBLE
      },
      fator_acido: {
        type: Sequelize.DOUBLE
      },
      polpa: {
        type: Sequelize.DOUBLE
      },
      pontos_pretos: {
        type: Sequelize.INTEGER
      },
      vazamento: {
        type: Sequelize.DOUBLE
      },
      cor: {
        type: Sequelize.STRING(15)
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
    return queryInterface.dropTable('dados_analises');
  }
};
