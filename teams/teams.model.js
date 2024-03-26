import mongoose from "mongoose";

export const TeamModel = mongoose.model('TeamModel', {
  userId: String,
  team: []
})