import prisma from "../../prisma/prisma-client";
import {Organization} from "../types/Organizaton";
import {calculateNumberOfPages, pagination} from "../utils/pagination";
import {Prisma} from "../generated/prisma";
import ClientWhereInput = Prisma.ClientWhereInput;

class ClientsService {
    async getAllClients(query: any) {
        const {page, limit, search} = query;

        const searchQuery: ClientWhereInput[] = [];

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
            const data = await prisma.client.findMany({
                orderBy: {
                    client_id: 'desc'
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

        const [clients, count] = await prisma.$transaction([
            prisma.client.findMany({
                orderBy: {
                    client_id: 'desc'
                },
                where: {
                    OR: searchQuery.length ? searchQuery : undefined,
                },
                skip,
                take
            }),
            prisma.client.count({
                where: {
                    OR: searchQuery.length ? searchQuery : undefined,
                }
            })
        ]);

        return {
            pagination: {
                total: calculateNumberOfPages(count, take),
            },
            data: clients
        };
    }

    async getClient(client_id: number) {
        return prisma.client.findFirst({
            where: {
                client_id
            }
        });
    }

    async addClient(body: Organization) {
        return prisma.client.create({
            data: body,
        })
    }

    async updateClient(body: Organization, id: number) {
        return prisma.client.update({
            data: body,
            where: {
                client_id: id
            }
        })
    }
}

export default new ClientsService();