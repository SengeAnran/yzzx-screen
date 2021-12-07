<template>
  <div class="AppTitle-root">
    <img src="../assets/img/top_title.png" @click="goHome"/>
    <div class="left-button" @click="goPage"></div>
    <div class="right-button" @click="goPage2"></div>
  </div>
</template>

<script>
export default {
  name: "AppTitle",
  methods: {
    goHome() {
      // console.log(location);
      window.open(location.href.slice(0,-2),'_self');
    },
    goPage() {
      window.open('https://szsn.zjagri.cn/view/official/index.html');
    },
    goPage2() {
      window.open('http://jqy.zjagri.cn/gzjqyxc/#/login');
    }
  }
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
    cursor: pointer;
  }
  .left-button {
    position: absolute;
    left: 71px;
    top: 29px;
    width: 201px;
    height: 36px;
    cursor: pointer;
    background: url("../assets/img/left_button2.png") 100% 100% no-repeat;
  }
  .right-button {
    position: absolute;
    left: 1691px;
    top: 29px;
    width: 159px;
    height: 36px;
    cursor: pointer;
    background: url("../assets/img/right_button.png") 100% 100% no-repeat;
  }
}
</style>
