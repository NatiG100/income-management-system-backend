const express = require('express');
const paymentRouter = express.Router();
const {
    createMethod,
    readMethod,
    readAllMethods,
    updateMethod,
    deleteMethod
} = require("../controllers/paymentMethod");
const authorized = require('../utils/authorize');

paymentRouter.post('/', authorized, createMethod);
paymentRouter.get('/:id', readMethod);
paymentRouter.get('/all/:company_id', readAllMethods);
paymentRouter.patch('/:id', authorized, updateMethod);
paymentRouter.delete('/:id', authorized, deleteMethod);

module.exports = paymentRouter;