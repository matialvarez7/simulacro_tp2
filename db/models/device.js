'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Device.hasMany(models.Channel, {foreignKey: 'deviceId'})
      Device.hasMany(models.Favorite, {foreignKey: 'deviceId'})
    }
  }
  Device.init({
    identifier: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Device',
    tableName: 'Devices'
  });
  return Device;
};