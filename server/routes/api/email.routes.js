const express = require("express");
const router = express.Router();
const emailController = require("../../controllers/email.controllers");

router.post("/", emailController.sendEmail);
module.exports = router;
