import {Router} from "express";
import rolesController from '../controllers/rolesController';

const rolesRouter = Router();

rolesRouter.get("/", rolesController.getAllRoles.bind(rolesController));

export default rolesRouter;