import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/hesuan',
    name: 'Hesuan',
    component: () => import('../views/Hesuan/index.vue')
  },
  {
    path: '/fangyi',
    name: 'Fangyi',
    component: () => import('../views/Fangyi/Fangyi.vue')
  },
  {
    path: '/area',
    name: 'Area',
    component: () => import('../views/Area/index.vue')
  },
  {
    path: '/citys',
    name: 'Citys',
    component: () => import('../views/Citys/index.vue')
  },
  {
    path: '/travel',
    name: 'Travel',
    component: () => import('../views/Travel/index.vue')
  },
  {
    path: '/SelectCity',
    name: 'SelectCity',
    component: () => import('../views/SelectCity/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
