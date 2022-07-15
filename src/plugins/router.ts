/*
 * @Author: LG
 * @Date: 2022-07-11 11:10:06
 * @Description:
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-11 15:19:14
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: '/',
        component: () => import('../App.vue'),
        name: 'Home',
        redirect: '/Login',
        children: [
            {
                path: '/Login',
                component: () => import('../views/Login/index.vue'),
                name: 'Login',
            },
        ],
    },
];
export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
