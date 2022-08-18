import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

import { routing } from '../utils/routing'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    name: 'Home',
    path: '/home',
    redirect: '/home/staff',
    component: () => import('@/views/home/Home.vue'),
    children: []
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

//动态路由
const list = routing(store.state.home.lists)
list.forEach((item) => {
  const categoryRoute = {
    name: item[1].toUpperCase() + item.slice(1),
    path: `/home/${item}`,
    component: () => import(`/src/views/home/component/${item}`)
  }
  router.addRoute('Home', categoryRoute)
})

//登录效果
router.beforeEach((to) => {
  // const path = to.path
  // if (path !== '/login') {
  //   if (to.matched[0].path === '/home') {
  //     switch (to.matched[1].path) {
  //       case '/home/staff':
  //         store.dispatch('home/getStaffData', {})
  //         break
  //       case '/home/department':
  //         store.dispatch('home/getDepartmentData', {})
  //         break
  //     }
  //   }
  // }
  // if (path === '/home/staff') {
  //   store.dispatch('home/getStaffData', {})
  // }
})

export default router
