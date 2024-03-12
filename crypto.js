import bcrypt from 'bcrypt'

export const hashPassword = (plainTextPassword, done) => {
  bcrypt.hash(plainTextPassword, 10, done)
}

export const hashPasswordSync = (plainTextPassword) => {
  return bcrypt.hashSync(plainTextPassword, 10)
}

export const unHashPassword = (plainTextPassword, hash, done) => {
  bcrypt.compare(plainTextPassword, hash, done)
}
