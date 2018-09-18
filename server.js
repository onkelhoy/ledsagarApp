const express = require('express')
const path = require('path')
const session = require('express-session')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use()
app.use('/', require('./routes/index.js'))
