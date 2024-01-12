import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 单独引入各个组件
import Button from '@muddyrain-vue/components/button'

import '@muddyrain-vue/theme-chalk/src/index.scss'

const app = createApp(App)

app.use(Button)
app.use(router)

app.mount('#app')
