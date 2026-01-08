'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    // 1. Add term_id column
    await queryInterface.addColumn("Results", "term_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "Terms",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });
    
    // 2. Map existing term names to term_id
    await queryInterface.sequelize.query(`
      UPDATE Results r
      JOIN Terms t ON r.term = t.name
      SET r.term_id = t.id;
    `);

    // 3. Remove old term column
    await queryInterface.removeColumn("Results", "term");
  },

  async down (queryInterface, Sequelize) {

    // 1. Add back the term column
    await queryInterface.addColumn("Results", "term", {
      type: Sequelize.STRING,
      allowNull: false
    });

    // 2. Optional: copy term_id back to term as name
    await queryInterface.sequelize.query(`
      UPDATE Results r
      JOIN Terms t ON r.term_id = t.id
      SET r.term = t.name;
    `);

    // 3. Remove term_id column
    await queryInterface.removeColumn("Results", "term_id");
  }
};
