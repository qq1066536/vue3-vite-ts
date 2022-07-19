<template>
    <my-form ref="formRef" :form.sync="form" :rules="rules" :columns="columns"></my-form>
    <el-button type="primary" size="small" @click="handleClick">提交</el-button>
    <el-button type="primary" size="small" @click="handleReset">重置</el-button>
</template>

<script setup lang="ts">
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
        component: markRaw(ElInput),
        componentProps: {
            placeholder: '请输入账户',
            clearable: true,
            type: 'textarea',
            maxlength: 100,
            showWordLimit: true,
            autosize: {
                minRows: 2,
                maxRows: 5,
            },
            resize: 'none',
        },
    },
    {
        prop: 'password',
        label: '密码',
        component: markRaw(ElInput),
        componentProps: {
            clearable: true,
            showPassword: true,
            placeholder: '请输入密码',
        },
    },
]);
const formRef = ref();
const handleClick = () => {
    formRef.value.validate().then((valid: unknown) => console.log(valid));
};
const handleReset = () => {
    formRef.value.resetFields();
    ElMessage('GG');
};
</script>

<style></style>
