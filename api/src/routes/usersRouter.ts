import {Router} from "express";
import usersController from "../controllers/usersController";
import {
    checkAuth,
    checkAuthWithRole,
} from "../middlewares/authMiddleware";
import {ADMIN_ROLE} from "../constants/roles";
import {validateData} from "../middlewares/validationMiddleware";
import {UserSchema, UserPatchSchema, UserUpdatePasswordSchema, UserUpdateSchema} from "../schemas/userSchemas";

const usersRouter = Router();

usersRouter.get("/", checkAuthWithRole(ADMIN_ROLE), usersController.getAllUsers);
usersRouter.get("/my", checkAuth(), usersController.getMyUser);
usersRouter.get("/:id", checkAuthWithRole(ADMIN_ROLE), usersController.getUser);
usersRouter.post("/", checkAuthWithRole(ADMIN_ROLE), validateData(UserSchema), usersController.addUser);
usersRouter.put("/:id", checkAuthWithRole(ADMIN_ROLE), validateData(UserUpdateSchema), usersController.updateUser);
usersRouter.patch("/my", checkAuth(), validateData(UserPatchSchema), usersController.patchMyUser);
usersRouter.patch("/my/password", checkAuth(), validateData(UserUpdatePasswordSchema), usersController.updateMyPassword);
usersRouter.patch("/:id", checkAuthWithRole(ADMIN_ROLE), validateData(UserPatchSchema), usersController.patchUser);
usersRouter.patch("/:id/password", checkAuthWithRole(ADMIN_ROLE), validateData(UserUpdatePasswordSchema), usersController.updateUserPassword);
usersRouter.delete("/:id", checkAuthWithRole(ADMIN_ROLE), usersController.deleteUserById);

export default usersRouter;