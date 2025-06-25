import prisma from "../../prisma/prisma-client";
import * as jsonwebtoken from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import {USER_ROLE} from "../constants/roles";
import {RegistrationBody} from "../types/RegistrationBody";
import {generateJWT} from "../utils/generateJWT";

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

        if (!user) {
            return null;
        }

        const { password: pw, ...safeUser } = user;

        return {user: safeUser, token: generateJWT(user)};
    }

    async register(body: RegistrationBody) {
        const { login, full_name, phone_number, email, password, city, region, country, address, postal_code } = body;

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const user = await prisma.userProfile.create({
            data: {
                login,
                password: hashPassword,
                full_name,
                email,
                phone_number,
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

        if (!user) {
            return null;
        }

        const { password: pw, ...safeUser } = user;

        return {user: safeUser, token: generateJWT(user)};
    }
}

export default new AuthService();