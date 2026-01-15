const Joi = require("joi")
const validationMessages = require("../utils/validationMessage")

const createSubjectValidation = Joi.object({
    name:Joi.string()
    .trim()
    .required()
    .messages({
        "any.required":validationMessages.name["any.required"],
        "string.empty":validationMessages.name["string.empty"]
    })
})

module.exports = createSubjectValidation