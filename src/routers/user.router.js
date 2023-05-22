import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { loginSchema, signUpSchema } from "../schema/user.schema.js";
import { validateUser } from "../middlewares/validateUser.middleware.js";
import { signIn, signUp } from "../controllers/user.controller.js";




const userRouter = Router()
userRouter.post("/signup", validateSchema(signUpSchema), validateUser, signUp)
userRouter.post("/signin", validateSchema(loginSchema), signIn)


export default userRouter