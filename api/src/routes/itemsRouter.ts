import {Router} from "express";
import itemsController from "../controllers/itemsController";
import {validateData} from "../middlewares/validationMiddleware";
import {ItemDetailsDescription, ItemDetailsSpecs, ItemSchema} from "../schemas/itemSchemas";
import {checkAuthWithRole} from "../middlewares/authMiddleware";
import {EMPLOYEE_ROLE} from "../constants/roles";
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

const itemsRouter = Router();

itemsRouter.get("/manufacturers", itemsController.getItemManufacturers);
itemsRouter.get("/", itemsController.getAllItems);
itemsRouter.get("/:id", itemsController.getItem);
itemsRouter.post("/", checkAuthWithRole(EMPLOYEE_ROLE), validateData(ItemSchema), itemsController.addItem);
itemsRouter.put("/:id", checkAuthWithRole(EMPLOYEE_ROLE),  validateData(ItemSchema), itemsController.updateItem);
itemsRouter.post("/:id/new-arrival", checkAuthWithRole(EMPLOYEE_ROLE), itemsController.addNewArrival);
itemsRouter.patch("/:id/image", checkAuthWithRole(EMPLOYEE_ROLE), upload.single('image'), itemsController.updateItemImage);
itemsRouter.patch("/:id/image/remove", checkAuthWithRole(EMPLOYEE_ROLE), itemsController.removeItemImage);
itemsRouter.patch("/:id/description", checkAuthWithRole(EMPLOYEE_ROLE), validateData(ItemDetailsDescription), itemsController.updateItemDetailsDescription);
itemsRouter.patch("/:id/specs", checkAuthWithRole(EMPLOYEE_ROLE), validateData(ItemDetailsSpecs), itemsController.updateItemDetailsSpecs);

export default itemsRouter;