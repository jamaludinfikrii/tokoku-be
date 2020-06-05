const Router = require('express').Router()
const Contr = require('./../controllers/transactionController')

Router.post('/',Contr.onBayarClick)
Router.get('/statusfiltered',Contr.getTransactionFiltered)
Router.get('/:users_id',Contr.getAllTransaction)
Router.get('/detail/:transaction_id',Contr.getTransactionDetailByIdTransaction)
Router.post('/payment/:transaction_id',Contr.postPaymentConfirmation)
Router.post('/approve-payment',Contr.approvedPayment)


module.exports = Router