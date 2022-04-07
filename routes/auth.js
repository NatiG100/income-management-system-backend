const express = require('express');
const { login, me, logout } = require('../controllers/auth');
const authRouter = express.Router();

authRouter.post('/login', login);
authRouter.get('/me', me);
authRouter.delete('/logout', logout);

module.exports = authRouter;
