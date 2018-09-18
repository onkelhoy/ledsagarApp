const express = require('express')
const route = express.Router()

route.use('/', function (req, res, next) {
  if (!req.session.login)
    return res.redirect('/login')

  next()
})


route.get('/', function (req, res) {
  res.render('main', { title: 'Startsida' })
})

module.exports = route
