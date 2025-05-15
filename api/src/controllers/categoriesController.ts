import prisma from "../../prisma/prisma-client";
import { NextFunction, Request, Response, Router } from 'express';

class CategoriesController {
    async getAllCategories(req: Request, res: Response, next: NextFunction) {
        try {
            const categories = await prisma.category.findMany();
            if (!categories.length) {
                return res.status(404).json({ status: "error", message: "No categories found" });
            }
            res.status(200).json(categories);
        } catch (error) {
            next(error);
        }
    }
}

const categoriesController = new CategoriesController();
export default categoriesController;
