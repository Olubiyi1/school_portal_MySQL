const jwt = require("jsonwebtoken");
require("dotenv").config();
const ResponseHandler = require("../utils/responseHandler");
const { message } = require("../validationschema/subject.validation");

const authMiddleware = (req, res, next) => {
  // Reads the Authorization header from the request.
  // .split(" ")[1] extracts the actual token string (after “Bearer”).
  // The ?. ensures it doesn’t crash if the header is missing.
  const token = req.headers["authorization"]?.split(" ")[1];

  //   Checks if the token exists.

  if (!token) {
    return ResponseHandler.unauthorized(res,"Unauthorized: token missing")
  }

  try {
    // Verifies the token using your secret key
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
  
    req.user = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
    };

    next();
  } catch (err) {
    console.log(err.message);

    return ResponseHandler.unauthorized(res,"Unauthorized: invalid token",err.message)
  }
};

module.exports = authMiddleware;
