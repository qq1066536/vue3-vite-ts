/*
 * @Author: LG
 * @Date: 2022-07-20 15:17:41
 * @Description:
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-25 14:27:16
 */
import { App } from 'vue';
import { createI18n } from 'vue-i18n';
import en from './lang/en.json';
import zhCn from './lang/zh-cn.json';
export const i18n = createI18n({
    locale: 'en',
    legacy: true,
    messages: {
        en: { ...en },
        zh: { ...zhCn },
    },
    fallbackLocale: 'zh',
});
export default {
    install: (app: App) => {
        app.use(i18n);
    },
};
