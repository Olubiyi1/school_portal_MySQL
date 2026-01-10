const express = require("express")
require("dotenv").config()
const UserRouter = require("./src/routes/user.route")


const app = express()

app.use(express.json())

const PORT =5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

app.get("/api",(req,res)=>{
    res.json({message:"welcome o"})
})

app.use("/api",UserRouter)
