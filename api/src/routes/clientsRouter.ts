import {Router} from "express";
import clientsController from '../controllers/clientsController';
import {validateData} from "../middlewares/validationMiddleware";
import {OrganizationSchema} from "../schemas/organizationSchemas";
import {checkAuthWithClientId, checkAuthWithClientIdOrRoleId, checkAuthWithRole} from "../middlewares/authMiddleware";
import {EMPLOYEE_ROLE} from "../constants/roles";

const clientsRouter = Router();

clientsRouter.get("/", checkAuthWithRole(EMPLOYEE_ROLE), clientsController.getAllClients.bind(clientsController));
clientsRouter.get("/:id", checkAuthWithClientIdOrRoleId(EMPLOYEE_ROLE), clientsController.getClient.bind(clientsController));
clientsRouter.post("/", checkAuthWithRole(EMPLOYEE_ROLE), validateData(OrganizationSchema), clientsController.addClient.bind(clientsController));
clientsRouter.put("/:id", checkAuthWithClientIdOrRoleId(EMPLOYEE_ROLE), validateData(OrganizationSchema), clientsController.updateClient.bind(clientsController))

export default clientsRouter;