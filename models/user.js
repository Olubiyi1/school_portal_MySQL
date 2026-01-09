'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {

      User.belongsTo(models.Class,{
        foreignKey:"class_id",
        as:"class"
      })
    }
  }
  User.init({
    firstName:{type: DataTypes.STRING,
      allowNull:false
    },
    lastName:{type: DataTypes.STRING,
      allowNull:false
    },
    email:{type: DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isEmail:true
      }
    },
    password:{type:DataTypes.STRING,
      allowNull:false
    },
    role:{
      type:DataTypes.ENUM("admin","teacher","student"),
      allowNull:false,
      defaultValue:"student"
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName:"Users",
    underscored:true,
    timestamps:true
  });
  return User;
};