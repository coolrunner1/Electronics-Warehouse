export type Pagination = {
    limit: number;
    take: number;
}

export const pagination = (page: number, limit: number): {skip: number, take: number} => {
    if (!page || page < 0) {
        page = 1;
    }
    if (!limit || limit <= 0) {
        limit = 10;
    }
    return {
        skip: page > 1 ? (page-1) * limit : 0,
        take: Number(limit),
    }
}

export const calculateNumberOfPages = (count: number, limit: number): number => {
    return Math.ceil(count/limit)
}