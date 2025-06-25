import {z} from "zod";

export const LoginSchema = z.object({
    login: z.string().min(3),
    password: z.string(),
});

export const RegisterSchema = z.object({
    login: z.string().min(3),
    full_name: z.string(),
    email: z.string().email(),
    phone_number: z.coerce.number().gt(99999999).lt(10000000000),
    password: z.string().min(8),
    city: z.string(),
    region: z.string(),
    country: z.string(),
    address: z.string(),
    postal_code: z.coerce.number().positive().lt(10000000),
});