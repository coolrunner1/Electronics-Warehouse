import prisma, {SupplierWhereInput} from "../../prisma/prisma-client";
import {Organization} from "../types/Organizaton";
import {calculateNumberOfPages, pagination} from "../utils/pagination";


class SuppliersService {
    async getAllSuppliers(query: any) {
        const {page, limit, search} = query;

        const searchQuery: SupplierWhereInput[] = [];

        if (search) {
            searchQuery.push(
                { name: { contains: search, mode: 'insensitive', } },
                { email: { contains: search, mode: 'insensitive', } },
                { address: { contains: search, mode: 'insensitive', } },
                { city: { contains: search, mode: 'insensitive', } },
                { region: { contains: search, mode: 'insensitive', } },
                { country: { contains: search, mode: 'insensitive', } },
            )
        }

        if (limit === 'none') {
            const data = await prisma.supplier.findMany({
                orderBy: {
                    supplier_id: 'desc'
                },
            });

            return {
                data,
                where: {
                    OR: searchQuery.length ? searchQuery : undefined,
                },
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
                where: {
                    OR: searchQuery.length ? searchQuery : undefined,
                },
                skip,
                take
            }),
            prisma.supplier.count({
                where: {
                    OR: searchQuery.length ? searchQuery : undefined,
                },
            })
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