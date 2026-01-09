const {express}= require("express")
const {UserRoute} = require("./src/routes/user.route.js")
require("dotenv").config()

const app = express()

app.use(express.json())

const PORT = process.env.DB_PORT
app.use("/api",UserRoute)

app.listen(PORT,()=>{
    console.log("app running");
    
})

