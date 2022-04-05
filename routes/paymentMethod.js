const express = require('express');
const paymentRouter = express.Router();
const {
    createMethod,
    readMethod,
    readAllMethods,
    updateMethod,
    deleteMethod
} = require("../controllers/paymentMethod");

paymentRouter.post('/', createMethod);
paymentRouter.get('/:id', readMethod);
paymentRouter.get('/all/company-id/', readAllMethods);
paymentRouter.patch('/:id', updateMethod);
paymentRouter.delete('/:id', deleteMethod);

module.exports = paymentRouter;