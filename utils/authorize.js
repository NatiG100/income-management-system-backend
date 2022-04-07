const { default: mongoose } = require("mongoose");
const Payment = require("../models/paymentModel");

const authorized = async (req, res, next) => {

    //if user is not logged in
    if (!req.session.user) {
        res.status(401).json({
            err: "Unauthorized access."
        });
        return;
    }

    //protect edit and delete
    else if (req.params.id) {
        const payment = await Payment.findById(req.params.id);
        if (!payment) {
            res.status(404).json({
                err: "No payment method found with the provided ID."
            });
        }
        console.log(req.session.user.company?._id);
        if (payment.company._id.toString() !== req.session.user.company?._id) {
            res.status(401).json({
                err: "Unauthorized access."
            });
            return;
        }
    }
    next();
}

module.exports = authorized;