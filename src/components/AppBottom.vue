<template>
<div class="App-bottom">
  <div class="content">
    <div class="item" v-for="(item, index) in dataList" :key="index" >
      {{item.name}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "AppBottom",
  data() {
    return {
      dataList: [
        { name: '典型应用一', },
        { name: '典型应用二', },
        { name: '典型应用三', },
        { name: '典型应用四', },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.App-bottom {
  position: absolute;
  bottom: 0;
  left: 550px;
  z-index: 999;
  width: 820px;
  height: 60px;
  background: url("../assets/img/bottom_bg.png") no-repeat 100% 100%;
  /*background: red;*/
  .content {
    width: 647px;
    //height: 100%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-around;
    .item {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #FEFFFF;
      opacity: 0.85;
      cursor: pointer;
    }
  }
}

</style>