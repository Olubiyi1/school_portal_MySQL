const createUserTest = require("../controllers/createUser")
const express = require("express")

const UserRouter = express.Router()

UserRouter.post("/create-user",createUserTest)

module.exports = UserRouter