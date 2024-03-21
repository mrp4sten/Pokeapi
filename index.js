import bodyParser from "body-parser"
import express from "express"

import authRouter from "./auth/auth.router.js"
import teamsRouter from "./teams/teams.router.js"

const app = express()
app.use(bodyParser.json())

app.use('/auth', authRouter)
app.use('/teams', teamsRouter)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

export default app
