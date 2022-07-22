<!--
 * @Author: LG
 * @Date: 2022-07-18 09:42:33
 * @Description: 
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-22 14:55:10
 -->

<template>
  <el-form
    ref="formRef"
    :label-position="labelPosition"
    :label-width="labelWidth"
    :model="form"
    :rules="rules"
    :size="size"
    :class="customClass"
    :validate-on-rule-change="false"
    hide-required-asterisk
  >
    <el-row :gutter="20">
      <el-col v-for="column in columns" v-bind="response" :key="column.prop">
        <el-form-item :label="t(column.label)" :prop="column.prop">
          <component
            :is="column.component"
            v-bind="column.componentProps"
            v-model="form[column.prop]"
          />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
// import { Component } from 'vue';
import { EpPropMergeType } from "element-plus/es/utils";
// import { Component } from '@vue/runtime-core';
const { t } = useI18n();
interface columnType {
  prop: string;
  label: string;
  component: unknown;
  componentProps?: object;
}
interface Props {
  form: { [key: string]: unknown };
  rules: object;
  labelPosition?: EpPropMergeType<StringConstructor, "left" | "right" | "top", unknown>;
  labelWidth?: number;
  customClass?: string;
  responsive?: boolean;
  size?: EpPropMergeType<StringConstructor, "large" | "default" | "small", unknown>;
  columns: Array<columnType>;
}
const response = computed(() =>
  props.responsive
    ? {
        xl: 6,
        lg: 6,
        md: 12,
        sm: 12,
        xs: 24,
      }
    : {
        xl: 24,
        lg: 24,
        md: 24,
        sm: 24,
        xs: 24,
      }
);
const props = withDefaults(defineProps<Props>(), {
  labelPosition: "left",
  labelWidth: 80,
  customClass: "my-form",
  responsive: true,
  size: "default",
});
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
