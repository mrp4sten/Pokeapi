import express from 'express'
import { addPokemonToTeam, deletePokemonFromTeam, getTeamFromUser, setTeamToUser } from './teams.http.js'
const teamsRouter = express.Router()

teamsRouter.route('/')
  .get(getTeamFromUser)
  .put(setTeamToUser)

teamsRouter.route('/pokemons')
  .post(addPokemonToTeam)

teamsRouter.route('/pokemons/:pokeId')
  .delete(deletePokemonFromTeam)

export default teamsRouter
