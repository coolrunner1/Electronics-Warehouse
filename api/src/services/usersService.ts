import prisma from "../../prisma/prisma-client";
import {calculateNumberOfPages, pagination} from "../utils/pagination";
import * as bcrypt from "bcrypt";

class UsersService {
    async getAllUsers(page: number, limit: number) {

        const {skip, take} = pagination(page, limit);
        const [users, count] = await prisma.$transaction([
            prisma.userProfile.findMany({
                orderBy: {
                   user_id: 'desc'
                },
                skip,
                take
            }),
            prisma.userProfile.count()
        ]);

        return {
            pagination: {
                total: calculateNumberOfPages(count, limit),
            },
            data: users
        };
    }

    async getUserById(id: number) {
        return prisma.userProfile.findUnique({
            where: {
                user_id: id,
            }
        })
    }

    async createUser(body: any) {
        let {login, password, full_name, email, phone_number, passport, role_id, client_id} = body;

        if (client_id === 0) {
            client_id = null;
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        return prisma.userProfile.create({
            data: {
                login,
                password: hashPassword,
                full_name,
                email,
                phone_number,
                passport,
                role_id,
                client_id: client_id,
            }
        });
    }

    async updateUser(body: any, id: number) {
        let {login, password, full_name, email, phone_number, passport, role_id, client_id} = body;

        if (client_id === 0) {
            client_id = null;
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        return prisma.userProfile.update({
            data: {
                login,
                password: hashPassword,
                full_name,
                email,
                phone_number,
                passport,
                role_id,
                client_id: client_id,
            },
            where: {
                user_id: id
            }
        });
    }

    async deleteUserById(id: number){
        return prisma.userProfile.delete({
            where: { user_id: id },
        });
    }
}

export default new UsersService();