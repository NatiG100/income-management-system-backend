const { Company } = require("../models/companyModel");

module.exports.createCompany = async (req, res) => {
    try {
        const createdCompany = new Company(req.body);
        await createdCompany.save();
        res.status(200).json(
            createdCompany
        );
    } catch (err) {
        res.status(400).json({
            err: err.message,
        });
    }
}
module.exports.readAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json(
            companies,
        );
    } catch (err) {
        res.status(400).json({
            err: err.msg,
        });
    }
}
module.exports.readCompany = async (req, res) => {
    const id = req.params.id;
    try {
        const company = await Company.findOne({ _id: id });
        if (!company) {
            res.status(404).json({
                err: "No company exists with this id.",
            });
            return;
        }
        res.status(200).json(
            company,
        );
    } catch (err) {
        // console.log(err.msg);
        res.status(400).json({
            err: err.message,
        });
    }
}

module.exports.updateCompany = async (req, res) => {
    const id = req.params.id;
    try {
        let company = await Company.findOne({ _id: id });

        if (!company) {
            res.status(404).json({
                err: "No company exists with this id.",
            });
            return;
        }
        for (key in req.body) {
            company[key] = req.body[key];
        }
        await company.save();
        res.status(200).json(
            company,
        );
    } catch (err) {
        // console.log(err.msg);
        res.status(400).json({
            err: err.message,
        });
    }
}
module.exports.deleteCompany = async (req, res) => {
    const id = req.params.id;
    try {
        const company = await Company.findOne({ _id: id });
        await Company.deleteOne({ _id: id });
        if (!company) {
            res.status(404).json({
                err: "No company exists with this id.",
            });
            return;
        }
        res.status(200).json(
            company,
        );
    } catch (err) {
        // console.log(err.msg);
        res.status(400).json({
            err: err.message,
        });
    }
}