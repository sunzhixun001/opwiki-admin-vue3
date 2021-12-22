import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layouts'
import LoginPage from '@/pages/login'
import TimeLinePage from '@/pages/timeline'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/timeline', component: TimeLinePage }
    ]
  },
  { path: '/login', component: LoginPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router