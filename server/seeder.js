const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
// const users = require("./data/users");
const { data } = require("./data/projects");
// const User = require("./models/User");
const Project = require("./models/Project");
const connectDB = require("./config/db.js");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Project.deleteMany();
    // await User.deleteMany();

    await Project.insertMany(data);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Project.deleteMany();
    // await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
