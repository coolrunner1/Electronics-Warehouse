import { Article } from "../types/Article.ts";
import axiosClient from "./axiosClient.ts";

export const fetchArticles = async ({queryKey}: any): Promise<{articles: Article[], pagination: number}> => {
    const [_key, page, itemsPerPage, search] = queryKey;
    const data = await axiosClient.get(`/articles/?page=${page}&limit=${itemsPerPage}${search ? `&search=${search}` : ""}`);
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
