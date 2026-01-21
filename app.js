const express = require("express")
require("dotenv").config()
const UserRouter = require("./src/routes/user.route")
const subjectsRouter = require("./src/routes/subject.route")


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const PORT =5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

app.get("/api",(req,res)=>{
    res.json({message:"welcome o"})
})
app.get("/protected",(req,res)=>{
    res.json({
        message:"u reach here"
    })
})

app.use("/api/users",UserRouter)
app.use("/api/subjects",subjectsRouter)
