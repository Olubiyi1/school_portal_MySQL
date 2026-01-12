
// const { where } = require("sequelize")
const comparePassword = require("../guards/comparePassword")
const {User} = require("../../models")
const hashPassword = require("../guards/hashpassword")
const { where } = require("sequelize")
const { use } = require("../routes/user.route")
const { response } = require("express")

class userService{
    
 static registerUser = async(data)=>{
    try{
        const {email,firstName,lastName,password}=data

        // existing user

        const existingUser = await User.findOne({where:{email}})

        if(existingUser){
            throw new Error("User already exists")
        }
        // hash password
        const hashedPassword = await hashPassword(password)
    const user =await User.create({
       firstName,
       lastName,
       email,
       password:hashedPassword
    })
    return user
    }
    catch(error){
        throw new Error (error.message || "user registration failed")
    }
}

static userLogin = async(data)=>{

    const {email,password} = data
    try{

        const user = await User.findOne({where:{email}})
        if(!user){
            throw new Error ("invalid email or password")
        }
      const isPasswordvalid = await comparePassword(password,user.password)
      if(!isPasswordvalid){
        throw new Error("invlaid username or password")
      }
      return {
        id:user.id,
        email:user.email,
      }
    }catch(error){
        throw new Error("user login failed")
    }
}

static getSingleUser =async (id)=>{

    try{
        const user = await User.findByPk(id);
        if(!user){
            throw new Error ("User not found")
        }

        return user;

    }
    catch(error){
        throw new Error(error.message || "error getting user")
    }
}


}

module.exports = userService