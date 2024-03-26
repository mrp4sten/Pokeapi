import bcrypt from 'bcrypt'

/**
 * Hash a password with bcrypt
 * @param {*} plainTextPassword
 * @param {*} done
 */
export const hashPassword = (plainTextPassword, done) => {
  bcrypt.hash(plainTextPassword, 10, done)
}


/**
 * Hash a password with bcrypt
 * @param {*} plainTextPassword
 * @returns {string}
 */
export const hashPasswordSync = (plainTextPassword) => {
  return bcrypt.hashSync(plainTextPassword, 10)
}

/**
 * Unhash a password with bcrypt
 * @param {*} plainTextPassword
 * @param {*} hash
 * @param {*} done
 */
export const unHashPassword = (plainTextPassword, hash, done) => {
  bcrypt.compare(plainTextPassword, hash, done)
}
