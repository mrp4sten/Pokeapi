import express from 'express'
import passport from "passport"
import auth from "../auth.js"
const teamsRouter = express.Router()
auth(passport)

teamsRouter.route('/')
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {
    res.status(200).send('Hello World')
  })
  .put((req, res) => {
    res.send('Hello World')
  })

teamsRouter.route('/pokemons')
  .post((req, res) => {
    res.send('Hello World')
  })
  .delete((req, res) => {
    res.send('Hello World')
  })

export default teamsRouter
