import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Panel from "./components/Panel";
import CountUp from "./components/CountUp";
import Empty from "./components/Empty";
import uploadImg from "./components/uploadImg.vue";
import * as echarts from "echarts";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import "@/utils/flexible"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.use(VueAwesomeSwiper);
Vue.component("Panel", Panel); // 面板
Vue.component("CountUp", CountUp); // 数子动态效果
Vue.component("Empty", Empty); // 暂无数据
Vue.component("uploadImg", uploadImg); // 暂无数据
Vue.prototype.$echarts = echarts;
//  展示json
import JsonViewer from 'vue-json-viewer';
// Import JsonViewer as a Vue.js plugin
Vue.use(JsonViewer);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
