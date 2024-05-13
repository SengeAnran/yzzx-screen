<template>
  <section class="list">
    <!--    <template v-if="dataList && dataList.length> 0">-->
    <template v-if="dataList && dataList.length> 0">
      <div
          v-for="(item, index) in dataList"
          :key="index"
          class="list-item">
        <div class="title">{{ item.name }}</div>
        <div class="content">{{ item.tip }}</div>
        <div class="bottom-box">
          <!--          <div v-if="item.status" class="btn btn-xz">卸载</div>-->
          <div class="btn btn-az">访问</div>
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
  name: "List",
  data() {
    return {
      dataList: dataList1,
    }
  }
}
</script>


<style scoped lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  padding: 64px 24px 0 40px;
  min-height: 560px;

  .list-item {
    //width: 444px;
    width: calc(25% - 15px);
    height: 240px;
    background-color: #ffffff;
    box-shadow: 0px 0px 18px 0px rgba(13, 87, 163, 0.1);
    border-radius: 4px;
    margin-bottom: 15px;
    margin-right: 15px;
    padding: 24px 24px 0 24px;

    .title {
      position: relative;
      height: 32px;
      padding-left: 48px;
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 32px;
      letter-spacing: 1px;
      color: #424656;

      &::before {
        position: absolute;
        display: inline-block;
        left: 0;
        top: 0;
        content: '';
        width: 32px;
        height: 32px;
        background-color: #1d80ff;
        border-radius: 4px;
      }
    }

    .content {
      height: 69px;
      margin-top: 24px;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 24px;
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

      .btn {
        cursor: pointer;
        position: absolute;
        top: 12px;
        right: 9px;
        width: 64px;
        height: 24px;
        font-size: 14px;
        border-radius: 12px;
        text-align: center;
        line-height: 24px;
      }

      .btn-xz {
        background-color: #fcebec;
        color: #fe0c0c;
      }

      .btn-az {
        background-color: #1d80ff;
        color: #ffffff;
      }
    }
  }

  .item-empty {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .text {
      margin-top: 24px;
      font-size: 20px;
      color: #b5b7bd;
    }
  }
}
</style>
