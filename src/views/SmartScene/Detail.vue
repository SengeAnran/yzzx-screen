<template>
  <div class="detail-page">
    <div class="top">
      <div class="title">{{ title }}</div>
      <div class="tip">方案介绍方案介绍方案介绍方案介绍方案介绍方案介绍方案介绍方案介绍方案介绍方案介绍方案介绍</div>
      <div class="btn">立即体验</div>
    </div>
    <div class="list">
      <div class="list-item">系统示意</div>
      <div class="list-item">系统示意</div>
      <div class="list-item">系统示意</div>
      <div class="list-item">系统示意</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Detail",
  data() {
    return {
      title: this.$route.query.name || '',
    }
  }
}
</script>

<style scoped lang="scss">
.detail-page {
  background: url("./bg.svg") top left no-repeat;
  //background-size: 100% 100%;

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      margin-top: 128px;
      font-size: 64px;
      color: #ffffff;
    }

    .tip {
      max-width: 956px;
      text-align: center;
      margin-top: 88px;
      font-size: 24px;
      line-height: 30px;
      color: #ffffff;
    }

    .btn {
      margin-top: 79px;
      cursor: pointer;
      width: 240px;
      height: 72px;
      text-align: center;
      line-height: 72px;
      color: white;
      background-color: #1d80ff;
      border-radius: 35px;
      font-size: 30px;
    }

  }

  .list {
    margin-top: 140px;
    padding: 0 24px 93px 40px;
    display: flex;
    //margin-bottom: 93px;

    .list-item {
      cursor: pointer;
      width: calc(25% - 16px);
      margin-right: 16px;
      height: 264px;
      background-color: #ffffff;
      box-shadow: 0px 0px 18px 0px rgba(13, 87, 163, 0.1);
      border-radius: 4px;
      text-align: center;
      line-height: 264px;
      font-size: 36px;
      color: rgba(66, 70, 86, 0.8);
    }
  }
}

</style>
