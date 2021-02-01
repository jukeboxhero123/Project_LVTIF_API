module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Answers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      answer: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      responseId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Responses',
          key: 'id',
          as: 'responseId',
        },
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
  
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Answers'),
};
