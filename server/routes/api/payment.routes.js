const express = require("express");
const router = express.Router();
const payment = require("../../controllers/payment.controllers");

router.post("/", payment.setPayment);
module.exports = router;
