module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Options', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      questionId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Questions',
          key: 'id',
          as: 'questionId',
        },
      },
    }),
  
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Options'),
};
