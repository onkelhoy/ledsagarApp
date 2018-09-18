const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = Promise

// whenever a user clicks the big green btn
// create new work (and later user can add info about stuff)
let workSchema = new Schema({
  contract: { type: Schema.Types.ObjectId, ref: 'contract' },
  location: { },
  start: {},
  end: {},
  description: { String },
  outlay: [String], // array of image links
})

module.exports = mongoose.model('work', workSchema)
