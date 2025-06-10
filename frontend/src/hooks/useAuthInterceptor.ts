import axiosClient from "../api/axiosClient.ts";
import {useEffect} from "react";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

export const useAuthInterceptor = () => {
    const token = useAuthHeader()

    useEffect(() => {
        const authInterceptor = axiosClient.interceptors.request.use(
            (config) => {
                console.log(token);
                if (token) {
                    console.log(token);
                    config.headers.Authorization = token;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
        return () => {
            axiosClient.interceptors.response.eject(authInterceptor);
        };
    }, [token]);
}