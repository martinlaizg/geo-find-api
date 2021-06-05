var express = require('express'),
    app = express(),
    methodOverride = require('method-override'),
    mongoose = require('mongoose')

require('dotenv').config()

// Connection to DB
const connection = require('./database/dbConnection')

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})


// Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(methodOverride())

// Models
require('./model/tour')(mongoose)

// Router
var router = require('./router')
app.use(router)

// Start server
app.listen(process.env.PORT, process.env.HOST, function () {
    console.log(`Node server running on http://${process.env.HOST}:${process.env.PORT}`)
})