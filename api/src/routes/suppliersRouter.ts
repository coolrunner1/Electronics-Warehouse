import {Router} from "express";
import {validateData} from "../middlewares/validationMiddleware";
import {organizationSchema} from "../schemas/organizationSchemas";
import suppliersController from "../controllers/suppliersController";
import {checkAuthWithRole} from "../middlewares/authMiddleware";
import {EMPLOYEE_ROLE} from "../constants/roles";

const suppliersRouter = Router();

suppliersRouter.get("/", checkAuthWithRole(EMPLOYEE_ROLE), suppliersController.getSuppliers.bind(suppliersController));
suppliersRouter.post("/", checkAuthWithRole(EMPLOYEE_ROLE), validateData(organizationSchema), suppliersController.addSupplier.bind(suppliersController));
suppliersRouter.put("/:id", checkAuthWithRole(EMPLOYEE_ROLE), validateData(organizationSchema), suppliersController.updateSupplier.bind(suppliersController))

export default suppliersRouter;