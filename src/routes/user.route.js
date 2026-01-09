const express = require("express")
const { createUserTest }= require("../controllers/createUser.js")


 const UserRoute = express.Router()

UserRoute.post("/create-user",createUserTest)


