const { v4: uuidV4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  const Form = sequelize.define('Form', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Form.beforeCreate(user => user.id = uuidV4());
  Form.associate = (models) => {
    Form.hasMany(models.Question, {
      foreignKey: 'formId',
      as: 'questions',
    });
    Form.hasMany(models.Response, {
      foreignKey: 'formId',
      as: 'responses'
    })
  };

  return Form;
};
