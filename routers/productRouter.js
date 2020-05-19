const Router = require('express').Router()
const controllers = require('./../controllers/productController')

Router.get('/product',controllers.getAllProduct)
Router.get('/product-detail/:id', controllers.getDetailProduct)

module.exports = Router