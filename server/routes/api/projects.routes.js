const express = require("express");
const router = express.Router();
const projects = require("../../controllers/projects.controllers");

router.get("/", projects.getAll);
module.exports = router;
