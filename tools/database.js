import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()

const user = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
}

const db = process.env.ENV === 'development' ? 'TestDB' : process.env.DB_NAME;

export const connectToDatabase = () => {
  return mongoose.connect(`mongodb+srv://${user.username}:${user.password}@cluster0.yooagvb.mongodb.net/${db}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to the database');
  });
}