import {Router} from "express";
import usersController from "../controllers/usersController";
import {checkAuthWithRole, checkAuthWithUserId, checkClientIdAuthenticityInBody} from "../middlewares/authMiddleware";
import {ADMIN_ROLE} from "../constants/roles";
import {validateData} from "../middlewares/validationMiddleware";
import {UserSchema, UserPatchSchema, UserUpdatePasswordSchema, UserUpdateSchema} from "../schemas/userSchemas";

const usersRouter = Router();

usersRouter.get("/", checkAuthWithRole(ADMIN_ROLE), usersController.getAllUsers.bind(usersController));
usersRouter.get("/:id", checkAuthWithUserId(), usersController.getUser.bind(usersController));
usersRouter.post("/", checkAuthWithRole(ADMIN_ROLE), validateData(UserSchema), usersController.addUser.bind(usersController));
usersRouter.put("/:id", checkAuthWithRole(ADMIN_ROLE), validateData(UserUpdateSchema), usersController.updateUser.bind(usersController));
usersRouter.patch("/:id", checkAuthWithUserId(), validateData(UserPatchSchema), usersController.patchUser.bind(usersController));
usersRouter.patch("/:id/password", checkAuthWithUserId(), validateData(UserUpdatePasswordSchema), usersController.updateUserPassword.bind(usersController));
usersRouter.delete("/:id", checkAuthWithUserId(), usersController.deleteUserById.bind(usersController));

export default usersRouter;