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
        role_id:28,
        class_id:null,
        created_at:new Date(),
        updated_at:new Date()
      },
      {
        first_name:"Adeyemi",
        last_name:"Azeez",
        email:"Az@gmail.com",
        password:"123456789",
        role_id:29,
        class_id:null,
        created_at:new Date(),
        updated_at:new Date()
      },{
      first_name:"Owolabi",
      last_name:"Abiola",
      email:"owolabi@gmail.com",
      password:"123456789",
      role_id:30,
      class_id:28,
      created_at:new Date(),
      updated_at:new Date()
      },
      {
      first_name:"Adefolarin",
      last_name:"Damilola",
      email:"dami@gmail.com",
      password:"123456789",
      role_id:30,
      class_id:29,
      created_at:new Date(),
      updated_at:new Date()
      },
      {
      first_name:"Thompson",
      last_name:"Eno",
      email:"tom@gmail.com",
      password:"123456789",
      role_id:30,
      class_id:30,
      created_at:new Date(),
      updated_at:new Date()
      }
    ],
  {
    ignoreDuplicates:true
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users",null,{})
  }
};
