import mongoose from "mongoose";

export const UserModel = mongoose.model('UserModel', {
  userId: String,
  username: String,
  password: String
})