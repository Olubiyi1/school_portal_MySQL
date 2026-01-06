"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Roles", [
      {
        name: "admin",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name:"teacher",
        created_at:new Date(),
        updated_at: new Date()
      },
      {
        name:"student",
        created_at: new Date,
        updated_at: new Date
      }
    ]);
   
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete("Roles",null,{})

  },
};
