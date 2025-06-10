import axiosClient from "./axiosClient.ts";

export const updateUser = async () => {}

export const getUserRoles = async () => {
    return await axiosClient.get('/roles')
}