const asyncHandler = require("express-async-handler");
const Project = require("../models/Project");

exports.setPayment = asyncHandler(async (req, res) => {
  const projects = req.body;
  //   pr = projects[0];
  //   projects.forEach((element) => {
  console.log(projects[0]);
  const data = await Project.findByIdAndUpdate(projects[0]._id, {
    rest: projects[0].rest,
  });
  //   });
  res.json(data);
});
