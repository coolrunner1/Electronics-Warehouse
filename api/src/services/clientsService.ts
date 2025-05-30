import prisma from "../../prisma/prisma-client";
import {Organization} from "../types/Organizaton";
import {calculateNumberOfPages, pagination} from "../utils/pagination";

class ClientsService {
    async getAllClients(page: number, limit: number, ignorePagination: boolean) {
        if (ignorePagination) {
            const data = await prisma.client.findMany({
                orderBy: {
                    client_id: 'desc'
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

        const [clients, count] = await prisma.$transaction([
            prisma.client.findMany({
                orderBy: {
                    client_id: 'desc'
                },
                skip,
                take
            }),
            prisma.client.count()
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