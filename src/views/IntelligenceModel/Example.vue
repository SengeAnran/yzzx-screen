<template>
  <section class="example">
    <div
        v-for="(item, index) in dataList"
        :key="index"
        class="example-item">
      <div class="title">{{ item.name }}</div>
      <div class="content">{{ item.tip }}</div>
      <div class="btn">立即体验</div>
    </div>
  </section>
</template>
<script>
import {dataList2} from './contanst'

export default {
  name: "Example",
  data() {
    return {
      dataList: dataList2,
    }
  }
}
</script>


<style scoped lang="scss">
.example {
  display: flex;
  padding: 40px 40px 48px;

  .example-item {
    flex: 1;
    height: 391px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url("./bg.png") left top no-repeat;
    background-size: 100% 100%;

    .title {
      font-size: 36px;
      color: #ffffff;
    }

    .content {
      max-width: 637px;
      font-size: 16px;
      line-height: 30px;
      color: #ffffff;
      text-align: center;
      margin-top: 50px;
    }

    .btn {
      cursor: pointer;
      margin-top: 67px;
      width: 150px;
      height: 46px;
      background-color: #1d80ff;
      border-radius: 2px;
      text-align: center;
      line-height: 46px;
      font-size: 20px;
      letter-spacing: 2px;
      color: #ffffff;
    }

    &:first-child {
      margin-right: 16px;
    }
  }
}
</style>
