const Router = require('express').Router()
const contr = require('./../controllers/authController')
Router.post('/login',contr.login)
Router.post('/test-notif',contr.testNotif)

module.exports = Router