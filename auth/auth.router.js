import express from "express"
import { loginUser } from "./auth.http.js"
const authRouter = express.Router()

authRouter.route('/login')
  .post(loginUser)

export default authRouter