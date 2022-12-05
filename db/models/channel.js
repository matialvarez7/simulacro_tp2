'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Channel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Channel.belongsTo(models.Device, {foreignKey: 'deviceId'})
      Channel.belongsTo(models.Category, {foreignKey: 'category_id'})
    }
  }
  Channel.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logo_url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Channel',
    tableName: 'Channels'
  });
  return Channel;
};