const mongoose = require('mongoose');

// userSchema created..
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
    },
    name: {
        type: String,
        required: false,
        maxLength: 100
    },
    lastname: {
        type: String,
        maxLength: 100
    },
    role: {
        type: Number,
        default: 0
    },
    token: {
        type: String
    }
});

// User Model create..
const User = mongoose.model('User', userSchema);

module.exports = { User };
