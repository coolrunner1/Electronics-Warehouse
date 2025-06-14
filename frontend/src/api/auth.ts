import axiosClient from "./axiosClient.ts";

export const login = async(body: any) => {
    return await axiosClient.post(`/auth/login`, body)
}

export const register = async(body: any) => {
    return await axiosClient.post(`/auth/register`, body)
}