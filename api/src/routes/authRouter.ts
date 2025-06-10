import {Router} from "express";
import authController from "../controllers/authController";
import {validateData} from "../middlewares/validationMiddleware";
import {loginSchema} from "../schemas/authSchemas";

const authRouter = Router();

authRouter.post("/login", validateData(loginSchema), authController.login.bind(authController));

export default authRouter;