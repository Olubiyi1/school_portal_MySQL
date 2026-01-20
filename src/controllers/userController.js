// controllers/userController.js
const userService = require("../services/auth.service");
const ResponseHandler = require("../utils/responseHandler");

class UserController {
  // Signup controller
  static signUp = async (req, res) => {
    try {
      // req.body is already validated and sanitized by Joi middleware
      const user = await userService.registerUser(req.body);
      return ResponseHandler.success(res, "Created Successfully", user);
    } catch (error) {
      console.error(error);
      return ResponseHandler.serverError(res, error.message);
    }
  };

  // Signin controller
  static signIn = async (req, res) => {
    try {
      // req.body is already validated and sanitized by Joi middleware
      const { email, password } = req.body;

      const user = await userService.userLogin({ email, password });

      return ResponseHandler.success(res, "Login Successful", user);
    } catch (err) {
      console.error(err);
      return ResponseHandler.unauthorized(res, "Invalid Email or Password");
    }
  };

  // Get single user controller
  static getUser = async (req, res) => {
    try {
      const { id } = req.params;

      const user = await userService.getSingleUser(id);

      if (!user) {
        return ResponseHandler.notFound(res, "User not found");
      }

      // Remove sensitive info before sending
      const { password, ...withoutPassword } = user.toJSON();

      return ResponseHandler.success(
        res,
        "User Fetch successful",
        withoutPassword,
      );
    } catch (err) {
      console.error(err);
      return ResponseHandler.serverError(res, "Error Fetching user");
    }
  };
  static updateMyProfile = async (req, res) => {
    try {
      
      const id = req.user.id

      // allowed fields to be updated
      let allowedFields = ["firstName", "lastName", "email"];

      const updatedData = {};

      Object.keys(req.body).forEach((key) => {
        if (allowedFields.includes(key)) {
          updatedData[key] = req.body[key];
        }
      });
      //  Prevent any empty updates
      if (Object.keys(updatedData).length === 0) {
        return ResponseHandler.badRequest(
          res,
          "No valid fields provided for update",
        );
      }

      const updatedUser = await userService.updateUser(id, updatedData);

      if (!updatedUser) {
        return ResponseHandler.notFound(res, "User not found");
      }

      const { password, ...safeUser } = updatedUser.toJSON();

      return ResponseHandler.success(
        res,
        "User updated successfully",
        safeUser,
      );
    } catch (err) {
      return ResponseHandler.serverError(res, "Error updating user");
    }
  };

  static updateUserByAdmin = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return ResponseHandler.badRequest(res, "User ID is required");
    }

    // this prevent admin from changing their own role accidentally
    if (req.user.id === id && req.body.role && req.body.role !== req.user.role) {
      return ResponseHandler.badRequest(res, "Admins cannot change their own role");
    }

    const allowedFields = ["firstName", "lastName", "email", "role"];
    const updatedData = {};

    Object.keys(req.body).forEach((key) => {
      if (allowedFields.includes(key)) {
        updatedData[key] = req.body[key];
      }
    });

    if (Object.keys(updatedData).length === 0) {
      return ResponseHandler.badRequest(res, "No valid fields provided");
    }

    const updatedUser = await userService.updateUser(id, updatedData);
    if (!updatedUser) {
      return ResponseHandler.notFound(res, "User not found");
    }

    const { password, ...safeUser } = updatedUser.toJSON();
    return ResponseHandler.success(res, "User updated successfully", safeUser);

  } catch (err) {
    console.error(err);
    return ResponseHandler.serverError(res, "Error updating user");
  }
};
  static deletedUser = async (req, res) => {
    try {
      const { id } = req.params;    
      const deletedCount = await userService.deleteUser(id);

      
      if (deletedCount === 0) {
        return ResponseHandler.notFound(res, "User not found");
      }
      console.log(deletedCount);
      return ResponseHandler.success(res, "User Deleted successfully");
    } catch (error) {
      console.log(error);
      
      return ResponseHandler.serverError(res, "Error deleting user",error.message);
    }
  };
}

module.exports = UserController;
