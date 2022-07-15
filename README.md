## vue3+vite+ts+element-plus+eslint+pritter 项目搭建

### 初始化项目

```bash
yarn create vite vue3-vite-ts --template vue-ts
```


### 配置`element-plus`
>添加`element-plus`并使用`unplugin-vue-components`实现按需加载和IDE提示

- 添加依赖

```bash
yarn add element-plus
yarn add unplugin-vue-components -D	
```



- 配置`vite.config.ts`实现按需加载和IDE提示

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from "unplugin-vue-components/vite"
import {ElementPlusResolver} from "unplugin-vue-components/resolvers"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),Components({
    resolvers:[ElementPlusResolver({
      importStyle :'sass'
    })],
    dts:'src/components.d.ts' //unplugin-vue-components 自动生成
  })]
})

```

- 配置`element-plus`插件和全局方法eg:`$message`、`$notify`

```typescript
/* src/plugins/element.ts */
import {ElMessage,ElNotification,ElMessageBox,Message,IElMessageBox,Notify} from "element-plus"
//app.provide()调用需要手动导入其样式
import "element-plus/theme-chalk/el-message.css"
import "element-plus/theme-chalk/el-message-box.css"
import 'element-plus/theme-chalk/el-notification.css'
import { InjectionKey ,App} from "vue"
import { SFCInstallWithContext, SFCWithInstall } from "element-plus/es/utils"
export const MessageKey:InjectionKey<SFCInstallWithContext<SFCWithInstall<Message>>>=Symbol("MessageKey")
export const MessageBoxKey:InjectionKey<SFCInstallWithContext<SFCWithInstall<IElMessageBox>>>=Symbol("MessageBoxKey")
export const NotificationKey:InjectionKey<SFCInstallWithContext<SFCWithInstall<Notify>>>=Symbol("NotificationKey")
export default {
    /**
     * @description 注册组件 app.use()实现选项式API中this.$message()方法 ，app.provide 实现 快速获取app.config.globalProperties 中的方法，在组合式API中快速获取全局方法
     * @param app 
     */
    install:(app:App)=>{
        
        app.use(ElMessage)
        .use(ElMessageBox)
        .use(ElNotification)
        .provide(MessageBoxKey,ElMessageBox)
        .provide(MessageKey,ElMessage)
        .provide(NotificationKey,ElNotification)
    }
}
```

```typescript
/* src/hooks/element.ts*/
import { inject } from "vue"
import { MessageBoxKey, MessageKey } from "../plugins/element"

export const useMessage=()=>{
    return {
        $message:inject(MessageKey)!
    }
}
export const useMessageBox=()=>{
    return {
        $confirm:inject(MessageBoxKey)!.confirm,
        $alert:inject(MessageBoxKey)!.alert,
        $prompt:inject(MessageBoxKey)!.prompt,
    }
}
```

### 添加`vue-router` 配置路由

```bash
yarn add vue-router
```



```typescript
/*
router.ts
 */
import {createRouter,createWebHistory,RouteRecordRaw} from "vue-router"
const routes:Readonly<RouteRecordRaw[]>=[{
    path:'/',
    component:()=>import("../App.vue"),
    name:'Home',
    redirect:'/Login',
    children:[
        {
            path:'/Login',
            component:()=>import("../views/Login/index.vue"),
            name:"Login"
        }
    ]
}]
export default createRouter({
    history:createWebHistory(import.meta.env.BASE_URL), //BASE_URL 取值 vite.config.js中的base属性
    routes
})
```

### 配置eslint + prettier 格式化代码

- 安装依赖

```bash
yarn add eslint eslint-config-prettier eslint-define-config eslint-plugin-prettier eslint-plugin-vue prettier vite-plugin-eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

- 配置`vite.config.js`

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

- 配置`.eslintrc.js`

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

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import Element from './plugins/element';
import router from './plugins/router';
import i18n from './plugins/i18n';
createApp(App).use(Element).use(i18n).use(router).mount('#app');

```

> TODO
- [x] `element-plus` 配置i18n



 
