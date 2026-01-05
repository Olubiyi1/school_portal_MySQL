'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      term: {
        type: Sequelize.STRING,
        allowNull:false
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      student_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"Users",
          key:"id"
        },
        onUpdate:"CASCADE",
        onDelete:"RESTRICT"
      },
      subject_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"Subjects",
          key:"id"
        },
        onUpdate:"CASCADE",
        onDelete:"RESTRICT"
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Results');
  }
};