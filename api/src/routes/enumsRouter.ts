import {Router} from "express";
import enumsController from '../controllers/enumsController';

const enumsRouter = Router();

enumsRouter.get("/return-statuses", enumsController.getReturnStatuses.bind(enumsController));
enumsRouter.get("/return-reasons", enumsController.getReturnReasons.bind(enumsController));
enumsRouter.get("/order-statuses", enumsController.getOrderStatuses.bind(enumsController));

export default enumsRouter;