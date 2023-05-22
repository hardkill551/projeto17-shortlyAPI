import { Router } from "express";
import { validateToken } from "../middlewares/validateSession.middleware.js";
import { getUrl, redirectUrl, urlShorten } from "../controllers/url.controller.js";
import { urlValid } from "../schema/url.schema.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";




const urlRouter = Router()
urlRouter.post("/urls/shorten", validateSchema(urlValid),validateToken ,urlShorten)
urlRouter.get("/urls/:id", getUrl)
urlRouter.get("/urls/open/:shortUrl", redirectUrl)


export default urlRouter