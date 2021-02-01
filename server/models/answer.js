const { v4: uuidV4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    answer: {
      type: DataTypes.STRING,
    },
  });
  Answer.beforeCreate(user => user.id = uuidV4());
  Answer.associate = (models) => {
    Answer.belongsTo(models.Response, {
      foreignKey: 'responseId',
      onDelete: 'CASCADE',
    });
    Answer.belongsTo(models.Question, {
      foreignKey: 'questionId',
      onDelete: 'CASCADE',
    });
  };

  return Answer;
};
