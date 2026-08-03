import { Router } from "express"
import { getCurrentUser, loginUser, logoutUser, refreshAccessToken, registerUser } from "../controllers/user.controller.js"
import { verifyJwt } from "../middlewares/verifyJwt.js"

const userRouter = Router();

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.post("/logout", verifyJwt, logoutUser)
userRouter.get("/profile", verifyJwt, getCurrentUser)
userRouter.post("/refresh-token", refreshAccessToken)

export default userRouter