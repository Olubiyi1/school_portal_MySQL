'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    // removing the initial constraint
    // await queryInterface.removeConstraint("Users","users_ibfk_2")
    
      // change column to allow null

      await queryInterface.changeColumn("Users","class_id",{
        type:Sequelize.INTEGER,
        allowNull:true
      })

      await queryInterface.addConstraint("Users",{
        fields:["class_id"],
        type:"foreign key",
        // giving the constraint a new name
        name:"fk_users_class_id",
        references:{
            table:"Classes",
            field:"id"
        },
        onUpdate:"CASCADE",
          onDelete:"SET NULL"
      })
  },

  async down (queryInterface, Sequelize) {

    // revert back to initial constraint

    await queryInterface.changeColumn("Users","class_id",{
      type:Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:"Classes",
        key:"id"
      },
      onUpdate:"CASCADE",
      onDelete:"RESTRICT"
    })
  }
};
