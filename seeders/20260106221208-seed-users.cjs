'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert("Users",[
      {
        first_name:"Babajide",
        last_name:"Olubiyi",
        email:"olubiyibabajide@gmail.com",
        password:"123456789",
        role_id:1,
        class_id:null,
        created_at:new Date(),
        updated_at:new Date()
      },
      {
        first_name:"Adeyemi",
        last_name:"Azeez",
        email:"Az@gmail.com",
        password:"123456789",
        role_id:2,
        class_id:null,
        created_at:new Date(),
        updated_at:new Date()
      },{
      first_name:"Owolabi",
      last_name:"Abiola",
      email:"owolabi@gmail.com",
      password:"123456789",
      role_id:3,
      class_id:1,
      created_at:new Date(),
      updated_at:new Date()
      },
      {
      first_name:"Adefolarin",
      last_name:"Damilola",
      email:"dami@gmail.com",
      password:"123456789",
      role_id:3,
      class_id:2,
      created_at:new Date(),
      updated_at:new Date()
      },
      {
      first_name:"Thompson",
      last_name:"Eno",
      email:"tom@gmail.com",
      password:"123456789",
      role_id:3,
      class_id:3,
      created_at:new Date(),
      updated_at:new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users",null,{})
  }
};
