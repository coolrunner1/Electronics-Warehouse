import prisma from "../../prisma/prisma-client";
import {calculateNumberOfPages, pagination} from "../utils/pagination";
import {Prisma, Article} from "../generated/prisma";

class ArticlesService {
    async getAllArticles(reqQuery: any) {
        const {page, limit, search} = reqQuery;

        const {skip, take} = pagination(page, limit);

        const orQuery = []
        const orderByQuery: Prisma.ArticleOrderByWithRelationInput = {
            createdAt: 'desc',
        };

        if (search) {
            orQuery.push(
                {titleEN: {contains: search, mode: 'insensitive',}},
                {titleRU: {contains: search, mode: 'insensitive',}},
                {descriptionEN: {contains: search, mode: 'insensitive',}},
                {descriptionRU: {contains: search, mode: 'insensitive',}},
            )
        }

        const query = {
            where: {
                OR: undefined
            },
            orderBy: orderByQuery,
            skip,
            take: take
        }

        if (orQuery.length > 0) {
            query.where.OR = orQuery;
        }

        const [clients, count] = await prisma.$transaction([
            prisma.article.findMany(query),
            prisma.article.count()
        ]);

        return {
            pagination: {
                total: calculateNumberOfPages(count, take),
            },
            data: clients
        };

    }

    async getArticleById(id: number) {
        return prisma.article.findUnique({where: {id}})
    }

    async createArticle(article: Article) {
        return prisma.article.create({
            data: {
                titleEN: article.titleEN,
                titleRU: article.titleRU,
                descriptionEN: article.descriptionEN,
                descriptionRU: article.descriptionRU,
                contentEN: article.contentEN,
                contentRU: article.contentRU,
                createdAt: new Date()
            },
        })
    }

    async updateArticle(article: Article, id: number) {
        return prisma.article.update({
            data: {
                titleEN: article.titleEN,
                titleRU: article.titleRU,
                descriptionEN: article.descriptionEN,
                descriptionRU: article.descriptionRU,
                contentEN: article.contentEN,
                contentRU: article.contentRU,
            },
            where: {id},
        })
    }

    async deleteArticle(id: number) {
        return prisma.article.delete({where: {id}})
    }
}

export default new ArticlesService();