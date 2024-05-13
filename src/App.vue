<template>
  <div id="app">
    <!--    <fit-screen />-->
    <Layout/>
    <!--    <app-title />-->
    <!--    <router-view />-->
  </div>
</template>

<script>
// import AppTitle from "./components/AppTitle";
// import FitScreen from "./components/FitScreen";
import Layout from "./layout/index.vue";

import("./scss/common.scss");
export default {
  name: "App",
  components: {
    // AppTitle,
    // FitScreen,
    Layout,
  },
  data() {
    return {
      pageSize: {
        width: 1920,
        height: 1080,
      },
    };
  },
  comments: {
    // AppTitle,
    // FitScreen,
  },
};
</script>

<style lang="scss">
#app {
}
</style>
