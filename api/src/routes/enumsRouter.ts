import {Router} from "express";
import enumsController from '../controllers/enumsController';

const enumsRouter = Router();

enumsRouter.get("/return-statuses", enumsController.getReturnStatuses);
enumsRouter.get("/return-reasons", enumsController.getReturnReasons);
enumsRouter.get("/order-statuses", enumsController.getOrderStatuses);

export default enumsRouter;