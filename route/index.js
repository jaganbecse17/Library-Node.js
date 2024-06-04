const Router = require("express").Router()

// Privileged endpoints
Router.use('/admin',require("./authRoutes"))
// // Non-privileged endpoints
Router.use('/common',require('./commonRoutes'))
// // Non authentication endpoints
// Router.use('/unAuth',require('./unAuthRoutes'))

module.exports = Router