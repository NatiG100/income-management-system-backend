const Payment = require("../models/paymentModel");

module.exports.createMethod = async (req, res) => {
    try {
        const createdMethod = new Payment(req.body);
        createdMethod.company = req.session.user.company?._id;
        await createdMethod.save();
        res.status(200).json({
            createdMethod
        });
    } catch (err) {
        res.status(400).json({
            err: err.message,
        });
    }
}
module.exports.readAllMethods = async (req, res) => {
    try {
        const methods = await Payment.find({ company: req.params.company_id });
        res.status(200).json(
            methods,
        );
    } catch (err) {
        res.status(400).json({
            err: err.msg,
        });
    }
}
module.exports.readMethod = async (req, res) => {
    const id = req.params.id;
    try {
        const method = await Payment.findOne({ _id: id });
        if (!method) {
            res.status(404).json({
                err: "No payment method exists with this id.",
            });
            return;
        }
        res.status(200).json(
            method,
        );
    } catch (err) {
        // console.log(err.msg);
        res.status(400).json({
            err: err.message,
        });
    }
}
module.exports.updateMethod = async (req, res) => {
    const id = req.params.id;
    try {
        let payment = await Payment.findOne({ _id: id });

        if (!payment) {
            res.status(404).json({
                err: "No payment method exists with this id.",
            });
            return;
        }
        for (key in req.body) {
            payment[key] = req.body[key];
        }
        await payment.save();
        res.status(200).json(
            payment,
        );
    } catch (err) {
        // console.log(err.msg);
        res.status(400).json({
            err: err.message,
        });
    }
}
module.exports.deleteMethod = async (req, res) => {
    const id = req.params.id;
    try {
        const payment = await Payment.findOne({ _id: id });
        if (!payment) {
            res.status(400).json({
                err: "No payment method with this id!",
            });
        }
        await Payment.deleteOne({ _id: id });
        if (!payment) {
            res.status(404).json({
                err: "No payment method exists with this id.",
            });
            return;
        }
        res.status(200).json(
            payment,
        );
    } catch (err) {
        // console.log(err.msg);
        res.status(400).json({
            err: err.message,
        });
    }
}