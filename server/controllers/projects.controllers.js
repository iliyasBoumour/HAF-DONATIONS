const asyncHandler = require("express-async-handler");
const Project = require("../models/Project");

exports.getAll = asyncHandler(async (req, res) => {
  // default 6 projects
  const lim = Number(req.query.limit) || 6;
  //   default completed and not comp projects
  const condition =
    req.query.notCompleted === undefined ? {} : { completed: false };
  const data = await Project.find(condition).sort({ rest: 1 }).limit(lim);
  res.json(data);
});
