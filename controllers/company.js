module.exports.createCompany = (req, res) => {
    res.send('Company created.')
}
module.exports.readAllCompanies = (req, res) => {
    res.send('All Companies');
}
module.exports.readCompany = (req, res) => {
    res.send('A company.')
}

module.exports.updateCompany = (req, res) => {
    res.send('Company edited');
}
module.exports.deleteCompany = (req, res) => {
    res.send('Company deleted');
}