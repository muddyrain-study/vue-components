import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 单独引入各个组件
import Button from '@muddyrain-vue/components/button'
import Card from '@muddyrain-vue/components/card'

import '@muddyrain-vue/theme-chalk/src/index.scss'

const app = createApp(App)

app.use(Button as any)
app.use(Card as any)
app.use(router)

app.mount('#app')
