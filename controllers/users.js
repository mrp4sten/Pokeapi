import { v4 as uuidv4 } from 'uuid';
import { hashPasswordSync, unHashPassword } from '../crypto.js';
import { bootstrapTeam } from './teams.js';

let userDatabase = {}

export const addUser = (username, password) => {
  const hashedPassword = hashPasswordSync(password)
  let userId = uuidv4()
  userDatabase[userId] = { username, password: hashedPassword }
  bootstrapTeam(userId)
}

export const getUser = (userId) => {
  return userDatabase[userId]
}

export const getUserIdFromUserName = (userName) => {
  for (let user in userDatabase) {
    if (userDatabase[user].username === userName) {
      let userData = userDatabase[user]
      userData.userId = user
      return userData
    }
  }
}

export const verifyUserCredentials = (username, password, done) => {
  let user = getUserIdFromUserName(username)

  if (user) {
    unHashPassword(password, user.password, done)
  } else {
    done('Missing user')
  }

}

export const cleanUpUsers = () => {
  userDatabase = {}
}
