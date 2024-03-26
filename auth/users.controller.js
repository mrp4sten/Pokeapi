import { v4 as uuidv4 } from 'uuid';
import { bootstrapTeam } from '../teams/teams.controller.js';
import { hashPasswordSync, unHashPassword } from '../tools/crypto.js';
import { UserModel } from './user.model.js';

/**
 * Add a new user to the database
 * @param {*} username
 * @param {*} password
 */
export const addUser = (username, password) => new Promise((resolve, reject) => {
  const hashedPassword = hashPasswordSync(password);
  let userId = uuidv4();
  const newUser = new UserModel({
    userId,
    username,
    password: hashedPassword
  });

  newUser.save()
    .then(() => bootstrapTeam(userId))
    .then(() => resolve())
    .catch(err => reject(err));
});

/**
 * Get a user from the database by userId
 * @param {*} userId
 * @returns {Promise<UserModel>}
 */
export const getUser = (userId) => new Promise((resolve, reject) => {
  UserModel.findOne({ userId }).exec()
    .then(result => resolve(result))
    .catch(err => reject(err));
});

/**
 * Get a user from the database by username
 * @param {*} userName
 * @returns {Promise<UserModel>}
 */
export const getUserIdFromUserName = (userName) => new Promise((resolve, reject) => {
  UserModel.findOne({ username: userName }).exec()
    .then(result => resolve(result))
    .catch(err => reject(err));
});

/**
 * Verify the user credentials
 * @param {*} username
 * @param {*} password
 * @param {*} done
 */
export const verifyUserCredentials = async (username, password, done) => {
  let user = await getUserIdFromUserName(username)

  if (user) {
    unHashPassword(password, user.password, done)
  } else {
    done('Missing user')
  }

}

/**
 * Clean up the users collection
 * @returns {Promise<UserModel[]>}
 */
export const cleanUpUsers = () => new Promise((resolve, reject) => {
  UserModel.deleteMany({}).exec()
    .then(result => resolve(result))
    .catch(err => reject(err));
});
