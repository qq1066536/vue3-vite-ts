<template>
  <!-- <el-switch v-model="responsive"></el-switch> -->
  <my-form
    ref="formRef"
    :form.sync="form"
    :rules="rules"
    :columns="columns"
    :responsive="responsive"
    label-position="top"
  ></my-form>
  <el-button type="primary" size="small" @click="handleClick">{{
    t("submit")
  }}</el-button>
  <el-button type="primary" size="small" @click="handleReset">{{ t("reset") }}</el-button>
  <el-button type="primary" size="small" @click="changeLanguage">切换语言</el-button>
  <el-select v-model="locale">
    <el-option v-for="item in availableLocales" :key="item" :value="item">{{
      item
    }}</el-option>
  </el-select>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { POST } from "../../utils";
const { t, locale, availableLocales } = useI18n();
const form = reactive({
  userName: "",
  password: "",
});
const responsive = ref(false);
const rules = reactive({
  userName: [{ required: true, message: "请输入用户名", trigger: ["change", "blur"] }],
  password: [{ required: true, message: "请输入密码", trigger: ["change", "blur"] }],
});
const changeLanguage = async () => {
  locale.value = locale.value === "zh" ? "en" : "zh";
  let source = await POST("/index", { type: "orange" });
  console.log(source);
};
const columns = reactive([
  {
    prop: "userName",
    label: "userName",
    component: markRaw(ElInput),
    componentProps: {
      placeholder: "请输入账户",
      clearable: true,
      type: "text",
    },
  },
  {
    prop: "password",
    label: "password",
    component: markRaw(ElInput),
    componentProps: {
      clearable: true,
      showPassword: true,
      placeholder: "请输入密码",
    },
  },
]);
const formRef = ref();
const handleClick = () => {
  formRef.value.validate().then((valid: unknown) => console.log(valid));
};
const handleReset = () => {
  formRef.value.resetFields();
  ElMessage.error("GG");
};
ElMessageBox.confirm("", {
  title: "Error",
  message: h("div", { class: "aaa" }, "测试"),
  type: "error",
  showClose: false,
  showCancelButton: false,
  confirmButtonText: "Ok",
});
ElNotification({
  title: "Error",
  type: "error",
  message: "错误信息",
  duration: 3000,
  showClose: false,
});
</script>

<style></style>
