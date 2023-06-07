<template>
  <router-view></router-view>
</template>
<script setup lang="ts">
import {ref,reactive,watch} from "vue"
import {useRouter} from "vue-router";
import {userStore} from "@/store/store";
const router = useRouter();
watch(
    () => router.currentRoute.value,
    (newValue, oldValue) => {
      let uStore = userStore().getEditableTabs;
      uStore.forEach((pane) => {
        if(pane.content === newValue.fullPath ){
          userStore().setEditableTabsValue(pane.key)
          router.push(pane.content);
        }
      });
    },
    { immediate: true }
)
</script>
<style scoped>
</style>

