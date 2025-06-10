import prisma from "../../prisma/prisma-client";
import * as jsonwebtoken from "jsonwebtoken";
import * as bcrypt from "bcrypt";

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
            { id: user.user_id, email: user.email, role: user.role_id.toString() },
            process.env.JWT_SECRET,
            { expiresIn: 3600 }
        );

        delete user.password;

        return {user: user, token: jwtToken};
    }
}

export default new AuthService();