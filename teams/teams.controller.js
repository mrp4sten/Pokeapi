import { TeamModel } from "./teams.model.js"

/**
 * Bootstrap a new team for a user
 * @param {*} uuid
 */
export const bootstrapTeam = (uuid) => {
  new Promise((resolve, reject) => {
    const newTeam = new TeamModel({
      userId: uuid,
      team: []
    })

    newTeam.save()
      .then(() => resolve())
      .catch(err => reject(err))
  })
}

/**
 * Add a pokemon to the team of the user
 * @param {*} uuid
 * @param {*} pokemon
 */
export const addPokemon = (uuid, pokemon) => {
  return new Promise((resolve, reject) => {
    TeamModel.findOne({ userId: uuid }).exec()
      .then(team => {
        team.team.push(pokemon)
        team.save()
          .then(() => resolve())
          .catch(err => reject(err))
      })
      .catch(err => reject(err))
  })
}

/**
 * Set the team of the user
 * @param {*} uuid
 * @param {*} team
 */
export const setTeam = (uuid, team) => {
  return new Promise((resolve, reject) => {
    TeamModel.findOne({ userId: uuid }).exec()
      .then(teamResult => {
        teamResult.team = team
        teamResult.save()
          .then(() => resolve())
          .catch(err => reject(err))
      })
      .catch(err => reject(err))
  })
}

/**
 * Get the team of the user
 * @param {*} uuid
 * @returns {Promise<TeamModel.team>}
 */
export const getTeam = (uuid) => {
  return new Promise((resolve, reject) => {
    TeamModel.findOne({ userId: uuid }).exec()
      .then(team => {
        resolve(team.team)
      })
      .catch(err => reject(err))
  })
}

/**
 * Clean up all the teams
 */
export const cleanUpTeams = () => {
  return new Promise((resolve, reject) => {
    TeamModel.updateMany({}, { team: [] })
      .then(() => resolve())
      .catch(err => reject(err))
  })
}

/**
 * Remove a pokemon from the team
 * @param {*} uuid
 * @param {*} index
 */
export const removePokemon = (uuid, index) => {
  return new Promise((resolve, reject) => {
    TeamModel.findOne({ userId: uuid }).exec()
      .then(team => {
        team.team.splice(index, 1)
        team.save()
          .then(() => resolve())
          .catch(err => reject(err))
      })
      .catch(err => reject(err))
  })
}