import axiosClient from "./axiosClient.ts";

export const login = async(body: any) => {
    return await axiosClient.post(`/auth/login`, body)
}