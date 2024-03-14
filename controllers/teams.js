const teamsDatabase = {}

export const bootstrapTeam = (uuid) => {
  teamsDatabase[uuid] = []
}

export const addPokemon = (uuid, pokemonName) => {
  teamsDatabase[uuid].push({ name: pokemonName })
}

export const setTeam = (uuid, team) => {
  teamsDatabase[uuid] = team
}

export const getTeam = (uuid) => {
  return teamsDatabase[uuid]
}