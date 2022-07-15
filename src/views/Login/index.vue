<!--
 * @Author: LG
 * @Date: 2022-07-11 11:19:32
 * @Description: 
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-11 15:29:17
 -->
<template>
    <div>
        <el-form
            :model="form"
            :rules="rules"
            style="width: 500px"
            size="small"
            label-position="top">
            <el-form-item label="userName" prop="userName">
                <el-input placeholder="请输入用户名" clearable></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input
                    v-model="form.password"
                    type="password"
                    show-password
                    clearable></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route);
const form = reactive({
    userName: '',
    password: '',
});
const rules = reactive({
    userName: [{ required: true, message: '请输入用户名', trigger: ['change', 'blur'] }],
    password: [{ required: true, message: '请输入密码', trigger: ['change', 'blur'] }],
});
</script>

<style></style>
