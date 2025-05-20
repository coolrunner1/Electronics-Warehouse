import {Router} from "express";
import clientsController from '../controllers/clientsController';
import {validateData} from "../middlewares/validationMiddleware";
import {organizationSchema} from "../schemas/organizationSchemas";

const clientsRouter = Router();

clientsRouter.get("/", clientsController.getAllClients);
clientsRouter.get("/:id", clientsController.getClient);
clientsRouter.post("/", validateData(organizationSchema), clientsController.addClient);
clientsRouter.put("/:id", validateData(organizationSchema), clientsController.updateClient)

export default clientsRouter;