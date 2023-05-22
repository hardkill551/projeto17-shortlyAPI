import { Router } from "express";
import { validateToken } from "../middlewares/validateSession.middleware.js";
import { urlShorten } from "../controllers/url.controller.js";



const urlRouter = Router()
urlRouter.post("/urls/shorten", validateToken ,urlShorten)


export default urlRouter