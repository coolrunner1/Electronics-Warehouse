import prisma from "../../prisma/prisma-client";
import { Category } from "../generated/prisma";

class CategoriesService {
    async getAllCategories(): Promise<Category[]> {
        return prisma.category.findMany({
            where: {
                parent_id: null,
            },
            include: {
                subcategories: true,
            }
        });
    }

    async getCategoryById(categoryId: number): Promise<Category> {
        return prisma.category.findUnique({
            where: {
                category_id: categoryId,
            }
        })
    }
}

export default new CategoriesService();