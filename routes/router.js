var express = require('express');
const companyRouter = require('./companies');
const paymentRouter = require('./paymentMethod');
const userRouter = require('./users');
var router = express.Router();

router.use('/company', companyRouter);
router.use('/user', userRouter);
router.use('/method', paymentRouter);

module.exports = router;