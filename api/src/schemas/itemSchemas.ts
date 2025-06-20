import {z} from "zod";

export const itemSchema = z.object({
    category_id: z.coerce.number().positive(),
    manufacturer: z.string(),
    modelEN: z.string(),
    modelRU: z.string(),
    unit_price: z.number().nonnegative(),
});

export const itemDetailsSpecs = z.object({
    specsEN: z.string().min(10),
    specsRU: z.string().min(10),
});

export const itemDetailsDescription = z.object({
    descriptionEN: z.string().min(10),
    descriptionRU: z.string().min(10),
});