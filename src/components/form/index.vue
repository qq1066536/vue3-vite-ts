<!--
 * @Author: LG
 * @Date: 2022-07-18 09:42:33
 * @Description: 
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-18 11:21:29
 -->

<template>
    <el-form
        :ref="formRef"
        :label-position="labelPosition"
        :model="form"
        :rules="rules"
        size="small"
        :validate-on-rule-change="false">
        <el-row>
            <el-col v-for="column in columns" v-bind="response" :key="column.prop">
                <el-form-item :label="column.label" :prop="column.prop">
                    <component :is="column.component" />
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
interface columnType {
    prop: string;
    label: string;
    component: string;
    componentProps?: object;
}
interface Props {
    form: object;
    rules: object;
    labelPosition?: string;
    columns: Array<columnType>;
}
const response = reactive({
    xl: 6,
    lg: 6,
    md: 12,
    sm: 12,
    xs: 24,
});
withDefaults(
    defineProps<Props>(),
    // eslint-disable-next-line vue/require-valid-default-prop
    { labelPosition: 'top' }
);
const formRef = ref();
</script>

<style></style>
