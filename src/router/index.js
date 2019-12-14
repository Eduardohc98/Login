import Vue from 'vue'
import VueRouter from 'vue-router'
import Caja from '../views/Caja.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'caja',
    component: Caja
  },
  {
    path: '/cocinero',
    name: 'Cocinero',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cocinero.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
