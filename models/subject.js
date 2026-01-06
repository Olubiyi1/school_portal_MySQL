'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
   
    static associate(models) {
     Subject.hasMany(models.Result,{
      foreignKey:"subject_id",
      as:"results"
     })
    }
  }
  Subject.init({
    name:{type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Subject',
    tableName:"Subjects",
    underscored:true,
    timestamps:true
  });
  return Subject;
};