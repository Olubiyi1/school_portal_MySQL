'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert("Subjects",[
      {
        name:"mathematics",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name:"English",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name:"Chemistry",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name:"Physics",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name:"Economics",
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete("Subjects",null,{})
  
  }
};
