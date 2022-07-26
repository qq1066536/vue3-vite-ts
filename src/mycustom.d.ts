import { ExportedGlobalComposer, VueI18nOptions } from 'vue-i18n';

/*
 * @Author: LG
 * @Date: 2022-07-25 17:23:06
 * @Description:
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-25 17:29:43
 */
declare global {
    const $i18n: typeof import('./locales')['i18n'];
}

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $i18n?: VueI18nOptions | ExportedGlobalComposer;
    }
}
