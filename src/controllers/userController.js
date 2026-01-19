// controllers/userController.js
import userService from "../services/auth.service";
const ResponseHandler = require("../utils/responseHandler")

class UserController {
  // Signup controller
  static signUp = async (req, res) => {
    try {
      // req.body is already validated and sanitized by Joi middleware
      const user = await userService.registerUser(req.body);
        return ResponseHandler.created(res,"Created Successfully",user)

    } catch (err) {
      console.error(err);
      return ResponseHandler.serverError(res,"Error encoutenred")
    }
  };

  // Signin controller
  static signIn = async (req, res) => {
    try {
      // req.body is already validated and sanitized by Joi middleware
      const { email, password } = req.body;

      const user = await userService.userLogin({ email, password });

      return ResponseHandler.success(res,"Login Successful",user)
    } catch (err) {
      console.error(err);
      return ResponseHandler.unauthorized(res,"Invalid Email or Password")
    }
  };

  // Get single user controller
  static getUser = async (req, res) => {
    try {
      const { id } = req.params;

      const user = await userService.getSingleUser(id);

      if (!user) {
        return ResponseHandler.notFound(res,"User not found")
      }

      // Remove sensitive info before sending
      const { password, ...withoutPassword } = user.toJSON();

      return ResponseHandler.success(res,"User Fetch successful",
        withoutPassword
      )
    } catch (err) {
      console.error(err);
      return ResponseHandler.serverError(res,"Error Fetching user")
    }
  };
}

export default UserController;
