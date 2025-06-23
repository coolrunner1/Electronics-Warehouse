import {Router} from "express";
import clientsController from '../controllers/clientsController';
import {validateData} from "../middlewares/validationMiddleware";
import {OrganizationSchema} from "../schemas/organizationSchemas";
import {
    checkAuth,
    checkAuthWithRole
} from "../middlewares/authMiddleware";
import {EMPLOYEE_ROLE} from "../constants/roles";

const clientsRouter = Router();

clientsRouter.get("/", checkAuthWithRole(EMPLOYEE_ROLE), clientsController.getAllClients);
clientsRouter.get("/my", checkAuth(), clientsController.getMyClient);
clientsRouter.get("/:id", checkAuthWithRole(EMPLOYEE_ROLE), clientsController.getClient);
clientsRouter.post("/", checkAuthWithRole(EMPLOYEE_ROLE), validateData(OrganizationSchema), clientsController.addClient);
clientsRouter.put("/my", checkAuth(), validateData(OrganizationSchema), clientsController.updateMyClient)
clientsRouter.put("/:id", checkAuthWithRole(EMPLOYEE_ROLE), validateData(OrganizationSchema), clientsController.updateClient)

export default clientsRouter;