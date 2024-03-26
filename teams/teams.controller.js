let teamsDatabase = {}

export const bootstrapTeam = (uuid) => {
  new Promise((resolve, reject) => {
    teamsDatabase[uuid] = []
    resolve()
  })
}

export const addPokemon = (uuid, pokemon) => {
  return new Promise((resolve, reject) => {
    teamsDatabase[uuid].push(pokemon)
    resolve()
  })
}

export const setTeam = (uuid, team) => {
  return new Promise((resolve, reject) => {
    teamsDatabase[uuid] = team
    resolve()
  })
}

export const getTeam = (uuid) => {
  return new Promise((resolve, reject) => {
    resolve(teamsDatabase[uuid])
  })
}

export const cleanUpTeams = () => {
  return new Promise((resolve, reject) => {
    for(let user in teamsDatabase) {
      teamsDatabase[user] = []
    }
    resolve()
  })
}

export const removePokemon = (uuid, index) => {
  return new Promise((resolve, reject) => {
    if (teamsDatabase[uuid][index]) {
      teamsDatabase[uuid].splice(index, 1)
    }
    resolve()
  })
}