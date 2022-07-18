<!--
 * @Author: LG
 * @Date: 2022-07-18 09:42:33
 * @Description: 
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-18 15:39:35
 -->

<template>
    <el-form
        :ref="formRef"
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
import { reactive, ref } from 'vue';
import { EpPropMergeType } from 'element-plus/es/utils';
interface columnType {
    prop: string;
    label: string;
    component: string;
    componentProps?: object;
}
type formItem = {
    [key: string]: unknown;
};
interface Props {
    form: formItem;
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
withDefaults(
    defineProps<Props>(),
    // eslint-disable-next-line vue/require-valid-default-prop
    { labelPosition: 'left', labelWidth: 80 }
);
// defineEmits<{
//     (e: 'update:form', value: object): void;
// }>();
const formRef = ref();
</script>

<style></style>
