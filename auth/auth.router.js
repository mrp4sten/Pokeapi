import express from "express"
import { loginUser } from "./auth.http.js"
const authRouter = express.Router()

/**
 * Define the routes for the auth resource
 */
authRouter.route('/login')
  .post(loginUser)

export default authRouter