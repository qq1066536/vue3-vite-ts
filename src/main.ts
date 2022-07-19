import { createApp } from 'vue';
import App from './App.vue';
import router from './plugins/router';
import 'normalize.css';
router.beforeEach((to, form, next) => {
    if (!to.path.includes('login') && !sessionStorage.token) {
        next('/login');
    } else next();
});
createApp(App).use(router).mount('#app');
