<template>
    <!-- <el-switch v-model="responsive"></el-switch> -->
    <my-form
        ref="formRef"
        custom-class="login-form"
        :form.sync="form"
        :rules="rules"
        :columns="columns"
        :responsive="responsive"
        label-position="top"></my-form>
    <div style="display: flex; justify-content: space-between; align-items: center; height: 40px">
        <el-checkbox style="color: #fff" :label="t('rememberPassword')"></el-checkbox>
        <el-button link type="primary">{{ t('forgetPassword') }}</el-button>
    </div>
    <div style="display: flex; justify-content: center; align-items: center; height: 40px">
        <el-button type="primary" style="width: 100px" size="small" @click="handleClick">{{
            t('submit')
        }}</el-button>
        <el-button size="small" style="width: 100px" @click="handleReset">{{
            t('reset')
        }}</el-button>
    </div>
</template>

<script setup lang="ts">
import { GET } from '@/utils';
import { reactive, ref } from 'vue';
const { t } = useI18n();
const form = reactive({
    userName: '',
    password: '',
});
const responsive = ref(false);
const rules = reactive({
    userName: [{ required: true, message: '请输入用户名', trigger: ['change', 'blur'] }],
    password: [{ required: true, message: '请输入密码', trigger: ['change', 'blur'] }],
});
const columns = reactive([
    {
        prop: 'userName',
        label: 'userName',
        component: markRaw(ElInput),
        componentProps: {
            placeholder: 'typeUser',
            clearable: true,
            type: 'text',
        },
    },
    {
        prop: 'password',
        label: 'password',
        component: markRaw(ElInput),
        componentProps: {
            clearable: true,
            showPassword: true,
            placeholder: 'typePassword',
        },
    },
]);
const formRef = ref();
const handleClick = async () => {
    try {
        let flag = await formRef.value.validate();
        if (flag) {
            console.log('first');
        }
        GET('/s', { a: 123 });
    } catch (error) {
        console.log(error);
    }
};
const handleReset = () => {
    formRef.value.resetFields();
    ElMessage.error('GG');
};
</script>

<style lang="scss">
.login-form {
    .el-form-item__label {
        color: #b9b8b8;
    }
    .is-required {
        .el-form-item__label {
            &::after {
                content: '*';
                margin-left: 8px;
                color: rgba($color: #f00, $alpha: 0.7);
            }
        }
    }
}
</style>
