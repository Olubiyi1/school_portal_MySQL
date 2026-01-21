const userController = require("../controllers/userController")
const validate = require("../middlewares/validationMiddleware")
const express = require("express")
const rbac = require("../middlewares/rbac")
const authMiddleware = require("../middlewares/authMiddleware")
// const UserValidationSchema =require("../validationschema/user.validation")
const UserValidationSchema = require("../validationschema/user.validation")

const UserRouter = express.Router()

// public routes
UserRouter.post("/register",validate(UserValidationSchema.createUserValidation),userController.signUp)
UserRouter.post("/login",validate(UserValidationSchema.loginUserValidation),userController.signIn)

// auth route
UserRouter.patch("/me",authMiddleware,userController.updateMyProfile)

// admin routes
UserRouter.use(authMiddleware,rbac(["admin"]))

UserRouter.get("/students",userController.getAllStudents)
UserRouter.patch("/:id",userController.updateUserByAdmin)
UserRouter.delete("/:id",userController.deletedUser)
UserRouter.get("/:id",userController.getUser)

module.exports = UserRouter