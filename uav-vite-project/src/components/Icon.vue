<template>
  <div>
    <SettingOutlined v-if="iconName == 'setting-outlined'"></SettingOutlined>
    <UserOutlined v-if="iconName == 'user-outlined'"></UserOutlined>
    <MenuOutlined v-if="iconName == 'menu-outlined'"></MenuOutlined>
    <ContainerOutlined v-if="iconName == 'container-outlined'"></ContainerOutlined>
    <UsergroupAddOutlined v-if="iconName == 'user-group-add-outlined'"></UsergroupAddOutlined>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive} from "vue";
import {
  UserOutlined,
  SettingOutlined,
  MenuOutlined,
  ContainerOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons-vue';
const props = defineProps<{
  iconName: any;
}>();
</script>

<style scoped>

</style>

