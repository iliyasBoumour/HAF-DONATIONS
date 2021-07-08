const express = require("express");
const router = express.Router();
const projects = require("../../controllers/projects.controllers");

router.get("/", projects.getAll);
router.get("/:id", projects.getOne);
module.exports = router;
