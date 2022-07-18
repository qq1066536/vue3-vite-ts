<!--
 * @Author: LG
 * @Date: 2022-07-11 11:19:32
 * @Description: 
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-18 16:04:56
 -->
<template>
    <my-form :form.sync="form" :rules="rules" :columns="columns"></my-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const form = reactive({
    userName: '',
    password: '',
});
const rules = reactive({
    userName: [{ required: true, message: '请输入用户名', trigger: ['change', 'blur'] }],
    password: [{ required: true, message: '请输入密码', trigger: ['change', 'blur'] }],
});
const columns = reactive([
    {
        prop: 'userName',
        label: '用户名',
        component: 'el-input',
    },
    {
        prop: 'password',
        label: '密码',
        component: 'el-input',
        componentProps: {
            clearable: true,
            showPassword: true,
        },
    },
]);
</script>

<style></style>
