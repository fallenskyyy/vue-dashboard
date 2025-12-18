import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import LoginLayout from '@/layouts/LoginLayout.vue'
import Board from "@/views/BoardView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: LoginLayout
    },
    {
      path: '/',
      component: MainLayout,
      children: [{ path: "dashboard", component: Board }]
    },
  ],
})

export default router
