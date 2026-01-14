const jwt = require("jsonwebtoken");
require("dotenv").config()

const authMiddleware = (req, res, next) => {

    // Reads the Authorization header from the request.
    // .split(" ")[1] extracts the actual token string (after “Bearer”).
    // The ?. ensures it doesn’t crash if the header is missing.
  const token = req.headers["authorization"]?.split(" ")[1];

//   Checks if the token exists.

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: no token provided" });
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
    return res.status(401).json({ message: "Unauthorized: invalid token" });
  }
};

module.exports = authMiddleware;
