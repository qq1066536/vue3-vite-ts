/*
 * @Author: LG
 * @Date: 2022-07-11 11:10:06
 * @Description:
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-19 14:01:30
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: '/',
        component: () => import('../App.vue'),
        name: 'Home',
        redirect: '/login',
        children: [
            {
                path: '/login',
                component: () => import('../views/Login/layout.vue'),
                name: 'Login',
                redirect: '/login/signIn',
                children: [
                    {
                        path: '/login/signIn',
                        name: 'SignIn',
                        component: () => import('../views/Login/index.vue'),
                    },
                ],
            },
        ],
    },
];
export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
