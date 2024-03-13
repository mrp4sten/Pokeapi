import bodyParser from "body-parser"
import express from "express"
import passport from "passport"
import auth from "./auth.js"

import authRouter from "./routers/auth.js"

const app = express()
auth(passport)
app.use(bodyParser.json())

app.use('/auth', authRouter)

app.post('/team/pokemons', (req, res) => {
  res.send('Hello World')
})

app.get('/team', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.status(200).send('Hello World')
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

export default app
