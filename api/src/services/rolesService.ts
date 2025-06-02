import prisma from "../../prisma/prisma-client";

class RolesService {
    async getAllRoles() {
        return prisma.role.findMany();
    }
}

export default new RolesService();