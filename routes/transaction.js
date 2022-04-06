const express = require('express');
const {
    pay,
    readTransaction,
    readAllTransactions
} = require('../controllers/transactions');
const transactionRouter = express.Router();

transactionRouter.post('/', pay);
transactionRouter.get('/:id', readTransaction);
transactionRouter.get('/', readAllTransactions);

module.exports = transactionRouter;