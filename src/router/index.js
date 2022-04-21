import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index'
import config from "../utils/config";
import { parse } from '@/utils/qs';
import { recordPath, recordUserInfo } from '../utils/monitoring';
import area from "../utils/areaCode";
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
  mode: "history",
  routes
})
let employeeCode,accountId,realmId,regionName, userId;
function initSession() {
  console.log(parse().userId);
  employeeCode = parse().employeeCode;
  accountId = parse().accountId;
  realmId = parse().realmId;
  regionName = parse().areaName;
  userId = parse().userId;
  console.log(employeeCode, accountId, realmId, regionName, userId);

  // if (querySession === session) {
  //   sessionStorage.setItem('querySession', session);
  // }
}
initSession();
router.beforeEach((to, from, next) => {
  recordPath(to, from);
  if (employeeCode && accountId && realmId) {
    if (to.path === '/') {
      return next({ path: "/bindAccount", query: {employeeCode, accountId, realmId}, replace: true});
    }
    return next();
  }
  initSession();
  if ( to.path === '/' && userId && regionName ) {
      const userInfo = {
        userId: userId,
        regionCode: area[regionName || "浙江省"],
        regionName: regionName || "浙江省",
      }
      recordUserInfo(userInfo);
  }
  // return next({ path: "/noAuth", replace: true });
  return next();
})
export default router
