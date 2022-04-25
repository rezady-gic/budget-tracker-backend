var express = require('express');
var router = express.Router();
const { TransactionController } = require('../controllers/transaction.controller')
const { Authentication } = require('../middleware/authentication')

router.get('/', Authentication.checkToken, TransactionController.getRecord);
router.post('/', Authentication.checkToken, TransactionController.insertRecord);
router.delete('/', Authentication.checkToken, TransactionController.deleteRecord);

module.exports = router;
