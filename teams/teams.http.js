import axios from "axios";
import { getUser } from "../auth/users.controller.js";
import { addPokemon, getTeam, removePokemon, setTeam } from "./teams.controller.js";

export const getTeamFromUser = (req, res) => {
  let user = getUser(req.user.userId)
  res.status(200).json({
    trainer: user.username,
    team: getTeam(req.user.userId)
  })
}

export const setTeamToUser = (req, res) => {
  setTeam(req.user.userId, req.body.team)
  res.status(200).send()
}

export const addPokemonToTeam = (req, res) => {
  let pokemonName = req.body.name
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
    .then((response) => {
      let pokemon = {
        name: pokemonName,
        pokedexNumber: response.data.id
      }
      addPokemon(req.user.userId, pokemon)
      res.status(201).json(pokemon)
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ message: error })
    })
}

export const deletePokemonFromTeam = (req, res) => {
  removePokemon(req.user.userId, req.params.pokeId)
  res.status(200).send()
}