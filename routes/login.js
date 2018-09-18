const express = require('express')
const route = express.Router()

route.route('/')
  .get((req, res) => {
    res.render('login', { title: 'login' })
  })
  .post((req, res) => {
    let body = req.body
    if (body.login) login(body, req, res)
    else register(body, req, res)
  })

function login (body, req, res) {
  res.send('ok')
}
function register (body, req, res) {
  res.send('gotcha')
}

module.exports = route
