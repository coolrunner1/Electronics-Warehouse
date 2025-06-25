import * as jsonwebtoken from "jsonwebtoken";
import {UserProfile} from "../generated/prisma";

export const generateJWT = (user: UserProfile) => {
    return jsonwebtoken.sign(
        {
            id: user.user_id,
            email: user.email,
            role: user.role_id.toString(),
            clientId: (user.client_id ? user.client_id : false).toString(),
        },
        process.env.JWT_SECRET as string,
        { expiresIn: 3600 }
    );
}