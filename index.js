import bodyParser from "body-parser"
import express from "express"
import jsonwebtoken from "jsonwebtoken"
import passport from "passport"
import auth from "./auth.js"
import { addUser, verifyUserCredentials } from "./controllers/users.js"

const app = express()
auth(passport)
app.use(bodyParser.json())

addUser('mrp4sten', '1234')

app.post('/login', (req, res) => {
  if (!req.body && !req.body.username || !req.body.password) {
    return res.status(400).json({ message: 'Bad Request' })
  }

  verifyUserCredentials(req.body.username, req.body.password, (error, result) => {
    if (error || !result) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const { sign } = jsonwebtoken
    const token = sign({ userId: result }, 'your_jwt_secret')
    
    res.status(200).json({ token: token })
  })
})

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
