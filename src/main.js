import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Panel from "./components/Panel";
import CountUp from "./components/CountUp";

Vue.component('Panel',Panel) // 面板
Vue.component('CountUp',CountUp) // 数子动态效果

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
