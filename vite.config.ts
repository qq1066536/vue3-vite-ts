import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import eslintPlugin from 'vite-plugin-eslint';
import AutoImport from 'unplugin-auto-import/vite';
import * as path from 'path';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import DefineOptions from 'unplugin-vue-define-options/vite'
// https://vitejs.dev/config/
/** @type {import("vite").UserConfig} */
export default defineConfig(({ mode,command}) => {
    const env = loadEnv(mode, process.cwd());
    const base = {
        base:'/develop/',
        resolve: {
            alias: [{ find: '@', replacement: path.resolve(__dirname, './src/') }],
            extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        },
        plugins: [
            vue(),
            DefineOptions(),
            vueI18n({
                include: path.resolve(__dirname, 'src/locales/lang/**'),
            }),
            AutoImport({
                resolvers: [ElementPlusResolver()],
                dts: './src/auto-imports.d.ts',
                vueTemplate: true,
                imports: ['vue', 'vue-i18n','vue-router'],
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
    }
    console.log(env,mode,command); 
    if(command==='serve'){
        return {
                ...base
        }
    }else if(command='build'){
        return {
            ...base,
            build:{
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
            }
        }
    }
});
