const teamsDatabase = {}

export const bootstrapTeam = (uuid) => {
  teamsDatabase[uuid] = []
}

export const addPokemon = (uuid, pokemon) => {
  teamsDatabase[uuid].push(pokemon)
}

export const setTeam = (uuid, team) => {
  teamsDatabase[uuid] = team
}

export const getTeam = (uuid) => {
  return teamsDatabase[uuid]
}