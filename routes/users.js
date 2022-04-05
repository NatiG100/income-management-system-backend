const express = require('express');
const userRouter = express.Router();
const {
    readAllUsers,
    readUser,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/user");

userRouter.post('/', createUser);
userRouter.get('/:id', readUser);
userRouter.get('/', readAllUsers);
userRouter.patch('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;