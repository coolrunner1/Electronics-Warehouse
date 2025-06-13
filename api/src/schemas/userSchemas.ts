import {z} from "zod";

export const userSchema = z.object({
    login: z.string().min(3),
    password: z.string().min(8),
    full_name: z.string(),
    email: z.string().email(),
    phone_number: z.coerce.number().gt(99999999).lt(10000000000),
    passport: z.number().lt(1000000000),
    role_id: z.number(),
    client_id: z.number().nullable()
})