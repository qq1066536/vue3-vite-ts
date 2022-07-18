<!--
 * @Author: LG
 * @Date: 2022-07-11 11:19:32
 * @Description: 
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-18 16:38:00
 -->
<template>
    <my-form ref="formRef" :form.sync="form" :rules="rules" :columns="columns"></my-form>
    <el-button type="primary" size="small" @click="handleClick(formRef)">提交</el-button>
</template>

<script setup lang="ts">
import { FormInstance } from 'element-plus';
import { reactive, ref } from 'vue';
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
const formRef = ref();
const handleClick = (form: FormInstance | undefined) => {
    if (!form) return;
    form.validate().then(valid => console.log(valid));
};
</script>

<style></style>
