const Router = require('express').Router()
const contr = require('./../controllers/authController')
Router.post('/login',contr.login)

module.exports = Router