import prisma from "../../prisma/prisma-client";
import {Organization} from "../types/Organizaton";
import {calculateNumberOfPages, pagination} from "../utils/pagination";

class SuppliersService {
    async getAllSuppliers(page: number, limit: number, ignorePagination: boolean) {
        if (ignorePagination) {
            const data = await prisma.supplier.findMany({
                orderBy: {
                    supplier_id: 'desc'
                },
            });

            return {
                data,
                pagination: {
                    total: 1
                }
            }
        }

        const {skip, take} = pagination(page, limit);
        const [suppliers, count] = await prisma.$transaction([
            prisma.supplier.findMany({
                orderBy: {
                    supplier_id: 'desc'
                },
                skip,
                take
            }),
            prisma.supplier.count()
        ]);

        return {
            pagination: {
                total: calculateNumberOfPages(count, limit),
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