const mongoose = require('./connection.js')
const Quote = require('./model.js')

Quote.find({}).remove(() => {
  let chesterton = Quote.create({
    author: 'GK Chesterton',
    quote: 'The reason angels can fly is because they take themselves lightly.'
  }).then((quote) => {
    quote.save(err => console.log(err))
  })

  let teddy = Quote.create({
    author: 'Teddy Roosevelt',
    quote: 'Speak softly and carry a big stick; you will go far.'
  }).then((quote) => {
    quote.save(err => console.log(err))
  })

  let romero = Quote.create({
    author: 'Archbishop Romero',
    quote: 'Aspire not to have more, but to be more.'
  }).then((user) => {
    user.save(err => console.log(err))
  })
})
