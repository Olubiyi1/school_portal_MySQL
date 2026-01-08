'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    static associate(models) {
      Result.belongsTo(models.Subject,{
        foreignKey:"subject_id",
        as:"subject"
      })
      Result.belongsTo(models.User,{
        foreignKey:"user_id",
        as:"user"
      })
      Result.belongsTo(models.Term,{
        foreignKey:"term_id",
        as:"term"
      })
    }
  }
  Result.init({
    term:{type:DataTypes.STRING,
      allowNull:false
    },
    score:{type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Result',
    tableName:"Results",
    timestamps:true,
    underscored:true
  });
  return Result;
};