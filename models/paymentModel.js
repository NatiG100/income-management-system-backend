const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title for the payment method."],
        trim: true,
    },
    accountNumber: {
        type: String,
        required: [true, "Please provide an account number for the payment."],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please provide a description fo the payment method."],
        trim: true,
        minlength: [10, "The description must contain atleast 10 characters"],
        maxlength: [150, "The description may not contain more than 150 characters."],
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: [true, 'Please provide Company ID.'],
    }

});

paymentSchema.pre(/^find*/, function () {
    this.populate('company');
})

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;