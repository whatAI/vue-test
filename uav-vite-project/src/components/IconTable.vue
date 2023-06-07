<template>
  <div>
    <a-row>
      <a-col :span="2">
        <a-button @click="iconValue = 'step-backward-outlined'" >
          <template #icon>
            <step-backward-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button  @click="iconValue = 'step-forward-outlined'" >
          <template #icon>
            <step-forward-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button  @click="iconValue = 'fast-backward-outlined'" >
          <template #icon>
            <fast-backward-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button  @click="iconValue = 'fast-forward-outlined'" >
          <template #icon>
            <fast-forward-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button   @click="iconValue = 'shrink-outlined'" >
          <template #icon>
            <shrink-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button   @click="iconValue = 'arrows-alt-outlined'" >
          <template #icon>
            <arrows-alt-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button   @click="iconValue = 'down-outlined'" >
          <template #icon>
            <down-outlined />
          </template>
        </a-button>
      </a-col>


      <a-col :span="2">
        <a-button  @click="iconValue = 'up-outlined'" >
          <template #icon>
            <up-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button  @click="iconValue = 'left-outlined'" >
          <template #icon>
            <left-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button   @click="iconValue = 'right-outlined'" >
          <template #icon>
            <right-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button  @click="iconValue = 'caret-up-outlined'" >
          <template #icon>
            <caret-up-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button  @click="iconValue = 'caret-down-outlined'" >
          <template #icon>
            <caret-down-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button  @click="iconValue = 'caret-left-outlined'" >
          <template #icon>
            <caret-left-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button  @click="iconValue = 'caret-right-outlined'" >
          <template #icon>
            <caret-right-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button  @click="iconValue = 'up-circle-outlined'" >
          <template #icon>
            <up-circle-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button   @click="iconValue = 'down-circle-outlined'" >
          <template #icon>
            <down-circle-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button  @click="iconValue = 'down-circle-outlined'" >
          <template #icon>
            <down-circle-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button  @click="iconValue = 'left-circle-outlined'" >
          <template #icon>
            <left-circle-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button  @click="iconValue = 'right-circle-outlined'" >
          <template #icon>
            <right-circle-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button  @click="iconValue = 'right-circle-outlined'" >
          <template #icon>
            <right-circle-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button  @click="iconValue = 'double-left-outlined'" >
          <template #icon>
            <double-left-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button  @click="iconValue = 'vertical-left-outlined'" >
          <template #icon>
            <vertical-left-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button  @click="iconValue = 'vertical-right-outlined'" >
          <template #icon>
            <vertical-right-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button  @click="iconValue = 'vertical-align-top-outlined'" >
          <template #icon>
            <vertical-align-top-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button  @click="iconValue = 'vertical-align-middle-outlined'" >
          <template #icon>
            <vertical-align-middle-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button  @click="iconValue = 'vertical-align-middle-outlined'" >
          <template #icon>
            <vertical-align-middle-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button  @click="iconValue = 'vertical-align-bottom-outlined'" >
          <template #icon>
            <vertical-align-bottom-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button  @click="iconValue = 'forward-outlined'" >
          <template #icon>
            <forward-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button  @click="iconValue = 'backward-outlined'" >
          <template #icon>
            <backward-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button   @click="iconValue = 'rollback-outlined'" >
          <template #icon>
            <rollback-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button  @click="iconValue = 'enter-outlined'" >
          <template #icon>
            <enter-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button   @click="iconValue = 'retweet-outlined'" >
          <template #icon>
            <retweet-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button  @click="iconValue = 'step-backward-outlined'" >
          <template #icon>
            <menu-fold-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button  @click="iconValue = 'menu-unfold-outlined'" >
          <template #icon>
            <menu-unfold-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button  @click="iconValue = 'align-center-outlined'" >
          <template #icon>
            <align-center-outlined />
          </template>
        </a-button>
      </a-col><a-col :span="2">
      <a-button  @click="iconValue = 'align-left-outlined'" >
        <template #icon>
          <align-left-outlined />
        </template>
      </a-button>
    </a-col><a-col :span="2">
      <a-button  @click="iconValue = 'ordered-list-outlined'" >
        <template #icon>
          <ordered-list-outlined />
        </template>
      </a-button>
    </a-col>

      <a-col :span="2">
        <a-button  @click="iconValue = 'unordered-list-outlined'" >
          <template #icon>
            <unordered-list-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button  @click="iconValue = 'appstore-outlined'" >
          <template #icon>
            <appstore-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button  @click="iconValue = 'bars-outlined'" >
          <template #icon>
            <bars-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button  @click="iconValue = 'vertical-align-top-outlined'" >
          <template #icon>
            <vertical-align-top-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button  @click="iconValue = 'bulb-outlined'" >
          <template #icon>
            <bulb-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button  @click="iconValue = 'console-sql-outlined'" >
          <template #icon>
            <console-sql-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button  @click="iconValue = 'desktop-outlined'" >
          <template #icon>
            <desktop-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button   @click="iconValue = 'vertical-align-top-outlined'" >
          <template #icon>
            <vertical-align-top-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button   @click="iconValue = 'vertical-align-top-outlined'" >
          <template #icon>
            <vertical-align-top-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button  @click="iconValue = 'exception-outline'" >
          <template #icon>
            <exception-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button   @click="iconValue = 'file-word-outlined'" >
          <template #icon>
            <file-word-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button  @click="iconValue = 'file-markdown-outlined'" >
          <template #icon>
            <file-markdown-outlined />
          </template>
        </a-button>
      </a-col>

      <a-col :span="2">
        <a-button   @click="iconValue = 'file-search-outlined'" >
          <template #icon>
            <file-search-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button   @click="iconValue = 'file-protect-outlined'" >
          <template #icon>
            <file-protect-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button  @click="iconValue = 'hdd-outlined'" >
          <template #icon>
            <hdd-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button   @click="iconValue = 'insert-row-left-outlined'" >
          <template #icon>
            <insert-row-left-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button   @click="iconValue = 'merge-cells-outlined'" >
          <template #icon>
            <merge-cells-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button  @click="iconValue = 'printer-outlined'" >
          <template #icon>
            <printer-outlined />
          </template>
        </a-button>
      </a-col><a-col :span="2">
      <a-button  @click="iconValue = 'reconciliation-outlined'" >
        <template #icon>
          <reconciliation-outlined />
        </template>
      </a-button>
    </a-col><a-col :span="2">
      <a-button  @click="iconValue = 'shop-outlined'" >
        <template #icon>
          <shop-outlined />
        </template>
      </a-button>
    </a-col>

      <a-col :span="2">
        <a-button   @click="iconValue = 'split-cells-outlined'" >
          <template #icon>
            <split-cells-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button  @click="iconValue = 'usergroup-add-outlined'" >
          <template #icon>
            <usergroup-add-outlined />
          </template>
        </a-button>
      </a-col>
      <a-col :span="2">
        <a-button  @click="iconValue = 'woman-outlined'" >
          <template #icon>
            <woman-outlined />
          </template>
        </a-button>
      </a-col>
    </a-row>
  </div>
</template>


<script setup lang="ts">
import {ref,defineExpose} from "vue";
let iconValue = ref('')
const props = defineProps<{
  iconName: any;
}>();

const change = () => {
  console.log(iconValue.value)
}

defineExpose({
  change,
  iconValue
})
</script>

<style scoped>

</style>

