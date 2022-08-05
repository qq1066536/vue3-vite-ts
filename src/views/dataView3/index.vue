<!--
 * @Author: LG
 * @Date: 2022-07-29 15:21:48
 * @Description: 
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-08-05 14:10:36
 -->
<template>
  <div>
    <template v-for="action in ViewConfig.actions">
      <el-button
        v-if="action.processMode === 'none'"
        :key="action.id"
        type="primary"
        size="small"
        >{{ action.name }}</el-button
      >
    </template>
  </div>
  <div>
    <el-tabs>
      <el-tab-pane
        v-for="item in ViewConfig.filters"
        :key="item.id"
        :label="item.name"
        :name="item.name"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { request } from "@/utils";
import { aasApi } from "../../api/aas";
const ViewConfig = reactive<{ actions: actionsDto[]; filters: filtersDto[] }>({
  actions: [],
  filters: [],
});
const route = useRoute();
onMounted(() => initial());
watch(
  () => route.query.code,
  () => initial()
);
const initial = () => {
  // console.log(route.query);
  request
    .get<{ _code: string }, dataview>(aasApi.getViewConfig, {
      params: { _code: route.query.code },
    })
    .then((res) => {
      if (res.code === 200) {
        ViewConfig.actions = res.data.actions;
        let list: filtersDto[] = [
          { id: new Date().getTime(), name: "ALL", dataType: "string", code: "all" },
        ];
        ViewConfig.filters = list.concat(res.data.filters);
      }
    });
};
</script>
