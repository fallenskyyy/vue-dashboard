import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import LoginLayout from '@/layouts/LoginLayout.vue'
import Board from "@/views/BoardView.vue"
import Login from "@/views/LoginView.vue"
import { authGuard } from './guards'
import { loggedCheck } from './guards'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LoginLayout,
      children: [{ path: "login", component: Login }],
    },
    {
      path: '/',
      component: MainLayout,

      children: [{ path: "dashboard", component: Board }],
      beforeEnter: authGuard,
    },
  ],
})

export default router
