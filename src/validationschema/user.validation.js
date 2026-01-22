const Joi = require("joi");
const validationMessages = require("../utils/validationMessage");

class UserValidationSchema {
  static createUserValidation = Joi.object({
    firstName: Joi.string().trim().min(3).max(50).required().messages({
      "any.required": validationMessages.firstName["any.required"],
      "string.empty": validationMessages.firstName["string.empty"],
      "string.min": validationMessages.firstName["string.min"],
      "string.max": validationMessages.firstName["string.max"],
    }),
    lastName: Joi.string().trim().min(3).max(50).required().messages({
      "any.required": validationMessages.lastName["any.required"],
      "string.empty": validationMessages.lastName["string.empty"],
      "string.min": validationMessages.lastName["string.min"],
      "string.max": validationMessages.lastName["string.max"],
    }),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .trim()
      .lowercase()
      .required()
      .messages({
        "any.required": validationMessages.email["any.required"],
        "string.empty": validationMessages.email["string.empty"],
        "string.email": validationMessages.email["string.email"],
      }),
    password: Joi.string()
      .trim()
      .min(8)
      .max(30)
      .pattern(new RegExp("^[a-zA-Z0-9_]+$"))
      .required()
      .messages({
        "any.required": validationMessages.password["any.required"],
        "string.empty": validationMessages.password["string.empty"],
        "string.max": validationMessages.password["string.max"],
        "string.min": validationMessages.password["string.min"],
        "string.pattern.base":
          validationMessages.password["string.pattern.base"],
      }),
    role: Joi.string()
      .trim()
      .optional()
      .valid("admin", "teacher", "student")
      .messages({
        "any.only": validationMessages.role["any.only"],
        "string.empty": validationMessages.role["string.empty"],
      }),
  });

  static loginUserValidation = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .trim()
      .lowercase()
      .required()
      .messages({
        "any.required": validationMessages.email["any.required"],
        "string.empty": validationMessages.email["string.empty"],
        "string.email": validationMessages.email["string.email"],
      }),
    password: Joi.string()
      .trim()
      .min(8)
      .max(30)
      .pattern(new RegExp("^[a-zA-Z0-9_]+$"))
      .required()
      .messages({
        "any.required": validationMessages.password["any.required"],
        "string.empty": validationMessages.password["string.empty"],
        "string.max": validationMessages.password["string.max"],
        "string.min": validationMessages.password["string.min"],
        "string.pattern.base":
          validationMessages.password["string.pattern.base"],
      }),
  });

  static adminUserUpdateValidationSchema = Joi.object({
    firstName: Joi.string().trim().optional().min(3),
    lastName:Joi.string().trim().min(3).max(50).optional(),
    email:Joi.string().trim().email({tlds:{allow:false}}).lowercase().optional(),
    role:Joi.string().valid("teacher","admin","student").optional()
  }).min(1); //rejects empty update

  static selfUpdateValidationSchema = Joi.object({
    firstName: Joi.string().trim().min(2).optional(),
    lastName: Joi.string().trim().min(2).optional().lowercase(),
    email: Joi.string()
      .trim()
      .email({ tlds: { allow: false } }),
  });
}

module.exports = UserValidationSchema;
