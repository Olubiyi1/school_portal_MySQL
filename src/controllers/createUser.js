const {userModel} = require("../../models/user.js")

const createUserTest = async(req,res)=>{
    try{
        const user = await userModel.createUser({
            firstName:"Sakira",
            lastNmae:"Bilikisu",
            email:"bili@gmail.com",
            password:"123456"

        })
        res.status(201).json({message:"user created successfully",user})
    }
    catch(err){
        res.status(500).json({message:"error creating user",err:err.message})
        
    }
}

module.exports = createUserTest()