// controllers/userController.js
import userService from "../services/auth.service";

class UserController {
  // Signup controller
  static signUp = async (req, res) => {
    try {
      // req.body is already validated and sanitized by Joi middleware
      const user = await userService.registerUser(req.body);

      return res.status(201).json({
        message: "User created successfully",
        user,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        message: "Server error during signup",
      });
    }
  };

  // Signin controller
  static signIn = async (req, res) => {
    try {
      // req.body is already validated and sanitized by Joi middleware
      const { email, password } = req.body;

      const user = await userService.userLogin({ email, password });

      return res.status(200).json({
        message: "Login successful",
        user,
      });
    } catch (err) {
      console.error(err);
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }
  };

  // Get single user controller
  static getUser = async (req, res) => {
    try {
      const { id } = req.params;

      const user = await userService.getSingleUser(id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Remove sensitive info before sending
      const { password, ...withoutPassword } = user.toJSON();

      return res.status(200).json({
        message: "User found",
        user: withoutPassword,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        message: "Server error while fetching user",
      });
    }
  };
}

export default UserController;
