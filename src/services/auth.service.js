
// const { where } = require("sequelize")
const comparePassword = require("../guards/comparePassword")
const {User} = require("../../models")
const hashPassword = require("../guards/hashpassword")
const createJwt = require("../guards/createJwt")


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
      const isPasswordValid = await comparePassword(password,user.password)
      if(!isPasswordValid){
        throw new Error("invlaid username or password")
      }

      const token= createJwt({
        id:user.id,
        email:user.email,
        role:user.role
      }) 
      return {
        token,
        user:{
            id:user.id,
            email:user.email,
            role:user.role
        }
      }
    }catch(error){
        throw new Error(error.message)
    }
}

static getSingleUser =async (id)=>{

    try{
        if(!id){
            throw new Error("User Id is required")
        }

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

static updateUser = async(id,updatedData)=>{

    try{
        if(!id){
            throw new Error ("User Id is required")
        }
        if(!updatedData){
            throw new Error ("User data cannot be empty")
        }

        const user = await User.findByPk(id);
        if(!user){
            throw new Error("User not found")
        }
        await user.update(updatedData)
    }
    catch(error){
        throw new Error(error.message || "User update failed")
    }
}

static deleteUser = async(id)=>{
    try{
        if(!id){
            throw new Error("user id is required")
        }
        const deletedCount = await User.destroy({where:{id}})

        if(deletedCount === 0 ){
            throw new Error ("user not found")
        }
        return deletedCount;
    }
    catch(error){
        throw new Error("Error deleting user")
    }
}
}

module.exports = userService