import {Router} from "express";
import categoriesController from '../controllers/categoriesController';
import itemsController from "../controllers/itemsController";
import {validateData} from "../middlewares/validationMiddleware";
import {itemSchema} from "../schemas/itemSchemas";
import {checkAuth} from "../middlewares/authMiddleware";

const itemsRouter = Router();

itemsRouter.get("/manufacturers", itemsController.getItemManufacturers.bind(itemsController));
itemsRouter.get("/", itemsController.getAllItems.bind(itemsController));
itemsRouter.get("/:id", itemsController.getItem.bind(itemsController));
itemsRouter.post("/", checkAuth, validateData(itemSchema), itemsController.addItem.bind(itemsController));
itemsRouter.put("/:id", checkAuth,  validateData(itemSchema), itemsController.updateItem.bind(itemsController));
itemsRouter.post("/:id/new-arrival", checkAuth, itemsController.addNewArrival.bind(itemsController));

export default itemsRouter;