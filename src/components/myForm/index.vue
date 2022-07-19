<!--
 * @Author: LG
 * @Date: 2022-07-18 09:42:33
 * @Description: 
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-19 11:34:50
 -->

<template>
    <el-form
        ref="formRef"
        :label-position="labelPosition"
        :label-width="labelWidth"
        :model="form"
        :rules="rules"
        size="small"
        :validate-on-rule-change="false">
        <el-row :gutter="20">
            <el-col v-for="column in columns" v-bind="response" :key="column.prop">
                <el-form-item :label="column.label" :prop="column.prop">
                    <component
                        :is="column.component"
                        v-bind="column.componentProps"
                        v-model="form[column.prop]" />
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
</template>

<script setup lang="ts">
// import { Component } from 'vue';
import { EpPropMergeType } from 'element-plus/es/utils';
// import { Component } from '@vue/runtime-core';
interface columnType {
    prop: string;
    label: string;
    component: unknown;
    componentProps?: object;
}
interface Props {
    form: { [key: string]: unknown };
    rules: object;
    labelPosition?: EpPropMergeType<StringConstructor, 'left' | 'right' | 'top', unknown>;
    labelWidth?: number;
    columns: Array<columnType>;
}
const response = reactive({
    xl: 6,
    lg: 6,
    md: 12,
    sm: 12,
    xs: 24,
});
withDefaults(defineProps<Props>(), { labelPosition: 'left', labelWidth: 80 });
let formRef = ref();
const validate = () => {
    if (!formRef.value) return false;
    return formRef.value.validate();
};
const resetFields = () => {
    if (!formRef.value) return false;
    return formRef.value.resetFields();
};
defineExpose({
    validate,
    resetFields,
});
</script>

<style></style>
