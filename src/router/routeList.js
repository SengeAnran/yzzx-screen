import index from "../views/Home/index.vue";

export const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            index: ''
        },
        component: index,
        children: []
    },
    { // AI智能矩阵
        name: "intelligentMatrix",
        path: "/intelligentMatrix",
        meta: {
            index: 0,
        },
        component: () => import("../views/IntelligentMatrix"),
        // template: '<router-view/>',
    },
    {
        path: "/intelligentMatrix/list",
        name: "intelligentMatrixList",
        meta: {
            index: 0,
        },
        component: () => import("../views/IntelligentMatrix/List/index.vue"),
    },
    {
        path: "/intelligentMatrix/detail",
        name: "intelligentMatrixDetail",
        meta: {
            index: 0,
        },
        component: () => import("../views/IntelligentMatrix/Detail/index.vue"),
    },
    { //数智大模型
        name: "intelligenceModel",
        path: "/intelligenceModel",
        meta: {
            index: 1,
        },
        component: () => import("../views/IntelligenceModel"),
    },
    { // 领域智慧场景
        name: "smartScene",
        path: "/smartScene",
        meta: {
            index: 2,
        },
        component: () => import("../views/SmartScene"),
    },
    {
        path: "/smartScene/detail",
        name: "smartSceneDetail",
        meta: {
            index: 2,
        },
        component: () => import("../views/SmartScene/Detail"),
    },
    { // AI人才培养
        name: "personnelTraining",
        path: "/personnelTraining",
        meta: {
            index: 3,
        },
        component: () => import("../views/PersonnelTraining"),
    },
    {
        path: "/personnelTraining/detail",
        name: "personnelTrainingDetail",
        meta: {
            index: 3
        },
        component: () => import("../views/PersonnelTraining/Detail"),
    },
    { // 数智化转型
        name: "digitalTransformation",
        path: "/digitalTransformation",
        meta: {
            index: 4,
        },
        component: () => import("../views/DigitalTransformation"),
    },
    { // 关于我们
        name: "aboutUs",
        path: "/aboutUs",
        meta: {
            index: 5,
        },
        component: () => import("../views/AboutUs"),
    },
    { //
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
