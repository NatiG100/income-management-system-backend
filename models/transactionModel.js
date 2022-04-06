const mongoose = require('mongoose');
const transactionSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now(),
    },
    paymentMethod: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment',
        required: [true, 'Please provide an ID for the payment method used.'],
    },
    amount: {
        type: Number,
        required: [true, "Please provied the amount paied."]
    },
    creditor: {
        type: String,
        trim: true,
        required: [true, 'Please provide the name of the creditor.']
    }
});

transactionSchema.pre(/^find*/, function () {
    this.populate('paymentMethod');
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;