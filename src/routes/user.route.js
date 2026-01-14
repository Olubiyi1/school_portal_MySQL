const userController = require("../controllers/userController")
const express = require("express")
const rbac = require("../middlewares/rbac")
const authMiddleware = require("../middlewares/authMiddleware")

const UserRouter = express.Router()

UserRouter.post("/register",authMiddleware,rbac(["admin"]),userController.signUp)
UserRouter.post("/login",userController.signIn)
UserRouter.get("/:id",userController.getUser)

module.exports = UserRouter