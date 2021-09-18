import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Panel from "./components/Panel";
import CountUp from "./components/CountUp";
import * as echarts from "echarts";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";

Vue.use(VueAwesomeSwiper);
Vue.component("Panel", Panel); // 面板
Vue.component("CountUp", CountUp); // 数子动态效果
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
