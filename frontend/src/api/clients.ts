import axiosClient from "./axiosClient";
import {clientsToOrganizations} from "../utils/clientsToOrganizations.ts";

export const fetchClients = async({queryKey}: any) => {
    const [_key, page, itemsPerPage, search] = queryKey;
    const res = await axiosClient.get(`/clients?page=${page}&limit=${itemsPerPage}${search ? `&search=${search}` : ''}`);
    return {
        pagination: parseInt(res.data.pagination.total),
        clients: clientsToOrganizations(res.data.data)
    }
}

export const getClient = async({queryKey}: any) => {
    const [_key, id] = queryKey;
    const res = await axiosClient.get(`/clients/${id}`);
    return res.data;
}

export const getMyClient = async() => {
    const res = await axiosClient.get(`/clients/my`);
    return res.data;
}

export const createClient = async(body: any) => {
    return await axiosClient.post(`/clients`, body);
}

export const updateClient = async(body: any, id: number) => {
    return await axiosClient.put(`/clients/${id}`, body);
}

export const updateMyClient = async(body: any) => {
    return await axiosClient.put(`/clients/my`, body);
}