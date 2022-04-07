const User = require("../models/userModel");
const bcrypt = require('bcrypt');

module.exports.login = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).json({
            err: "Please provide both user-name and password!",
        });
        return;
    }
    if (req.session.user) {
        res.status(401).json({
            err: "User is Already logged in",
        });
    }
    else {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(401).json({
                err: "Incorrect email or password",
            });
            return;
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        console.log(!validPassword);
        if (!validPassword) {
            res.status(401).json({
                err: "Incorrect email or password",
            });
            return;
        }
        user.password = undefined;
        req.session.user = user;
        res.status(200).json(user);
    }
}
module.exports.me = (req, res) => {
    if (!req.session.user) {
        res.status(401).json({
            err: "Authentication error.",
        });
    }
    else {
        const user = req.session.user;
        res.status(200).json(user);
    }
}
module.exports.logout = (req, res) => {
    if (!req.session.user) {
        res.status(401).json({
            err: "Authentication error.",
        });
    }
    else {
        req.session.destroy();
        res.clearCookie("qid");
        res.status(200).json("success");
    }
}