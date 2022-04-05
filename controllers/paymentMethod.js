module.exports.createMethod = (req, res) => {
    res.send('Payment created.')
}
module.exports.readAllMethods = (req, res) => {
    res.send('All payments');
}
module.exports.readMethod = (req, res) => {
    res.send('A payment.')
}
module.exports.updateMethod = (req, res) => {
    res.send('payment edited');
}
module.exports.deleteMethod = (req, res) => {
    res.send('payment deleted');
}