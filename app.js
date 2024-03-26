import express from "express"
import authRouter from "./auth/auth.router.js"
import teamsRouter from "./teams/teams.router.js"
import { connectToDatabase } from "./tools/database.js"
import { setupMiddlewares } from "./tools/middlewares.js"

// Create an express app
const app = express()

// Connect to the database
connectToDatabase()

// Setup middlewares
setupMiddlewares(app)

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World')
})

// Define a route handler for the /auth route
app.use('/auth', authRouter)

// Define a route handler for the /teams route
app.use('/teams', teamsRouter)

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
})

export default app
