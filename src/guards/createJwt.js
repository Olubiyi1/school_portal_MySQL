const jwt = require("jsonwebtoken");
require("dotenv").config();

const createJwt = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1hr" }
  );
};
module.exports = createJwt;
