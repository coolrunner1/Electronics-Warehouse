import axiosClient from "./axiosClient";

export const fetchItems = async({queryKey}: any) => {
    const [_key, page, itemsPerPage, search, sortBy, sortingDirection, category, manufacturer] = queryKey;
    const data = await axiosClient.get(
        `/items?page=${page}&limit=${itemsPerPage}${
            search ? `&search=${search}` : ""
        }${
            category ? `&categoryId=${category}` : ""
        }${
            manufacturer ? `&manufacturer=${manufacturer}` : ""
        }${
            sortBy ? `&sortBy=${sortBy}` : ""
        }${
            sortingDirection ? `&sortOrder=${sortingDirection}` : ""
        }`
    );
    return {
        items: data.data.data,
        pagination: data.data.pagination.total,
    }
}

export const getItemById = async({queryKey}: any) => {
    const [_key, id] = queryKey;
    const data = await axiosClient.get(`/items/${id}`);
    return data.data;
}

export const createItem = async(body: any) => {
    return await axiosClient.post("/items", body)
}

export const updateItem = async(body: any, id: number) => {
    return await axiosClient.put(`/items/${id}`, body)
}

export const updateItemImage = async(body: any, id: number) => {
    return await axiosClient.patch(`/items/${id}/image`, body)
}

export const removeItemImage = async(id: number) => {
    return await axiosClient.patch(`/items/${id}/image/remove`)
}

export const addNewArrival = async(body: any, id: number) => {
    return await axiosClient.post(`/items/${id}/new-arrival`, body)
}

export const getItemManufacturers = async() => {
    const data = await axiosClient.get("/items/manufacturers");
    return data.data;
}