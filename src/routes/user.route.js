const userController = require("../controllers/userController")
const validate = require("../middlewares/validationMiddleware")
const express = require("express")
const rbac = require("../middlewares/rbac")
const authMiddleware = require("../middlewares/authMiddleware")
const UserValidationSchema =require("../validationschema/user.validation")

const UserRouter = express.Router()

UserRouter.post("/register",validate(UserValidationSchema.createUserValidation),userController.signUp)
UserRouter.post("/login",validate(UserValidationSchema.loginUserValidation),userController.signIn)

UserRouter.get("/:id",authMiddleware,rbac(["admin"]),userController.getUser)

module.exports = UserRouter