import prisma from "../../prisma/prisma-client";

class CategoriesService {
    async getAllCategories() {
        return prisma.category.findMany({
            where: {
                parent_id: null,
            },
            include: {
                subcategories: true,
            }
        });
    }

    async getCategoryById(categoryId: number) {
        return prisma.category.findFirst({
            where: {
                category_id: categoryId,
            }
        })
    }
}

export default new CategoriesService();