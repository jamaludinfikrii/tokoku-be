const Router = require('express').Router()
const Contr = require('./../controllers/transactionController')

Router.post('/',Contr.onBayarClick)
Router.get('/:users_id',Contr.getAllTransaction)
Router.get('/detail/:transaction_id',Contr.getTransactionDetailByIdTransaction)


module.exports = Router