const Transaction = require("../models/transactionModel");

module.exports.pay = async (req, res) => {
    try {
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.status(200).json({
            transaction
        });
    } catch (err) {
        res.status(400).json({
            err: err.message,
        });
    }
}
module.exports.readTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        res.status(200).json(transaction);
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
}
module.exports.readAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json(transactions);
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
}