<!--
 * @Author: LG
 * @Date: 2022-07-27 11:37:12
 * @Description: 
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-27 11:37:13
 -->
<template>
    <div id="app">
        <el-config-provider :locale="ElLocales">
            <router-view />
        </el-config-provider>
    </div>
</template>
<script lang="ts" setup>
import ElZh from 'element-plus/es/locale/lang/zh-cn';
import Elen from 'element-plus/es/locale/lang/En';
const { locale } = useI18n();
const ElLocales = computed(() => (locale.value === 'zh-cn' ? ElZh : Elen));
// console.log($i18n.global.t("error"))
</script>
<style lang="scss" scoped>
#app {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
</style>
