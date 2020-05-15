const Router = require('express').Router()
const Contr = require('./../controllers/transactionController')

Router.post('/',Contr.onBayarClick)


module.exports = Router