import { Router } from "express";
import { validateToken } from "../middlewares/validateSession.middleware.js";
import { urlShorten } from "../controllers/url.controller.js";
import { urlValid } from "../schema/url.schema.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";




const urlRouter = Router()
urlRouter.post("/urls/shorten", validateSchema(urlValid),validateToken ,urlShorten)


export default urlRouter