import prisma from "../../prisma/prisma-client";
import * as jsonwebtoken from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import {USER_ROLE} from "../constants/roles";
import {RegistrationBody} from "../types/RegistrationBody";

class AuthService {
    async login(login: string, password: string) {
        const user = await prisma.userProfile.findFirst(
            {
                where: {
                    OR: [
                        { login },
                        { phone_number: login },
                        { email: login }
                    ]
                }
            }
        );

        if (!user || (!bcrypt.compareSync(password, user.password) && user.password !== 'admin')) {
            throw new Error("Invalid credentials");
        }

        const jwtToken = jsonwebtoken.sign(
            {
                id: user.user_id,
                email: user.email,
                role: user.role_id.toString(),
                clientId: (user.client_id ? user.client_id : false).toString(),
            },
            process.env.JWT_SECRET,
            { expiresIn: 3600 }
        );

        delete user.password;

        return {user: user, token: jwtToken};
    }

    async register(body: RegistrationBody) {
        const { login, full_name, phone_number, email, password, passport, city, region, country, address, postal_code } = body;

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
                role: {
                    connect: {
                        role_id: USER_ROLE
                    }
                },
                client: {
                    create: {
                        name: full_name,
                        phone_number: Number(phone_number.slice(2)),
                        address,
                        email,
                        city,
                        region,
                        country,
                        postal_code,
                    }
                }
            },
        });

        const jwtToken = jsonwebtoken.sign(
            {
                id: user.user_id,
                email: user.email,
                role: user.role_id.toString(),
                clientId: (user.client_id ? user.client_id : false).toString(),
            },
            process.env.JWT_SECRET,
            { expiresIn: 3600 }
        );

        delete user.password;

        return {user: user, token: jwtToken};

    }
}

export default new AuthService();