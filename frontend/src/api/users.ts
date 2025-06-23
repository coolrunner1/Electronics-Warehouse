import axiosClient from "./axiosClient.ts";

export const fetchUsers = async ({queryKey}: any) => {
    const [_key, page, itemsPerPage, search] = queryKey;
    const data = await axiosClient.get(`/users/?page=${page}&limit=${itemsPerPage}${search ? `&search=${search}` : ""}`);
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

export const patchUser = async (id: number, body: any) => {
    return await axiosClient.patch(`/users/${id}`, body);
}

export const updateUserPassword = async (id: number, body: any) => {
    return await axiosClient.patch(`/users/${id}/password`, body);
}

export const patchMyUser = async (body: any) => {
    return await axiosClient.patch(`/users/my`, body);
}

export const updateMyPassword = async (body: any) => {
    return await axiosClient.patch(`/users/my/password`, body);
}


export const deleteUser = async (id: number) => {
    return await axiosClient.delete(`/users/${id}`);
}

export const getUserRoles = async () => {
    return await axiosClient.get('/roles')
}