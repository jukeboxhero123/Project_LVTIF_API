module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Responses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      formId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Forms',
          key: 'id',
          as: 'formId',
        },
      },
    }),
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('Responses'),
};