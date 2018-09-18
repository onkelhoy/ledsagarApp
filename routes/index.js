const express = require('express')
const route = express.Router()

route.use('/login', require('./login'))

route.use('/', function (req, res, next) {
  if (!req.session.credentials)
    return res.redirect('/login')

  next()
})


route.get('/', function (req, res) {
  res.render('home', { title: 'Startsida' })
})

module.exports = route
