const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = Promise

// user can create a new contract
let contractSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  start: {},
  end: {},
  description: { String },
  name: { String }
})

module.exports = mongoose.model('contract', contractSchema)
