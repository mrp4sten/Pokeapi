import jsonwebtoken from "jsonwebtoken"
import { getUserIdFromUserName, verifyUserCredentials } from "./users.controller.js"

export const loginUser = (req, res) => {
  if (!req.body && !req.body.username || !req.body.password) {
    return res.status(400).json({ message: 'Bad Request' })
  }

  verifyUserCredentials(req.body.username, req.body.password, (error, result) => {
    if (error || !result) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const { sign } = jsonwebtoken
    let user = getUserIdFromUserName(req.body.username)
    const token = sign({ userId: user.userId }, 'your_jwt_secret')

    res.status(200).json({ token: token })
  })
}