const { Subject } = require("../../models");

class SubjectService {
  static createSubject = async (data) => {
    try {
      const { name } = data;

      const existingSubject = await Subject.findOne({ where: { name } });
      if (existingSubject) {
        throw new Error("Subject already exists");
      }

      const newSubject = await Subject.create({ name });
      return newSubject;

    } catch (error) {
      throw new Error(error.message || "Error creating subject");
    }
  };

  static getSubjects = async () => {
    try {
      const subjects = await Subject.findAll();
      return subjects;
    } catch (error) {
      throw new Error(error.message || "Error fetching subjects");
    }
  };

  static updatedSubject = async (id, updatedData) => {
    try {
      if (!id) throw new Error("Subject id is required");
      if (!updatedData || Object.keys(updatedData).length === 0)
        throw new Error("Subject data cannot be empty");

      const subject = await Subject.findByPk(id);
      if (!subject) throw new Error("Subject not found");

      await subject.update(updatedData); // ✅ update instance
      return subject; // ✅ return updated subject

    } catch (error) {
      throw new Error(error.message || "Subject update failed");
    }
  };

  static deleteSubject = async (id) => {
    try {
      if (!id) throw new Error("Subject id is required");

      const deleted = await Subject.destroy({ where: { id } });
      if (deleted === 0) throw new Error("Subject not found");

      return deleted;

    } catch (error) {
      throw new Error(error.message || "Error deleting subject");
    }
  };
}

module.exports = SubjectService;
