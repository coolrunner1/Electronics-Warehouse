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

export const createItem = async(body: any) => {
    return await axiosClient.post("/items", body)
}

export const updateItem = async(body: any, id: number) => {
    return await axiosClient.put(`/items/${id}`, body)
}

export const addNewArrival = async(body: any, id: number) => {
    return await axiosClient.post(`/items/${id}/newArrival`, body)
}

export const getItemManufacturers = async() => {
    const data = await axiosClient.get("/items/manufacturers");
    return data.data;
}