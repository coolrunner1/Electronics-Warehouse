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
}

export default new CategoriesService();