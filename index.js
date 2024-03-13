import bodyParser from "body-parser"
import express from "express"

import authRouter from "./routers/auth.js"
import teamsRouter from "./routers/teams.js"

const app = express()
app.use(bodyParser.json())

app.use('/auth', authRouter)
app.use('/teams', teamsRouter)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

export default app
