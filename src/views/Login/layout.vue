<!--
 * @Author: LG
 * @Date: 2022-07-15 11:55:58
 * @Description: 
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-22 15:16:32
 -->

<template>
    <div class="login">
        <div class="banner">
            {{ t('loginBanner') }}
        </div>
        <div style="flex: 1; padding-top: 100px">
            <div class="form">
                <router-view />
            </div>
        </div>
        <div class="footer">
            &copy;2019 Easy Binary Forms . All rights reserved | Design by
            <em style="color: orangered">vue3-vite-ts</em>
        </div>
        <div class="changeLuanguage">
            <span style="font-size: 16px; color: #fff; margin-right: 12px">{{
                t('changeLanguage')
            }}</span>
            <el-select v-model="locale">
                <el-option
                    v-for="currentLocale in availableLocales"
                    :key="currentLocale"
                    :label="currentLocale"
                    :value="currentLocale"></el-option>
            </el-select>
        </div>
    </div>
</template>
<script lang="ts" setup>
const { t, locale, availableLocales } = useI18n();
</script>
<style lang="scss" scoped>
.login {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: url('@/assets/bannernew.jpg') no-repeat;
    background-size: cover;
    align-items: center;
    .form {
        flex: 1;
        width: 400px;
        padding: 20px;
        align-self: center;
        background-color: rgba($color: #000000, $alpha: 0.66);
        border-radius: 4px;
        box-shadow: 2px 2px 15px rgba($color: #fff, $alpha: 0.4);
    }
    .banner,
    .footer {
        font-size: 30px;
        // text-align: center;
        color: #fff;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
        letter-spacing: 5px;
        word-spacing: 2px;
        margin: 50px 0;
    }
    .footer {
        font-size: 14px;
        letter-spacing: unset;
        word-spacing: unset;
        font-weight: normal;
    }
    .changeLuanguage {
        position: absolute;
        top: 10px;
        right: 10px;
    }
}
</style>
<style lang="scss">
.login {
    .el-input__wrapper {
        background-color: rgba($color: #fff, $alpha: 0.3);
        color: #fff;
    }
    .el-input__inner {
        color: #fff;
        // outline: 1px solid rgba($color: #000000, $alpha: 1) !important;
    }
}
</style>
