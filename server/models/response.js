const { v4: uuidV4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  const Response = sequelize.define('Response', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Response.beforeCreate(user => user.id = uuidV4());
  Response.associate = (models) => {
    Response.belongsTo(models.Form, {
      foreignKey: 'formId',
      onDelete: 'CASCADE',
    });
    Response.hasMany(models.Answer, {
      foreignKey: 'responseId',
      as: 'answers',
    });
  };

  return Response;
};
