const express = require('express');
const {
    pay,
    readTransaction,
    readAllTransactions,
    deleteAll
} = require('../controllers/transactions');
const authorized = require('../utils/authorize');
const transactionRouter = express.Router();

transactionRouter.post('/', pay);
transactionRouter.get('/:transaction_id', authorized, readTransaction);
transactionRouter.get('/', authorized, readAllTransactions);
transactionRouter.delete('/deleteall', deleteAll);
module.exports = transactionRouter;