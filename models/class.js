'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
  
    static associate(models) {
      Class.hasMany(models.User,{
        foreignKey:"class_id",
        as:"users"
      })
    }
  }
  Class.init({
    name:{type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Class',
    tableName:"Classes",
    underscored:true,
    timestamps:true
  });
  return Class;
};