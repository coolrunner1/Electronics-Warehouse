import axiosClient from "./axiosClient.ts";

export const fetchArticles = async ({queryKey}: any) => {
    const [_key, page, itemsPerPage] = queryKey;
    const data = await axiosClient.get(`/articles/?page=${page}&limit=${itemsPerPage}`);
    return {
        articles: data.data.data,
        pagination: data.data.pagination.total,
    }
}

export const getArticleById = async (id: string) => {
    return await axiosClient.get(`/articles/${id}`);
}

export const createArticle = async (body: any) => {
    return await axiosClient.post(`/articles`, body);
}

export const updateArticle = async (id: number, body: any) => {
    return await axiosClient.put(`/articles/${id}`, body);
}

export const deleteArticle = async (id: number) => {
    return await axiosClient.delete(`/articles/${id}`);
}
