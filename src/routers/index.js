import { createRouter, createWebHashHistory } from 'vue-router'
import BasicLayout from '@/layouts/basicLayout'
import LoginPage from '@/pages/login'

const routes = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      { path: '/login', component: LoginPage }
    ]
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router