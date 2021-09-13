<template>
  <div id="app">
    <fit-screen/>
    <app-title/>
    <router-view/>
  </div>
</template>

<script>
import AppTitle from "./components/AppTitle";
import FitScreen from "./components/FitScreen";
export default {
  name: 'App',
  components: {AppTitle, FitScreen},
  data() {
    return {
      pageSize: {
        width: 1920,
        height: 1080,
      },
    };
  },
  comments: {
    AppTitle,
    FitScreen,
  },
}
</script>

<style lang="scss">
#app {

}
</style>
