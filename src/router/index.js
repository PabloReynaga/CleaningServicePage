import { createRouter, createWebHistory } from 'vue-router'
import Impressum from '../components/page/Impressum.vue'
import Page from '../components/page/Page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/impressum',
      name: 'impressum',
      component : Impressum

      
      
    },
    {
      path: '/',
      name: 'page',
      component : Page
      
    
    }
  ]
})

export default router
