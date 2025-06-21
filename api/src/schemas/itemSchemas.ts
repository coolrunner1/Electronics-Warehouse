import {z} from "zod";

export const ItemSchema = z.object({
    category_id: z.coerce.number().positive(),
    manufacturer: z.string(),
    modelEN: z.string(),
    modelRU: z.string(),
    unit_price: z.number().nonnegative(),
});

export const ItemDetailsSpecs = z.object({
    specsEN: z.string().min(10).optional(),
    specsRU: z.string().min(10).optional(),
});

export const ItemDetailsDescription = z.object({
    descriptionEN: z.string().min(10).optional(),
    descriptionRU: z.string().min(10).optional(),
});