import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: 'monitor',
    children: [
      {
        path: 'monitor',
        name: '监控',
        component: () => import('@/views/monitor/index'),
        meta: {
          affix: true,
          title: '监控',
        }
      },
      {
        path: 'strategy',
        name: '策略',
        component: () => import('@/views/strategy/index'),
        meta: {
          affix: true,
          title: '策略',
        }
      },
      {
        path: 'analysis',
        name: '分析',
        component: () => import('@/views/analysis/index'),
        meta: {
          affix: true,
          title: '分析',
        }
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
