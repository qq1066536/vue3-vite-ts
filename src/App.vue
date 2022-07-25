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
</script>
<style lang="scss" scoped>
#app {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
</style>
