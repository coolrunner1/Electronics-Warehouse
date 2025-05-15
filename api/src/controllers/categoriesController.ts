import { NextFunction, Request, Response } from 'express';
import categoriesService from "../services/categoriesService";

class CategoriesController {
    async getAllCategories(req: Request, res: Response, next: NextFunction) {
        try {
            const categories = await categoriesService.getAllCategories();
            if (!categories.length) {
                return res.status(404).json({ status: "error", message: "No categories found" });
            }
            res.status(200).json(categories);
        } catch (error) {
            next(error);
        }
    }
}

export default new CategoriesController();
