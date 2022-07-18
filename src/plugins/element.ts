/*
 * @Author: LG
 * @Date: 2022-07-11 10:24:15
 * @Description:
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-18 10:36:16
 */
import {
    ElMessage,
    ElNotification,
    ElMessageBox,
    Message,
    IElMessageBox,
    Notify,
    ElInput,
} from 'element-plus';
//app.provide()调用需要手动导入其样式
import 'element-plus/theme-chalk/el-message.css';
import 'element-plus/theme-chalk/el-message-box.css';
import 'element-plus/theme-chalk/el-notification.css';
import 'element-plus/theme-chalk/el-input.css';
import { InjectionKey, App } from 'vue';
import { SFCInstallWithContext, SFCWithInstall } from 'element-plus/es/utils';
export const MessageKey: InjectionKey<SFCInstallWithContext<SFCWithInstall<Message>>> =
    Symbol('MessageKey');
export const MessageBoxKey: InjectionKey<SFCInstallWithContext<SFCWithInstall<IElMessageBox>>> =
    Symbol('MessageBoxKey');
export const NotificationKey: InjectionKey<SFCInstallWithContext<SFCWithInstall<Notify>>> =
    Symbol('NotificationKey');
export default {
    /**
     * @description 注册组件 app.use()实现选项式API中this.$message()方法 ，app.provide 实现 快速获取app.config.globalProperties 中的方法，在组合式API中快速获取全局方法
     * @param app
     */
    install: (app: App) => {
        app.use(ElMessage)
            .use(ElInput)
            .use(ElMessageBox)
            .use(ElNotification)
            .provide(MessageBoxKey, ElMessageBox)
            .provide(MessageKey, ElMessage)
            .provide(NotificationKey, ElNotification);
    },
};
