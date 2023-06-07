import { createApp } from 'vue'
import './style.css'
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import router from './router/index'
import store  from './store/index'
import { createPinia } from 'pinia'
import * as echarts from 'echarts'
let app = createApp(App)
app.config.globalProperties.$echarts = echarts

import "@/mock"

app.use(router)
app.use(store)
app.use(createPinia)
app.mount('#app')