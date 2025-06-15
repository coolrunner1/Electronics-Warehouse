import {z} from "zod";

export const articleSchema = z.object({
    titleEN: z.string().min(3),
    titleRU: z.string().min(3),
    descriptionEN: z.string().min(3),
    descriptionRU: z.string().min(3),
    contentEN: z.string().min(3),
    contentRU: z.string().min(3),
})