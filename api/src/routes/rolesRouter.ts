import {Router} from "express";
import rolesController from '../controllers/rolesController';
import {checkAuthWithRole} from "../middlewares/authMiddleware";
import {ADMIN_ROLE} from "../constants/roles";

const rolesRouter = Router();

rolesRouter.get("/", checkAuthWithRole(ADMIN_ROLE), rolesController.getAllRoles);

export default rolesRouter;