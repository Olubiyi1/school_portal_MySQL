'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    // students already in db
    const students = [
      { id: 43 },
      { id: 44 },
      { id: 45 },
    ];

    // subjects already seeded
    const subjects = [
      { id: 61 },
      { id: 62 },
      { id: 63 },
      { id: 64 },
      { id: 65 }
    ];

    // term in db
    const term = { id: 10 };

    const scores = {
      43: { 61: 70, 62: 60, 63: 45, 64: 80, 65: 70 },
      44: { 61: 45, 62: 48, 63: 60, 64: 54, 65: 43 },
      45: { 61: 70, 62: 30, 63: 45, 64: 60, 65: 57 },
    };

    const results = students.flatMap(student =>
      subjects.map(subject => ({
        term_id: term.id,
        student_id: student.id,
        subject_id: subject.id,
        score: scores[student.id][subject.id],
        created_at: new Date(),
        updated_at: new Date()
      }))
    );

    await queryInterface.bulkInsert("Results", results, { ignoreDuplicates: true });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Results", null, {});
  }
};
