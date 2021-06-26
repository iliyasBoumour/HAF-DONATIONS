const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const projectShema = new Shema(
    {
        title: {
            type: String,
            required: true
        },
        content: String,
        officialImage: String,
        goal: {
            type: Number,
            min: 0,
        },
        current: {
            type: Number,
            min: 0
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Project', projectShema);