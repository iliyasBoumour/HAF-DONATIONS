const mongoose = require("mongoose");
const Shema = mongoose.Schema;

const projectShema = new Shema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    evolution: {
      type: Number,
      min: 0,
      default: 0,
    },
    goal: {
      type: Number,
      required: true,
      min: 1,
    },
    rest: {
      type: Number,
      default: function () {
        return this.goal;
      },
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectShema);
