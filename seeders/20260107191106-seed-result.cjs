'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    // students already in the db
    const students = [
      {id:23},
      {id:24},
      {id:25},
    ]
    // subjects already in the db
    const subjects=[
      {id:46},
      {id:47},
      {id:48},
      {id:49},
      {id:50}
    ]
    // defining scores for each student per subject
    const scores = {
      23:{46:70,47:60,48:45,49:80,50:70},
      24:{46:45,47:48,48:60,49:54,50:43},
      25:{46:70,47:30,48:45,49:60,50:57},
    }


    // const results = students.flatMap(student=>{
    //     subjects.map(subject=>({ 
    //       student_id:student.id,
    //       subject_id:subject.id,
    //       score: scores[student.id][subject.id],
    //       created_at: new Date(),
    //       updated_at:new Date()
    //     }))
    // })

    const results = students.flatMap((student)=>{
      return subjects.map((subject)=>{
        return {
          term:"First term",
          student_id: student.id,
          subject_id: subject.id,
          score: scores[student.id][subject.id],
          created_at:new Date(),
          updated_at:new Date()
        };
      })
    })


    await queryInterface.bulkInsert("Results",results),
    {
      ignoreDuplicates:true
    }
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete("Results",null,{})
  }
};
