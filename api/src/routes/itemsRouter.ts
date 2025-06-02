import {Router} from "express";
import categoriesController from '../controllers/categoriesController';
import itemsController from "../controllers/itemsController";
import {validateData} from "../middlewares/validationMiddleware";
import {itemSchema} from "../schemas/itemSchemas";

const itemsRouter = Router();

itemsRouter.get("/manufacturers", itemsController.getItemManufacturers.bind(itemsController));
itemsRouter.get("/", itemsController.getAllItems.bind(itemsController));
itemsRouter.get("/:id", itemsController.getItem.bind(itemsController));
itemsRouter.post("/", validateData(itemSchema), itemsController.addItem.bind(itemsController));
itemsRouter.put("/:id", validateData(itemSchema), itemsController.updateItem.bind(itemsController));
itemsRouter.post("/:id/newArrival", itemsController.addNewArrival.bind(itemsController));

export default itemsRouter;