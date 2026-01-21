const express = require("express")
const authMiddleware = require("../middlewares/authMiddleware")
const rbac = require ("../middlewares/rbac")
const SubjectController = require("../controllers/subjectController")

const subjectsRouter = express.Router()

subjectsRouter.get("/",authMiddleware,rbac(["admin","teacher"]),SubjectController.getAllSubjects)

subjectsRouter.use(authMiddleware,rbac(["admin"]))
subjectsRouter.post("/",SubjectController.addSubject)
subjectsRouter.patch("/:id",SubjectController.subjectUpdate)
subjectsRouter.delete("/:id",SubjectController.subjectDelete)
