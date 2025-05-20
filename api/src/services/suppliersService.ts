import prisma from "../../prisma/prisma-client";
import {Organization} from "../types/Organizaton";

class SuppliersService {
    async getAllSuppliers(page: number) {
        const [suppliers, count] = await prisma.$transaction([
            prisma.supplier.findMany({
                orderBy: {
                    supplier_id: 'desc'
                },
                skip: page > 1 ? (page-1) * 10 : 0,
                take: 10
            }),
            prisma.supplier.count()
        ]);

        return {
            pagination: {
                total: Math.ceil(count/10),
            },
            data: suppliers
        };
    }

    async addSupplier(body: Organization) {
        return prisma.supplier.create({
            data: body,
        })
    }

    async updateSupplier(body: Organization, id: number) {
        return prisma.supplier.update({
            data: body,
            where: {
                supplier_id: id,
            }
        })
    }
}

export default new SuppliersService();