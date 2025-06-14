import {Router} from "express";
import authController from "../controllers/authController";
import {validateData} from "../middlewares/validationMiddleware";
import {loginSchema, registerSchema} from "../schemas/authSchemas";

const authRouter = Router();

authRouter.post("/login", validateData(loginSchema), authController.login.bind(authController));
authRouter.post("/register", validateData(registerSchema), authController.register.bind(authController));

export default authRouter;