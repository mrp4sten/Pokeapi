import bodyParser from "body-parser";
import { init, protectWithJwt } from "./auth.middleware.js";

/**
 * Setup the middlewares for the express app
 */
export const setupMiddlewares = (app) => {
  app.use(bodyParser.json())
  init()
  app.use(protectWithJwt)
}
