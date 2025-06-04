import axiosClient from "./axiosClient.ts";

export const getReturnStatuses = () => {
    return axiosClient.get(`/enums/return-statuses`);
}

export const getReturnReasons = () => {
    return axiosClient.get(`/enums/return-reasons`);
}

export const getOrderStatuses = () => {
    return axiosClient.get(`/enums/order-statuses`);
}