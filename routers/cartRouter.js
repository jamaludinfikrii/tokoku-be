const Router = require('express').Router()
const Contr  = require('./../controllers/cartController')

Router.get('/:id_user' ,Contr.getAllCart)
Router.patch('/:id' , Contr.updateCart)

module.exports = Router