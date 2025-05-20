import {Router} from "express";
import {validateData} from "../middlewares/validationMiddleware";
import {organizationSchema} from "../schemas/organizationSchemas";
import suppliersController from "../controllers/suppliersController";

const suppliersRouter = Router();

suppliersRouter.get("/", suppliersController.getSuppliers);
suppliersRouter.post("/", validateData(organizationSchema), suppliersController.addSupplier);
suppliersRouter.put("/:id", validateData(organizationSchema), suppliersController.updateSupplier)

export default suppliersRouter;