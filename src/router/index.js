import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index'
import config from "../utils/config";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  }
]

const router = new VueRouter({
  base: config.routerBase,
  routes
})

export default router
