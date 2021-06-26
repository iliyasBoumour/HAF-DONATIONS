const express = require('express');
const router = express.Router();
//auth controller
const authController = require('../../controllers/authController');
//auth validation
const { registerValidation, loginValidation } = require('../../middleware/authValiation');
//Sign -up
router.post('/register',registerValidation, authController.register);
router.post('/login', loginValidation, authController.login);
module.exports = router;

