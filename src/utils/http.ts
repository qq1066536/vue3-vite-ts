/*
 * @Author: LG
 * @Date: 2022-07-21 11:45:51
 * @Description:
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-21 14:54:30
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://www.baidu.com' + import.meta.env.BASE_URL,
});
axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
});
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        ElNotification({
            message: error.message,
            title: 'Error!',
            type: 'error',
            showClose: false,
        });
        return Promise.reject(error);
    }
);
export const GET = (url: string, params: unknown) => {
    return axiosInstance.get(encodeURI(url), { params });
};
export const POST = (url: string, data: object) => {
    try {
        return axiosInstance.post(encodeURI(url), data);
    } catch (error) {
        console.log(error,"AAA")
    }
    
};
export const DELETE = (url: string, data: object) => {
    return axiosInstance.delete(encodeURI(url), data);
};
export const PUT = (url: string, data: object) => {
    return axiosInstance.put(encodeURI(url), data);
};
export const PATCH = (url: string, data: object) => {
    return axiosInstance.patch(encodeURI(url), data);
};
