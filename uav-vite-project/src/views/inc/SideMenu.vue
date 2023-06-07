<template>
  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" style="height: 100vh" mode="inline">
    <a-menu-item key="app" disabled>
      <template #icon>
        <img src="../../assets/bilibili.png" style="height: 15px;width: 35px">
      </template>
      <div >
        <div style="display: none"> {{editableTabsValue}}</div>
        后台管理系统
      </div>
    </a-menu-item>
    <router-link to="/index">
      <a-menu-item key="1" @click="selectMenuIndex0">
        <template #icon>
          <MailOutlined />
        </template>
        主页
      </a-menu-item>
    </router-link>
    <a-sub-menu :key="menu.name"  v-for="menu in menuList.menus">
      <template #icon>
        <Icon :icon-name="menu.icon" />
      </template>
      <template #title>{{menu.title}}</template>
      <router-link :to="item.path" v-for="item in menu.children">
<!--        <a-menu-item :key="item.key">
          <template #icon>
            <Icon :icon-name="item.icon" />
          </template>
          {{item.title}}
        </a-menu-item>-->
        <a-menu-item :key="item.key" @click="selectMenu(item)">
          <template #icon>
            <Icon :icon-name="item.icon" />
          </template>
          {{item.title}}
        </a-menu-item>
      </router-link>
    </a-sub-menu>
  </a-menu>
</template>
<script setup lang="ts">
import {ref,reactive,onMounted,computed} from "vue";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
  MenuOutlined,
  ContainerOutlined
} from '@ant-design/icons-vue';
import Icon from "@/components/Icon.vue"
import { userStore} from '@/store/store'
let selectedKeys =ref<string[]>(['1'])
let selectedKeysTop =ref<string[]>(['1'])
let collapsed =ref<boolean>(false)
let menuList = reactive({
  menus:  []
})
let editableTabsValue = computed({
  get(){
    let key = userStore().getEditableTabsValue;
    selectedKeys.value.length = 0;
    selectedKeys.value.push(key)
    return key;
  },
  set(val:any){
    userStore().setMenuList(val);
  }
});


onMounted(()=>{
  var menus = userStore().getEditableTabsValue;
  //设置高亮同步
  selectedKeys.value.length = 0;
  selectedKeys.value.push(menus+"")
  menuList.menus = userStore().getMenuList;
});
const selectMenu = (item:any) => {
  userStore().addTab(item)
}
const selectMenuIndex0 = () => {
  userStore().setEditableTabsIndex0()
}

</script>
<style scoped>
</style>

