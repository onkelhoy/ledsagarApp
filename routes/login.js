const express = require('express')
const filter = require('../util/filter')
const route = express.Router()

route.route('/')
  .get((req, res) => {
    res.render('login', { title: 'login' })
  })
  .post((req, res) => {
    let body = req.body
    switch (body.type) {
      case 'login':
        login(body, req, res); break;
      case 'register':
        register(body, req, res); break;
      case 'logout':
        logout(req, res); break;
    }
  })

function login (body, req, res) {
  req.session.credentials = {}
  res.send('ok')
}
function register (body, req, res) {
  res.send('gotcha')
}
function logout (req, res) {
  delete req.session.credentials
  req.flash('info', 'You logged out')
  res.redirect('/')
}

module.exports = route
