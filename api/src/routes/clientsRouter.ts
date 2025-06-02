import {Router} from "express";
import clientsController from '../controllers/clientsController';
import {validateData} from "../middlewares/validationMiddleware";
import {organizationSchema} from "../schemas/organizationSchemas";

const clientsRouter = Router();

clientsRouter.get("/", clientsController.getAllClients.bind(clientsController));
clientsRouter.get("/:id", clientsController.getClient.bind(clientsController));
clientsRouter.post("/", validateData(organizationSchema), clientsController.addClient.bind(clientsController));
clientsRouter.put("/:id", validateData(organizationSchema), clientsController.updateClient.bind(clientsController))

export default clientsRouter;