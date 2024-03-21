let teamsDatabase = {}

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

export const cleanUpTeams = () => {
  for(let user in teamsDatabase) {
    teamsDatabase[user] = []
  }
}

export const removePokemon = (uuid, index) => {
  if (teamsDatabase[uuid][index]) {
    teamsDatabase[uuid].splice(index, 1)
  }
}