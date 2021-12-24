import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layouts'
const LoginPage = () => import ('@/pages/login')
const TimeLinePage = () => import ('@/pages/timeline')

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