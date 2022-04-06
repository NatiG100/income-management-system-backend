const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide name."],
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: (email) => (validator.default.isEmail(email)),
            message: "Please provide a valid email"
        }
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.pre('save', function (next) {
    if (this.password.lenght <= 6) {
        next(new Error("The password must contain atleast 6 characters."));
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;