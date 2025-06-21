import {z} from "zod";

export const ArticleSchema = z.object({
    titleEN: z.string().min(3).max(100),
    titleRU: z.string().min(3).max(100),
    descriptionEN: z.string().min(3).max(255),
    descriptionRU: z.string().min(3).max(255),
    contentEN: z.string().min(3),
    contentRU: z.string().min(3),
})