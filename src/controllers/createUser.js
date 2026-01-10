// const {User} = require("../../models/user.js");

const models = require("../../models");

console.log("MODELS KEYS 👉", Object.keys(models));

const { User } = models;
console.log("USER 👉", User);


const createUserTest = async (req, res) => {
  console.log("i reach here");
  
  try {
    console.log("try block");
    
    const user = await User.create({
      firstName: "Ade",
      lastName: "Tom",
      email: "bol@gmail.com",
      password: "123456",
      class_id:38
    });
    console.log("signin dey here");
    
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err.message });
    console.log("i reach here");
    console.log(err);
    
    
  }
};

module.exports = createUserTest;
