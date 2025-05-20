import axiosClient from "./axiosClient";
import {suppliersToOrganizations} from "../utils/suppliersToOrganizations.ts";

export const fetchSuppliers = async({queryKey}: any) => {
    const [_key, page] = queryKey;
    const res = await axiosClient.get(`/suppliers?page=${page}`);
    return {
        pagination: parseInt(res.data.pagination.total),
        suppliers: suppliersToOrganizations(res.data.data)
    }
}

export const createSupplier = async(body: any) => {
    return await axiosClient.post(`/suppliers`, body);
}

export const updateSupplier = async(body: any, id: number) => {
    return await axiosClient.put(`/suppliers/${id}`, body);
}