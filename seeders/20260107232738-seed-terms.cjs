'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert("Terms",[
      {name:"first-term",
        created_at:new Date(),
      updated_at:new Date()},
      {name:"second-term",
        created_at:new Date(),
        updated_at:new Date()
      },
      {name:"third-term",
        created_at:new Date(),
        updated_at:new Date()
      },
    ])
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete("Terms",null,{})

  }
};
