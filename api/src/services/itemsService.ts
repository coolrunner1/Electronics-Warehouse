import prisma from "../../prisma/prisma-client";

class ItemsService {
    async getAllItems() {
        return prisma.item.findMany();
    }
}

export default new ItemsService();