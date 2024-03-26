import mongoose from "mongoose";

/**
 * UserModel is a Mongoose model that represents a user.
 */
export const UserModel = mongoose.model('UserModel', {
  userId: String,
  username: String,
  password: String
})