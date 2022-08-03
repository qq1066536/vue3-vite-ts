/*
 * @Author: LG
 * @Date: 2022-07-21 11:45:51
 * @Description:
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-08-01 17:38:22
 */
import { i18n } from '@/locales';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

interface MyResponse<T = unknown> {
    code: number;
    data: T;
    status: number;
    page?: object;
}
class Request {
    instance: AxiosInstance;
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config);
        this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
            console.log(!config.url?.includes('login') && !sessionStorage.getItem('token'));

            if (!config.url?.includes('login') && sessionStorage.getItem('token')) {
                config.headers = {
                    Authorization: sessionStorage.token,
                    'x-system-id': 1,
                };
            }

            return config;
        });
        this.instance.interceptors.response.use(
            (response: AxiosResponse) => {
                if (response.status === 200) {
                    return response.data;
                }
                // return response;
            },
            (error: AxiosError) => {
                ElNotification({
                    message: i18n.global.t(error.message),
                    title: i18n.global.t('error'),
                    type: 'error',
                });
                Promise.reject(error);
            }
        );
    }
    get<T = unknown, R = AxiosResponse<T>>(
        url: string,
        config: AxiosRequestConfig<R>
    ): Promise<MyResponse<R>> {
        return this.instance.get(encodeURI(url), config);
    }
    post<T = unknown, R = AxiosResponse<T>>(
        url: string,
        data?: T,
        config?: AxiosRequestConfig<R>
    ): Promise<MyResponse<R>> {
        return this.instance.post<unknown, MyResponse<R>>(encodeURI(url), data, config);
    }
}
export const request = new Request({
    baseURL: import.meta.env.VITE_BASE_URL + import.meta.env.BASE_URL,
});
export function GET<T>(url: string, params: T): Promise<MyResponse<AxiosResponse<unknown>>> {
    return request.get(encodeURI(url), { params });
};
