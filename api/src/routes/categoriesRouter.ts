import {Router} from "express";
import categoriesController from '../controllers/categoriesController';

const categoriesRouter = Router();

categoriesRouter.get("/", categoriesController.getAllCategories.bind(categoriesController));

export default categoriesRouter;