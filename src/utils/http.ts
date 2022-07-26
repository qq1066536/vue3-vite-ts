/*
 * @Author: LG
 * @Date: 2022-07-21 11:45:51
 * @Description:
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-26 16:50:08
 */
import { i18n } from '@/locales';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
// import {i18n} from '../locales'
const axiosInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL + import.meta.env.BASE_URL,
});
axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
    console.log(config);
    return config;
});
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.status === 200) return response.data;
        // return response;
    },
    (error: AxiosError) => {
        ElNotification({
            message: i18n.global.t(error.message),
            title: i18n.global.t('error'),
            type: 'error',
            // showClose: false,
        });
        return Promise.reject(error);
    }
);
export const GET = (url: string, params: unknown) => {
    return axiosInstance.get(encodeURI(url), { params });
};
export const POST = (url: string, data: object, headers?: object) => {
    return axiosInstance.post(encodeURI(url), data, headers);
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
class Request {
    instance: AxiosInstance;
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config);
        this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
            return config;
        });
        this.instance.interceptors.response.use(
            (response: AxiosResponse) => {
                return response;
            },
            (error: AxiosError) => Promise.reject(error)
        );
    }
    get(url: string, config: AxiosRequestConfig) {
        return this.instance.get(encodeURI(url), config);
    }
    post<T = unknown, R = AxiosResponse<T>, D = unknown>(
        url: string,
        data?: T,
        config?: AxiosRequestConfig<D>
    ): Promise<R> {
        return this.instance.post(encodeURI(url), data, config);
    }
}
const request = new Request({
    baseURL: 'https://10.202.94.100' + import.meta.env.BASE_URL,
});
export const GetClass = (url: string, params: unknown) => {
    return request.get(url, { params });
};
export const PostClass = (url: string, data?: unknown, config?: AxiosRequestConfig) => {
    return request.post(url, data, config);
};
