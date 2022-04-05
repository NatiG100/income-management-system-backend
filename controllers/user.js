module.exports.createUser = (req, res) => {
    res.send('User created.')
}
module.exports.readAllUsers = (req, res) => {
    res.send('All Users');
}
module.exports.readUser = (req, res) => {
    res.send('A User.')
}

module.exports.updateUser = (req, res) => {
    res.send('User edited');
}
module.exports.deleteUser = (req, res) => {
    res.send('User deleted');
}