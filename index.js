const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Quote = require('./db/model.js')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  Quote.find()
    .then((quotes) => {
      res.json(quotes)
    })
    .catch((err) => {
      console.log(err)
    })
})

// Example from mariya: need to see in log what the HTTP req/res looks like
// createItem: (req, res )=>{
//         Item.create({name: res.req.body.data
//         }).then(() => {
//             res.redirect('/items')
//
//         })
//     }

app.post('/', (req, res) => {
  Quote.create({
    author: req.body.author,
    quote: req.body.quote
  })
    .then((quote) => {
      res.json(quote)
    })
    .then(() => {
      res.redirect('/')
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get('/:id', (req, res) => {
  Quote.findById(req.params.id)
    .then((quote) => {
      res.json(quote)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.put('/:id', (req, res) => {
  var updateQuote = req.body
  delete updateQuote._id
  Quote.updateOne({_id: new ObjectID(req.params.id)}, updateQuote, function(err, doc) {
    if (err) {
      handleError(res, err.message, 'Failed quote update')
    } else {
      res.status(204).end()
    }
  })
})

app.delete('/:id', (req, res) => {
  Quote.deleteOne({_id: new ObjectID(req.params.id)}, function (err, result) {
    if (err) {
      handleError(res, err.message, 'Failed to delete quote')
    } else {
      res.status(204).end()
    }
  })
})

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`✅ Heroku PORT: ${app.get('port')} 🌟`)
})

app.listen(4000, () => {
  console.log('success: index.js of MERN listening on port 4000')
})
