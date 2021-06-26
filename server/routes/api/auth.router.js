const express = require('express');
const router = express.Router();
//auth controller
const authController = require('../../controllers/authController');
//auth validation
const { registerValidation } = require('../../middleware/authValiation');
//Sign -up
router.post('/register',registerValidation, authController.register);

module.exports = router;

