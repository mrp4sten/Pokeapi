import bodyParser from "body-parser";
import { init, protectWithJwt } from "./auth.js";

export const setupMiddlewares = (app) => {
  app.use(bodyParser.json())
  init()
  app.use(protectWithJwt)
}
