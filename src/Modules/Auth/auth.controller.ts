import { Router } from "express";
import authServices from "./services/auth.services";
import { asyncHandler, authMiddleware, validationMiddleware } from "../../Middlewares";
import { signUpSchema } from "./auth.schema";

const authController = Router();


authController.post('/signup',validationMiddleware(signUpSchema),asyncHandler(authServices.SignUp))
authController.post('/signin',asyncHandler(authServices.SignIn))
authController.get('/profile',authMiddleware(),asyncHandler(authServices.GetProfile))




export {authController}