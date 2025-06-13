import axiosClient from "./axiosClient.ts";

export const fetchUsers = async ({queryKey}: any) => {
    const [_key, page, itemsPerPage] = queryKey;
    const data = await axiosClient.get(`/users/?page=${page}&limit=${itemsPerPage}`);
    return {
        users: data.data.data,
        pagination: data.data.pagination.total,
    }
}

export const getUserById = async (id: string) => {
    return await axiosClient.get(`/users/${id}`);
}

export const createUser = async (body: any) => {
    return await axiosClient.post(`/users`, body);
}

export const updateUser = async (id: number, body: any) => {
    return await axiosClient.put(`/users/${id}`, body);
}

export const deleteUser = async (id: number) => {
    return await axiosClient.delete(`/users/${id}`);
}

export const getUserRoles = async () => {
    return await axiosClient.get('/roles')
}