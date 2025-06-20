import {Router} from "express";
import usersController from "../controllers/usersController";
import {checkAuthWithRole, checkAuthWithUserId, checkClientIdAuthenticityInBody} from "../middlewares/authMiddleware";
import {ADMIN_ROLE} from "../constants/roles";
import {validateData} from "../middlewares/validationMiddleware";
import {userSchema, userUpdateSchema} from "../schemas/userSchemas";

const usersRouter = Router();

usersRouter.get("/", checkAuthWithRole(ADMIN_ROLE), usersController.getAllUsers.bind(usersController));
usersRouter.get("/:id", checkAuthWithUserId(), usersController.getUser.bind(usersController));
usersRouter.post("/", checkAuthWithRole(ADMIN_ROLE), validateData(userSchema), usersController.addUser.bind(usersController));
usersRouter.put("/:id", checkAuthWithUserId(), checkClientIdAuthenticityInBody(), validateData(userUpdateSchema), usersController.updateUser.bind(usersController));
usersRouter.delete("/:id", checkAuthWithUserId(), usersController.deleteUserById.bind(usersController));

export default usersRouter;