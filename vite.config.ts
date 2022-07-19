import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import eslintPlugin from 'vite-plugin-eslint';
import AutoImport from 'unplugin-auto-import/vite';
import * as path from 'path';
// https://vitejs.dev/config/
/** @type {import("vite").UserConfig} */
export default defineConfig({
    base: '/vue3-vite-ts/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
        },
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            dts: './src/auto-imports.d.ts',
            vueTemplate: true,
            imports: ['vue'],
            eslintrc: {
                enabled: true,
                filepath: '.eslintrc-auto-import.json',
            },
        }),
        Components({
            resolvers: [
                ElementPlusResolver({
                    importStyle: 'sass',
                }),
            ],
            // include: ['src/**/component/*.vue'],
            dts: './src/components.d.ts',
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
