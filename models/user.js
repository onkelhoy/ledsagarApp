const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

const filter = require('../util/filter')

mongoose.Promise = Promise

let profileSchema = new Schema({
  ssn: {
    type: Number,
    required: true,
    unique: true
  },
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: [filter.email, 'Provide a valid email']
  },
  password: { type: String, required: true },
  bossMail: {
    type: String,
    validate: [filter.email, 'Provide a valid email']
  }
})

profileSchema.pre('save', function (next) {
  let user = this
  bcrypt.genSalt((err, salt) => {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err)

      user.password = hash
      next()
    })
  })
})

profileSchema.methods.comparePassword = function (cpass, callback) {
  bcrypt.compare(cpass, this.password, callback)
}

module.exports = mongoose.model('users', profileSchema)
