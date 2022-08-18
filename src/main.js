import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'
import store from '@/store'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'assets/css/base.less'

//  注册全局图标
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store).use(router).mount('#app')
