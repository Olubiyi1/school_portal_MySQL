
// const { where } = require("sequelize")
const comparePassword = require("../guards/comparePassword")
const {User} = require("../../models")
const hashPassword = require("../guards/hashpassword")

class userService{
    
 static registerUser = async(data)=>{

    try{
        const hashedPassword = await hashPassword(data.password)
    const user =await User.create({
        email:data.email,
        firstName:data.firstName,
        lastName:data.lastName,
       password: hashedPassword
    })
    return user
    }
    catch(error){
        throw new Error ("user registration failed")
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


}

module.exports = userService