import { createApp } from 'vue';
import App from './main.vue';
import router from './plugins/router';
import i18n from './locales';
import 'normalize.css';
router.beforeEach((to, form, next) => {
    if (!to.path.includes('login') && !sessionStorage.token) {
        console.log("aaa")
        next('/login');
    } else next();
});
createApp(App).use(router).use(i18n).mount('#app');
