const asyncHandler = require('express-async-handler');
const User = require('../models/User');
//JWT
const jwt = require('jsonwebtoken');
//bcryptjs
const bcrypt = require('bcryptjs');
//helper - hash password
const {getHashPassowrd} = require('../helpers/HashPassword');

exports.register = asyncHandler(async (req, res) => {
    const { username, email, password, country, phone} = req.body;
    const newUser = new User({
        username,
        email,
        password: getHashPassowrd(password),
        country,
        phone
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

})