import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 单独引入各个组件
import DuyiComponents from '@muddyrain-vue/components'
import '@muddyrain-vue/theme-chalk/src/index.scss'

const app = createApp(App)

app.use(DuyiComponents)
app.use(router)

app.mount('#app')
