import {Router} from "express";
import {validateData} from "../middlewares/validationMiddleware";
import {organizationSchema} from "../schemas/organizationSchemas";
import suppliersController from "../controllers/suppliersController";

const suppliersRouter = Router();

suppliersRouter.get("/", suppliersController.getSuppliers.bind(suppliersController));
suppliersRouter.post("/", validateData(organizationSchema), suppliersController.addSupplier.bind(suppliersController));
suppliersRouter.put("/:id", validateData(organizationSchema), suppliersController.updateSupplier.bind(suppliersController))

export default suppliersRouter;