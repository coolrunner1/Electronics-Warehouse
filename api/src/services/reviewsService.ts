import prisma from "../../prisma/prisma-client";
import {calculateNumberOfPages, pagination} from "../utils/pagination";

class ReviewsService {
    async addReview(body: any, itemId: number, clientId: number) {
        const {score, title, content} = body;
        
        const review = prisma.review.findFirst({
            where: {
                item_id: itemId,
                client_id: clientId
            }
        });

        if (review) {
            throw new Error("review-exists");
        }

        const itemInOrder = prisma.clientOrder.findFirst({
            where: {
                client_id: clientId,
                orderProduct: {
                    some: {
                        item_id: itemId
                    }
                }
            }
        });

        if (!itemInOrder) {
            throw new Error("item-was-not-bought");
        }

        return prisma.$transaction(async (prisma) => {
            const item = await prisma.item.findUnique({
                select: {
                    score: true,
                    reviews_count: true,
                },
                where: {
                    item_id: itemId
                }
            });

            if (!item) {
                throw new Error("404");
            }


            const updatedItem = await prisma.item.update({
                data: {
                    score: ((item.score * item.reviews_count) + Number(score)) / item.reviews_count+1,
                    reviews_count: {
                        increment: 1
                    }
                },
                where: {
                    item_id: itemId,
                }
            });

            if (!updatedItem) {
                throw new Error("404");
            }

            return prisma.review.create({
                data: {
                    score,
                    title,
                    content,
                    created_at: new Date(),
                    client: {
                        connect: {
                            client_id: clientId,
                        }
                    },
                    item: {
                        connect: {
                            item_id: itemId
                        }
                    }
                },
            });
        });
    }

    async fetchReviewsByItemId(query: any, itemId: number) {
        const {page, limit} = query;
        const {skip, take} = pagination(parseInt(page), parseInt(limit));

        const finalQuery = {
            include: {
                client: true,
            },
            where: {
                item_id: itemId
            },
            orderBy: {
                created_at: 'desc',
            },
            skip,
            take,
        }

        const data = prisma.review.findMany(finalQuery);

        const countQuery = {
            where: finalQuery.where
        };

        return {
            pagination: {
                total: calculateNumberOfPages(await prisma.review.count(countQuery), take),
            },
            data
        };
    }

    async checkAllowedReview(itemId: number, clientId: number) {
        let allowReview = false;

        if (clientId) {
            const review = prisma.review.findFirst({
                where: {
                    item_id: itemId,
                    client_id: clientId
                }
            });

            allowReview = !review;

            if (allowReview) {
                const itemInOrder = prisma.clientOrder.findFirst({
                    where: {
                        client_id: clientId,
                        orderProduct: {
                            some: {
                                item_id: itemId
                            }
                        }
                    }
                });

                allowReview = !itemInOrder;
            }

            return allowReview;
        }
    }

    async deleteReview(id: number) {
        return prisma.$transaction(async (prisma) => {
            const review = await prisma.review.findUnique({
                select: {
                    score: true,
                    item_id: true,
                },
                where: {
                    id
                }
            })

            if (!review) {
                throw new Error("404");
            }

            const item = await prisma.item.findUnique({
                select: {
                    score: true,
                    reviews_count: true,
                },
                where: {
                    item_id: review.item_id
                }
            });

            if (!item) {
                throw new Error("404");
            }

            await prisma.item.update({
                data: {
                    score: ((item.score * item.reviews_count) - review.score) / item.reviews_count-1,
                    reviews_count: {
                        decrement: 1
                    }
                },
                where: {
                    item_id: review.item_id,
                }
            });

            return prisma.review.delete({
                where: {
                    id
                }
            })
        })
    }
}

export default new ReviewsService()