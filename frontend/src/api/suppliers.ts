import axiosClient from "./axiosClient";
import {suppliersToOrganizations} from "../utils/suppliersToOrganizations.ts";

export const fetchSuppliers = async({queryKey}: any) => {
    const [_key, page, itemsPerPage, search] = queryKey;
    const res = await axiosClient.get(`/suppliers?page=${page}&limit=${itemsPerPage}${search ? `&search=${search}` : ''}`);
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