## vue3+vite+ts+element-plus+eslint+pritter 项目搭建

### 初始化项目

```bash
yarn create vite vue3-vite-ts --template vue-ts
```

### 配置`element-plus`

> 添加`element-plus`并使用`unplugin-vue-components`和`unplugin-auto-import`实现按需加载、自动引入和 IDE 提示

-   添加依赖

```bash
yarn add element-plus
yarn add unplugin-vue-components unplugin-auto-import -D
```

-   配置`vite.config.ts`实现按需加载和 IDE 提示

```typescript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
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
            dts: 'src/components.d.ts', //unplugin-vue-components 自动生成
        }),
    ],
});
```

### 添加`vue-router` 配置路由

```bash
yarn add vue-router
```

```typescript
/*
router.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: '/',
        component: () => import('../App.vue'),
        name: 'Home',
        redirect: '/Login',
        children: [
            {
                path: '/Login',
                component: () => import('../views/Login/index.vue'),
                name: 'Login',
            },
        ],
    },
];
export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), //BASE_URL 取值 vite.config.js中的base属性
    routes,
});
```

### 配置 eslint + prettier 格式化代码

-   安装依赖

```bash
yarn add eslint eslint-config-prettier eslint-define-config eslint-plugin-prettier eslint-plugin-vue prettier vite-plugin-eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

-   配置`vite.config.js`

```typescript
...
import eslintPlugin from 'vite-plugin-eslint';
/** @type {import("vite").UserConfig} */
export default defineConfig({
    plugins: [
       ...
        eslintPlugin({
            include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
        }),
    ],
   ...
});

```

-   配置`.eslintrc.js`

```javascript
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require('eslint-define-config');
module.exports = defineConfig({
    parser: 'vue-eslint-parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    rules: {
        'vue/multi-word-component-names': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        'vue/html-closing-bracket-newline': 0,
    },
});
```

### 添加`vue-i18n`国际化

```bash
yarn add vue-i18n
yarn add @intlify/vite-plugin-vue-i18n -D
```

```typescript
import { App } from 'vue';
import { createI18n, I18n } from 'vue-i18n';
import zh from '../locales/zh.json';
import en from '../locales/en.json';
const i18n = createI18n({
    legacy: true,
    locale: 'en',
    messages: { zh, en },
    globalInjection: true,
}) as I18n;
export default {
    install: (app: App) => {
        app.use(i18n);
    },
};
```

- 配置`vue-i18n` 优化

```typescript
//vite.config.ts
import vueI18n from '@intlify/vite-plugin-vue-i18n';
export default defineConfig(({ mode,command}){
	plugins:[vueI18n({
		include: path.resolve(__dirname, 'src/locales/lang/**'),
    }),]
}
```

  

> TODO

-   [x] `element-plus` 配置 i18n

### 自定义`setup` name属性

> vue setup  组件默认使用文件名作为组件名，会导致部分文件显示不准确，配置`unplugin-vue-define-options` 自定义name

- 添加依赖

``` bash
    yarn add unplugin-vue-define-options
```

- 配置`vite.config.ts`

``` typescript
import DefineOptions from 'unplugin-vue-define-options/vite'
export default defineConfig(({ mode,command}) => {
     plugins: [
         ...
         DefineOptions()
         ...
     ]
})
```
- 配置`tsconfig.json`

```json
{
    "compilerOptions":{
        ...
        "types": ["unplugin-vue-define-options"] //添加对应的定义文件
    }
}
```

## 所有配置信息

- `main.ts`

```typescript
import { createApp } from 'vue';
import App from './main.vue';
import router from './plugins/router';
import i18n from './locales';
import 'normalize.css';
router.beforeEach((to, form, next) => {
if (!to.path.includes('login') && !sessionStorage.token) {
next('/login');
} else next();
});
createApp(App).use(router).use(i18n).mount('#app');

```

- `vite.config.ts`

```typescript
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import eslintPlugin from 'vite-plugin-eslint';
import AutoImport from 'unplugin-auto-import/vite';
import * as path from 'path';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import DefineOptions from 'unplugin-vue-define-options/vite'

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

```

