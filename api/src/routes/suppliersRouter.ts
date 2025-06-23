import {Router} from "express";
import {validateData} from "../middlewares/validationMiddleware";
import {OrganizationSchema} from "../schemas/organizationSchemas";
import suppliersController from "../controllers/suppliersController";
import {checkAuthWithRole} from "../middlewares/authMiddleware";
import {EMPLOYEE_ROLE} from "../constants/roles";

const suppliersRouter = Router();

suppliersRouter.get("/", checkAuthWithRole(EMPLOYEE_ROLE), suppliersController.getSuppliers);
suppliersRouter.post("/", checkAuthWithRole(EMPLOYEE_ROLE), validateData(OrganizationSchema), suppliersController.addSupplier);
suppliersRouter.put("/:id", checkAuthWithRole(EMPLOYEE_ROLE), validateData(OrganizationSchema), suppliersController.updateSupplier)

export default suppliersRouter;