// imports
const express    = require('express')
const path       = require('path')
const session    = require('express-session')
const bodyParser = require('body-parser')
const dotenv     = require('dotenv')
const flash      = require('connect-flash')
const https      = require('https')
const fs         = require('fs')
// locals
const log = require('./util/log/log.js')

// variable defines
const app = express()
/*const credentials = {
  key: fs.readFileSync(path.join(__dirname, 'server.key')),
  cert: fs.readFileSync(path.join(__dirname, 'server.csr'))
}
const server = https.createServer(credentials, app)*/
// inits
dotenv.config()
app.enable('strict-routing') // because I care ^^

// set
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use('/js', express.static(path.join(__dirname, 'public/js')))
app.use('/css', express.static(path.join(__dirname, 'public/css')))
// use
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 300000 // 5min
  }
}))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(flash(app))
app.use('/', require('./routes/index.js'))

app.listen(process.env.PORT, u => log('listening on port*', process.env.PORT))
