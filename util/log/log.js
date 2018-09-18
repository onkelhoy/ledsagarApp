function log (...d) {
  console.log(d.toString().replace(',', ' '))
}

// later maybe log to file..
module.exports = log
