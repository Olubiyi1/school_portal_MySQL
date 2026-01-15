const userController = require("../controllers/userController")
const express = require("express")
const rbac = require("../middlewares/rbac")
const authMiddleware = require("../middlewares/authMiddleware")

const UserRouter = express.Router()

UserRouter.post("/register",userController.signUp)
UserRouter.post("/login",userController.signIn)

UserRouter.get("/:id",authMiddleware,rbac(["admin"]),userController.getUser)

module.exports = UserRouter