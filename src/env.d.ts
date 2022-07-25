/// <reference types="vite/client" />
import '@vue/runtime-core';
export {};
declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        readonly i18n: UnwrapRef<typeof import('./locales')['i18n']>;
    }
}
