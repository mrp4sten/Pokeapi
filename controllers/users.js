import { v4 as uuidv4 } from 'uuid';
import { hashPasswordSync, unHashPassword } from '../crypto.js';

const userDatabase = {}

export const addUser = (username, password) => {
  const hashedPassword = hashPasswordSync(password)
  userDatabase[uuidv4()] = { username, password: hashedPassword }
}

const getUserIdFromUserName = (userName) => {
  for(let user in userDatabase) {
    if(userDatabase[user].username === userName) {
      return userDatabase[user]
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
