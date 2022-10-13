const route = require('express').Router()
const authController = require('../controller/authController')
const auth = require('../middleware/auth')
const adminAuth = require('../middleware/AdminAuth')

route.post(`/register`, authController.register)
route.post(`/login`, authController.login)
route.get(`/logout`, authController.logout)
route.get(`/refreshToken`, authController.refreshToken)
route.get(`/userinfo`, auth, authController.getUserInfo)





route.get(`/allUsers`, auth, adminAuth, authController.getAllUsers)



module.exports = route