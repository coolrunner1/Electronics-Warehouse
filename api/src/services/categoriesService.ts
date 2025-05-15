import prisma from "../../prisma/prisma-client";

class CategoriesService {
    async getAllCategories() {
        return prisma.category.findMany();
    }
}

export default new CategoriesService();