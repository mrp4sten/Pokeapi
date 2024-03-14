import express from 'express'
import passport from "passport"
import auth from "../auth.js"
import { getTeam, setTeam } from '../controllers/teams.js'
import { getUser } from '../controllers/users.js'
const teamsRouter = express.Router()
auth(passport)



teamsRouter.route('/')
  .get(passport.authenticate('jwt', { session: false }), (req, res, next) => {
    let user = getUser(req.user.userId)
    res.status(200).json({
      trainer: user.username,
      team: getTeam(req.user.userId)
    })
  })
  .put(passport.authenticate('jwt', { session: false }), (req, res, next) => {
    setTeam(req.user.userId, req.body.team)
    res.status(200).send()
  })

teamsRouter.route('/pokemons')
  .post((req, res) => {
    res.send('Hello World')
  })
  .delete((req, res) => {
    res.send('Hello World')
  })

export default teamsRouter
