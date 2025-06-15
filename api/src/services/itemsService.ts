import prisma from "../../prisma/prisma-client";
import {calculateNumberOfPages, pagination} from "../utils/pagination";
import {Item} from "../generated/prisma";

class ItemsService {
    async getAllItems(query: any) {
        const {page, limit, search, categoryName, categoryId, manufacturer, sortBy, sortOrder} = query;
        const orItemsQuery = [];
        const andItemsQuery = [];
        const sortItemsQuery = [];

        if (search) {
            orItemsQuery.push(
                { modelEN: { contains: search, mode: 'insensitive', } },
                { modelRU: { contains: search, mode: 'insensitive', } },
                { manufacturer: { contains: search, mode: 'insensitive', } },
                { category: {nameEN: { contains: search, mode: 'insensitive', }},},
                { category: {nameRU: { contains: search, mode: 'insensitive', }},},
            );
        }

        if (categoryName && categoryName.toLowerCase() !== 'all' && categoryName.toLowerCase() !== 'все') {
            andItemsQuery.push({
                OR: [
                    { category: {nameEN: { equals: categoryName, mode: 'insensitive', }},},
                    { category: {nameRU: { equals: categoryName, mode: 'insensitive', }},},
                ]
            })
        }

        if (parseInt(categoryId)) {
            andItemsQuery.push({
                OR: [
                    {category_id: parseInt(categoryId),},
                    { category: {parent_id: parseInt(categoryId)},}
                ]
            })
        }

        if (manufacturer && manufacturer.toLowerCase() !== 'all' && manufacturer.toLowerCase() !== 'все') {
            andItemsQuery.push({manufacturer: {equals: manufacturer, mode: 'insensitive', }},)
        }

        let order = sortOrder === 'desc' ? sortOrder : 'asc';

        if (sortBy === 'nameEN') {
            sortItemsQuery.push({
                modelEN: order
            });
        } else if (sortBy === 'nameRU') {
            sortItemsQuery.push({
                modelRU: order
            });
        } else if (sortBy === 'last-arrival') {
            sortItemsQuery.push({
                date_of_arrival: order
            })
        } else {
            sortItemsQuery.push({
                unit_price: order
            });
        }

        const {skip, take} = pagination(parseInt(page), parseInt(limit));

        const finalItemsQuery = {
            where: {
                OR: undefined,
                AND: undefined
            },
            orderBy: sortItemsQuery,
            skip,
            take
        };

        if (orItemsQuery.length) {
            finalItemsQuery.where.OR = orItemsQuery;
        }

        if (andItemsQuery.length) {
            finalItemsQuery.where.AND = andItemsQuery;
        }

        const data = await prisma.item.findMany(finalItemsQuery);

        return {
            pagination: {
                total: calculateNumberOfPages(await prisma.item.count(), take),
            },
            data
        };
    }

    async getItemById(id: number) {
        return prisma.item.findUnique({
            where: {
                item_id: id
            },
            include: {
                category: true,
                details: true,
            }
        });
    }

    async createItem(body: Item) {
        return prisma.item.create({
            data: {
                modelEN: body.modelEN,
                modelRU: body.modelRU,
                manufacturer: body.manufacturer,
                unit_price: body.unit_price,
                date_of_arrival: new Date(),
                units_in_stock: 0,
                faulty_units: 0,
                category: {
                    connect: { category_id: body.category_id }
                }
            }
        });
    }

    async updateItem(body: Item, id: number) {
        return prisma.item.update({
            data: {
                modelEN: body.modelEN,
                modelRU: body.modelRU,
                manufacturer: body.manufacturer,
                unit_price: body.unit_price,
                category: {
                    connect: { category_id: body.category_id }
                }
            },
            where: {
                item_id: id
            }
        })
    }

    async getItemManufacturers() {
        return prisma.item.findMany({
            distinct: ['manufacturer'],
            orderBy: {
                manufacturer: 'asc',
            },
            select: {
                manufacturer: true,
            },
        }).then((result) => {
            if (!result) {
                return [];
            }
            return result.map(item => item.manufacturer);
        });
    }

    async addItemArrival(id: number, newQuantity: number, supplierId: number) {
        return prisma.$transaction(async (prisma) => {
            const updatedItem = await prisma.item.update({
                data: {
                    date_of_arrival: new Date(),
                    units_in_stock: {
                        increment: newQuantity,
                    },
                },
                where: {
                    item_id: id
                }
            });

            if (!updatedItem) {
                throw new Error("404");
            }

            await prisma.supplierItem.create({
                data: {
                    supplier: {
                        connect: {
                            supplier_id: supplierId
                        }
                    },
                    item: {
                        connect: {
                            item_id: id,
                        }
                    },
                },
            });
        });
    }

    async updateImage(id: number, image: File) {
        //image.mv(__dirname + '/public/' + image.name);
    }
}

export default new ItemsService();