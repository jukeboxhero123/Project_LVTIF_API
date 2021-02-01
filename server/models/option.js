const { v4: uuidV4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  const Option = sequelize.define('Option', {
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Option.beforeCreate(user => user.id = uuidV4());
  Option.associate = (models) => {
    Option.belongsTo(models.Question, {
      foreignKey: 'questionId',
      onDelete: 'CASCADE',
    });
  };

  return Option;
};
