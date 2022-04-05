const express = require('express');
const { readCompany, readAllCompanies, createCompany, updateCompany, deleteCompany } = require('../controllers/company');
const companyRouter = express.Router();

companyRouter.post('/', createCompany);
companyRouter.get('/:id', readCompany);
companyRouter.get('/', readAllCompanies);
companyRouter.patch('/:id', updateCompany);
companyRouter.delete('/:id', deleteCompany);

module.exports = companyRouter;

