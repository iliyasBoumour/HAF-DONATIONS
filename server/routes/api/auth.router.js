const express = require("express");
const router = express.Router();
//auth controller
const authController = require("../../controllers/authController");
//auth validation
const {
  registerValidation,
  loginValidation,
} = require("../../middleware/authValiation");
const auth = require("../../middleware/auth");
//Sign -up
router.post("/register", registerValidation, authController.register);
router.post("/login", loginValidation, authController.login);
router.get("/user", auth, authController.getCurrentUser);
module.exports = router;
