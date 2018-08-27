'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('amostras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      validade: {
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.STRING(100)
      },
      data_fabricacao: {
        type: Sequelize.DATE
      },
      hora_fabricacao: {
        type: Sequelize.TIME
      },
      identificacao_lote: {
        type: Sequelize.STRING(50)
      },
      produto_id : {
        type: Sequelize.INTEGER,
        references:{
          model: 'produtos',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
    return queryInterface.dropTable('amostras');
  }
};
