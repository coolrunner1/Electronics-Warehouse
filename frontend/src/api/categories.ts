import axiosClient from "./axiosClient";

export const getCategories = async() => {
    const data = await axiosClient.get(`/categories`);
    return data.data;
}