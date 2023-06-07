<template>
  <a-layout has-sider :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible >
      <div class="logo" />
      <SideMenu></SideMenu>
    </a-layout-sider>、
    <a-layout-content :style="{  marginTop: '0' }">
      <a-menu
          v-model:selectedKeys="selectedKeysTop"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px',marginLeft:'-15px' }"
      >
        <a-sub-menu key="sub2" >
          <template #title>
            <div >
              <menu-unfold-outlined
                  v-if="collapsed"
                  class="trigger"
                  @click="() => (collapsed = !collapsed)"
              />
              <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
            </div>
          </template>
        </a-sub-menu>
        <a-sub-menu key="sub1" style="margin-left: 85%" >
          <template #title>
            <a-avatar v-if="userInfo.avatar == null || userInfo.avatar == ''" style="background-color: #87d068">
              <template #icon>
                <UserOutlined />
              </template>
            </a-avatar>
            <a-avatar style="margin-top: -10px" v-if="userInfo.avatar != null && userInfo.avatar != ''" :src="userInfo.avatar" />
            <a class="ant-dropdown-link" @click.prevent>
              <view style="margin-top: 10%;margin-left: 10%">
                {{userInfo.username}}
              </view>
              <DownOutlined />
            </a>
          </template>
          <a-menu-item key="setting:1">
            <router-link to="/userCenter">
              个人中心
            </router-link>
          </a-menu-item>
          <a-menu-item key="setting:2" @click.native="logOut">退出</a-menu-item>
        </a-sub-menu>
      </a-menu>
      <div style="margin-top: 15px;">
        <Tabs></Tabs>
      </div>
      <div id="components-affix-demo-target" ref="containerRef" class="scrollable-container" :style="{ background: 'rgb(255,255,255)', padding: '15px', minHeight: '820px' }">
        <router-view>
        </router-view>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script lang="ts" setup>
import {
  DownOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { userStore} from '@/store/store'
import { useRoute, useRouter } from "vue-router";
import SideMenu from "@/views/inc/SideMenu.vue"
import Tabs from "@/views/inc/Tab.vue"
import { ref,reactive } from 'vue';
import { getUserInfo,logout } from "@/api";
const user = userStore()
let selectedKeys =ref<string[]>(['1'])
let selectedKeysTop =ref<string[]>(['1'])
let collapsed =ref<boolean>(false)
let gridInfo = ref('')
// 获取路由信息
const router = useRouter();
let userInfo = reactive({
  id: '',
  username: '',
  avatar: '',
});
getUserInfo().then(response => {
  gridInfo.value = response.data.data
  userInfo = Object.assign(userInfo,gridInfo.value);
  console.log(userInfo)
});
const logOut = () => {
  logout().then(response => {
    user.resetState()
    user.setEditableTabsIndexClearALL()
    user.setEditableTabsIndex0()
    localStorage.clear();
    sessionStorage.clear();
    router.push("/login");
  });
}
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
#components-layout-demo-custom-trigger .trigger:hover {
  color: #fb7299;
}
#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
.site-layout .site-layout-background {
  background: #fff;
}
#components-affix-demo-target.scrollable-container {
  height: 100px;
  overflow-y: scroll;
}
#components-affix-demo-target .background {
  padding-top: 60px;
  height: 300px;
}
</style>

