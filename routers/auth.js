import express from "express"
import jsonwebtoken from "jsonwebtoken"
import { addUser, verifyUserCredentials } from "../controllers/users.js"
const authRouter = express.Router()

addUser('mrp4sten', '1234')

authRouter.route('/')
  .get((req, res) => {
    res.send('Auth Router')
  })

authRouter.route('/login')
  .post((req, res) => {
    if (!req.body && !req.body.username || !req.body.password) {
      return res.status(400).json({ message: 'Bad Request' })
    }

    verifyUserCredentials(req.body.username, req.body.password, (error, result) => {
      if (error || !result) {
        return res.status(401).json({ message: 'Unauthorized' })
      }

      const { sign } = jsonwebtoken
      const token = sign({ userId: result }, 'your_jwt_secret')

      res.status(200).json({ token: token })
    })
  })

export default authRouter