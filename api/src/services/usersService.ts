import prisma from "../../prisma/prisma-client";
import {calculateNumberOfPages, pagination} from "../utils/pagination";
import * as bcrypt from "bcrypt";
import {Prisma} from "../generated/prisma";
import {USER_ROLE} from "../constants/roles";
import {generateJWT} from "../utils/generateJWT";
import UserProfileOrderByWithRelationInput = Prisma.UserProfileOrderByWithRelationInput;
import UserProfileWhereInput = Prisma.UserProfileWhereInput;

class UsersService {
    async getAllUsers(reqQuery: any) {
        const {page, limit, search} = reqQuery;

        const {skip, take} = pagination(page, limit);

        const orQuery: UserProfileWhereInput[] = []
        const orderByQuery: UserProfileOrderByWithRelationInput = {
            user_id: 'desc',
        };

        if (search) {
            orQuery.push(
                {login: {contains: search, mode: 'insensitive',}},
                {email: {contains: search, mode: 'insensitive',}},
                {full_name: {contains: search, mode: 'insensitive',}},
                {phone_number: {contains: search, mode: 'insensitive',}},
                {passport: {equals: Number(search) || 0}},
            )
        }

        const query = {
            where: {
                OR: orQuery || undefined,
            },
            select: {
                user_id: true,
                role_id: true,
                client_id: true,
                login: true,
                password: false,
                image_path: true,
                full_name: true,
                email: true,
                phone_number: true,
                passport: true
            },
            orderBy: orderByQuery,
            skip,
            take: take
        }

        const [users, count] = await prisma.$transaction([
            prisma.userProfile.findMany(query),
            prisma.userProfile.count({
                where: {
                    OR: orQuery || undefined,
                }
            })
        ]);

        return {
            pagination: {
                total: calculateNumberOfPages(count, take),
            },
            data: users
        };
    }

    async getUserById(id: number) {
        const user = await prisma.userProfile.findUnique({
            where: {
                user_id: id,
            }
        });

        if (!user) {
            return null;
        }

        const { password, ...safeUser } = user;

        return safeUser;
    }

    async createUser(body: any) {
        let {login, password, full_name, email, phone_number, passport, role_id, client_id} = body;

        if (client_id === 0) {
            client_id = null;
        }

        if (role_id !== USER_ROLE) {
            client_id = null;
        }

        if (role_id === USER_ROLE && !client_id) {
            client_id = 1;
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const user = await prisma.userProfile.create({
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

        if (!user) {
            return null;
        }

        const { password: pw, ...safeUser } = user;

        return safeUser;
    }

    async updateUser(body: any, id: number) {
        let {login, full_name, email, phone_number, passport, role_id, client_id} = body;

        if (client_id === 0) {
            client_id = null;
        }

        if (role_id !== USER_ROLE) {
            client_id = null;
        }

        if (role_id === USER_ROLE && !client_id) {
            client_id = 1;
        }

        const user = await prisma.userProfile.update({
            data: {
                login,
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

        if (!user) {
            return null;
        }

        const { password: pw, ...safeUser } = user;

        return safeUser;
    }

    async patchUser(body: any, id: number) {
        let {login, full_name, password, email, phone_number, passport} = body;

        let hashPassword = '';

        if (password) {
            const salt = await bcrypt.genSalt(10);
            hashPassword = await bcrypt.hash(password, salt);
        }

        const user = await prisma.userProfile.update({
            data: {
                login: login || undefined,
                full_name: full_name || undefined,
                password: hashPassword || undefined,
                email: email || undefined,
                phone_number: phone_number || undefined,
                passport: passport || undefined,
            },
            where: {
                user_id: id
            }
        });

        if (!user) {
            return null;
        }

        const { password: pw, ...safeUser } = user;

        return {user: safeUser, token: generateJWT(user)};
    }

    async updateUserPassword(body: any, id: number) {
        let {password} = body;

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const user = await prisma.userProfile.update({
            data: {
                password: hashPassword,
            },
            where: {
                user_id: id
            }
        });

        if (!user) {
            return null;
        }

        const { password: pw, ...safeUser } = user;

        return {user: safeUser, token: generateJWT(user)};
    }

    async deleteUserById(id: number){
        return prisma.userProfile.delete({
            where: { user_id: id },
        });
    }
}

export default new UsersService();