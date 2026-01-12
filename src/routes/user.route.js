const userController = require("../controllers/userController")
const express = require("express")

const UserRouter = express.Router()

UserRouter.post("/register",userController.signUp)
UserRouter.post("/login",userController.signIn)
UserRouter.get("/:id",userController.getUser)

module.exports = UserRouter