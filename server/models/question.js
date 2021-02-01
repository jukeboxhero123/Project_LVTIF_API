const { v4: uuidV4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Question.beforeCreate(user => user.id = uuidV4());
  Question.associate = (models) => {
    Question.belongsTo(models.Form, {
      foreignKey: 'formId',
      onDelete: 'CASCADE',
    });
    Question.hasMany(models.Option, {
      foreignKey: 'questionId',
      as: 'options',
    });
  };

  return Question;
};
