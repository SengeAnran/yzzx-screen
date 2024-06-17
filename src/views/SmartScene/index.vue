<template>
  <section class="smart-scene">
    <!--    <template v-if="dataList && dataList.length> 0">-->
    <template v-if="dataList && dataList.length> 0">
      <div
          v-for="(item, index) in dataList"
          @click="goDetail(item)"
          :key="index"
          class="list-item">
        <div class="item-left">
          <div class="title">{{ item.name }}</div>
          <div class="content">{{ item.tip }}</div>
        </div>

        <div class="item-img">
          <img :src="item.imgUrl" alt="">
        </div>
      </div>
    </template>

    <div class="list-item item-empty">
      <img src="./empty.svg" alt="">
      <div class="text">即将上线，敬请期待</div>
    </div>
  </section>

</template>
<script>
import {dataList1} from './contanst'

export default {
  name: "smartScene",
  data() {
    return {
      dataList: dataList1,
    }
  },
  methods: {
    goDetail(item) {
      console.log(item);
      // this.$message.warning('即将上线，敬请期待！')
      this.$router.push({
        path: '/smartScene/detail',
        query: {
          name: item.name,
        }
      })
    }
  }
}
</script>


<style scoped lang="scss">
.smart-scene {
  display: flex;
  flex-wrap: wrap;
  padding: 40px 32px 0 32px;
  //min-height: 560px;
  .list-item {
    cursor: pointer;
    display: flex;
    width: calc(50% - 24px);
    height: 292px;
    background: url("./img/bg_icon.png") no-repeat left 117px;
    box-shadow: 0px 0px 18px 0px rgba(13, 87, 163, 0.1);
    border-radius: 4px;
    margin-bottom: 24px;
    margin-right: 24px;

    .item-left {
      flex: 1;
      padding: 64px 50px 0;

    }

    .item-img {
      width: 368px;
      height: 292px;

      img {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }

    .title {
      position: relative;
      height: 32px;
      font-size: 32px;
      color: #424656;

    }

    .content {
      //height: 69px;
      margin-top: 24px;
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 30px;
      letter-spacing: 2px;
      color: rgba(66, 70, 86, 0.8);
      // 多余3行文本省略
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }

    .bottom-box {
      position: relative;
      margin-top: 40px;
      border-top: 1px solid #eaecf1;
    }
  }

  .item-empty {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;

    .text {
      margin-top: 24px;
      font-size: 20px;
      color: #b5b7bd;
    }
  }
}
</style>
