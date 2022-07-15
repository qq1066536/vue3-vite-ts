import { createApp } from 'vue';
import App from './App.vue';
import ElementPlugin from './plugins/element';
import router from './plugins/router';
import 'normalize.css';
createApp(App).use(ElementPlugin).use(router).mount('#app');
