import {Router} from "express";
import authController from "../controllers/authController";
import {validateData} from "../middlewares/validationMiddleware";
import {LoginSchema, RegisterSchema} from "../schemas/authSchemas";

const authRouter = Router();

authRouter.post("/login", validateData(LoginSchema), authController.login.bind(authController));
authRouter.post("/register", validateData(RegisterSchema), authController.register.bind(authController));

export default authRouter;