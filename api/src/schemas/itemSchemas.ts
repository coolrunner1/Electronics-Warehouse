import {z} from "zod";

export const itemSchema = z.object({
    category_id: z.coerce.number().positive(),
    manufacturer: z.string(),
    modelEN: z.string(),
    modelRU: z.string(),
    unit_price: z.number().nonnegative(),
});