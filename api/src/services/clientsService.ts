import prisma from "../../prisma/prisma-client";
import {Organization} from "../types/Organizaton";

class ClientsService {
    async getAllClients(page: number, ignorePagination: boolean) {
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

        const [clients, count] = await prisma.$transaction([
            prisma.client.findMany({
                orderBy: {
                    client_id: 'desc'
                },
                skip: page > 1 ? (page-1) * 10 : 0,
                take: 10
            }),
            prisma.client.count()
        ]);

        return {
            pagination: {
                total: Math.ceil(count/10),
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