const asyncHandler = require("express-async-handler");
const User = require("../models/User");
//JWT
const jwt = require("jsonwebtoken");
//bcryptjs
const bcrypt = require("bcryptjs");
//helper - hash password
const { getHashPassowrd } = require("../helpers/HashPassword");

exports.register = asyncHandler(async (req, res) => {
  const { username, email, password, country, phone } = req.body;

  const newUser = new User({
    username,
    email,
    password: getHashPassowrd(password),
    country,
    phone,
  });

  //add user
  const user = await newUser.save();

  jwt.sign({ id: user._id }, process.env.jwtKeySecret, (err, token) => {
    if (err) throw err;
    return res.status(201).json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  });
});

//login
exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    jwt.sign({ id: user._id }, process.env.jwtKeySecret, (err, token) => {
      if (err) throw err;
      res.status(200).json({
        token,
        id: user._id,
        username: user.username,
        email: user.email,
      });
    });
  } else res.status(401).json({ msg: "Invalid Credentials !!!" });
});

//logout
exports.logout = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(400);
    throw new Error("Error in database records");
  }

  return res.status(200).json({ message: "logout with success" });
});

// get current user
exports.getCurrentUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(404);
    throw new Error("user not found");
  }
  return res
    .status(200)
    .json({ id: user._id, username: user.username, email: user.email });
});
