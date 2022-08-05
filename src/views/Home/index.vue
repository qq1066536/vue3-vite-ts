<!--
 * @Author: LG
 * @Date: 2022-07-27 10:48:39
 * @Description: 
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-07-29 16:01:56
 -->
<template>
    <el-container style="display: flex; height: 100%">
        <el-header style="background-color: blueviolet"></el-header>
        <el-container>
            <el-aside>
                <el-menu menu-trigger="hover">
                    <el-sub-menu v-for="item in menuList" :key="item.id" :index="item.id.toString()">
                        <template #title>
                            <span>{{ item.name }}</span>
                        </template>
                        <el-sub-menu
                            v-for="current in item.children"
                            :key="current.id"
                            :index="current.id.toString()">
                            <template #title> {{ current.name }}</template>
                            <el-menu-item
                                v-for="child in current.children"
                                :key="child.id"
                                :index="child.id.toString()"
                                @click="handleRouter(child)"
                                >{{ child.name }}</el-menu-item
                            >
                        </el-sub-menu>
                    </el-sub-menu>
                </el-menu>
            </el-aside>
            <el-main><router-view/></el-main>
        </el-container>
    </el-container>
</template>
<script lang="ts" setup>
import router from '@/plugins/router';
import { request } from '@/utils';
import { aasApi } from '../../api/aas';

defineOptions({
    name: 'Home',
});
onMounted(() => {
    getMenu();
});
interface MyConfig {
    system: string;
    application: string;
}
const menuList: never[] = ref([]);
const getMenu = async () => {
    let source = await request.get<MyConfig, unknown>(aasApi.getMenu, {
        params: { system: 'lova', application: 'lova.web' },
    });
    if (source.code === 200) {
        console.log(source.data);
        menuList.value = source.data;
    }
};
const handleRouter = (item: never) => {
    const { uiResource } = item.function;
    const findIndex: string[] = uiResource.split('.');
    // console.log(findIndex.shift(), findIndex.join('.'));
    router.push({
        name: findIndex.shift(),
        query: {
            code: findIndex.join('.'),
        },
    });
};
</script>
