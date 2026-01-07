'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert("Classes",[
      {
        name:"tech one",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name:"tech two",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "tech three",
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
  {
    ignoreDuplicates:true
  })
  
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete("Classes",null,{})
    
  }
};
