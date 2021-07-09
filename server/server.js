const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connection = require('./config/db');
const mongoose = require('mongoose');
const path = require('path');
dotenv.config();
// create express app
const app = express();

// parse requests of content-type  application/json -and- application/x-www-form-urlencoded
app.use('/admin', require('./routes/api/admin.router'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//using routes api
app.use('/api', require('./routes/api/auth.router'));
app.use('/api/test', require('./routes/api/country'));
app.get("/", (req, res) => res.send("test"));

app.use('/', express.static(path.join(__dirname, './public')))
connection();

app.listen(process.env.PORT, () => {
  console.log(
    `app listening at http://localhost:${process.env.PORT}`.green.underline.bold
  );
});
