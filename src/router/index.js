import { createRouter, createWebHistory } from 'vue-router'
import VMain from "@/layouts/VMain.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: VMain
    },
  ]
})

export default router
