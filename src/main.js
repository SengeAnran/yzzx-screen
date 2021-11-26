import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Panel from "./components/Panel";
import CountUp from "./components/CountUp";
import Empty from "./components/Empty";
import * as echarts from "echarts";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.use(VueAwesomeSwiper);
Vue.component("Panel", Panel); // 面板
Vue.component("CountUp", CountUp); // 数子动态效果
Vue.component("Empty", Empty); // 暂无数据
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
