import express from "express"
import authRouter from "./auth/auth.router.js"
import teamsRouter from "./teams/teams.router.js"
import { setupMiddlewares } from "./tools/middlewares.js"

const app = express()

setupMiddlewares(app)
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.use('/auth', authRouter)
app.use('/teams', teamsRouter)

app.listen(3000, () => {
  console.log('Server started on port 3000');
})

export default app
