import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import eslintPlugin from 'vite-plugin-eslint';
import AutoImport from 'unplugin-auto-import/vite';
import * as path from 'path';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

// https://vitejs.dev/config/
/** @type {import("vite").UserConfig} */
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());
    console.log(env,mode); 
    
    return {
        base: '/develop/',
        define: {
            __APP_ENV__: env.APP_ENV,
        },
        resolve: {
            alias: [{ find: '@', replacement: path.resolve(__dirname, './src/') }],
            extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        },
        plugins: [
            vue(),
            vueI18n({
                include: path.resolve(__dirname, 'src/locales/lang/**'),
            }),
            AutoImport({
                resolvers: [ElementPlusResolver()],
                dts: './src/auto-imports.d.ts',
                vueTemplate: true,
                imports: ['vue', 'vue-i18n'],
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
                extensions: ['vue', 'ts'],
                // include: ['src/locales/index.ts'],
                dts: './src/components.d.ts',
                // globs:[{},"src/components/**/*"]
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
    };
});
