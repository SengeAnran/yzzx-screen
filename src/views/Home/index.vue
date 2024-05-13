<template>
  <div class="page">
    <section class="img-box">
      <img src="./img.png" alt="">
      <div class="text">
        <div class="title">这是一句标题</div>
        <div class="tip">这是一段文字描述，这是一段文字描述</div>
      </div>
    </section>
    <section class="able-list">
      <div @click="goPage(item)" v-for="item in ableList" :key="item.title" class="list-item">
        <img :src="item.icon" alt="">
        <div class="title">{{ item.title }}</div>
        <div class="tip">{{ item.tip }}</div>
      </div>
    </section>
    <section class="ecological-chain">
      <div class="title">AI生态链</div>
      <div class="chain-list">
        <div v-for="(item, index) in chainList" :key="index" class="item">
          <template v-if="item.icon">
            <img :src="item.icon" alt="">
          </template>
          <template v-else>
            {{ item.title }}
          </template>
        </div>
      </div>
      <div class="chain-list">
        <div v-for="(item, index) in chainList2" :key="index" class="item">{{ item.title }}</div>
      </div>
      <!--      <div class="chain-list">-->
      <!--        <div v-for="item in chainList3" :key="item" :class="{item:item.title}">{{ item.title }}</div>-->
      <!--      </div>-->
      <div class="chain-list">
        <div v-for="(item, index) in chainList3" :key="index" :class="{item:item.title}">
          <template v-if="item.icon">
            <img :src="item.icon" alt="">
          </template>
          <template v-else>
            {{ item.title }}
          </template>

        </div>
      </div>
    </section>
  </div>
</template>
<script>
import {ableList, chainList, chainList2, chainList3} from "./contanst";

export default {
  name: "index",
  data() {
    return {
      ableList: ableList,
      chainList: chainList,
      chainList2: chainList2,
      chainList3: chainList3,
    }
  },
  methods: {
    goPage(item) {
      this.$router.push(item.path);
    }
  }
}
</script>
<style scoped lang="scss">
.page {
  .img-box {
    position: relative;
    height: 612px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }

    .text {
      position: absolute;
      top: 40%;
      transform: translateY(-50%);
      left: 147px;
      color: white;

      .title {
        font-size: 72px;
        font-weight: bold;
      }

      .tip {
        font-size: 36px;
        margin-top: 40px;
      }

    }
  }

}

.able-list {
  padding: 0 56px;
  margin: 64px 0;
  display: flex;
  justify-content: space-between;

  .list-item {
    cursor: pointer;
    width: 416px;
    height: 272px;
    background-color: #ffffff;
    box-shadow: 0px 0px 32px 0px rgba(13, 87, 163, 0.16);
    border-radius: 4px;
    padding: 24px 30px 0 25px;

    img {
      width: 231px;
      height: 120px;
    }

    .title {
      margin-top: 21px;
      margin-left: 28px;
      font-size: 24px;
      color: #424656;
    }

    .tip {
      margin-top: 15px;
      margin-left: 28px;
      font-size: 16px;
      //width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #b5b7bd;
    }
  }
}

.ecological-chain {
  padding: 0 60px;
  margin: 30px 0;

  .title {
    margin-top: 86px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    //line-height: 108px;
    letter-spacing: 2px;
    color: #424656;
  }

  .chain-list {
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    //flex-wrap: wrap;
    & > div {
      width: 416px;
    }

    .item {
      position: relative;
      cursor: pointer;
      width: 416px;
      height: 112px;
      background-color: #ffffff;
      box-shadow: 0px 0px 16px 0px rgba(63, 63, 63, 0.1);
      border-radius: 4px;
      line-height: 112px;
      text-align: center;
      font-size: 18px;
      font-weight: bold;

      img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
