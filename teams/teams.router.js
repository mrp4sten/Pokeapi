import express from 'express'
import { addPokemonToTeam, deletePokemonFromTeam, getTeamFromUser, setTeamToUser } from './teams.http.js'
const teamsRouter = express.Router()

/**
 * Define the routes for the teams resource
 */
teamsRouter.route('/')
  .get(getTeamFromUser)
  .put(setTeamToUser)

/**
 * Define the routes for the pokemons resource
 */
teamsRouter.route('/pokemons')
  .post(addPokemonToTeam)

/**
 * Define the routes for the pokemons resource
 */
teamsRouter.route('/pokemons/:pokeId')
  .delete(deletePokemonFromTeam)

export default teamsRouter
