'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Term extends Model {

    static associate(models) {
      Term.hasMany(models.Result,{
        foreignKey:"term_id",
        as:"terms"
      })
    }
  }
  Term.init({
    name:{type: DataTypes.STRING,
      allowNull:false,
      unique:true
    }
  }, {
    sequelize,
    modelName: 'Term',
    tableName:"Terms",
    underscored:true,
    timestamps:true
  });
  return Term;
};