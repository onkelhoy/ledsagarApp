const express = require('express')
const route = express.Router()

route.use('/login', require('./login'))

route.use('/', function (req, res, next) {
  /**
  if (!req.session || !req.session.confirm) {
    req.flash('warning', 'we use cookies here')
    res.redirect('/')
  }
  */
  if (!req.session.credentials) {
    req.flash('warning', 'you need to login first')
    res.redirect('/login')
    return
  }

  next()
})

route.post('/confirm', (req, res) => {
  req.session.confirm = 'Happy Cookies'
  req.flash('success', 'Glad you understand that we use cookies')
  res.redirect('/')
})
route.get('/', function (req, res) {
  res.render('home', { title: 'Startsida' })
})

module.exports = route
