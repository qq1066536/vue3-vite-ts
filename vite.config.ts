import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import eslintPlugin from 'vite-plugin-eslint';
// https://vitejs.dev/config/
/** @type {import("vite").UserConfig} */
export default defineConfig({
    base: '/vue3-vite-ts/',
    plugins: [
        vue(),
        Components({
            resolvers: [
                ElementPlusResolver({
                    importStyle: 'sass',
                }),
            ],
            dts: 'src/components.d.ts',
        }),
        eslintPlugin({
            include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
        }),
    ],
    build: {
        target: 'modules',
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        rollupOptions: {
            plugins: [],
            output: {
                manualChunks: {
                    vue: ['vue'],
                    elmentPlus: ['element-plus'],
                },
            },
        },
    },
});
