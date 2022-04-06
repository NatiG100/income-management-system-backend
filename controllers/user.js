const User = require("../models/userModel");

module.exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        user.save();
    } catch (err) {
        next(err);
    }
}
module.exports.readAllUsers = (req, res) => {
    res.send('All Users');
}
module.exports.readUser = (req, res) => {
    res.send('A User.')
}

module.exports.updateUser = (req, res) => {
    res.send('User edited');
}
module.exports.deleteUser = (req, res) => {
    res.send('User deleted');
}