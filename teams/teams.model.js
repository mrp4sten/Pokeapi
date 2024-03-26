import mongoose from "mongoose";

/**
 * TeamModel is a Mongoose model that represents a user's team.
 */
export const TeamModel = mongoose.model('TeamModel', {
  userId: String,
  team: []
})