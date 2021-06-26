const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const UserShema = new Shema(
    {
        role: {
            type: String,
            default: 'donor'
        },
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', UserShema);