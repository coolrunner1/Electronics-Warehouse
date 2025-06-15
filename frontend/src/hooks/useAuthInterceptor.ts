import { useEffect } from "react";
import axiosClient from "../api/axiosClient.ts";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

export const useAuthInterceptor = () => {
    const token = useAuthHeader();

    useEffect(() => {
        axiosClient.interceptors.request.clear();

        if (!token) {
            return;
        }

        axiosClient.interceptors.request.use(
            (config) => {
                if (token) {
                    config.headers.Authorization = token;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }, [token]);
};
