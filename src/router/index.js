import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index'
import config from "../utils/config";
import { parse } from '@/utils/qs';
// import axios from "axios";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    name: "noAuth",
    path: "/noAuth",
    component: () => import("../views/NoAuth"),
  },
  {
    name: "bindAccount",
    path: "/bindAccount",
    component: () => import("../views/BindAccount"),
  },
]

const router = new VueRouter({
  base: config.routerBase,
  routes
})
let employeeCode,accountId,realmId;
function initSession() {
  employeeCode = parse().employeeCode;
  accountId = parse().accountId;
  realmId = parse().realmId;
  console.log(employeeCode, accountId, realmId);
  // if (querySession === session) {
  //   sessionStorage.setItem('querySession', session);
  // }
}
initSession();
router.beforeEach((to, from, next) => {
  if (employeeCode && accountId && realmId) {
    if (to.path === '/') {
      return next({ path: "/bindAccount", query: {employeeCode, accountId, realmId}, replace: true});
    }
    return next();
  }
  // return next({ path: "/noAuth", replace: true });
  return next();
})
export default router
