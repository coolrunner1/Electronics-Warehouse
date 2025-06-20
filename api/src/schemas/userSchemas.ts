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
});

export const userUpdateSchema = z.object({
    login: z.string().min(3).optional(),
    password: z.string().min(8).optional(),
    full_name: z.string().optional(),
    email: z.string().email().optional(),
    phone_number: z.coerce.number().gt(99999999).lt(10000000000).optional(),
    passport: z.number().lt(1000000000).optional(),
    role_id: z.number().optional(),
    client_id: z.number().nullable().optional()
})