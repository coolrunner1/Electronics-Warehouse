import {z} from "zod";

export const organizationSchema = z.object({
    name: z.string(),
    phone_number: z.coerce.number().gt(99999999).lt(10000000000),
    address: z.string(),
    email: z.string().email(),
    city: z.string(),
    region: z.string(),
    country: z.string(),
    postal_code: z.coerce.number().positive().lt(10000000),
});