import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import Vue3TouchEvents from 'vue3-touch-events'


const app = createApp(App)

app.use(Vue3TouchEvents)
app.use(router)
app.use(MotionPlugin)

app.mount('#app')
