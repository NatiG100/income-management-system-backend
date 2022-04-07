const User = require("../models/userModel");

module.exports.createUser = async (req, res, next) => {
    try {
        const user = new User(req.body);
        await user.save();
        user.password = undefined;
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
}
module.exports.readAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
}
module.exports.readUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
}

module.exports.updateUser = async (req, res) => {
    try {
        let user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({
                err: "No User exists with this id.",
            });
            return;
        }
        for (key in req.body) {
            user[key] = req.body[key];
        }
        await user.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({
            err: err.message,
        });
    }
}
module.exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findOne({ _id: id });
        await User.deleteOne({ _id: id });
        if (!user) {
            res.status(404).json({
                err: "No user exists with this id.",
            });
            return;
        }
        res.status(200).json(
            user,
        );
    } catch (err) {
        // console.log(err.msg);
        res.status(400).json({
            err: err.message,
        });
    }
}