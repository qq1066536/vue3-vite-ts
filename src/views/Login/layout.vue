<!--
 * @Author: LG
 * @Date: 2022-07-15 11:55:58
 * @Description: 
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-20 15:07:35
 -->

<template>
    <div class="login">
        <div class="form">
            <router-view />
        </div>
        <div>
            <img src="@/assets/logo.png" alt="" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.login {
    display: flex;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    .form {
        width: 400px;
        padding: 20px;
        align-self: center;
    }
    & > *:last-child {
        flex: 1;
        background-color: burlywood;
    }
}
</style>
