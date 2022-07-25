/*
 * @Author: LG
 * @Date: 2022-07-21 11:45:51
 * @Description:
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-25 14:48:43
 */
// import { i18n } from '@/locales';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
// import {i18n} from '../locales'
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
export const POST = (url: string, data: object) => {
    return axiosInstance.post(encodeURI(url), data);
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
