import { createRouter, createWebHashHistory } from 'vue-router'

export const routerHistory = createWebHashHistory()
export const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '',
      component: () => import('@/view/Home')
    }
  ],
  async scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
