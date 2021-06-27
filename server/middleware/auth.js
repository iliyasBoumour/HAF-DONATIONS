const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const auth = asyncHandler(async (req, res, next) => {
  let token = req.headers.authorization;
  if (token && token.startsWith("HAFDON")) {
    const secretKey = process.env.jwtKeySecret;
    try {
      const decoded = jwt.verify(token.split(" ")[1], secretKey);
      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ msg: "authorization denied ...!" });
    }
  } else return res.status(401).json({ msg: "authorization denied ...!" });
});

module.exports = auth;
