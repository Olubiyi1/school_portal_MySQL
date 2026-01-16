// const {User} = require("../../models/user.js");
import { createUserValidation,loginUserValidation } from "../validationschema/user.validation";

// const models = require("../../models");
const userService = require("../services/auth.service")

class userController{

  static signUp = async (req, res) => {
  try {

    // validate input using the joi validation before service
    const {error,value} = createUserValidation.validate(req.body,{

      // abortEarly returns all errors (checks all fields)
      // stripUnknown :true removes all unwanted field not in the schema
      abortEarly:false,
      stripUnknown:true
    })

      // error.details is an array (could contain multiple errors)
        // [0] → we just grab the first error for simplicity
        // // .message → the human-readable string
    if(error){
      return res.status(400).json({
        message:error.details[0].message
      })
    }

    const user = await userService.registerUser(value)
    
    res.status(201).json({ message: "User created", user });
  } catch (err) {

    res.status(500).json({ message: "Error creating user", error: err.message });
    console.log(err);

  }
};

static signIn = async (req, res) => {
  try {
    const { error,value } = loginUserValidation.validate(req.body);

    if(error){
        return res.status(400).json({
        message:error.details[0].message
      })
    }

    const{email,password} = value

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