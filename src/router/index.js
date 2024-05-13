import Vue from 'vue'
import VueRouter from 'vue-router'
import config from "../utils/config";
// import {parse} from '@/utils/qs';
// import {recordUserInfo, recordPath} from '../utils/monitoring';
// import area from "../utils/areaCode";
// import axios from "axios";
import store from '../store/index'
import {routes} from './routeList'

Vue.use(VueRouter)
const router = new VueRouter({
    base: config.routerBase,
    mode: "history",
    routes: routes,
})
// let employeeCode, accountId, realmId, regionName, userId;
//
// function initSession() {
//     employeeCode = parse().employeeCode;
//     accountId = parse().accountId;
//     realmId = parse().realmId;
//     regionName = parse().areaName;
//     userId = parse().userId;
//     // console.log(employeeCode, accountId, realmId, regionName, userId);
//
//     // if (querySession === session) {
//     //   sessionStorage.setItem('querySession', session);
//     // }
// }

// initSession();
router.beforeEach((to, from, next) => {
    // recordPath(to, from);
    // if (employeeCode && accountId && realmId) {
    //     if (to.path === '/' && !to.query.userId) {
    //         //*//
    //         return next({path: "/bindAccount", query: {employeeCode, accountId, realmId}, replace: true});
    //     }
    //     return next();
    // }
    // initSession();
    // if (to.path === '/' && userId && regionName) {
    //     const userInfo = {
    //         userId: userId,
    //         regionCode: area[regionName || "浙江省"],
    //         regionName: regionName || "浙江省",
    //     }
    //     recordUserInfo(userInfo);
    // }
    // return next({ path: "/noAuth", replace: true });
    if (to.meta.index || to.meta.index === 0) {
        store.commit('SET_ACTIVE_NAV_INDEX', to.meta.index)
    } else {
        store.commit('SET_ACTIVE_NAV_INDEX', '')
    }

    return next();
})

export default router
