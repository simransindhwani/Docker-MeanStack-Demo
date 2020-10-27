const express = require('express')
const route = new express.Router()
// var con = require('../config/database')
var operationController = require('../controller/operations')
route.get('/', function (req, res, next) {
    res.send({ message: 'Welcome to sbu APIs' })
})
route.get('/getEmailData',operationController.getEmailData)
route.post('/insertEmailData',operationController.insertEmailData)


module.exports = route