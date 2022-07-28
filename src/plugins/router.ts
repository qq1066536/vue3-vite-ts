/*
 * @Author: LG
 * @Date: 2022-07-11 11:10:06
 * @Description:
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-28 10:45:39
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: '/',
        component: () => import('@/App.vue'),
        name: 'Main',
        redirect: '/home',
        children: [
            {
                path: '/login',
                component: () => import('@/views/Login/layout.vue'),
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
            // {
            //     path:'/home',
            //     component:()=>import('@/views/Home/index.vue'),
            //     name:'Home'
            // }
        ],
    },
];
export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
