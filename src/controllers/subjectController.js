const SubjectService = require("../services/subject.service");
const ResponseHandler = require("../utils/responseHandler");

class SubjectController {
  static addSubject = async (req, res) => {
    try {
      const subject = await SubjectService.createSubject(req.body);
      return ResponseHandler.success(res, "Subject created successfully", subject);
    } catch (error) {
      return ResponseHandler.serverError(res, error.message);
    }
  };

  static getAllSubjects = async (req, res) => {
    try {
      const subjects = await SubjectService.getSubjects();
      return ResponseHandler.success(res, "Subjects fetched successfully", subjects);
    } catch (error) {
      return ResponseHandler.serverError(res, error.message);
    }
  };

  static subjectUpdate = async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) return ResponseHandler.badRequest(res, "Subject id is required");

      const allowedFields = ["name"];
      const updatedData = {};

      Object.keys(req.body).forEach((key) => {
        if (allowedFields.includes(key)) updatedData[key] = req.body[key];
      });

      if (Object.keys(updatedData).length === 0)
        return ResponseHandler.badRequest(res, "No valid field provided");

      const updatedSubject = await SubjectService.updatedSubject(id, updatedData);
      return ResponseHandler.success(res, "Subject updated successfully", updatedSubject);

    } catch (error) {
      return ResponseHandler.serverError(res, error.message || "Error updating subject");
    }
  };

  static subjectDelete = async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) return ResponseHandler.badRequest(res, "Subject id is required");

      const deleted = await SubjectService.deleteSubject(id);
      return ResponseHandler.success(res, "Subject deleted successfully");

    } catch (error) {
      if (error.message === "Subject not found") {
        return ResponseHandler.notFound(res, error.message);
      }
      return ResponseHandler.serverError(res, error.message || "Error deleting subject");
    }
  };
}

module.exports = SubjectController;
