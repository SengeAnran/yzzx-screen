<template>
  <div class="AppTitle-root">
    <img src="../assets/img/top_title.png" />
  </div>
</template>

<script>
export default {
  name: "AppTitle",
};
</script>

<style lang="scss" scoped>
.AppTitle-root {
  //background: #42b983;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  // width: 100%;
  width: 1920px;
  height: 90px;
  overflow: hidden;
  text-align: center;
  img {
    //width: 120%;
    height: 90px;
  }
}
</style>
