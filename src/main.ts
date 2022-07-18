import { createApp } from 'vue';
import App from './App.vue';
import ElementPlugin from './plugins/element';
import router from './plugins/router';
import 'normalize.css';
router.beforeEach((to, form, next) => {
    if (!to.path.includes('login') && !sessionStorage.token) {
        next('/login');
    } else next();
});
createApp(App).use(ElementPlugin).use(router).mount('#app');
