var express = require('express');
const authRouter = require('./auth');
const companyRouter = require('./companies');
const paymentRouter = require('./paymentMethod');
const transactionRouter = require('./transaction');
const userRouter = require('./users');
var router = express.Router();

router.use('/company', companyRouter);
router.use('/user', userRouter);
router.use('/method', paymentRouter);
router.use('/transaction', transactionRouter);
router.use('/auth', authRouter);

module.exports = router;