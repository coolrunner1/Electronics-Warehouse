import {Router} from "express";
import itemsController from "../controllers/itemsController";
import {validateData} from "../middlewares/validationMiddleware";
import {itemSchema} from "../schemas/itemSchemas";
import {checkAuthWithRole} from "../middlewares/authMiddleware";
import {EMPLOYEE_ROLE} from "../constants/roles";
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

const itemsRouter = Router();

itemsRouter.get("/manufacturers", itemsController.getItemManufacturers.bind(itemsController));
itemsRouter.get("/", itemsController.getAllItems.bind(itemsController));
itemsRouter.get("/:id", itemsController.getItem.bind(itemsController));
itemsRouter.post("/", checkAuthWithRole(EMPLOYEE_ROLE), validateData(itemSchema), itemsController.addItem.bind(itemsController));
itemsRouter.put("/:id", checkAuthWithRole(EMPLOYEE_ROLE),  validateData(itemSchema), itemsController.updateItem.bind(itemsController));
itemsRouter.post("/:id/new-arrival", checkAuthWithRole(EMPLOYEE_ROLE), itemsController.addNewArrival.bind(itemsController));
itemsRouter.patch("/:id/image", checkAuthWithRole(EMPLOYEE_ROLE), upload.single('image'), itemsController.updateItemImage.bind(itemsController));
itemsRouter.patch("/:id/image/remove", checkAuthWithRole(EMPLOYEE_ROLE), itemsController.removeItemImage.bind(itemsController));


export default itemsRouter;