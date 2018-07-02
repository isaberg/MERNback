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

app.post('/', (req, res) => {
  Quote.create(req.body)
    .then((quote) => {
      res.json(quote)
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

// app.put('/', (req, res) => {
//   res.send('PUT @ / not functional yet')
// })
//
// app.delete('/', (req, res) => {
//   res.send('DELETE @ / not functional yet')
// })

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`✅ Heroku PORT: ${app.get('port')} 🌟`)
})

app.listen(4000, () => {
  console.log('success: index.js of MERN listening on port 4000')
})
