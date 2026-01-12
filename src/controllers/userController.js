// const {User} = require("../../models/user.js");

const models = require("../../models");
const userService = require("../services/auth.service")

class userController{

  static signUp = async (req, res) => {
  console.log("i reach here");
  
  try {

    const user = await userService.registerUser(req.body)
    res.status(201).json({ message: "User created", user });
  } catch (err) {

    res.status(500).json({ message: "Error creating user", error: err.message });
    console.log("i reach here");
    console.log(err);
    
    
  }
};

static signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await userService.userLogin({ email, password });

    return res.status(200).json({
      message: "Login successful",
      user
    });

  } catch (err) {
    return res.status(401).json({
      message: "Invalid email or password"
    });
  }
}
  static getUser = async(req,res)=>{

    try{

      const id = req.params.id

      const user = await userService.getSingleUser(id)

      
    // Remove sensitive info before sending response
    const { password, ...withoutPassword } = user.toJSON();
      return res.status(200).json({
        message:"user found",
        withoutPassword
      })

    }
     catch (err) {
    return res.status(401).json({
      message: "Invalid email or password"
    });
  }
  }
}



module.exports = userController;