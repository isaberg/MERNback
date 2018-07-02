const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const Quote = new Schema({
  author: String,
  quote: String
})

module.exports = mongoose.model('Quote', Quote)
