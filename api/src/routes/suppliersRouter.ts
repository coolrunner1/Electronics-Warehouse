import {Router} from "express";
import {validateData} from "../middlewares/validationMiddleware";
import {OrganizationSchema} from "../schemas/organizationSchemas";
import suppliersController from "../controllers/suppliersController";
import {checkAuthWithRole} from "../middlewares/authMiddleware";
import {EMPLOYEE_ROLE} from "../constants/roles";

const suppliersRouter = Router();

suppliersRouter.get("/", checkAuthWithRole(EMPLOYEE_ROLE), suppliersController.getSuppliers.bind(suppliersController));
suppliersRouter.post("/", checkAuthWithRole(EMPLOYEE_ROLE), validateData(OrganizationSchema), suppliersController.addSupplier.bind(suppliersController));
suppliersRouter.put("/:id", checkAuthWithRole(EMPLOYEE_ROLE), validateData(OrganizationSchema), suppliersController.updateSupplier.bind(suppliersController))

export default suppliersRouter;