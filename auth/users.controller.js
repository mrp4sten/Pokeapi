import { v4 as uuidv4 } from 'uuid';
import { bootstrapTeam } from '../teams/teams.controller.js';
import { hashPasswordSync, unHashPassword } from '../tools/crypto.js';

let userDatabase = {}

export const addUser = (username, password) => {
  return new Promise((resolve, reject) => {
    const hashedPassword = hashPasswordSync(password)
    let userId = uuidv4()
    userDatabase[userId] = { username, password: hashedPassword }
    bootstrapTeam(userId)
    resolve()
  })
}

export const getUser = (userId) => {
  return new Promise((resolve, reject) => {
    resolve(userDatabase[userId])
  })
}

export const getUserIdFromUserName = (userName) => {
  return new Promise((resolve, reject) => {
    for (let user in userDatabase) {
      if (userDatabase[user].username === userName) {
        let userData = userDatabase[user]
        userData.userId = user
        resolve(userData)
      }
    }
  })
}

export const verifyUserCredentials = async (username, password, done) => {
  let user = await getUserIdFromUserName(username)

  if (user) {
    unHashPassword(password, user.password, done)
  } else {
    done('Missing user')
  }

}

export const cleanUpUsers = () => {
  return new Promise((resolve, reject) => {
    userDatabase = {}
    resolve()
  })
}
