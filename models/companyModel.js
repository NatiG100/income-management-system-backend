const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for the company"],
    },
    code: {
        type: String,
        required: [true, "Please provide a code for the company."],
        unique: [true, "A company already exists with this code."],
    },
    description: {
        type: String,
        required: [true, "Please provide a description for the company."],
        minlength: [15, "The description must be no less than 15 characters."],
        maxlength: [150, "The description must be no more than 150 characteds."]
    }
});

module.exports.Company = mongoose.model('Company', companySchema);
