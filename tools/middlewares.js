import bodyParser from "body-parser";
import { init, protectWithJwt } from "./auth.middleware.js";

export const setupMiddlewares = (app) => {
  app.use(bodyParser.json())
  init()
  app.use(protectWithJwt)
}
