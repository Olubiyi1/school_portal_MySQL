export const validationMessages = {
  firstName: {
    "any.required": "Please enter firstname",
    "string.empty": "Firstname cannot be empty",
    "string.min": "Firstname must be at least 3 characters long",
    "string.max": "Firstname cannot exceed 50 characters",
  },
  lastName: {
    "any.required": "Please enter surname",
    "string.empty": "Surname cannot be empty",
    "string.min": "surname must be at least 3 characters long",
    "string.max": "surname cannot exceed 50 characters",
  },
  email: {
    "any.required": "Please enter email",
    "string.empty": "Email cannot be empty",
    "string.email": "Please enter a valid email address",
  },
  password: {
    "any.required": "Please enter a password",
    "string.empty": "Password cannot be empty",
    "string.min": "Password must be at least 8 characters long",
    "string.max": "Password cannot exceed 30 characters",
    "string.pattern.base":"Password must include uppercase, lowercase, number, and special character",
  },
  role:{
    "any.only":"role must be one of admin,teacher or student" ,
    "string.empty":"role cannot be empty",
  }
};

