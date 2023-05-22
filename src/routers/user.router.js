import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { loginSchema, signUpSchema } from "../schema/user.schema.js";
import { validateUser } from "../middlewares/validateUser.middleware.js";
import { signIn, signUp, userMe } from "../controllers/user.controller.js";
import { validateToken } from "../middlewares/validateSession.middleware.js";




const userRouter = Router()
userRouter.post("/signup", validateSchema(signUpSchema), validateUser, signUp)
userRouter.post("/signin", validateSchema(loginSchema), signIn)
userRouter.get("/users/me", validateToken, userMe)


export default userRouter