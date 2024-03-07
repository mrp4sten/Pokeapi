import express from "express"
import passport from "passport"
import auth from "./auth.js"

const app = express()
auth(passport)

app.post('/login', (req, res) => {
  res.status(200).json({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.xPBQIypGa9i-DZCCx4hqbSaWcFEd0sFuWZ92N516qg0'})
})

app.post('/team/pokemons', (req, res) => {
  res.send('Hello World')
})

app.get('/team', passport.authenticate('jwt', {session: false}), (req, res) => {
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
