const express = require('express')
const app = express()

app.post('/team/pokemons', (req, res) => {
  res.send('Hello World')
})

app.get('/team', (req, res) => {
  res.send('Hello World')
})

app.delete('/team/pokemons/:id', (req, res) => {
  res.send('Hello World')
})

app.put('/team', (req, res) => {
  res.send('Hello World')
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
