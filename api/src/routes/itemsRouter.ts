import {Router} from "express";
import categoriesController from '../controllers/categoriesController';
import itemsController from "../controllers/itemsController";
import {validateData} from "../middlewares/validationMiddleware";
import {itemSchema} from "../schemas/itemSchemas";

const itemsRouter = Router();

itemsRouter.get("/manufacturers", itemsController.getItemManufacturers);
itemsRouter.get("/", itemsController.getAllItems);
itemsRouter.get("/:id", itemsController.getItem);
itemsRouter.post("/", validateData(itemSchema), itemsController.addItem);
itemsRouter.put("/:id", validateData(itemSchema), itemsController.updateItem);
itemsRouter.post("/:id/newArrival", itemsController.addNewArrival);

export default itemsRouter;