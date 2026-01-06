'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {

    static associate(models) {
      Role.hasMany(models.User,{
        foreignKey:"role_id",
        as:"users"
      })
    }
  }
  Role.init({
    name:{type: DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Role',
    tableName:"Roles",
    underscored:true,
    timestamps:true
  });
  return Role;
};