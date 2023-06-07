<template>
  <div>
    <a-tabs v-model:activeKey="editableTabsValue" type="editable-card" @edit="onEdit" @tabClick="onTabClick">
      <a-tab-pane v-for="pane in editableTabs" :key="pane.key" :tab="pane.title" :closable="pane.closable">
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { userStore} from '@/store/store'
import {ref, onMounted,computed} from 'vue'
import {useRouter} from "vue-router";

let editableTabs = computed({
  get(){
    return userStore().getEditableTabs;
  },
  set(val){
    userStore().addTab(val);
  }
});
let editableTabsValue = computed({
  get(){
    return userStore().getEditableTabsValue;
  },
  set(val:number){
    userStore().setEditableTabsValue(val);
  }
});
// @ts-ignore
const activeKey = ref(editableTabs.value[0].key);
const newTabIndex = ref(0);
let panesList = ref();
onMounted(()=>{
  panesList.value = userStore().getEditableTabs;
})
const removeAll = () => {
  activeKey.value = `newTab${++newTabIndex.value}`;
  userStore().setEditableTabsIndexClearALL()
  userStore().setEditableTabsValue("1")
  router.push("/index");
};

const remove = (targetKey: string) => {
  let lastIndex = 0;
  let uStore = userStore().getEditableTabs;
  uStore.forEach((pane, i) => {
    // @ts-ignore
    if (uStore.key === targetKey) {
      lastIndex = i - 1;
    }
  });
  // @ts-ignore
  uStore = uStore.filter(pane => pane.key !== targetKey);
  if (uStore.length && activeKey.value === targetKey) {
    if (lastIndex >= 0) {
      // @ts-ignore
      activeKey.value = uStore[lastIndex].key;
    } else {
      // @ts-ignore
      activeKey.value = uStore[0].key;
    }
  }
  userStore().setEditableTabs(uStore);
};
const onEdit = (targetKey: string | MouseEvent, action: string) => {
  if (action === 'add') {
    removeAll();
  } else {
    remove(targetKey as string);
  }
};
const router = useRouter();

const onTabClick = (targetKey: string) => {
  let jsonArray = userStore().getEditableTabs
  let path = "";
  for(let i =0;i < jsonArray.length;i++){
    if(targetKey == jsonArray[i].key){
      path = jsonArray[i].content;
    }
  }
  userStore().setEditableTabsValue(targetKey)
  router.push(path);
}

</script>
<style scoped>
::v-deep .ant-tabs-nav-list .ant-tabs-nav-add span {
  transform: rotate(-45deg);
}
</style>

